// components/ChatModal.tsx
import React from 'react';
import Chatbot from './Chatbot';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100 bg-opacity-70">
      <div className="relative bg-white h-full w-full sm:h-auto sm:w-auto sm:max-w-md p-6 rounded-none sm:rounded-lg shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
        >
          &times;
        </button>
        <Chatbot />
      </div>
    </div>
  );
};

export default ChatModal;