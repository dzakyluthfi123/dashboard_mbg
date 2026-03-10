import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TambahPenerima() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    penerima: "",
    penanggungJawab: "",
    desaKabupaten: "",
    nomorTelepon: "",
    startDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    navigate("/penerima");
  };

  return (
    <div className="space-y-6">

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

        <h2 className="text-lg font-bold mb-4 text-green-800">
          Tambah Penerima
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="penerima"
            placeholder="Nama Penerima"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="penanggungJawab"
            placeholder="Penanggung Jawab"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="desaKabupaten"
            placeholder="Desa / Kabupaten"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="nomorTelepon"
            placeholder="Nomor Telepon"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => navigate("/penerima")}
              className="px-4 py-2 border rounded"
            >
              Batal
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-green-700 text-white rounded"
            >
              Simpan
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}