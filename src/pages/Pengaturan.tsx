import { useMemo, useState } from "react";
import SettingBatch from "./SettingBatch";
import SettingFinance from "./SettingFinance";
import SettingAccount from "./SettingAccount";
import SettingShipper from "./SettingShipper";
import SettingUser from "./SettingUser";

type TabKey = "penerima" | "batch" | "finance" | "shipper" | "user" | "account";

type ReceiverRow = {
  penerima: string;
  penanggungJawab: string;
  desaKab: string;
  telepon: string;
  startDate: string;
};

export default function ReceiverSettings() {
  const today = new Date();
  const hari = today.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggalLengkap = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const [tab, setTab] = useState<TabKey>("penerima");
  const [selectedIndex, setSelectedIndex] = useState(2);

  const rows: ReceiverRow[] = useMemo(
    () => [
      {
        penerima: "SMP Mandiri Kreatif",
        penanggungJawab: "Kota Malang",
        desaKab: "Muhammad Reyhandi",
        telepon: "89789012345",
        startDate: "12/4/17",
      },
      {
        penerima: "SMP Inti Kasih",
        penanggungJawab: "Kabupaten Blitar",
        desaKab: "Maulana Ibrahim",
        telepon: "83567890123",
        startDate: "5/27/15",
      },
      {
        penerima: "SMP Citra Nusantara",
        penanggungJawab: "Kota Probolinggo",
        desaKab: "Rizki Saputra",
        telepon: "85012345678",
        startDate: "7/18/17",
      },
      {
        penerima: "SMP Cinta Ilmu",
        penanggungJawab: "Kabupaten Magetan",
        desaKab: "Maulana Ibrahim",
        telepon: "87456789012",
        startDate: "8/16/13",
      },
      {
        penerima: "SMP Cemerlang Ab...",
        penanggungJawab: "Kabupaten Proboling...",
        desaKab: "Maulana Ibrahim",
        telepon: "90123456789",
        startDate: "12/4/17",
      },
      {
        penerima: "SMP Gita Bahagia",
        penanggungJawab: "Kabupaten Trenggalek",
        desaKab: "Subadrun",
        telepon: "86123456789",
        startDate: "9/4/12",
      },
      {
        penerima: "SMP Mutiara Sejati",
        penanggungJawab: "Kabupaten Tuban",
        desaKab: "Joko Susanto",
        telepon: "83678901234",
        startDate: "5/19/12",
      },
      {
        penerima: "SMP Cendikia Muda",
        penanggungJawab: "Kabupaten Pamekasan",
        desaKab: "Maulana Ibrahim",
        telepon: "81234567890",
        startDate: "4/21/12",
      },
      {
        penerima: "SMP Pintar Ceria",
        penanggungJawab: "Kota Pasuruan",
        desaKab: "Joko Susanto",
        telepon: "88567890123",
        startDate: "7/11/19",
      },
      {
        penerima: "SMP Purnama Kusu...",
        penanggungJawab: "Kota Mojokerto",
        desaKab: "Rizki Saputra",
        telepon: "82345678901",
        startDate: "5/7/16",
      },
      {
        penerima: "SMP Cahaya Hati",
        penanggungJawab: "Kabupaten Tulungag...",
        desaKab: "Muhammad Reyhandi",
        telepon: "86234567890",
        startDate: "10/28/12",
      },
      {
        penerima: "SMP Gembira Mandiri",
        penanggungJawab: "Kabupaten Pacitan",
        desaKab: "Subadrun",
        telepon: "81345678901",
        startDate: "8/2/19",
      },
      {
        penerima: "SMP Mawar Biru",
        penanggungJawab: "Kabupaten Bangkalan",
        desaKab: "Joko Susanto",
        telepon: "84789012345",
        startDate: "8/15/17",
      },
      {
        penerima: "SMP Mawar Indah",
        penanggungJawab: "Kabupaten Jember",
        desaKab: "Muhammad Reyhandi",
        telepon: "87345678901",
        startDate: "9/23/16",
      },
      {
        penerima: "SMP Bakti Raya",
        penanggungJawab: "Kabupaten Pasuruan",
        desaKab: "Maulana Ibrahim",
        telepon: "90901234567",
        startDate: "8/21/15",
      },
    ],
    []
  );

  const selected = rows[selectedIndex] ?? rows[0];

  const tabs: { key: TabKey; label: string }[] = [
    { key: "penerima", label: "Penerima" },
    { key: "batch", label: "Batch" },
    { key: "finance", label: "Finance" },
    { key: "shipper", label: "Shipper" },
    { key: "user", label: "User" },
    { key: "account", label: "My Account" },
  ];

  const tabBtn = (active: boolean) =>
    `px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${
      active
        ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white border-[#0d5c3b] dark:border-emerald-600 shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
        : "bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700/80 hover:bg-gray-50 dark:hover:bg-gray-700/50"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] p-4 md:p-6 lg:p-8 space-y-6 transition-colors duration-300">
      
      {/* ========== PAGE HEADER ========== */}
      <div className="bg-white dark:bg-[#1e293b] px-6 py-4 rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 flex justify-between items-start transition-colors duration-300">
        <h1 className="text-xl md:text-2xl font-bold text-[#0d5c3b] dark:text-emerald-400">
          Receiver Settings
        </h1>

        <div className="flex items-start gap-4">
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            <p className="capitalize font-medium text-gray-700 dark:text-gray-300">{hari}</p>
            <p className="text-xs">{tanggalLengkap}</p>
          </div>
        </div>
      </div>

      {/* ========== MAIN CARD ========== */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
        
        {/* Tabs */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700/60">
          <div className="flex flex-wrap gap-3">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                className={tabBtn(tab === t.key)}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        {tab === "penerima" && (
          <div className="grid grid-cols-12 min-h-[650px]">
            
            {/* LEFT TABLE */}
            <div className="col-span-12 xl:col-span-6 border-r border-gray-200 dark:border-gray-700/60">
              {/* Header columns */}
              <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700/60 grid grid-cols-12 text-xs font-semibold text-orange-500 dark:text-orange-400 bg-white dark:bg-[#1e293b]">
                <div className="col-span-3">Penerima</div>
                <div className="col-span-3">Penanggung Jawab</div>
                <div className="col-span-3">Desa/ Kabupaten</div>
                <div className="col-span-2">Nomor Telepon</div>
                <div className="col-span-1 text-right">Start Date</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700/50 max-h-[650px] overflow-auto custom-scrollbar">
                {rows.map((r, idx) => {
                  const active = idx === selectedIndex;
                  return (
                    <button
                      key={`${r.penerima}-${idx}`}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-6 py-4 grid grid-cols-12 text-sm items-center transition-colors duration-200 ${
                        active
                          ? "bg-[#FCEFD8] dark:bg-orange-500/20"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700/50"
                      }`}
                    >
                      <div className="col-span-3 font-semibold text-gray-700 dark:text-gray-200 truncate pr-2">
                        {r.penerima}
                      </div>
                      <div className="col-span-3 text-gray-600 dark:text-gray-400 truncate pr-2">
                        {r.penanggungJawab}
                      </div>
                      <div className="col-span-3 text-gray-600 dark:text-gray-400 truncate pr-2">
                        {r.desaKab}
                      </div>
                      <div className="col-span-2 text-gray-600 dark:text-gray-400 truncate pr-2">
                        {r.telepon}
                      </div>
                      <div className="col-span-1 text-right text-gray-500 dark:text-gray-500">
                        {r.startDate}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT FORMS */}
            <div className="col-span-12 xl:col-span-6 grid grid-cols-12">
              
              {/* Informasi Penerima */}
              <div className="col-span-12 md:col-span-6 border-r border-gray-200 dark:border-gray-700/60">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700/60">
                  <h3 className="text-lg font-bold text-[#0d5c3b] dark:text-emerald-400">
                    Informasi Penerima
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">Penerima</label>
                    <input
                      className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200"
                      value={selected.penerima}
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Nama Penanggung Jawab
                    </label>
                    <input
                      className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200"
                      defaultValue="Juli Suartini"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Jenis Instansi
                    </label>
                    <select className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200 cursor-pointer">
                      <option>Sekolah</option>
                      <option>PAUD</option>
                      <option>Pesantren</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Whatsapp no.
                    </label>
                    <input
                      className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200"
                      defaultValue="0813 828 88222"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">Email</label>
                    <input
                      className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200"
                      defaultValue="suartini.juli@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">Leads</label>
                    <select className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200 cursor-pointer">
                      <option>Marvin McKinney</option>
                      <option>Esther Howard</option>
                      <option>Kristin Watson</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Alamat Penerima */}
              <div className="col-span-12 md:col-span-6">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700/60">
                  <h3 className="text-lg font-bold text-[#0d5c3b] dark:text-emerald-400">
                    Alamat Penerima
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700/80 rounded-2xl p-4 bg-white dark:bg-[#1e293b] shadow-sm">
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          Nama Penerima
                        </label>
                        <input
                          className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200"
                          defaultValue="SMK Karya Nasional"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          Alamat Pengiriman
                        </label>
                        <textarea
                          className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200 min-h-[90px] resize-none"
                          defaultValue="Jl. Anggur Dalam No. 28"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">Kota</label>
                          <select className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200 cursor-pointer">
                            <option>Select...</option>
                            <option>Malang</option>
                            <option>Probolinggo</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            Kecamatan
                          </label>
                          <select className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200 cursor-pointer">
                            <option>Select...</option>
                            <option>Klojen</option>
                            <option>Kedopok</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            Kabupaten / Desa
                          </label>
                          <select className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200 cursor-pointer">
                            <option>Select...</option>
                            <option>Kabupaten A</option>
                            <option>Desa B</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            Kode Pos
                          </label>
                          <select className="mt-2 w-full border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 text-sm bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-all duration-200 cursor-pointer">
                            <option>Select...</option>
                            <option>65111</option>
                            <option>67211</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-600 transition-colors duration-200 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                        title="Delete (simulasi)"
                        onClick={() => alert("Simulasi delete address")}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M8 6V4H16V6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M19 6L18 20H6L5 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="text-xs border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 px-4 py-2 rounded-lg hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors duration-200"
                        onClick={() => alert("Simulasi add address")}
                      >
                        Add Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer buttons */}
              <div className="col-span-12 border-t border-gray-200 dark:border-gray-700/60 p-6 flex items-center justify-end gap-4 bg-gray-50/50 dark:bg-[#1e293b]/50">
                <button
                  type="button"
                  className="px-8 py-2.5 rounded-xl border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 font-medium hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10 transition-colors duration-200"
                  onClick={() => alert("Simulasi cancel")}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-8 py-2.5 rounded-xl bg-[#0d5c3b] dark:bg-emerald-600 text-white font-medium hover:bg-[#09472e] dark:hover:bg-emerald-500 transition-colors duration-200 shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                  onClick={() => alert("Simulasi save")}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === "batch" && (
          <div className="p-4">
            <SettingBatch />
          </div>
        )}

        {tab === "finance" && (
          <div className="p-4">
            <SettingFinance />
          </div>
        )}

        {tab === "account" && (
          <div className="p-4">
            <SettingAccount />
          </div>
        )}

        {tab === "shipper" && (
          <div className="p-4">
            <SettingShipper />
          </div>
        )}

        {tab === "user" && (
          <div className="p-4">
            <SettingUser />
          </div>
        )}
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
  );
}