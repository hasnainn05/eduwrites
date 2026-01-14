"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Upload, X, File } from "lucide-react";

interface ChatMessage {
  id: number;
  user: "user" | "admin";
  message: string;
  timestamp: string;
  file?: {
    name: string;
    size: string;
    type: string;
  };
}

export default function SupportChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      user: "admin",
      message: "Hello! Welcome to EduWrites support. How can we assist you today?",
      timestamp: "10:00 AM",
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() && !selectedFile) return;

    const newMessage: ChatMessage = {
      id: messages.length + 1,
      user: "user",
      message: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      file: selectedFile ? {
        name: selectedFile.name,
        size: `${(selectedFile.size / 1024).toFixed(2)} KB`,
        type: selectedFile.type,
      } : undefined,
    };

    setMessages([...messages, newMessage]);
    setInput("");
    setSelectedFile(null);
    setFileName("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Simulate admin response
    setTimeout(() => {
      const adminResponse: ChatMessage = {
        id: messages.length + 2,
        user: "admin",
        message: "Thank you for your message! We'll get back to you shortly.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, adminResponse]);
    }, 1500);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900/50 to-slate-800/50 rounded-2xl border border-white/10">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-bold text-foreground">Support Chat</h2>
        <p className="text-foreground/60 text-sm mt-1">
          Get help from our support team
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.user === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs lg:max-w-md ${
                msg.user === "user"
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-2xl rounded-tr-none"
                  : "bg-white/10 text-foreground rounded-2xl rounded-tl-none border border-white/20"
              } p-4`}
            >
              <p className="text-sm">{msg.message}</p>

              {msg.file && (
                <div className="mt-3 flex items-center gap-2 bg-white/10 p-2 rounded-lg">
                  <File size={16} className="flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">
                      {msg.file.name}
                    </p>
                    <p className="text-xs opacity-70">{msg.file.size}</p>
                  </div>
                  <a
                    href="#"
                    className="text-xs underline hover:opacity-80 flex-shrink-0"
                  >
                    Download
                  </a>
                </div>
              )}

              <p className="text-xs opacity-70 mt-2">{msg.timestamp}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-white/10 p-6">
        {/* File Preview */}
        {selectedFile && (
          <div className="mb-4 flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
            <File size={20} className="text-blue-400 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {fileName}
              </p>
              <p className="text-xs text-foreground/60">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <button
              onClick={removeFile}
              className="p-1 hover:bg-white/10 rounded transition-colors text-foreground/60 hover:text-foreground flex-shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="space-y-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here... (Press Ctrl+Enter to send)"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none text-sm"
            rows={3}
          />

          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.xlsx,.png,.jpg,.jpeg"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-foreground/70 hover:text-foreground transition-all text-sm font-medium"
            >
              <Upload size={16} />
              <span className="hidden sm:inline">Attach File</span>
            </button>

            <button
              type="submit"
              disabled={!input.trim() && !selectedFile}
              className="ml-auto flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
            >
              <Send size={16} />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </form>

        <p className="text-xs text-foreground/50 mt-2">
          You can share documents, images, and other files with our support team
        </p>
      </div>
    </div>
  );
}
