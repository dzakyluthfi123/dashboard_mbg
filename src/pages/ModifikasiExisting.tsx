import { useState } from "react";
import { Camera, Trash2 } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NewBatch() {
  const [activeDay, setActiveDay] = useState(2);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const days = [
    { day: "Day 1", date: "Mon, Feb 23, 2022" },
    { day: "Day 2", date: "Tue, Feb 24, 2022" },
    { day: "Day 3", date: "Wed, Feb 25, 2022" },
    { day: "Day 4", date: "Thu, Feb 26, 2022" },
    { day: "Day 5", date: "Fri, Feb 27, 2022" },
  ];

  return (
    <div className="grid grid-cols-12 gap-3 h-full">
      {/* LEFT SECTION */}
      <div className="col-span-12 lg:col-span-3 bg-white border border-[#CFE8D6] rounded-2xl">
        <div className="px-6 py-4 border-b border-[#CFE8D6]">
          <h2 className="text-lg font-semibold text-[#0A7A3F]">Batch no.7</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* BUTTONS */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-[#0A7A3F] text-white rounded-lg text-sm hover:bg-green-800">
              Modifikasi Existing
            </button>

            <button className="px-4 py-2 border border-[#0A7A3F] text-[#0A7A3F] rounded-lg text-sm hover:bg-green-50 ">
              Buat Baru
            </button>
          </div>

          {/* BATCH */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">Batch</label>

            <div className="relative w-full">
              <select className="w-full h-11 border border-gray-300 rounded-lg px-4 pr-10 appearance-none bg-white">
                <option>Select</option>
                <option>Batch no.1</option>
                <option>Batch no.2</option>
                <option>Batch no.3</option>
              </select>

              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* DATE */}
          <div className="w-full">
            <label className="text-sm text-gray-500 block mb-1">
              Tanggal Mulai
            </label>

            <div className="w-full">
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                placeholderText="DD/MM/YYYY"
                dateFormat="dd/MM/yyyy"
                className="w-full h-11 border border-gray-300 rounded-lg px-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DAY LIST + MENU SECTION */}
      <div className="col-span-12 lg:col-span-9 bg-white border border-[#CFE8D6] rounded-2xl flex overflow-hidden">
        {/* DAY LIST */}
        <div className="w-64 border-r border-[#CFE8D6] p-6 space-y-4">
          {days.map((item, index) => {
            const isActive = activeDay === index + 1;

            return (
              <div
                key={index}
                onClick={() => setActiveDay(index + 1)}
                className={`flex justify-between items-center px-4 py-3 rounded-lg border cursor-pointer transition
        
          ${
            isActive
              ? "bg-[#166534] text-white border-[#166534]"
              : "border-[#CFE8D6] text-[#0A7A3F] hover:bg-green-50"
          }`}
              >
                <span className="font-medium">{item.day}</span>

                <span
                  className={`text-sm ${
                    isActive ? "text-green-100" : "text-gray-400"
                  }`}
                >
                  {item.date}
                </span>
              </div>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex flex-col">
          <div className="p-6 space-y-8 overflow-y-auto">
            {/* SARAPAN */}
            <div>
              <h3 className="text-lg font-semibold text-[#F59E0B] mb-4">
                Sarapan
              </h3>

              <div className="grid grid-cols-12 gap-6">
                {/* IMAGE */}
                <div className="col-span-3">
                  <div className="relative w-full aspect-square">
                    <img
                      src="/images/coto-makassar.webp"
                      className="w-full h-full object-cover rounded-xl"
                    />

                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <button className="bg-green-700 text-white p-2 rounded-lg shadow">
                        <Camera size={16} />
                      </button>

                      <button className="bg-green-700 text-white p-2 rounded-lg shadow">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* DETAIL */}
                <div className="col-span-9 space-y-4">
                  {/* MENU NAME */}
                  <div>
                    <label className="text-sm text-gray-500">Menu Name</label>

                    <input
                      defaultValue="Coto Makassar + Daging Sapi & Ketupat"
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1"
                    />
                  </div>

                  {/* NUTRITION */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: "Calories", unit: "kCal", value: "490" },
                      { label: "Carbs", unit: "g", value: "54,00" },
                      { label: "Fats", unit: "g", value: "15,2" },
                      { label: "Protein", unit: "g", value: "43,7" },
                    ].map((item) => (
                      <div key={item.label}>
                        <label className="text-xs text-gray-400">
                          {item.label}
                        </label>

                        <div className="relative mt-1">
                          <input
                            defaultValue={item.value}
                            className="w-full h-11 border border-gray-300 rounded-lg pl-3 pr-12 text-sm outline-none"
                          />

                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 pointer-events-none">
                            {item.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BAHAN */}
                  <div>
                    <label className="text-sm text-gray-500">Bahan</label>

                    <div className="border border-gray-300 rounded-lg p-3 mt-1 text-sm text-500">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>500 g daging sapi has dalam</li>
                        <li>200 g babat sapi</li>
                        <li>200 g paru sapi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-[#CFE8D6]" />

            {/* MAKAN SIANG */}
            <div>
              <h3 className="text-lg font-semibold text-[#F59E0B] mb-4">
                Makan Siang
              </h3>

              <div className="grid grid-cols-12 gap-6">
                {/* IMAGE */}
                <div className="col-span-3">
                  <div className="relative w-full aspect-square">
                    <img
                      src="/images/sate-lilit.jpg"
                      className="w-full h-full object-cover rounded-xl"
                    />

                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <button className="bg-green-700 text-white p-2 rounded-lg shadow">
                        <Camera size={16} />
                      </button>

                      <button className="bg-green-700 text-white p-2 rounded-lg shadow">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* DETAIL */}
                <div className="col-span-9 space-y-4">
                  {/* MENU NAME */}
                  <div>
                    <label className="text-sm text-gray-500">Menu Name</label>

                    <input
                      defaultValue="Ayam Betutu Bali + Kulit Ayam, Sate Lilit & Urapan"
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 mt-1"
                    />
                  </div>

                  {/* NUTRITION */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: "Calories", unit: "kCal", value: "490" },
                      { label: "Carbs", unit: "g", value: "85,3" },
                      { label: "Fats", unit: "g", value: "15,2" },
                      { label: "Protein", unit: "g", value: "43,7" },
                    ].map((item) => (
                      <div key={item.label}>
                        <label className="text-xs text-gray-400">
                          {item.label}
                        </label>

                        <div className="relative mt-1">
                          <input
                            defaultValue={item.value}
                            className="w-full h-11 border border-gray-300 rounded-lg pl-3 pr-12 text-sm outline-none"
                          />

                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 pointer-events-none">
                            {item.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BAHAN */}
                  <div>
                    <label className="text-sm text-gray-500">Bahan</label>

                    <div className="border border-gray-300 rounded-lg p-3 mt-1 text-sm text-500">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>500 g daging sapi has dalam</li>
                        <li>200 g babat sapi</li>
                        <li>200 g paru sapi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="border-t border-[#CFE8D6] p-6 flex justify-end gap-4">
            <button className="px-8 py-3 border border-[#0A7A3F] text-[#0A7A3F] rounded-xl hover:bg-green-50">
              Cancel
            </button>

            <button
              onClick={() => navigate("/batches")}
              className="px-8 py-3 bg-[#0A7A3F] text-white rounded-xl hover:bg-green-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
