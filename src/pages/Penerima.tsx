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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-4 md:p-6 space-y-6">
      {/* HEADER */}
      <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h1 className="text-lg font-bold text-green-800 dark:text-white">
          Penerima
        </h1>

        <div className="text-sm text-gray-500 dark:text-gray-400 text-right capitalize">
          <p>{hari}</p>
          <p>{tanggalLengkap}</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-green-800 dark:text-white">
              Daftar Penerima
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Data penerima program Makanan Bergizi Gratis
            </p>
          </div>

          <button
            onClick={() => navigate("/penerima/tambah")}
            className="text-xs px-4 py-2 rounded-lg bg-green-800 text-white hover:bg-green-700 transition"
          >
            Tambah Penerima
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-orange-500">
                  Penerima
                </th>

                <th className="px-6 py-3 text-left text-sm font-semibold text-orange-500">
                  Penanggung Jawab
                </th>

                <th className="px-6 py-3 text-left text-sm font-semibold text-orange-500">
                  Desa / Kabupaten
                </th>

                <th className="px-6 py-3 text-left text-sm font-semibold text-orange-500">
                  Nomor Telepon
                </th>

                <th className="px-6 py-3 text-left text-sm font-semibold text-orange-500">
                  Start Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {dataPenerima.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    {item.penerima}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    {item.penanggungJawab}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    {item.desaKabupaten}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    {item.nomorTelepon}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
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