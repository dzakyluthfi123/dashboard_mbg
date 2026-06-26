import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type PenerimaItem = {
  id: number;
  penerima: string;
  penanggungJawab: string;
  desaKabupaten: string;
  nomorTelepon: string;
  startDate: string;
};

export default function Penerima() {
  const navigate = useNavigate();
  const today = new Date();

  const hari = today.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggalLengkap = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const initialData = useMemo<PenerimaItem[]>(
    () => [
      {
        id: 1,
        penerima: "SMP Mandiri Kreatif",
        penanggungJawab: "Kota Malang",
        desaKabupaten: "Muhammad Reyhandi",
        nomorTelepon: "89789012345",
        startDate: "2025-12-04",
      },
      {
        id: 2,
        penerima: "SMP Inti Kasih",
        penanggungJawab: "Kabupaten Blitar",
        desaKabupaten: "Maulana Ibrahim",
        nomorTelepon: "83567890123",
        startDate: "2025-05-27",
      },
    ],
    []
  );

  const [dataPenerima] = useState<PenerimaItem[]>(initialData);

  const formatTanggal = (tanggal: string) => {
    return new Date(tanggal).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] p-4 md:p-6 lg:p-8 space-y-6 transition-colors duration-300">
      
      {/* ========== HEADER ========== */}
      <div className="bg-white dark:bg-[#1e293b] px-6 py-4 rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 flex justify-between items-center transition-colors duration-300">
        <h1 className="text-xl md:text-2xl font-bold text-[#0d5c3b] dark:text-emerald-400">
          Penerima
        </h1>

        <div className="text-right text-sm text-gray-500 dark:text-gray-400">
          <p className="capitalize font-medium text-gray-700 dark:text-gray-300">{hari}</p>
          <p className="text-xs">{tanggalLengkap}</p>
        </div>
      </div>

      {/* ========== TABLE ========== */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
        
        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-[#0d5c3b] dark:text-emerald-400">
              Daftar Penerima
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Data penerima program Makanan Bergizi Gratis
            </p>
          </div>

          <button
            onClick={() => navigate("/penerima/tambah")}
            className="text-xs px-4 py-2.5 rounded-lg bg-[#0d5c3b] dark:bg-emerald-600 text-white font-medium hover:bg-[#09472e] dark:hover:bg-emerald-500 transition-colors duration-200 shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
          >
            Tambah Penerima
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-white dark:bg-[#1e293b] border-b border-gray-200 dark:border-gray-700/60">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500 dark:text-orange-400">
                  Penerima
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500 dark:text-orange-400">
                  Penanggung Jawab
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500 dark:text-orange-400">
                  Desa / Kabupaten
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500 dark:text-orange-400">
                  Nomor Telepon
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500 dark:text-orange-400">
                  Start Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
              {dataPenerima.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/5 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">
                    {item.penerima}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {item.penanggungJawab}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {item.desaKabupaten}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {item.nomorTelepon}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {formatTanggal(item.startDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}