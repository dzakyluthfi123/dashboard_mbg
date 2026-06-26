import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  // Data statistik (mockup)
  const stats = [
    { label: "Total Penerima", value: "1,250", icon: "👥" },
    { label: "Total Pengiriman", value: "25", icon: "🚚" },
    { label: "Total Hidangan", value: "320", icon: "🍱" },
    { label: "Jumlah Sarapan", value: "320", icon: "🌅" },
    { label: "Jumlah Makan Siang", value: "320", icon: "☀️" },
    { label: "Hidangan Dikembalikan", value: "12", icon: "↩️" },
  ];

  return (
    <>
      <PageMeta
        title="Dashboard MBG | NEXONUS Teknologi Digital"
        description="Dashboard Sistem Monitoring Program Makanan Bergizi Gratis"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] p-4 md:p-6 lg:p-8 transition-colors duration-300">
        
        {/* ====== HEADER ====== */}
        <div className="mb-6">
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-200/60 dark:border-gray-700/60 transition-colors duration-300">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
              Dashboard Program MBG
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
              Monitoring distribusi, penerima, dan aktivitas program secara real-time
            </p>
          </div>
        </div>

        {/* ====== STATISTIK CARDS ====== */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 mb-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#1e293b] rounded-xl p-5 shadow-sm border border-gray-200/60 dark:border-gray-700/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                  +12%
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                {stat.value}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ====== LAYOUT GRID UTAMA (Menu Hari Ini, Pesanan, Chat) ====== */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-6">
          
          {/* ========== KOLOM KIRI ========== */}
          <div className="col-span-12 xl:col-span-4 flex flex-col gap-4 md:gap-6">
            
            {/* Menu Hari Ini */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 shadow-sm border border-gray-200/60 dark:border-gray-700/60 flex-1 transition-colors duration-300">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                  Menu Hari ini
                </h3>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                  1267 pcs
                </span>
              </div>

              <div className="space-y-6">
                {/* Menu Item 1 */}
                <div className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 flex-shrink-0 border border-gray-200 dark:border-gray-700">
                    <img
                      src="/images/nasgor.png"
                      alt="Nasi Goreng Ayam"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold bg-emerald-600 dark:bg-emerald-500 text-white">
                      Sarapan
                    </div>
                    <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200 text-sm leading-tight">
                      Nasi Goreng Ayam + Telur Mata Sapi
                    </p>
                    <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-400 h-2 rounded-full w-[70%]"></div>
                    </div>
                    <div className="flex justify-between mt-1 text-[10px] text-gray-500 dark:text-gray-400">
                      <span>Progress</span>
                      <span className="font-medium">16 / 16</span>
                    </div>
                  </div>
                </div>

                {/* Menu Item 2 */}
                <div className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 flex-shrink-0 border border-gray-200 dark:border-gray-700">
                    <img
                      src="/images/sate.png"
                      alt="Sate Ayam Bumbu Kacang"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold bg-emerald-600 dark:bg-emerald-500 text-white">
                      Makan Siang
                    </div>
                    <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200 text-sm leading-tight">
                      Sate Ayam Bumbu Kacang + Sup Masakan
                    </p>
                    <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-400 h-2 rounded-full w-[35%]"></div>
                    </div>
                    <div className="flex justify-between mt-1 text-[10px] text-gray-500 dark:text-gray-400">
                      <span>Progress</span>
                      <span className="font-medium">27 / 80</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Today Delivery */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 shadow-sm border border-gray-200/60 dark:border-gray-700/60 transition-colors duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                  Today Delivery
                </h3>
                <div className="text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1 bg-gray-50 dark:bg-gray-800">
                  Start Date
                </div>
              </div>

              <div className="flex justify-between text-xs font-bold text-gray-600 dark:text-gray-400 pb-2 border-b border-gray-200 dark:border-gray-700">
                <span>Destination</span>
                <span>Qty</span>
              </div>

              <div className="mt-3 space-y-4 text-sm">
                {[
                  { dest: "SMP 30 Kabupaten Bangkalan", qty: "4/4", done: true },
                  { dest: "SD K Golgota Kabupaten Banyuwangi", qty: "0/10", done: false },
                  { dest: "SMA N Bunda Kandung Kabupaten Bondowoso", qty: "0/12", done: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 text-sm truncate pr-2">
                      {item.dest}
                    </span>
                    {item.done ? (
                      <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                        {item.qty}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs font-semibold bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                        {item.qty}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ========== KOLOM TENGAH (Pesanan Hari Ini) ========== */}
          <div className="col-span-12 xl:col-span-5">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 shadow-sm border border-gray-200/60 dark:border-gray-700/60 h-full transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                    Pesanan Hari ini
                  </h3>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full font-bold">
                    75
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Filter
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Hari Ini
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 text-xs font-semibold text-gray-500 dark:text-gray-400 pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="col-span-4">Sajian</div>
                <div className="col-span-6">Penerima</div>
                <div className="col-span-2 text-right">Qty</div>
              </div>

              <div className="mt-3 space-y-3 text-sm max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                {[
                  { sajian: "Sarapan", penerima: "SMP Mawar Biru", qty: "7/14", highlight: false },
                  { sajian: "Sarapan", penerima: "SMP Pintar Ceria", qty: "8/14", highlight: false },
                  { sajian: "Sarapan", penerima: "SMP Bhakti Nusa", qty: "8/8", highlight: true },
                  { sajian: "Makan Siang", penerima: "SMP Suka Maju", qty: "8/14", highlight: false },
                  { sajian: "Sarapan", penerima: "SMP Cendikia Muda", qty: "2/2", highlight: true },
                  { sajian: "Makan Siang", penerima: "SMP Pesona Bahari", qty: "8/14", highlight: false },
                  { sajian: "Sarapan", penerima: "SMP Jaya Mukti", qty: "7/13", highlight: false },
                  { sajian: "Makan Siang", penerima: "SMP Abadi Jaya", qty: "8/14", highlight: false },
                  { sajian: "Makan Siang", penerima: "SMP Harapan Bangsa", qty: "7/13", highlight: false },
                  { sajian: "Sarapan", penerima: "SMP Gita Bahagia", qty: "4/4", highlight: true },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 items-center border-b border-gray-100 dark:border-gray-700/50 pb-3 last:border-0 hover:bg-gray-50/50 dark:hover:bg-gray-700/30 rounded-lg -mx-2 px-2 transition-colors"
                  >
                    <div className="col-span-4 text-gray-700 dark:text-gray-300 font-medium">
                      {row.sajian}
                    </div>
                    <div className="col-span-6 text-gray-600 dark:text-gray-400 truncate">
                      {row.penerima}
                    </div>
                    <div className="col-span-2 text-right">
                      {row.highlight ? (
                        <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-bold shadow-sm shadow-orange-500/20">
                          {row.qty}
                        </span>
                      ) : (
                        <span className="text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs font-semibold">
                          {row.qty}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ========== KOLOM KANAN (Chat) ========== */}
          <div className="col-span-12 xl:col-span-3">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 shadow-sm border border-gray-200/60 dark:border-gray-700/60 h-full flex flex-col transition-colors duration-300">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                    Chat
                  </h3>
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">
                    12
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 bg-gray-50 dark:bg-gray-800">
                  Start Date
                </div>
              </div>

              <div className="space-y-4 text-sm flex-1 overflow-y-auto pr-1 custom-scrollbar">
                {[
                  { name: "Tantri Hasanah", role: "Sous Chef", msg: "Tindidunt nullam ac odio in metus.", time: "19.00" },
                  { name: "Usman Tarihoran", role: "Sous Chef", msg: "Odio placerat molestie euismod tristique tempus.", time: "19.00" },
                  { name: "Sadina Vicky Safitri", role: "Sous Chef", msg: "Tindidunt nullam ac odio in metus.", time: "19.00" },
                  { name: "Dwi Sihotang S.IP", role: "Sous Chef", msg: "Tindidunt tortor nam etiam nisi.", time: "19.00" },
                ].map((c, i) => (
                  <div key={i} className="border-b border-gray-100 dark:border-gray-700/50 pb-4 last:border-0 group hover:bg-gray-50 dark:hover:bg-gray-700/30 p-2 -mx-2 rounded-lg transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          {c.name}
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500">{c.role}</p>
                      </div>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500">{c.time}</p>
                    </div>
                    <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{c.msg}</p>
                  </div>
                ))}
              </div>

              <button className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md shadow-emerald-600/20 dark:shadow-emerald-500/20">
                Add Status
              </button>
            </div>
          </div>
        </div>

        {/* ====== FOOTER SECTION (Grafik, Target, Aktivitas) ====== */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          
          {/* Grafik Distribusi */}
          <div className="col-span-12 xl:col-span-7">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-200/60 dark:border-gray-700/60 h-full transition-colors duration-300">
              <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-4">
                Statistik Distribusi Bulanan
              </h2>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="font-medium">Area Grafik Interaktif</p>
                  <p className="text-xs mt-1">(Silakan integrasikan dengan Chart.js atau Recharts)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Target Bulanan */}
          <div className="col-span-12 xl:col-span-5">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-200/60 dark:border-gray-700/60 h-full transition-colors duration-300">
              <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-5">
                Target Bulanan
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Target Distribusi</p>
                  <p className="font-bold text-lg text-gray-800 dark:text-gray-200">10,000 Paket</p>
                </div>

                <div className="flex justify-between items-center p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Tercapai</p>
                  <p className="font-bold text-lg text-emerald-600 dark:text-emerald-400">7,250 Paket</p>
                </div>

                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1.5">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Progress</p>
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400">72%</p>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-500 dark:bg-blue-600 h-3 rounded-full w-[72%] shadow-sm shadow-blue-500/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aktivitas Terbaru */}
          <div className="col-span-12">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-200/60 dark:border-gray-700/60 transition-colors duration-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                  Aktivitas Terbaru
                </h2>
                <button className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline">
                  Lihat Semua
                </button>
              </div>

              <div className="space-y-3">
                {[
                  "Distribusi makanan ke SDN 01 Bekasi",
                  "Penambahan 50 penerima baru",
                  "Update laporan distribusi harian",
                  "Penambahan sekolah baru ke sistem"
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{activity}</span>
                    <span className="ml-auto text-[10px] text-gray-400 dark:text-gray-500">Baru saja</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ====== Custom Scrollbar untuk Mode Gelap ====== */}
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #475569;
          }
        `}</style>
      </div>
    </>
  );
}