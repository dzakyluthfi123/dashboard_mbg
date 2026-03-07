import { useState } from "react";

export default function FinanceSettings() {
  const [bank, setBank] = useState("BCA");
  const [rekening, setRekening] = useState("10998487493");
  const [pemilik, setPemilik] = useState("Calories Aselalo");

  return (
    <div className="space-y-6 py-3 px-4">
      {/* HEADER */}
      <div className="border-b border-[#CFE8D6] py-2">
        <h2 className="text-lg font-semibold text-[#0A7A3F]">Bank Account</h2>
      </div>

      {/* BODY */}
      <div className="py-2">
        <div className="border border-[#E5E7EB] rounded-xl p-6 max-w-xl space-y-5">
          {/* BANK */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">Bank</label>

            <input
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className="w-full h-11 border border-gray-300 rounded-lg px-4"
            />
          </div>

          {/* NOMOR REKENING */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">
              Nomor Rekening
            </label>

            <input
              value={rekening}
              onChange={(e) => setRekening(e.target.value)}
              className="w-full h-11 border border-gray-300 rounded-lg px-4"
            />
          </div>

          {/* NAMA PEMEGANG */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">
              Nama Pemegang Rekening
            </label>

            <input
              value={pemilik}
              onChange={(e) => setPemilik(e.target.value)}
              className="w-full h-11 border border-gray-300 rounded-lg px-4"
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#CFE8D6] p-6 flex justify-end gap-4">
        <button className="px-10 py-3 border border-[#0A7A3F] text-[#0A7A3F] rounded-xl font-semibold hover:bg-green-50">
          Kembali
        </button>

        <button className="px-10 py-3 bg-[#0A7A3F] text-white rounded-xl font-semibold hover:bg-green-800">
          Save
        </button>
      </div>
    </div>
  );
}
