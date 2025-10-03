import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, Filter, RefreshCw, TrendingUp, Users, Layers, PieChart, BarChart3, Eye } from 'lucide-react';
import { storage } from '../../utils/storage';
import { ReviewCard } from '../../types';
import { formatDate } from '../../utils/helpers';

type DateRange = '30' | '90' | '365' | 'all';

const dateRangeOptions: { label: string; value: DateRange }[] = [
  { label: 'Last 30 days', value: '30' },
  { label: 'Last 90 days', value: '90' },
  { label: 'Last 12 months', value: '365' },
  { label: 'All time', value: 'all' }
];

export const AnalyticsDashboard: React.FC = () => {
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>('90');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const data = await storage.getCards();
      setCards(data);
      setIsLoading(false);
    };
    load();
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    cards.forEach(card => {
      if (card.category) set.add(card.category);
    });
    return Array.from(set).sort();
  }, [cards]);

  const filteredCards = useMemo(() => {
    if (cards.length === 0) return [];
    const now = new Date();
    return cards.filter(card => {
      if (selectedCategory !== 'all' && card.category !== selectedCategory) return false;
      if (selectedDateRange !== 'all') {
        const diffInDays = (now.getTime() - new Date(card.createdAt).getTime()) / (1000 * 60 * 60 * 24);
        if (diffInDays > Number(selectedDateRange)) return false;
      }
      return true;
    });
  }, [cards, selectedCategory, selectedDateRange]);

  const stats = useMemo(() => {
    const total = filteredCards.length;
    const totalAllTime = cards.length;
    const activeMonth = cards.filter(card => {
      const created = new Date(card.createdAt);
      const now = new Date();
      return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
    }).length;
    const categoriesCount = new Set(filteredCards.map(card => card.category)).size;

    const byMonth = filteredCards.reduce<Record<string, number>>((acc, card) => {
      const key = new Date(card.createdAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const monthTrend = Object.entries(byMonth)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => new Date(a.label).getTime() - new Date(b.label).getTime())
      .slice(-6);

    const byCategory = filteredCards.reduce<Record<string, number>>((acc, card) => {
      acc[card.category] = (acc[card.category] || 0) + 1;
      return acc;
    }, {});

    const topCategories = Object.entries(byCategory)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    const extractViews = (c: ReviewCard) => (Number((c as any).views) || Number((c as any).viewCount) || 0);
    const totalViewsFiltered = filteredCards.reduce((sum, c) => sum + extractViews(c), 0);
    const totalViewsAllTime = cards.reduce((sum, c) => sum + extractViews(c), 0);
    const avgViewsFiltered = total ? Math.round(totalViewsFiltered / total) : 0;

    // NEW: monthly views aggregation
    const byMonthViews = filteredCards.reduce<Record<string, number>>((acc, card) => {
      const key = new Date(card.createdAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
      acc[key] = (acc[key] || 0) + extractViews(card);
      return acc;
    }, {});
    const viewsTrend = Object.entries(byMonthViews)
      .map(([label, views]) => ({ label, views }))
      .sort((a, b) => new Date(a.label).getTime() - new Date(b.label).getTime())
      .slice(-6);

    return {
      totalFiltered: total,
      totalAllTime,
      activeMonth,
      categoriesCount,
      monthTrend,
      topCategories,
      totalViewsFiltered,
      totalViewsAllTime,
      avgViewsFiltered,
      viewsTrend
    };
  }, [filteredCards, cards]);

  // NEW: per-card view share (top 15)
  const viewBars = useMemo(() => {
    if (!filteredCards.length) return [];
    const extractViews = (c: ReviewCard) => (Number((c as any).views) || Number((c as any).viewCount) || 0);
    return filteredCards
      .map(c => ({
        id: c.id,
        name: c.businessName || c.slug,
        slug: c.slug,
        views: extractViews(c)
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 15);
  }, [filteredCards]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await storage.syncData?.();
    const data = await storage.getCards();
    setCards(data);
    setRefreshing(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-900">
        Loading analytics…
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-900 rounded-lg min-h-screen">
      <div className="mx-auto px-6 py-10 space-y-10">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Analytics Overview</h1>
            <p className="text-gray-600 mt-1">
              Insights across {stats.totalAllTime} review cards with trend analysis and category performance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
              <Calendar className="w-4 h-4 text-blue-500 mr-2" />
              <select
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value as DateRange)}
                className="bg-transparent text-sm focus:outline-none text-gray-800"
              >
                {dateRangeOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-white text-gray-800">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
              <Filter className="w-4 h-4 text-emerald-500 mr-2" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-sm focus:outline-none text-gray-800"
              >
                <option value="all" className="bg-white text-gray-800">All categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-white text-gray-800">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl transition disabled:opacity-60 shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Filtered Cards"
            value={stats.totalFiltered}
            subtitle={selectedDateRange === 'all' ? 'All time selection' : `Within selected range`}
            icon={<Users className="w-6 h-6 text-blue-500" />}
          />
          <StatCard
            title="Active This Month"
            value={stats.activeMonth}
            subtitle="Created in current month"
            icon={<TrendingUp className="w-6 h-6 text-emerald-400" />}
          />
          <StatCard
            title="Unique Categories"
            value={stats.categoriesCount}
            subtitle="Within filtered set"
            icon={<Layers className="w-6 h-6 text-purple-600" />}
          />
          <StatCard
            title="All-Time Cards"
            value={stats.totalAllTime}
            subtitle="Total stored records"
            icon={<BarChart3 className="w-6 h-6 text-amber-400" />}
          />
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* UPDATED: monthly cards trend now single column */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Monthly cards
              </h2>
              <span className="text-xs uppercase tracking-wide text-gray-500">Last 6 points</span>
            </div>
            {stats.monthTrend.length === 0 ? (
              <EmptyState message="No data for the selected period." />
            ) : (
              <div className="space-y-4">
                {stats.monthTrend.map(point => {
                  const max = Math.max(...stats.monthTrend.map(p => p.count), 1);
                  return (
                    <div key={point.label} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-500">{point.label}</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                          style={{ width: `${(point.count / max) * 100}%` }}
                        />
                      </div>
                      <div className="w-10 text-sm font-semibold text-gray-800 text-right">{point.count}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* NEW: views trend chart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5 text-amber-500" />
                Monthly views
              </h2>
              <span className="text-xs uppercase tracking-wide text-gray-500">Last 6 points</span>
            </div>
            {stats.viewsTrend.length === 0 ? (
              <EmptyState message="No view data." />
            ) : (
              <div className="space-y-4">
                {stats.viewsTrend.map(point => {
                  const max = Math.max(...stats.viewsTrend.map(p => p.views), 1);
                  return (
                    <div key={point.label} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-500">{point.label}</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-pink-500"
                          style={{ width: `${(point.views / max) * 100}%` }}
                        />
                      </div>
                      <div className="w-14 text-sm font-semibold text-amber-600 text-right">{point.views}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Top categories moved to third column unchanged except layout */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <PieChart className="w-5 h-5 text-emerald-500" />
                Top categories
              </h2>
              <span className="text-xs uppercase tracking-wide text-gray-500">Share</span>
            </div>
            {stats.topCategories.length === 0 ? (
              <EmptyState message="No category data available." />
            ) : (
              <div className="space-y-4">
                {stats.topCategories.map(({ name, value }, index) => (
                  <div key={name} className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{name}</p>
                      <p className="text-xs text-gray-500">#{index + 1} • {value} cards</p>
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500"
                        style={{ width: `${Math.min((value / stats.totalFiltered) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* NEW: Views share per card */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-500" />
              Views share (top 15)
            </h2>
            <span className="text-xs uppercase tracking-wide text-gray-500">
              SOV by filtered set
            </span>
          </div>
          {viewBars.length === 0 ? (
            <EmptyState message="No view data available." />
          ) : (
            <div className="space-y-3">
              {(() => {
                const max = Math.max(...viewBars.map(v => v.views), 1);
                return viewBars.map(v => {
                  const pct = stats.totalViewsFiltered ? ((v.views / stats.totalViewsFiltered) * 100) : 0;
                  return (
                    <div key={v.id} className="flex items-center gap-4">
                      <div className="w-48 truncate text-sm text-gray-700" title={v.name}>{v.name}</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-500"
                          style={{ width: `${(v.views / max) * 100}%` }}
                        />
                      </div>
                      <div className="w-14 text-right text-sm font-medium text-gray-800">{v.views}</div>
                      <div className="w-12 text-right text-xs text-gray-500">{pct.toFixed(1)}%</div>
                    </div>
                  );
                });
              })()}
            </div>
          )}
          <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-wide">
            SOV = share of views within current filters
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600" />
              Detailed records
            </h2>
            <span className="text-xs uppercase tracking-wide text-gray-500">
               Showing {filteredCards.length} entries
             </span>
          </div>
          <div className="mb-4 text-xs text-gray-600 flex flex-wrap gap-4">
            <span>Total views (filtered): <span className="text-gray-900">{stats.totalViewsFiltered}</span></span>
            <span>Avg views/card: <span className="text-gray-900">{stats.avgViewsFiltered}</span></span>
            <span>All-time views: <span className="text-gray-900">{stats.totalViewsAllTime}</span></span>
          </div>
          {filteredCards.length === 0 ? (
            <EmptyState message="No review cards match your filters." />
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-500 uppercase tracking-wide text-xs border-b border-gray-200">
                    <th className="py-3 pr-6">Business</th>
                    <th className="py-3 pr-6">Slug</th>
                    <th className="py-3 pr-6">Category</th>
                    <th className="py-3 pr-6">Type</th>
                    <th className="py-3 pr-6">Views</th>
                    <th className="py-3 pr-6">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCards.map(card => {
                    const views = (card as any).views ?? (card as any).viewCount ?? 0;
                    return (
                      <tr
                        key={card.id}
                        className="border-b border-gray-100 hover:bg-gray-50/80 focus-within:bg-gray-50/80 transition last:border-0"
                      >
                        <td className="py-3 pr-6 font-semibold text-gray-900">{card.businessName}</td>
                        <td className="py-3 pr-6 text-gray-600">/{card.slug}</td>
                        <td className="py-3 pr-6 text-gray-700">{card.category}</td>
                        <td className="py-3 pr-6 text-gray-700">{card.type}</td>
                        <td className="py-3 pr-6 text-gray-800">{views}</td>
                        <td className="py-3 pr-6 text-gray-600">{formatDate(card.createdAt)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

const StatCard: React.FC<{
  title: string;
  value: number;
  subtitle: string;
  icon: React.ReactNode;
}> = ({ title, value, subtitle, icon }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow transition">
    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">{title}</span>
        <span className="mt-1 text-3xl font-semibold text-gray-900 leading-none">{value}</span>
      </div>
      <div className="p-2.5 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <p className="text-[11px] tracking-wide text-gray-500 uppercase">{subtitle}</p>
  </div>
);

const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-10 text-gray-500 text-sm">
    {message}
  </div>
);