'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

// Define the shape of a message object for better type safety
interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function Chatbot() {
  // Initialize messages with the correct Message type
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello! I\'m your virtual assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Explicitly type the useRef hook to an HTMLDivElement or null
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // A more concise way to define the scrollToBottom function
  const scrollToBottom = () => {
    // Add an explicit check to ensure messagesEndRef.current exists before calling scrollIntoView
    const element = messagesEndRef.current;
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // useEffect for scrolling, with a dependency on the messages array
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    // Trim input and check if it's empty to prevent sending blank messages
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add the new user message to the state
    // Type assertion 'as "user"' ensures sender matches the Message interface
    const newMessage: Message = { sender: 'user', text: trimmedInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmedInput }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      // Type assertion 'as "bot"' ensures sender matches the Message interface
      const botMessage: Message = { sender: 'bot', text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching chat response:', error);
      // Type assertion 'as "bot"' ensures sender matches the Message interface
      const errorMessage: Message = { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle the "Enter" key press separately for cleaner code
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full md:h-[500px] w-full md:w-[350px] bg-[#12042A] rounded-lg shadow-lg border border-[#3A1F6E]">
      <div className="p-4 bg-[#1A0A3D] border-b border-[#3A1F6E] rounded-t-lg">
        <h2 className="text-lg font-semibold text-[#E9D5FF]">Chat with an Expert</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === 'user'
                  ? 'bg-[#5B21B6] text-white rounded-br-none'
                  : 'bg-[#2E1058] text-[#E9D5FF] rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {/* The ref is attached to an empty div to ensure it's always at the bottom */}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-[#3A1F6E] rounded-b-lg">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 p-2 border border-[#3A1F6E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D28D9] bg-[#1A0A3D] text-white placeholder-gray-400"
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()} // Disable the button if input is empty or loading
            className="p-2 bg-[#6D28D9] text-white rounded-lg disabled:bg-[#3A1F6E]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}