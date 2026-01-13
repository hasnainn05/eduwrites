'use client';

import { useState } from 'react';
import { AdminSidebar } from '@/client/components/AdminSidebar';
import { Plus, Edit2, Trash2, Search, ChevronRight } from 'lucide-react';

export default function AdminServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Essay Writing',
      slug: 'essay',
      description: 'Professional essay writing for all academic levels',
      projectsCompleted: 392,
      rating: 4.9,
      reviews: 142,
    },
    {
      id: 2,
      title: 'Thesis Writing',
      slug: 'thesis',
      description: 'Expert guidance and writing support for your thesis',
      projectsCompleted: 287,
      rating: 4.8,
      reviews: 98,
    },
    {
      id: 3,
      title: 'Research Paper',
      slug: 'research',
      description: 'In-depth research papers with comprehensive analysis',
      projectsCompleted: 245,
      rating: 4.9,
      reviews: 76,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    projectsCompleted: 0,
    rating: 4.9,
  });

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddService = () => {
    setEditingId(null);
    setFormData({
      title: '',
      slug: '',
      description: '',
      projectsCompleted: 0,
      rating: 4.9,
    });
    setShowModal(true);
  };

  const handleEditService = (service: typeof services[0]) => {
    setEditingId(service.id);
    setFormData({
      title: service.title,
      slug: service.slug,
      description: service.description,
      projectsCompleted: service.projectsCompleted,
      rating: service.rating,
    });
    setShowModal(true);
  };

  const handleSaveService = () => {
    if (editingId) {
      setServices(
        services.map((s) =>
          s.id === editingId ? { ...s, ...formData } : s
        )
      );
    } else {
      setServices([
        ...services,
        {
          id: Math.max(...services.map((s) => s.id), 0) + 1,
          ...formData,
          reviews: 0,
        },
      ]);
    }
    setShowModal(false);
  };

  const handleDeleteService = (id: number) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Services</h1>
              <p className="text-foreground/60 text-sm mt-1">Manage your academic writing services</p>
            </div>
            <button
              onClick={handleAddService}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all transform hover:scale-105"
            >
              <Plus size={20} />
              Add Service
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-all"
              />
            </div>
          </div>

          {/* Services Table */}
          <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">Service Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">Projects</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">Reviews</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground/80">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredServices.map((service) => (
                    <tr key={service.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-foreground">{service.title}</p>
                          <p className="text-xs text-foreground/50 mt-1">{service.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-cyan-400">{service.projectsCompleted}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-yellow-400">{service.rating}</span>
                          <span className="text-foreground/50">⭐</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-foreground/70">{service.reviews}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditService(service)}
                            className="p-2 rounded-lg hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteService(service.id)}
                            className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60">No services found</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl glass rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {editingId ? 'Edit Service' : 'Add New Service'}
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">Service Name</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-all"
                  placeholder="e.g., Essay Writing"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">Slug (URL)</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-all"
                  placeholder="e.g., essay"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-all"
                  placeholder="Enter service description"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Projects Completed</label>
                  <input
                    type="number"
                    value={formData.projectsCompleted}
                    onChange={(e) => setFormData({ ...formData, projectsCompleted: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Rating (0-5)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-foreground focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 rounded-lg glass border border-white/20 text-foreground hover:bg-white/10 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveService}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all"
              >
                {editingId ? 'Update Service' : 'Create Service'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
