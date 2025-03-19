"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Chat = () => {
  const pastChats = [
    {
      id: 1,
      user: "John Doe",
      messages: [
        { id: 1, text: "Hey, how's it going?", sender: "other" },
        { id: 2, text: "I'm good, thanks! You?", sender: "me" },
      ],
    },
    {
      id: 2,
      user: "Jane Smith",
      messages: [
        { id: 1, text: "Can you help me with my project?", sender: "other" },
        { id: 2, text: "Sure! What do you need?", sender: "me" },
      ],
    },
  ];

  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const selectChat = (chat) => {
    setSelectedChat(chat);
    setMessages(chat.messages);
  };

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, text: newMessage, sender: "me" },
    ]);
    setNewMessage("");
  };

  return (
    <div className="col-span-2 w-[95%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-col h-full">
      {/* Past Chats List */}
      <div className="flex-1 flex flex-col gap-6 p-6 md:p-8 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-auto max-h-[40vh] md:max-h-[50vh]">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Past Chats
        </h2>
        <div className="flex flex-col space-y-3">
          {pastChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => selectChat(chat)}
              className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              {chat.user}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col bg-white shadow-xl rounded-2xl border border-gray-200 p-6 flex-grow relative">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Chat</h2>
        {selectedChat ? (
          <>
            <h3 className="text-lg font-semibold text-gray-700">
              Chat with {selectedChat.user}
            </h3>

            {/* Messages container (Ensuring it takes the full available space) */}
            <div className="flex flex-col flex-grow overflow-y-auto space-y-2 p-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.sender === "me"
                      ? "bg-amber-500 text-white self-end"
                      : "bg-gray-100 text-gray-900 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Message Input (Properly positioned at the bottom of the chat section) */}
            <div className="mt-4 p-4 border-t border-gray-300">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 p-2 border rounded-lg focus:outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="ml-3 p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Select a chat to start messaging.</p>
        )}
      </div>
    </div>
  );
};

export default Chat;
