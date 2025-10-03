import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Building2, Calendar, LogOut, Database, Loader2, Wifi, WifiOff, RefreshCw, QrCode, BarChart3 } from 'lucide-react';
import { ReviewCard } from '../types';
import { storage } from '../utils/storage';
import { formatDate } from '../utils/helpers';
import { CompactAddCardModal } from './CompactAddCardModal';
import { EditCardModal } from './EditCardModal';
import { ConfirmDialog } from './ConfirmDialog';
import { QRCodeCard } from './QRCodeCard';
import { auth } from '../utils/auth';
import { isSupabaseConfigured } from '../utils/supabase';
import { AnalyticsDashboard } from './Analytics/AnalyticsDashboard';

export const AdminDashboard: React.FC = () => {
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCard, setEditingCard] = useState<ReviewCard | null>(null);
  const [deletingCard, setDeletingCard] = useState<ReviewCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMigrating, setIsMigrating] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'local' | 'checking'>('checking');
  const [activeView, setActiveView] = useState<'cards' | 'analytics'>('cards');

  useEffect(() => {
    initializeDashboard();
  }, []);

  const initializeDashboard = async () => {
    setIsLoading(true);
    
    // Check connection status
    if (isSupabaseConfigured()) {
      setConnectionStatus('connected');
      await checkForMigration();
    } else {
      setConnectionStatus('local');
    }
    
    await loadCards();
    setIsLoading(false);
  };

  const loadCards = async () => {
    try {
      const savedCards = await storage.getCards();
      setCards(savedCards);
      console.log(`Loaded ${savedCards.length} cards`);
    } catch (error) {
      console.error('Error loading cards:', error);
      setCards([]);
    }
  };

  const checkForMigration = async () => {
    const localData = localStorage.getItem('scc_review_cards');
    if (localData) {
      try {
        const localCards = JSON.parse(localData);
        if (localCards.length > 0) {
          console.log(`Found ${localCards.length} local cards to migrate`);
          setIsMigrating(true);
          try {
            await storage.migrateFromLocalStorage();
          } catch (migrationError) {
            console.error('Migration failed, continuing with local storage:', migrationError);
          }
          setIsMigrating(false);
          console.log('Migration completed');
        }
      } catch (error) {
        console.error('Error during migration check:', error);
        setIsMigrating(false);
      }
    }
  };

  const handleAddCard = async (newCard: ReviewCard) => {
    try {
      const success = await storage.addCard(newCard);
      if (success) {
        await loadCards(); // Reload to get latest data
        setShowAddModal(false);
        console.log('Card added successfully:', newCard.businessName);
      } else {
        alert('Failed to add card. Please try again.');
      }
    } catch (error) {
      console.error('Error adding card:', error);
      alert('Failed to add card. Please try again.');
    }
  };

  const handleEditCard = async (updatedCard: ReviewCard) => {
    try {
      const success = await storage.updateCard(updatedCard);
      if (success) {
        await loadCards(); // Reload to get latest data
        setEditingCard(null);
        console.log('Card updated successfully:', updatedCard.businessName);
      } else {
        alert('Failed to update card. Please try again.');
      }
    } catch (error) {
      console.error('Error updating card:', error);
      alert('Failed to update card. Please try again.');
    }
  };

  const handleDeleteCard = async () => {
    if (deletingCard) {
      try {
        const success = await storage.deleteCard(deletingCard.id);
        if (success) {
          await loadCards(); // Reload to get latest data
          setDeletingCard(null);
          console.log('Card deleted successfully:', deletingCard.businessName);
        } else {
          alert('Failed to delete card. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting card:', error);
        alert('Failed to delete card. Please try again.');
      }
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      if (isSupabaseConfigured()) {
        await storage.syncData();
      }
      await loadCards();
      console.log('Data refreshed successfully');
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const filteredCards = cards.filter(card =>
    card.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePreview = (slug: string) => {
    window.open(`/${slug}`, '_blank');
  };

  const handleLogout = () => {
    auth.logout();
    window.location.href = '/login';
  };

  const getConnectionStatusDisplay = () => {
    switch (connectionStatus) {
      case 'connected':
        return (
          <div className="flex items-center text-green-400 text-sm">
            <Database className="w-4 h-4 mr-2" />
            <Wifi className="w-3 h-3 mr-1" />
            <span>Cloud Storage Active</span>
          </div>
        );
      case 'local':
        return (
          <div className="flex items-center text-yellow-400 text-sm">
            <Building2 className="w-4 h-4 mr-2" />
            <WifiOff className="w-3 h-3 mr-1" />
            <span>Local Storage Only</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center text-blue-400 text-sm">
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            <span>Checking Connection...</span>
          </div>
        );
    }
  };

  const totalViews = cards.reduce((sum, c) => sum + (c.viewCount ?? 0), 0);

  if (isMigrating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Database className="w-8 h-8 text-blue-400 animate-pulse" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Migrating Data</h1>
          <p className="text-slate-400 mb-8">
            Moving your review cards to cloud storage for cross-device sync...
          </p>
          <div className="flex items-center justify-center">
            <Loader2 className="w-6 h-6 text-blue-400 animate-spin mr-2" />
            <span className="text-blue-400">Please wait...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              {getConnectionStatusDisplay()}
            </div>
            <div className="inline-flex bg-white/10 border border-white/20 rounded-xl p-2 shadow-md">
              <button
              onClick={() => setActiveView('cards')}
              className={`px-6 py-2.5 text-base font-semibold rounded-lg transition ${
                activeView === 'cards'
                ? 'bg-white text-slate-900 shadow-lg'
                : 'text-white/80 hover:bg-white/10'
              }`}
              >
              Cards
              </button>
              <button
              onClick={() => setActiveView('analytics')}
              className={`ml-2 px-6 py-2.5 text-base font-semibold rounded-lg transition ${
                activeView === 'analytics'
                ? 'bg-white text-slate-900 shadow-lg'
                : 'text-white/80 hover:bg-white/10'
              }`}
              >
              Analytics
              </button>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-end">
               <button
                 onClick={handleRefresh}
                 disabled={isRefreshing}
                 className="inline-flex items-center px-3 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors duration-200 disabled:opacity-50"
                 title="Refresh Data"
               >
                 <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                 {isRefreshing ? 'Syncing...' : 'Refresh'}
               </button>
               <button
                 onClick={handleLogout}
                 className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors duration-200"
               >
                 <LogOut className="w-4 h-4 mr-2" />
                 Logout
               </button>
             </div>
           </div>
          {/* <p className="text-slate-300">
            {connectionStatus === 'connected' 
              ? 'Your review cards are synced across all devices' 
              : 'Managing review cards locally'
            }
          </p> */}
        </div>

        {activeView === 'cards' ? (
          <>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search cards by business name or slug..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Card
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">Total Cards</p>
                    <p className="text-3xl font-bold text-white">{cards.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">Active Today</p>
                    <p className="text-3xl font-bold text-white">{cards.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">This Month</p>
                    <p className="text-3xl font-bold text-white">
                      {cards.filter(card => {
                        const d = new Date(card.createdAt);
                        const now = new Date();
                        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
                      }).length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">Total Views</p>
                    <p className="text-3xl font-bold text-white">{totalViews}</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Loading Cards</h3>
                <p className="text-slate-400">
                  {connectionStatus === 'connected' 
                    ? 'Fetching your review cards from cloud storage...' 
                    : 'Loading your review cards from local storage...'
                  }
                </p>
              </div>
            ) : filteredCards.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {searchTerm ? 'No cards found' : 'No review cards yet'}
                </h3>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">
                  {searchTerm 
                    ? 'Try adjusting your search terms or create a new card.'
                    : 'Get started by creating your first review card for your business.'
                  }
                </p>
                {!searchTerm && (
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Create Your First Card
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-8">
                {/* Review Cards Grid */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Building2 className="w-6 h-6 mr-3" />
                    Review Cards ({filteredCards.length})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCards.map((card) => {
                      const views = card.viewCount ?? 0;
                      const share = totalViews ? (views / totalViews) * 100 : 0;
                      return (
                        <div
                          key={card.id}
                          className="group relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:border-blue-400/50 hover:bg-white/15 transition-all duration-300"
                        >
                          {/* Top Section */}
                          <div className="p-5 pb-2 flex items-start gap-4">
                            <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center shadow-lg ring-1 ring-slate-200 overflow-hidden">
                              {card.logoUrl ? (
                                <img
                                  src={card.logoUrl}
                                  alt={`${card.businessName} logo`}
                                  className="w-10 h-10 object-contain"
                                  loading="lazy"
                                />
                              ) : (
                                <Building2 className="w-7 h-7 text-slate-500" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-semibold text-white truncate group-hover:text-blue-200 transition-colors">
                                {card.businessName}
                              </h3>
                              <p className="text-[16px] text-slate-400 truncate">
                                /{card.slug}
                              </p>
                            </div>
                            
                          </div>
                          <div className="mt-0 mb-2 mx-5 flex flex-wrap gap-1.5">
                                <span className="px-2 py-0.5 text-[13px] rounded-md bg-blue-500/20 text-blue-300">
                                  {card.category || '—'}
                                </span>
                                <span className="px-2 py-0.5 text-[13px] rounded-md bg-purple-500/20 text-purple-300">
                                  {card.type || '—'}
                                </span>
                                <span className="px-2 py-0.5 text-[13px] rounded-md bg-slate-500/20 text-slate-300">
                                  {formatDate(card.createdAt)}
                                </span>
                              </div>

                          {/* Divider */}
                          <div className="h-px bg-white/10" />

                          {/* Metrics */}
                          <div className=" px-5 pt-4 pb-5 space-y-3">
                            <div>
                              <div className="flex justify-between text-[16px] uppercase tracking-wide text-slate-100 mb-1">
                                <span>Total Views : <span className="font-medium text-slate-200">{views}</span></span>
                                
                                <span>{share.toFixed(1)}%</span>
                              </div>
                              <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-500 transition-all duration-500"
                                  style={{ width: `${share}%` }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2 px-5 pb-5">
                            <button
                              onClick={() => handlePreview(card.slug)}
                              className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 text-sm transition"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Preview
                            </button>
                            <button
                              onClick={() => setEditingCard(card)}
                              className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 text-sm transition"
                            >
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </button>
                            <button
                              onClick={() => setDeletingCard(card)}
                              className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-red-600/20 text-red-300 hover:bg-red-600/30 text-sm transition"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Subtle glow */}
                          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                            <div className="absolute inset-0 rounded-xl ring-1 ring-blue-400/30" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* QR Codes Grid */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    
                    <QrCode className="w-6 h-6 mr-2 text-white" />
                  
                    QR Codes ({filteredCards.length})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCards.map((card) => (
                      <QRCodeCard key={`qr-${card.id}`} card={card} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="mt-1">
            <AnalyticsDashboard variant="embedded" />
          </div>
        )}

        {/* Modals */}
        {activeView === 'cards' && showAddModal && (
          <CompactAddCardModal
            onClose={() => setShowAddModal(false)}
            onSave={handleAddCard}
          />
        )}

        {activeView === 'cards' && editingCard && (
          <EditCardModal
            card={editingCard}
            onClose={() => setEditingCard(null)}
            onSave={handleEditCard}
          />
        )}

        {activeView === 'cards' && deletingCard && (
          <ConfirmDialog
            title="Delete Review Card"
            message={`Are you sure you want to delete the review card for "${deletingCard.businessName}"? This action cannot be undone.`}
            onConfirm={handleDeleteCard}
            onCancel={() => setDeletingCard(null)}
          />
        )}
      </div>
    </div>
  );
};