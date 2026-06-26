import { Link } from "react-router-dom";

export default function Pesanan() {
  const today = new Date();

  const hari = today.toLocaleDateString("id-ID", {
    weekday: "long",
  });

  const tanggalLengkap = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] p-4 md:p-6 lg:p-8 space-y-6 transition-colors duration-300">
      
      {/* ========== PAGE HEADER ========== */}
      <div className="bg-white dark:bg-[#1e293b] px-6 py-4 rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 flex justify-between items-center transition-colors duration-300">
        <h1 className="text-xl md:text-2xl font-bold text-[#0d5c3b] dark:text-emerald-400">
          Pesanan
        </h1>

        <div className="text-right text-sm text-gray-500 dark:text-gray-400">
          <p className="capitalize font-medium text-gray-700 dark:text-gray-300">{hari}</p>
          <p className="text-xs">{tanggalLengkap}</p>
        </div>
      </div>

      {/* ========== HEADER LIST PESANAN ========== */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 p-6 transition-colors duration-300">
        
        {/* Filter & Search Bar */}
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Link
              to="/pesanan/tambah"
              className="bg-[#0d5c3b] hover:bg-[#09472e] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white w-9 h-9 rounded-xl flex items-center justify-center text-xl shadow-md shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20 transition-all duration-200"
            >
              +
            </Link>
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              List Pesanan <span className="text-gray-400 dark:text-gray-500 font-medium">75</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <button className="border border-gray-200 dark:border-gray-700/80 px-4 py-2 rounded-xl text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1e293b] hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              Filter
            </button>
            <button className="border border-gray-200 dark:border-gray-700/80 px-4 py-2 rounded-xl text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1e293b] hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              Start Date ↑
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 xl:w-48 border border-gray-200 dark:border-gray-700/80 px-4 py-2 rounded-xl text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200"
            />
          </div>
        </div>

        {/* ========== TABLE ========== */}
        <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
          <table className="w-full text-sm whitespace-nowrap">
            <thead className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700/80">
              <tr>
                <th className="text-left py-3 font-semibold pr-4">Order no.</th>
                <th className="text-left py-3 font-semibold pr-4">Pihak Penerima</th>
                <th className="text-left py-3 font-semibold pr-4">Contact</th>
                <th className="text-left py-3 font-semibold pr-4">Pax</th>
                <th className="text-left py-3 font-semibold pr-4">Sajian</th>
                <th className="text-left py-3 font-semibold pr-4">Start</th>
                <th className="text-left py-3 font-semibold pr-4">Status</th>
                <th className="text-left py-3 font-semibold pr-4">Batch</th>
                <th className="text-left py-3 font-semibold">Delivery</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
              {[
                {
                  name: "Pesantren Cendekia Murni",
                  contact: "90901234567",
                  pax: 115,
                  sajian: "Makan Siang",
                  start: "10 Mei 2025",
                  status: "Aktif",
                },
                {
                  name: "PAUD Harapan Bangsa",
                  contact: "88990123456",
                  pax: 963,
                  sajian: "Sarapan",
                  start: "1 Mei 2025",
                  status: "Aktif",
                },
                {
                  name: "SDN 50 Gita Bahagia",
                  contact: "89789012345",
                  pax: 230,
                  sajian: "Makan Siang",
                  start: "1 Mei 2025",
                  status: "Aktif",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/5 transition-colors duration-200"
                >
                  <td className="py-4 pr-4 text-gray-700 dark:text-gray-300 font-medium">
                    Order no.
                  </td>
                  <td className="py-4 pr-4 text-gray-700 dark:text-gray-300">{row.name}</td>
                  <td className="py-4 pr-4 text-gray-600 dark:text-gray-400">{row.contact}</td>
                  <td className="py-4 pr-4 text-gray-700 dark:text-gray-300">{row.pax}</td>
                  <td className="py-4 pr-4 text-gray-700 dark:text-gray-300">{row.sajian}</td>
                  <td className="py-4 pr-4 text-gray-600 dark:text-gray-400">{row.start}</td>
                  <td className="py-4 pr-4">
                    <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-1 rounded-full text-[10px] font-semibold border border-emerald-200 dark:border-emerald-800/50">
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-gray-700 dark:text-gray-300">2-5</td>
                  <td className="py-4">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700/60 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-400 h-2 rounded-full w-[60%]"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 block">16 / 30</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== BOTTOM SECTION ========== */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* LEFT TABLE MENU */}
        <div className="col-span-12 xl:col-span-8 bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="grid grid-cols-12 w-full gap-2">
              <div className="col-span-3 md:col-span-2 text-[13px] font-semibold text-orange-500 dark:text-orange-400">
                Tanggal
              </div>
              <div className="col-span-5 text-[13px] font-semibold text-orange-500 dark:text-orange-400">
                Sarapan
              </div>
              <div className="col-span-4 text-[13px] font-semibold text-orange-500 dark:text-orange-400">
                Makan Siang
              </div>
            </div>

            <select className="ml-auto md:ml-4 text-xs border border-gray-200 dark:border-gray-700/80 rounded-lg px-3 py-2 bg-white dark:bg-[#1e293b] text-gray-600 dark:text-gray-300 outline-none focus:ring-1 focus:ring-[#0d5c3b] dark:focus:ring-emerald-500 transition-colors cursor-pointer">
              <option>Person #01 ↑</option>
              <option>Person #02</option>
              <option>Person #03</option>
            </select>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700/50">
            {[
              {
                date: "Mar 4, 2022",
                sarapan: "Bubur Ayam Khas Cirebon (6)",
                makan: "Nasi Uduk + Tahu + Bihun + Telur Balado (14)",
                highlight: true,
              },
              {
                date: "Mar 5, 2022",
                sarapan: "Soto Lamongan (14)",
                makan: "Soto Lamongan (14)",
              },
              {
                date: "Mar 6, 2022",
                sarapan: "Nasi Gudeg + Semur tahu (6)",
                makan: "Nasi Kuning + Semur Daging (15)",
              },
              {
                date: "Mar 7, 2022",
                sarapan: "Nasi Uduk + Tahu + Bihun + Telur Balado (6)",
                makan: "-",
              },
              {
                date: "Mar 8, 2022",
                sarapan: "Mie Bangka (7)",
                makan: "Nasi Gudeg + Semur tahu (14)",
              },
            ].map((row, i) => (
              <div key={i} className="px-4 md:px-6 py-4 md:py-5">
                <div className="flex flex-col md:grid md:grid-cols-12 items-center gap-4">
                  
                  {/* Date */}
                  <div className="md:col-span-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {row.date}
                  </div>

                  {/* Sarapan */}
                  <div className="md:col-span-5 flex flex-col md:flex-row md:items-center justify-between gap-3 w-full">
                    <div
                      className={`flex-1 w-full text-sm text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl ${
                        row.highlight
                          ? "bg-[#FCEFD8] dark:bg-orange-500/20 border border-orange-200 dark:border-orange-500/30"
                          : "bg-transparent"
                      }`}
                    >
                      {row.sarapan}
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        type="button"
                        className="w-8 h-8 rounded-lg border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 flex items-center justify-center hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M9 7L10.5 5H13.5L15 7H18C19.1046 7 20 7.89543 20 9V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V9C4 7.89543 4.89543 7 6 7H9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                          <path d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="w-8 h-8 rounded-lg border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 flex items-center justify-center hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                          <path d="M13.5 8.5L16.5 11.5" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Makan Siang */}
                  <div className="md:col-span-5 flex flex-col md:flex-row md:items-center justify-between gap-3 w-full">
                    <div className="flex-1 w-full text-sm text-gray-700 dark:text-gray-300 py-2.5">
                      {row.makan}
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        type="button"
                        className="w-8 h-8 rounded-lg bg-[#0d5c3b] dark:bg-emerald-600 text-white flex items-center justify-center hover:bg-[#09472e] dark:hover:bg-emerald-500 transition-colors shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M9 7L10.5 5H13.5L15 7H18C19.1046 7 20 7.89543 20 9V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V9C4 7.89543 4.89543 7 6 7H9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                          <path d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="w-8 h-8 rounded-lg border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 flex items-center justify-center hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                          <path d="M13.5 8.5L16.5 11.5" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT DETAIL CARD */}
        <div className="col-span-12 xl:col-span-4 bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden h-fit transition-colors duration-300 sticky top-6">
          {/* TOP */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700/60">
            <div className="flex gap-5">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 shrink-0 border border-gray-200 dark:border-gray-700">
                <img
                  src="/images/buburayam.png"
                  alt="Bubur Ayam"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 leading-tight">
                  Bubur Ayam Khas Cirebon (6)
                </h3>

                <div className="mt-4 space-y-2 text-sm">
                  {[
                    { label: "Kalori", value: "490", unit: "kCal" },
                    { label: "Karbohidrat", value: "54,00", unit: "C" },
                    { label: "Lemak", value: "15,2", unit: "F" },
                    { label: "Protein", value: "43,7", unit: "P" },
                  ].map((x, idx) => (
                    <div key={idx} className="flex justify-between border-b border-gray-100 dark:border-gray-700/50 pb-1 last:border-0 last:pb-0">
                      <span className="text-gray-400 dark:text-gray-500">{x.label}</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {x.value} <span className="text-gray-400 dark:text-gray-500 font-normal">{x.unit}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700/60">
            <div className="grid grid-cols-12 gap-y-3 text-sm">
              <div className="col-span-4 text-gray-400 dark:text-gray-500">Protein</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-300">
                Ayam, Telur Puyuh, Usus Ayam, Kacang
              </div>

              <div className="col-span-4 text-gray-400 dark:text-gray-500">Karbohidrat</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-300">
                Nasi (Bubur)
              </div>

              <div className="col-span-4 text-gray-400 dark:text-gray-500">Serat</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-300">
                Daun Bawang
              </div>

              <div className="col-span-4 text-gray-400 dark:text-gray-500">Topping</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-300">
                Cakwey, Emping
              </div>

              <div className="col-span-4 text-gray-400 dark:text-gray-500">Alat Makan</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-300">
                No
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="p-6">
            <div className="grid grid-cols-12 gap-y-6 text-sm">
              <div className="col-span-4 text-gray-400 dark:text-gray-500">Penerima #01</div>
              <div className="col-span-8">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  PAUD Harapan Bangsa
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">
                  Jl. Siliwangi No.13, Kuningan, Kec. Kuningan, Kabupaten Kuningan, Jawa Barat 45511.
                </p>
              </div>

              <div className="col-span-4 text-gray-400 dark:text-gray-500">Penerima #02</div>
              <div className="col-span-8">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  PAUD Mutiara Sejati
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">
                  Jl. Cirendang - Cigugur, Cirendang, Kec. Kuningan, Kabupaten Kuningan, Jawa Barat 45518
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END BOTTOM SECTION */}
    </div>
  );
}