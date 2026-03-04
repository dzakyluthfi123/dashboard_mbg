import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TambahPesanan() {
  const navigate = useNavigate();

  const [status, setStatus] = useState("aktif");

  const [addresses, setAddresses] = useState<number[]>([0]);

  const [startDate, setStartDate] = useState<Date | null>(null);

  const addAddress = () => {
    setAddresses([...addresses, addresses.length]);
  };

  const removeAddress = (index: number) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-12 gap-3">
      {/* INFORMASI PENERIMA */}
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-white border border-[#CFE8D6] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[#CFE8D6]">
            <h2 className="text-lg font-semibold text-[#0A7A3F]">
              Informasi Penerima
            </h2>
          </div>

          <div className="p-6">
            <div className="flex gap-3 mb-6">
              <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white">
                Existing
              </button>

              <button className="px-3 py-1.5 text-sm bg-[#0A7A3F] text-white rounded-md">
                Data Baru
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Penerima
                </label>

                <input
                  defaultValue="SDN 03 Suka Sari"
                  className="w-full h-11 border border-gray-300 rounded-lg px-4"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Tipe Penerima
                </label>

                <select className="w-full h-11 border border-gray-300 rounded-lg px-4">
                  <option>Select...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Nomor Telepon
                </label>

                <input
                  placeholder="Type Here..."
                  className="w-full h-11 border border-gray-300 rounded-lg px-4"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Email
                </label>

                <input
                  placeholder="Type Here..."
                  className="w-full h-11 border border-gray-300 rounded-lg px-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALAMAT */}
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-white border border-[#CFE8D6] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[#CFE8D6]">
            <h3 className="font-semibold text-[#0A7A3F] text-lg">Alamat</h3>
          </div>

          <div className="p-6">
            <div className="flex gap-3 mb-6">
              <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white">
                Existing
              </button>

              <button className="px-3 py-1.5 text-sm bg-[#0A7A3F] text-white rounded-md">
                Data Baru
              </button>
            </div>

            {/* ADDRESS LIST */}
            <div className="space-y-6">
              {addresses.map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-5 relative"
                >
                  <label className="text-sm text-gray-500">Nama Alamat</label>
                  <input
                    className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1 mb-4"
                    placeholder="Nama Alamat"
                  />

                  <label className="text-sm text-gray-500">
                    Alamat Pengiriman
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 mb-4"
                    rows={3}
                  />

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm text-gray-500">Kota</label>
                      <select className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1">
                        <option>Select...</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">Kecamatan</label>
                      <select className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1">
                        <option>Select...</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm text-gray-500">Kelurahan</label>
                      <select className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1">
                        <option>Select...</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">Kode Pos</label>
                      <select className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1">
                        <option>Select...</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t pt-3 flex justify-end">
                    {addresses.length > 1 && (
                      <button
                        onClick={() => removeAddress(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ADD ADDRESS */}
            <button
              onClick={addAddress}
              className="mt-6 border border-[#0A7A3F] text-[#0A7A3F] px-4 py-2 rounded-lg text-sm hover:bg-green-50"
            >
              Add Address
            </button>
          </div>
        </div>
      </div>

      {/* AKTIFASI */}
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-white border border-[#CFE8D6] rounded-2xl overflow-hidden h-full flex flex-col">
          <div className="px-6 py-4 border-b border-[#CFE8D6]">
            <h3 className="font-semibold text-[#0A7A3F] text-lg">Aktifasi</h3>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Tipe Order</label>
                <select className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1">
                  <option>Select...</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500">Tipe Sajian</label>
                <select className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1">
                  <option>Select...</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500">Pax</label>
                <input
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1"
                  placeholder="Type Here..."
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Tanggal Mulai</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  placeholderText="DD/MM/YYYY"
                  dateFormat="dd/MM/yyyy"
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm text-gray-500 block mb-2">Option</label>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={status === "nonaktif"}
                    onChange={() => setStatus("nonaktif")}
                    className="w-5 h-5 accent-[#0A7A3F]"
                  />
                  <span className="text-gray-700">Non-Aktif</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={status === "aktif"}
                    onChange={() => setStatus("aktif")}
                    className="w-5 h-5 accent-[#0A7A3F]"
                  />
                  <span className="text-gray-700">Aktif</span>
                </label>
              </div>
            </div>

            <div className="mt-auto pt-8 flex gap-4">
              <button
                onClick={() => navigate("/pesanan")}
                className="flex-1 py-3 border border-[#0A7A3F] text-[#0A7A3F] rounded-xl hover:bg-green-50 transition"
              >
                Cancel
              </button>

              <button
                onClick={() => navigate("/pesanan-baru")}
                className="flex-1 py-3 bg-[#0A7A3F] text-white rounded-xl hover:bg-green-800 transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
