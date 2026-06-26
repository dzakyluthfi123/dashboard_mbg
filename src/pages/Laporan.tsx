import React, { useState } from 'react';
import { 
  Search, 
  Download, 
  Calendar, 
  ChevronDown, 
  Filter,
  Eye,
  BarChart3,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  Users,
  PackageCheck,
  TrendingUp
} from 'lucide-react';

export default function Laporan() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [dateFilter, setDateFilter] = useState('');

  // Data Mockup untuk Tabel Laporan
  const reportsData = [
    { id: 1, title: 'Laporan Harian MBG - Jakarta', date: '26 Juni 2026', status: 'Selesai', amount: '12.450' },
    { id: 2, title: 'Evaluasi Program Gizi - Bandung', date: '25 Juni 2026', status: 'Diproses', amount: '8.230' },
    { id: 3, title: 'Distribusi Batch #403 - Surabaya', date: '24 Juni 2026', status: 'Menunggu', amount: '5.110' },
    { id: 4, title: 'Analisis Penerima Manfaat - Regional', date: '23 Juni 2026', status: 'Selesai', amount: '24.100' },
    { id: 5, title: 'Laporan Stok Dapur - Pusat', date: '22 Juni 2026', status: 'Revisi', amount: '1.890' },
    { id: 6, title: 'Evaluasi Kualitas Makanan - Medan', date: '21 Juni 2026', status: 'Selesai', amount: '6.780' },
  ];

  // Fungsi Filter Data
  const filteredData = reportsData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'Semua' || item.status === statusFilter;
    const matchesDate = dateFilter === '' || item.date === dateFilter;
    return matchesSearch && matchesStatus && matchesDate;
  });

  // Fungsi Helper untuk Warna Status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai': return 'text-emerald-600 border-emerald-500/50 bg-emerald-50/50 dark:text-emerald-400 dark:border-emerald-500/30 dark:bg-emerald-500/10';
      case 'Diproses': return 'text-blue-600 border-blue-500/50 bg-blue-50/50 dark:text-blue-400 dark:border-blue-500/30 dark:bg-blue-500/10';
      case 'Menunggu': return 'text-amber-600 border-amber-500/50 bg-amber-50/50 dark:text-amber-400 dark:border-amber-500/30 dark:bg-amber-500/10';
      case 'Revisi': return 'text-rose-600 border-rose-500/50 bg-rose-50/50 dark:text-rose-400 dark:border-rose-500/30 dark:bg-rose-500/10';
      default: return 'text-slate-600 border-slate-500/50 bg-slate-50/50 dark:text-slate-400 dark:border-slate-500/30 dark:bg-slate-500/10';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 bg-slate-50/50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* ========== KARTU ATAS (HEADER & TANGGAL) ========== */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100/80 dark:border-slate-700/80 p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-300">
        <h1 className="text-xl md:text-2xl font-bold text-[#0d5c3b] dark:text-emerald-400 tracking-tight">
          Laporan
        </h1>
        <div className="text-right text-sm text-slate-500 dark:text-slate-400">
          <p className="text-slate-400 dark:text-slate-500 text-xs">Jumat</p>
          <p className="font-medium text-slate-700 dark:text-slate-300">26 Juni 2026</p>
        </div>
      </div>

      {/* ========== KARTU STATISTIK (ANALYTICS CARDS) ========== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Total Laporan', value: '1.024', icon: FileText, trend: '+12%', color: 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10' },
          { label: 'Penerima Manfaat', value: '12.450', icon: Users, trend: '+5.2%', color: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10' },
          { label: 'Distribusi Aktif', value: '89', icon: PackageCheck, trend: '-2%', color: 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-500/10' },
          { label: 'Rata-rata Harian', value: '4.2K', icon: TrendingUp, trend: '+8.1%', color: 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-500/10' },
        ].map((stat, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md dark:hover:shadow-slate-700/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2.5 rounded-xl ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-semibold flex items-center gap-1 ${stat.trend.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {stat.trend.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ========== KARTU BAWAH (TABEL & TOMBOL) ========== */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100/80 dark:border-slate-700/80 overflow-hidden transition-colors duration-300">
        
        {/* Header Kartu Bawah */}
        <div className="p-4 md:p-6 border-b border-slate-100 dark:border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-[#0d5c3b] dark:text-emerald-400">Daftar Laporan</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Data laporan program Makanan Bergizi Gratis</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#0d5c3b] hover:bg-[#09472e] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20">
            <Download className="w-4 h-4" />
            Ekspor Data
          </button>
        </div>

        {/* ========== SEARCH & FILTER BAR (Di dalam Kartu) ========== */}
        <div className="p-4 md:px-6 border-b border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Cari laporan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative w-full sm:w-auto">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  <Filter className="w-4 h-4" />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full sm:w-40 pl-10 pr-8 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  <option value="Semua">Semua Status</option>
                  <option value="Selesai">Selesai</option>
                  <option value="Diproses">Diproses</option>
                  <option value="Menunggu">Menunggu</option>
                  <option value="Revisi">Revisi</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
              </div>

              <div className="relative w-full sm:w-auto">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full sm:w-40 pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========== TABEL DATA LAPORAN ========== */}
        
        {/* Header Tabel (Desktop Only) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-sm font-semibold text-[#f97316] dark:text-orange-400 tracking-wide transition-colors duration-300">
          <div className="col-span-5">Laporan</div>
          <div className="col-span-2 text-center">Tanggal</div>
          <div className="col-span-2 text-center">Jumlah</div>
          <div className="col-span-2 text-center">Status</div>
          <div className="col-span-1 text-right">Aksi</div>
        </div>

        {/* List Data */}
        <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
          {filteredData.length > 0 ? (
            filteredData.map((report) => (
              <div key={report.id} className="group block md:grid grid-cols-12 gap-4 px-4 md:px-6 py-4 md:py-5 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/5 transition-colors duration-200 border-b border-slate-100/50 dark:border-slate-700/30 last:border-0">
                
                {/* Mobile Layout (Tampilan Kartu) */}
                <div className="md:hidden space-y-2 pb-2 border-b border-slate-100 dark:border-slate-700/30 last:border-0 mb-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-base line-clamp-1">{report.title}</h4>
                    <span className={`text-[10px] font-medium px-2 py-1 rounded-full border ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{report.date}</span>
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{report.amount} Porsi</span>
                  </div>
                  <div className="flex justify-end pt-1">
                    <button className="p-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-[#0d5c3b]/10 dark:hover:bg-emerald-500/20 text-slate-600 dark:text-slate-400 hover:text-[#0d5c3b] dark:hover:text-emerald-400 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Desktop Layout (Tabel) */}
                <div className="hidden md:block col-span-5 text-sm text-slate-800 dark:text-slate-300 self-center truncate">
                  {report.title}
                </div>
                <div className="hidden md:block col-span-2 text-sm text-slate-500 dark:text-slate-400 text-center self-center">
                  {report.date}
                </div>
                <div className="hidden md:block col-span-2 text-sm text-slate-700 dark:text-slate-300 text-center self-center">
                  {report.amount}
                </div>
                <div className="hidden md:block col-span-2 text-center self-center">
                  <span className={`text-[10px] font-medium px-3 py-1 rounded-full border ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </div>
                <div className="hidden md:flex col-span-1 items-center justify-end gap-2 self-center">
                  <button className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-[#0d5c3b] dark:hover:text-emerald-400 hover:bg-[#0d5c3b]/10 dark:hover:bg-emerald-500/20 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <BarChart3 className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <p className="text-slate-500 dark:text-slate-400 font-medium">Tidak ada data laporan yang ditemukan</p>
              <p className="text-sm text-slate-400 dark:text-slate-500">Coba sesuaikan filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>

        {/* Footer Tabel (Pagination) */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700/50 flex items-center justify-end bg-slate-50/50 dark:bg-slate-800/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mr-4">Menampilkan {filteredData.length} dari {reportsData.length} data</p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Sebelumnya</button>
            <button className="px-3 py-1 text-xs font-medium bg-[#0d5c3b] dark:bg-emerald-600 text-white rounded-lg shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20">1</button>
            <button className="px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">2</button>
            <button className="px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">3</button>
            <button className="px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
}