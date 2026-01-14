"use client";

import { useState } from "react";
import { AdminSidebar } from "@/client/components/AdminSidebar";
import {
  Send,
  MessageSquare,
  Trash2,
  Search,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function AdminQuoteRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      senderName: "Emma Wilson",
      senderEmail: "emma@example.com",
      whatsapp: "+1-555-0101",
      subject: "Essay Writing Quote - History Assignment",
      message:
        "I need help writing a 5000-word essay on World War II. Can you provide a quote?",
      timestamp: "2024-01-15 16:45",
      unread: true,
      replied: false,
    },
    {
      id: 2,
      senderName: "David Brown",
      senderEmail: "david@example.com",
      whatsapp: "+1-555-0102",
      subject: "Thesis Writing Inquiry",
      message:
        "Looking for thesis writing assistance. Need pricing for a 80-page MBA thesis on organizational change.",
      timestamp: "2024-01-15 15:20",
      unread: true,
      replied: false,
    },
    {
      id: 3,
      senderName: "Lisa Garcia",
      senderEmail: "lisa@example.com",
      whatsapp: "+1-555-0103",
      subject: "Research Paper - Science Topic",
      message:
        "I need a research paper on climate science. Can you provide information about your services and pricing?",
      timestamp: "2024-01-15 12:30",
      unread: false,
      replied: true,
    },
    {
      id: 4,
      senderName: "James Taylor",
      senderEmail: "james@example.com",
      whatsapp: "+1-555-0104",
      subject: "Academic Assistance - Multiple Papers",
      message:
        "We are looking for ongoing academic writing support. Can we discuss pricing for bulk orders?",
      timestamp: "2024-01-14 11:00",
      unread: false,
      replied: true,
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState<number | null>(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [replyText, setReplyText] = useState("");

  const filteredRequests = requests.filter(
    (req) =>
      req.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.message.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const currentRequest = requests.find((r) => r.id === selectedRequest);

  const handleSendReply = () => {
    if (replyText.trim() && currentRequest) {
      setRequests(
        requests.map((req) =>
          req.id === selectedRequest
            ? {
                ...req,
                replied: true,
              }
            : req,
        ),
      );
      setReplyText("");
    }
  };

  const handleDeleteRequest = (id: number) => {
    setRequests(requests.filter((r) => r.id !== id));
    if (selectedRequest === id) {
      setSelectedRequest(null);
    }
  };

  const handleMarkReplied = (id: number) => {
    setRequests(
      requests.map((r) => (r.id === id ? { ...r, replied: !r.replied } : r)),
    );
  };

  const unrepliedCount = requests.filter((r) => !r.replied).length;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Quote Requests
              </h1>
              <p className="text-foreground/60 text-sm mt-1">
                {unrepliedCount} pending quote requests
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Requests List */}
          <div className="w-80 border-r border-white/10 flex flex-col overflow-hidden bg-gradient-to-b from-slate-800/50 to-slate-900/50">
            {/* Search */}
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg glass border border-white/10 bg-white/5 text-foreground text-sm focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            {/* Requests */}
            <div className="flex-1 overflow-y-auto space-y-1 p-2">
              {filteredRequests.map((req) => (
                <button
                  key={req.id}
                  onClick={() => setSelectedRequest(req.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    selectedRequest === req.id
                      ? "bg-gradient-to-r from-indigo-600/30 to-cyan-500/30 border border-cyan-400/30"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground text-sm">
                      {req.senderName}
                    </h3>
                    <div className="flex items-center gap-2">
                      {req.replied && (
                        <CheckCircle2 size={14} className="text-green-400" />
                      )}
                      {req.unread && !req.replied && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-foreground/60 truncate">
                    {req.subject}
                  </p>
                  <p className="text-xs text-foreground/50 mt-1 truncate">
                    {req.message}
                  </p>
                  <p className="text-xs text-foreground/40 mt-2">
                    {req.timestamp}
                  </p>
                  {!req.replied && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-yellow-400">
                      <AlertCircle size={12} />
                      Pending
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Request Details */}
          {currentRequest ? (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Request Header */}
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">
                      {currentRequest.senderName}
                    </h2>
                    <p className="text-sm text-foreground/60">
                      {currentRequest.senderEmail}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMarkReplied(currentRequest.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        currentRequest.replied
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-white/10 text-foreground hover:bg-white/20"
                      }`}
                    >
                      {currentRequest.replied ? "Replied" : "Mark Replied"}
                    </button>
                    <button
                      onClick={() => handleDeleteRequest(currentRequest.id)}
                      className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 font-medium">
                  {currentRequest.subject}
                </p>
              </div>

              {/* Request Message */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="glass bg-white/10 rounded-lg p-6 mb-6">
                  <h3 className="text-sm font-semibold text-foreground/80 mb-3">
                    Customer Message
                  </h3>
                  <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                    {currentRequest.message}
                  </p>
                  <p className="text-xs text-foreground/50 mt-4">
                    Received: {currentRequest.timestamp}
                  </p>
                </div>
              </div>

              {/* Reply Input */}
              {!currentRequest.replied ? (
                <div className="p-6 border-t border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-foreground/80">
                      Send Quote Response
                    </label>
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Type your response with pricing and services details..."
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                      rows={4}
                    />
                    <button
                      onClick={handleSendReply}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Response
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 border-t border-white/10 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
                  <div className="flex items-center gap-3 text-green-400">
                    <CheckCircle2 size={20} />
                    <span className="text-sm font-medium">
                      Response sent to customer
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-foreground/50">
                Select a quote request to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
