import { useState } from "react";
import { Trash2, Check } from "lucide-react";

export default function MasterBatch() {
  const daysList = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];

  const [activeDays, setActiveDays] = useState<string[]>([
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
  ]);

  const toggleDay = (day: string) => {
    if (activeDays.includes(day)) {
      setActiveDays(activeDays.filter((d) => d !== day));
    } else {
      setActiveDays([...activeDays, day]);
    }
  };

  const [attributes, setAttributes] = useState([
    { name: "Calories", unit: "kCal" },
    { name: "Carbs", unit: "g" },
    { name: "Fats", unit: "g" },
    { name: "Protein", unit: "g" },
  ]);

  const addAttribute = () => {
    setAttributes([...attributes, { name: "", unit: "" }]);
  };

  const removeAttribute = (index: number) => {
    setAttributes(attributes.filter((_, i) => i !== index));
  };

  const updateAttribute = (
    index: number,
    field: "name" | "unit",
    value: string,
  ) => {
    const updated = [...attributes];
    updated[index][field] = value;
    setAttributes(updated);
  };

  return (
    <div className="flex flex-col h-full">
      {/* MAIN CONTENT */}
      <div className="grid grid-cols-12 flex-1">
        {/* ACTIVE DAYS */}
        <div className="col-span-3 border-r border-[#CFE8D6] p-6">
          <h3 className="text-[#0A7A3F] font-semibold mb-6">Active Days</h3>

          <div className="space-y-4">
            {daysList.map((day) => {
              const active = activeDays.includes(day);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className="flex items-center gap-3 text-sm"
                >
                  <div
                    className={`w-5 h-5 flex items-center justify-center rounded border transition
                    ${
                      active
                        ? "bg-[#166534] border-[#166534] text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {active && <Check size={14} />}
                  </div>

                  <span className="text-gray-700">{day}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* BATCH SETTING */}
        <div className="col-span-9 p-6">
          <h3 className="text-[#0A7A3F] font-semibold mb-6">Batch Setting</h3>

          <div className="space-y-5">
            {attributes.map((attr, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-end">
                {/* ATTRIBUTE NAME */}
                <div className="col-span-6">
                  <label className="text-sm text-gray-500 block mb-1">
                    Nama Atribut
                  </label>

                  <input
                    value={attr.name}
                    onChange={(e) =>
                      updateAttribute(index, "name", e.target.value)
                    }
                    className="w-full h-11 border border-gray-300 rounded-lg px-4"
                  />
                </div>

                {/* UNIT */}
                <div className="col-span-5">
                  <label className="text-sm text-gray-500 block mb-1">
                    Unit
                  </label>

                  <input
                    value={attr.unit}
                    onChange={(e) =>
                      updateAttribute(index, "unit", e.target.value)
                    }
                    className="w-full h-11 border border-gray-300 rounded-lg px-4"
                  />
                </div>

                {/* DELETE */}
                <div className="col-span-1 flex justify-center pb-1">
                  <button
                    type="button"
                    onClick={() => removeAttribute(index)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ADD ATTRIBUTE */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={addAttribute}
              className="border border-[#0A7A3F] text-[#0A7A3F] px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition"
            >
              Add Address
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#CFE8D6] p-6 flex justify-end gap-4">
        <button className="px-8 py-3 border border-[#0A7A3F] text-[#0A7A3F] rounded-xl hover:bg-green-50 transition">
          Cancel
        </button>

        <button className="px-8 py-3 bg-[#0A7A3F] text-white rounded-xl hover:bg-green-800 transition">
          Save
        </button>
      </div>
    </div>
  );
}
