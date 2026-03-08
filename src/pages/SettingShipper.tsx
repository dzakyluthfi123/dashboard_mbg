import { useState } from "react";
import { Plus } from "lucide-react";

type Shipper = {
  logistik: string;
  daerah: string;
  telepon: string;
  pic: string;
  kantor: string;
  picPhone: string;
};

export default function ShipperSettings() {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const [shippers, setShippers] = useState<Shipper[]>([
    {
      logistik: "JNE",
      daerah: "Kabupaten Lamongan",
      telepon: "89789012345",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "TIKI",
      daerah: "Kota Madiun",
      telepon: "83567890123",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "POS INDONESIA",
      daerah: "Kabupaten Tuban",
      telepon: "85012345678",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "POS INDONESIA",
      daerah: "Kota Blitar",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "POS INDONESIA",
      daerah: "Kota Malang",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "JNE",
      daerah: "Kabupaten Tulungagung",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "TIKI",
      daerah: "Kabupaten Bojonegoro",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "POS INDONESIA",
      daerah: "Kota Kediri",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "JNE",
      daerah: "Kota Pasuruan",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "POS INDONESIA",
      daerah: "Kabupaten Trenggalek",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "JNE",
      daerah: "Kabupaten Banyuwangi",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
    {
      logistik: "POS INDONESIA",
      daerah: "Kota Blitar",
      telepon: "87456789012",
      pic: "Joko Susanto",
      kantor: "02155288",
      picPhone: "081382888222",
    },
  ]);

  const selected = shippers[selectedIndex];

  const updateField = (field: keyof Shipper, value: string) => {
    const updated = [...shippers];
    updated[selectedIndex][field] = value;
    setShippers(updated);
  };

  return (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-[#CFE8D6]">
        <button className="bg-green-700 text-white p-2 rounded-lg">
          <Plus size={18} />
        </button>

        <h2 className="text-lg font-semibold text-[#0A7A3F]">Shipper</h2>
      </div>

      {/* BODY */}
      <div className="grid grid-cols-12 flex-1">
        {/* LEFT TABLE */}
        <div className="col-span-7 border-r border-[#CFE8D6]">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-12 px-6 py-3 text-sm font-semibold text-orange-500 border-b">
            <div className="col-span-4">Logistik</div>
            <div className="col-span-4">Daerah</div>
            <div className="col-span-4">No. Telepon</div>
          </div>

          {/* TABLE ROWS */}
          <div className="divide-y max-h-[500px] overflow-auto">
            {shippers.map((s, i) => {
              const active = i === selectedIndex;

              return (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-full text-left grid grid-cols-12 px-6 py-4 text-sm items-center transition
                  ${active ? "bg-[#FCEFD8]" : "hover:bg-gray-50"}`}
                >
                  <div className="col-span-4 font-medium text-gray-700">
                    {s.logistik}
                  </div>

                  <div className="col-span-4 text-gray-600">{s.daerah}</div>

                  <div className="col-span-4 text-gray-600">{s.telepon}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT DETAIL */}
        <div className="col-span-5 flex flex-col">
          <div className="px-6 py-4 border-b border-[#CFE8D6]">
            <h3 className="font-semibold text-[#0A7A3F]">Detail Shipper</h3>
          </div>

          <div className="p-6 space-y-5 flex-1">
            <div>
              <label className="text-sm text-gray-500 block mb-1">
                Nama Logistik
              </label>

              <input
                value={selected.logistik}
                onChange={(e) => updateField("logistik", e.target.value)}
                className="w-full h-11 border border-gray-300 rounded-lg px-4"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block mb-1">Daerah</label>

              <input
                value={selected.daerah}
                onChange={(e) => updateField("daerah", e.target.value)}
                className="w-full h-11 border border-gray-300 rounded-lg px-4"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block mb-1">
                Nama PIC
              </label>

              <input
                value={selected.pic}
                onChange={(e) => updateField("pic", e.target.value)}
                className="w-full h-11 border border-gray-300 rounded-lg px-4"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block mb-1">
                No Telepon Kantor
              </label>

              <input
                value={selected.kantor}
                onChange={(e) => updateField("kantor", e.target.value)}
                className="w-full h-11 border border-gray-300 rounded-lg px-4"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block mb-1">
                No Telepon PIC
              </label>

              <input
                value={selected.picPhone}
                onChange={(e) => updateField("picPhone", e.target.value)}
                className="w-full h-11 border border-gray-300 rounded-lg px-4"
              />
            </div>
          </div>

          {/* FOOTER */}
          <div className="border-t border-[#CFE8D6] p-6 flex justify-end gap-4">
            <button className="px-8 py-3 border border-[#0A7A3F] text-[#0A7A3F] rounded-xl hover:bg-green-50">
              Cancel
            </button>

            <button className="px-8 py-3 bg-[#0A7A3F] text-white rounded-xl hover:bg-green-800">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
