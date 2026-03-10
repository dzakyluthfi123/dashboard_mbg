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
    `px-6 py-2 rounded-lg text-sm font-semibold transition border ${
      active
        ? "bg-green-800 text-white border-green-800"
        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700"
    }`;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-4 md:p-6 space-y-6">
      {/* PAGE HEADER */}
      <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 flex justify-between items-start">
        <h1 className="text-lg font-bold text-green-800 dark:text-white">
          Receiver Settings
        </h1>

        <div className="flex items-start gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right capitalize">
            <p>{hari}</p>
            <p>{tanggalLengkap}</p>
          </div>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Tabs */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
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
            <div className="col-span-12 xl:col-span-6 border-r border-gray-200 dark:border-gray-700">
              {/* Header columns */}
              <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 grid grid-cols-12 text-xs font-semibold text-orange-500 bg-white dark:bg-gray-800">
                <div className="col-span-3">Penerima</div>
                <div className="col-span-3">Penanggung Jawab</div>
                <div className="col-span-3">Desa/ Kabupaten</div>
                <div className="col-span-2">Nomor Telepon</div>
                <div className="col-span-1 text-right">Start Date</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[650px] overflow-auto">
                {rows.map((r, idx) => {
                  const active = idx === selectedIndex;
                  return (
                    <button
                      key={`${r.penerima}-${idx}`}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-6 py-4 grid grid-cols-12 text-sm items-center transition ${
                        active
                          ? "bg-[#FCEFD8] dark:bg-orange-500/10"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="col-span-3 font-semibold text-gray-700 dark:text-gray-200 truncate">
                        {r.penerima}
                      </div>
                      <div className="col-span-3 text-gray-600 dark:text-gray-300 truncate">
                        {r.penanggungJawab}
                      </div>
                      <div className="col-span-3 text-gray-600 dark:text-gray-300 truncate">
                        {r.desaKab}
                      </div>
                      <div className="col-span-2 text-gray-600 dark:text-gray-300 truncate">
                        {r.telepon}
                      </div>
                      <div className="col-span-1 text-right text-gray-500 dark:text-gray-400">
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
              <div className="col-span-12 md:col-span-6 border-r border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-green-800 dark:text-white">
                    Informasi Penerima
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="text-xs text-gray-500">Penerima</label>
                    <input
                      className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      value={selected.penerima}
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500">
                      Nama Penanggung Jawab
                    </label>
                    <input
                      className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      defaultValue="Juli Suartini"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500">
                      Jenis Instansi
                    </label>
                    <select className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                      <option>Sekolah</option>
                      <option>PAUD</option>
                      <option>Pesantren</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500">
                      Whatsapp no.
                    </label>
                    <input
                      className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      defaultValue="0813 828 88222"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500">Email</label>
                    <input
                      className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                      defaultValue="suartini.juli@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500">Leads</label>
                    <select className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                      <option>Marvin McKinney</option>
                      <option>Esther Howard</option>
                      <option>Kristin Watson</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Alamat Penerima */}
              <div className="col-span-12 md:col-span-6">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-green-800 dark:text-white">
                    Alamat Penerima
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs text-gray-500">
                          Nama Penerima
                        </label>
                        <input
                          className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
                          defaultValue="SMK Karya Nasional"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-gray-500">
                          Alamat Pengiriman
                        </label>
                        <textarea
                          className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 min-h-[90px]"
                          defaultValue="Jl. Anggur Dalam No. 28"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-gray-500">Kota</label>
                          <select className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                            <option>Select...</option>
                            <option>Malang</option>
                            <option>Probolinggo</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs text-gray-500">
                            Kecamatan
                          </label>
                          <select className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                            <option>Select...</option>
                            <option>Klojen</option>
                            <option>Kedopok</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-gray-500">
                            Kabupaten / Desa
                          </label>
                          <select className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
                            <option>Select...</option>
                            <option>Kabupaten A</option>
                            <option>Desa B</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs text-gray-500">
                            Kode Pos
                          </label>
                          <select className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
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
                        className="text-red-500"
                        title="Delete (simulasi)"
                        onClick={() => alert("Simulasi delete address")}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 6H21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8 6V4H16V6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19 6L18 20H6L5 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 11V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M14 11V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="text-xs border border-green-800 text-green-800 dark:text-green-400 px-4 py-2 rounded-lg"
                        onClick={() => alert("Simulasi add address")}
                      >
                        Add Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer buttons */}
              <div className="col-span-12 border-t border-gray-200 dark:border-gray-700 p-6 flex items-center justify-end gap-4">
                <button
                  type="button"
                  className="px-10 py-3 rounded-xl border border-green-800 text-green-800 dark:text-green-400 font-semibold"
                  onClick={() => alert("Simulasi cancel")}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-10 py-3 rounded-xl bg-green-800 text-white font-semibold hover:bg-green-700"
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
    </div>
  );
}