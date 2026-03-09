import { useMemo, useRef, useState } from "react";

type PenerimaItem = {
  id: number;
  penerima: string;
  penanggungJawab: string;
  desaKabupaten: string;
  nomorTelepon: string;
  startDate: string;
};

export default function Penerima() {
  const today = new Date();

  const hari = today.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggalLengkap = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const todayISO = new Date().toISOString().split("T")[0];
  const dateInputRef = useRef<HTMLInputElement | null>(null);

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
      {
        id: 3,
        penerima: "SMP Citra Nusantara",
        penanggungJawab: "Kota Probolinggo",
        desaKabupaten: "Rizki Saputra",
        nomorTelepon: "85012345678",
        startDate: "2025-07-18",
      },
      {
        id: 4,
        penerima: "SMP Cinta Ilmu",
        penanggungJawab: "Kabupaten Magetan",
        desaKabupaten: "Maulana Ibrahim",
        nomorTelepon: "87456789012",
        startDate: "2025-08-16",
      },
      {
        id: 5,
        penerima: "SMP Cemerlang Abadi",
        penanggungJawab: "Kabupaten Probolinggo",
        desaKabupaten: "Maulana Ibrahim",
        nomorTelepon: "90123456789",
        startDate: "2025-12-04",
      },
    ],
    []
  );

  const [dataPenerima, setDataPenerima] = useState<PenerimaItem[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    penerima: "",
    penanggungJawab: "",
    desaKabupaten: "",
    nomorTelepon: "",
    startDate: todayISO,
  });

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      penerima: "",
      penanggungJawab: "",
      desaKabupaten: "",
      nomorTelepon: "",
      startDate: todayISO,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.penerima.trim() ||
      !formData.penanggungJawab.trim() ||
      !formData.desaKabupaten.trim() ||
      !formData.nomorTelepon.trim() ||
      !formData.startDate.trim()
    ) {
      alert("Semua field wajib diisi.");
      return;
    }

    const newItem: PenerimaItem = {
      id: Date.now(),
      penerima: formData.penerima,
      penanggungJawab: formData.penanggungJawab,
      desaKabupaten: formData.desaKabupaten,
      nomorTelepon: formData.nomorTelepon,
      startDate: formData.startDate,
    };

    setDataPenerima((prev) => [newItem, ...prev]);
    closeModal();
  };

  const formatTanggal = (tanggal: string) => {
    if (!tanggal) return "-";
    return new Date(tanggal).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.();
      dateInputRef.current.focus();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-100 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-sm flex justify-between items-center">
        <h1 className="text-lg font-bold text-green-800 dark:text-white">
          Penerima
        </h1>

        <div className="text-sm text-gray-500 dark:text-gray-400 text-right capitalize">
          <p>{hari}</p>
          <p>{tanggalLengkap}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
        <div className="px-5 py-4 border-b dark:border-gray-700 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-green-800 dark:text-white">
              Daftar Penerima
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Data penerima program Makanan Bergizi Gratis
            </p>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="text-xs px-4 py-2 rounded-lg bg-green-800 text-white hover:bg-green-700 transition"
          >
            Tambah Penerima
          </button>
        </div>

        <div className="overflow-x-auto">
          <div className="max-h-[550px] overflow-y-auto">
            <table className="min-w-full">
              <thead className="sticky top-0 bg-white dark:bg-gray-800 z-10">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">
                    Penerima
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">
                    Penanggung Jawab
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">
                    Desa / Kabupaten
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">
                    Nomor Telepon
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-orange-500">
                    Start Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {dataPenerima.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-gray-100 dark:border-gray-700 transition ${
                      index === 2
                        ? "bg-orange-50 dark:bg-orange-500/10"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/40"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800 dark:text-white">
                      <div className="max-w-[220px] truncate">{item.penerima}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="max-w-[200px] truncate">
                        {item.penanggungJawab}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="max-w-[200px] truncate">
                        {item.desaKabupaten}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {item.nomorTelepon}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {formatTanggal(item.startDate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
              <h2 className="text-lg font-bold text-green-800 dark:text-white">
                Tambah Penerima
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-xl text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nama Penerima
                </label>
                <input
                  type="text"
                  name="penerima"
                  value={formData.penerima}
                  onChange={handleChange}
                  placeholder="Masukkan nama penerima"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 text-sm outline-none focus:border-green-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Penanggung Jawab
                </label>
                <input
                  type="text"
                  name="penanggungJawab"
                  value={formData.penanggungJawab}
                  onChange={handleChange}
                  placeholder="Masukkan penanggung jawab"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 text-sm outline-none focus:border-green-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Desa / Kabupaten
                </label>
                <input
                  type="text"
                  name="desaKabupaten"
                  value={formData.desaKabupaten}
                  onChange={handleChange}
                  placeholder="Masukkan desa / kabupaten"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 text-sm outline-none focus:border-green-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  name="nomorTelepon"
                  value={formData.nomorTelepon}
                  onChange={handleChange}
                  placeholder="Masukkan nomor telepon"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 text-sm outline-none focus:border-green-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Start Date
                </label>

                <div className="relative">
                  <input
                    ref={dateInputRef}
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    onClick={openDatePicker}
                    onFocus={openDatePicker}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2.5 pr-12 text-sm outline-none focus:border-green-700 dark:bg-gray-900 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={openDatePicker}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    📅
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-green-800 px-4 py-2 text-sm text-white hover:bg-green-700"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}