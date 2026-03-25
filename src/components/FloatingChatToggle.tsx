"use client";

import React, { useState } from "react";
// Import the necessary icon (assuming you use lucide-react or similar)
import { MessageCircle } from "lucide-react"; 
// Import your existing ChatModal component
import ChatModal from "@/app/(main)/_components/ChatModal"; 

// Note: Ensure ChatModal is updated to use the correct relative path based on its actual location.

const FloatingChatToggle = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleToggleChat = () => {
        setIsChatOpen(prev => !prev);
    };

    return (
        <>
            {/* 1. Floating Chat Icon Button */}
            <button
                onClick={handleToggleChat}
                className="fixed bottom-6 right-6 z-[60] p-4 rounded-full shadow-2xl 
                           bg-[#6D28D9] text-white hover:bg-[#5B21B6] 
                           transition-all duration-300 transform hover:scale-105"
                aria-label="Open Chatbot"
            >
                {/* Use the MessageCircle icon or any preferred chat icon */}
                <MessageCircle size={28} /> 
            </button>

            {/* 2. Chat Modal Component */}
            {/* We pass the state and the closing function to the modal */}
            <ChatModal 
                isOpen={isChatOpen} 
                onClose={() => setIsChatOpen(false)} 
            />
        </>
    );
};

export default FloatingChatToggle;