import { Search, Filter, Printer } from "lucide-react";

export default function AdministrationPage() {
  const today = new Date();
  const hari = today.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggal = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const stats = [
    { label: "Total Penerima", value: "20" },
    { label: "Total Pengiriman", value: "19/25" },
    { label: "Total Hidangan", value: "3500/4000" },
    { label: "Jumlah Sarapan", value: "1200/1500" },
    { label: "Jumlah Makan Siang", value: "1300/2500" },
    { label: "Hidangan Yang Dikembalikan", value: "20" },
  ];

  const rows = new Array(10).fill({
    order: "WLD-220001",
    batch: "3",
    start: "Dec 18, 2022",
    end: "Dec 31, 2022",
    penerima: "SMA Bunda Mulia",
    pax: "100",
    type: "Sarapan",
    kirim: "100",
    kembali: "10",
    keluhan: "3",
  });

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="bg-gray-100 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-semibold text-green-800">Administration</h1>

        <div className="text-sm text-gray-500 text-right capitalize">
          <p>{hari}</p>
          <p>{tanggal}</p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-6 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-4 text-right"
          >
            <p className="text-xs text-gray-400 mb-1">{s.label}</p>
            <p className="text-2xl font-semibold text-green-800">{s.value}</p>
          </div>
        ))}
      </div>

      {/* REPORTS */}
      <div className="bg-white border border-gray-200 rounded-xl">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="font-semibold text-green-800">Reports</h2>

          <div className="flex items-center gap-3">
            {/* SEARCH */}
            <div className="relative">
              <input
                placeholder="Search ..."
                className="border rounded-lg px-3 py-2 text-sm pl-9"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* FILTER */}
            <button className="border rounded-lg p-2 hover:bg-gray-50">
              <Filter size={16} />
            </button>

            {/* PRINT */}
            <button className="bg-orange-500 text-white p-2 rounded-lg">
              <Printer size={16} />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="text-orange-500 border-b">
              <tr className="text-left">
                <th className="px-4 py-3">Order no.</th>
                <th className="px-4 py-3">Batch</th>
                <th className="px-4 py-3">Starting Date</th>
                <th className="px-4 py-3">End Date</th>
                <th className="px-4 py-3">Penerima</th>
                <th className="px-4 py-3">pax</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Jumlah Pengiriman</th>
                <th className="px-4 py-3">Hidangan Dikembalikan</th>
                <th className="px-4 py-3">Keluhan / Catatan</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{r.order}</td>
                  <td className="px-4 py-3">{r.batch}</td>
                  <td className="px-4 py-3">{r.start}</td>
                  <td className="px-4 py-3">{r.end}</td>
                  <td className="px-4 py-3">{r.penerima}</td>
                  <td className="px-4 py-3">{r.pax}</td>
                  <td className="px-4 py-3">{r.type}</td>
                  <td className="px-4 py-3">{r.kirim}</td>
                  <td className="px-4 py-3">{r.kembali}</td>
                  <td className="px-4 py-3">{r.keluhan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
