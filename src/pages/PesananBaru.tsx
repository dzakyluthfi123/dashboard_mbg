import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Truck, Pencil, X, ChevronDown } from "lucide-react";

export default function PesananBaru() {
  const navigate = useNavigate();

  const [selectedBreakfast, setSelectedBreakfast] = useState(
    "Bubur Ayam Khas Cirebon",
  );

  const [selectedLunch, setSelectedLunch] = useState("Nasi Gudeg Komplit");

  const menus = [
    "Bubur Ayam Khas Cirebon",
    "Nasi Kuning Campur",
    "Nasi Uduk Pagi",
    "Lontong Sayur",
    "Nasi Pecel",
    "Bubur Manado",
    "Nasi Goreng Kampung",
    "Nasi Liwet Solo",
    "Nasi Kuning Banjar",
  ];

  const lunchMenus = [
    "Nasi Gudeg Komplit",
    "Nasi Campur Bali",
    "Nasi Goreng Sapi Spesial",
    "Ayam Bakar Taliwang",
    "Nasi Rawon",
    "Soto Betawi",
    "Nasi Rendang",
    "Ayam Geprek",
    "Ikan Bakar Jimbaran",
  ];

  return (
    <div className="grid grid-cols-12 gap-4 ">
      {/* LEFT MENU LIST */}
      <div className="col-span-12 lg:col-span-7 space-y-6">
        {/* SARAPAN */}
        <div className="bg-white border border-[#CFE8D6] rounded-2xl p-6">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-[#0A7A3F]">
                Sarapan
              </span>

              <span className="text-sm font-medium text-[#0A7A3F]">
                Batch 4-8
              </span>
            </h2>

            <div className="flex gap-3 items-center">
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Person #01</option>
              </select>

              <button className="border border-[#0A7A3F] text-[#0A7A3F] px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition">
                Select All
              </button>
            </div>
          </div>

          {/* TABLE HEADER */}
          <div className="grid grid-cols-12 text-sm text-[#0A7A3F] font-medium border-b pb-2">
            <div className="col-span-2">Hari</div>
            <div className="col-span-3">Tanggal</div>
            <div className="col-span-7">Menu</div>
          </div>

          {/* SCROLLABLE LIST */}
          <div className="divide-y max-h-[260px] overflow-y-auto pr-2">
            {menus.map((menu, i) => (
              <div
                key={i}
                onClick={() => setSelectedBreakfast(menu)}
                className="grid grid-cols-12 items-center py-3 border-b"
              >
                <div className="col-span-2 text-sm text-gray-500">{i + 1}</div>

                <div className="col-span-3 text-sm text-gray-500">
                  Mar 4, 2022
                </div>

                <div className="col-span-7">
                  <div
                    className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                      selectedBreakfast === menu
                        ? "bg-[#FCEFD8]"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm">{menu}</span>

                    <div className="flex gap-2">
                      <button className="border border-[#0A7A3F] rounded-md p-2 text-[#0A7A3F] hover:bg-green-50">
                        <Truck size={16} />
                      </button>

                      <button className="border border-[#0A7A3F] rounded-md p-2 text-[#0A7A3F] hover:bg-green-50">
                        <Pencil size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAKAN SIANG */}
        <div className="bg-white border border-[#CFE8D6] rounded-2xl p-6">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-[#0A7A3F]">
                Makan Siang
              </span>

              <span className="text-sm font-medium text-[#0A7A3F]">
                Batch 4-8
              </span>
            </h2>

            <div className="flex gap-3 items-center">
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Person #01</option>
              </select>

              <button className="border border-[#0A7A3F] text-[#0A7A3F] px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition">
                Select All
              </button>
            </div>
          </div>

          {/* TABLE HEADER */}
          <div className="grid grid-cols-12 text-sm text-[#0A7A3F] font-medium border-b pb-2">
            <div className="col-span-2">Hari</div>
            <div className="col-span-3">Tanggal</div>
            <div className="col-span-7">Menu</div>
          </div>

          {/* SCROLLABLE LIST */}
          <div className="divide-y max-h-[260px] overflow-y-auto pr-2">
            {lunchMenus.map((menu, i) => (
              <div
                key={i}
                onClick={() => setSelectedLunch(menu)}
                className="grid grid-cols-12 items-center py-3 border-b"
              >
                <div className="col-span-2 text-sm text-gray-500">{i + 1}</div>

                <div className="col-span-3 text-sm text-gray-500">
                  Mar 4, 2022
                </div>

                <div className="col-span-7">
                  <div
                    className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                      selectedLunch === menu
                        ? "bg-[#FCEFD8]"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm">{menu}</span>

                    <div className="flex gap-2">
                      <button className="border border-[#0A7A3F] rounded-md p-2 text-[#0A7A3F] hover:bg-green-50">
                        <Truck size={16} />
                      </button>

                      <button className="border border-[#0A7A3F] rounded-md p-2 text-[#0A7A3F] hover:bg-green-50">
                        <Pencil size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT MENU DETAIL */}
      <div className="col-span-12 lg:col-span-5 bg-white border border-[#CFE8D6] rounded-2xl p-6 flex flex-col">
        <div className="space-y-4">
          {/* NAMA MENU */}
          <div>
            <label className="text-sm text-gray-500">Nama Menu</label>

            <input
              value={selectedLunch}
              readOnly
              className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1"
            />
          </div>

          {/* KARBO */}
          <div>
            <label className="text-sm text-gray-500">Karbohidrat</label>

            <div className="flex items-center gap-2 flex-wrap w-full min-h-11 border border-gray-300 rounded-lg px-4 py-2 mt-1">
              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg text-sm">
                Nasi
                <X size={14} className="text-[#0A7A3F]" />
              </div>

              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg text-sm">
                Kentang
                <X size={14} className="text-[#0A7A3F]" />
              </div>
            </div>
          </div>

          {/* PROTEIN */}
          <div>
            <label className="text-sm text-gray-500">Protein</label>

            <div className="flex items-center gap-2 flex-wrap w-full min-h-11 border border-gray-300 rounded-lg px-4 py-2 mt-1">
              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg text-sm">
                Ayam
                <X size={14} className="text-[#0A7A3F]" />
              </div>

              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg text-sm">
                Tempe
                <X size={14} className="text-[#0A7A3F]" />
              </div>

              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg text-sm">
                Kulit Sapi
                <X size={14} className="text-[#0A7A3F]" />
              </div>
            </div>
          </div>

          {/* SERAT */}
          <div>
            <label className="text-sm text-gray-500">Serat</label>

            <div className="flex items-center gap-2 flex-wrap w-full min-h-11 border border-gray-300 rounded-lg px-4 py-2 mt-1">
              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg text-sm">
                Terong
                <X size={14} className="text-[#0A7A3F]" />
              </div>

              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg text-sm">
                Urap
                <X size={14} className="text-[#0A7A3F]" />
              </div>

              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-lg text-sm">
                Daun Pepaya
                <X size={14} className="text-[#0A7A3F]" />
              </div>
            </div>
          </div>

          {/* CATATAN */}
          <div>
            <label className="text-sm text-gray-500">Catatan</label>

            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 mt-1 h-28 resize-none"
              placeholder="Type Here..."
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-sm text-gray-500">Address</label>

            <div className="mt-1 border border-gray-300 rounded-lg p-4">
              {/* SELECT */}
              <div className="relative w-full mb-3">
                <select className="w-full appearance-none bg-transparent text-sm font-semibold outline-none pr-6 px-1 cursor-pointer">
                  <option>Home</option>
                  <option>Sekolah Dasar</option>
                  <option>Sekolah Menengah Pertama</option>
                </select>

                {/* ICON */}
                <ChevronDown
                  size={18}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              {/* ADDRESS TEXT */}
              <p className="text-sm text-400 leading-relaxed">
                Jl. Anggur Dalam No. 28 <br />
                Pondok Labu, Cilandak, Jakarta Selatan
              </p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-auto flex gap-4 pt-10">
          <button
            onClick={() => navigate("/pesanan/tambah")}
            className="flex-1 border border-[#0A7A3F] text-[#0A7A3F] py-3 rounded-xl font-medium hover:bg-green-50 transition"
          >
            Cancel
          </button>

          <button className="flex-1 bg-[#0A7A3F] text-white py-3 rounded-xl font-medium hover:bg-green-800 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
