import { Link } from "react-router-dom";

export default function Pesanan() {
  // ===== FORMAT TANGGAL OTOMATIS =====
  const today = new Date();

  const hari = today.toLocaleDateString("id-ID", {
    weekday: "long",
  });

  const tanggalLengkap = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* PAGE HEADER (Seperti gambar) */}
      <div className="bg-gray-100 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-sm flex justify-between items-center">
        <h1 className="text-lg font-bold text-green-800 dark:text-white">
          Pesanan
        </h1>

        <div className="text-sm text-gray-500 dark:text-gray-400 text-right capitalize">
          <p>{hari}</p>
          <p>{tanggalLengkap}</p>
        </div>
      </div>

      {/* HEADER LIST PESANAN */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Link
              to="/pesanan/tambah"
              className="bg-green-700 text-white w-8 h-8 rounded flex items-center justify-center text-lg"
            >
              +
            </Link>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              List Pesanan <span className="text-gray-400">75</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="border px-3 py-1 rounded text-sm">Filter</button>
            <button className="border px-3 py-1 rounded text-sm">
              Start Date ↑
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded text-sm"
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b dark:border-gray-700">
              <tr>
                <th className="text-left py-3">Order no.</th>
                <th className="text-left">Pihak Penerima</th>
                <th className="text-left">Contact</th>
                <th className="text-left">pax</th>
                <th className="text-left">Sajian</th>
                <th className="text-left">Start</th>
                <th className="text-left">Status</th>
                <th className="text-left">Batch</th>
                <th className="text-left">Delivery</th>
              </tr>
            </thead>

            <tbody className="divide-y dark:divide-gray-700">
              {[
                {
                  name: "Pesantren Cendekia Murni",
                  contact: "90901234567",
                  pax: 115,
                  sajian: "Makan Siang",
                  start: "10 Mei 2025",
                  status: "Aktif",
                },
                {
                  name: "PAUD Harapan Bangsa",
                  contact: "88990123456",
                  pax: 963,
                  sajian: "Sarapan",
                  start: "1 Mei 2025",
                  status: "Aktif",
                },
                {
                  name: "SDN 50 Gita Bahagia",
                  contact: "89789012345",
                  pax: 230,
                  sajian: "Makan Siang",
                  start: "1 Mei 2025",
                  status: "Aktif",
                },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3">Order no.</td>
                  <td>{row.name}</td>
                  <td>{row.contact}</td>
                  <td>{row.pax}</td>
                  <td>{row.sajian}</td>
                  <td>{row.start}</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs">
                      {row.status}
                    </span>
                  </td>
                  <td>2-5</td>
                  <td>
                    <div className="w-24 bg-gray-200 h-2 rounded">
                      <div className="bg-orange-400 h-2 rounded w-[60%]"></div>
                    </div>
                    <span className="text-xs text-gray-400">16 / 30</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===================== BOTTOM SECTION (SAMA SEPERTI GAMBAR) ===================== */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT TABLE MENU */}
        <div className="col-span-12 xl:col-span-8 bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b dark:border-gray-700 flex items-center justify-between">
            <div className="grid grid-cols-12 w-full">
              <div className="col-span-2 text-[13px] font-semibold text-orange-500">
                Tanggal
              </div>
              <div className="col-span-5 text-[13px] font-semibold text-orange-500">
                Sarapan
              </div>
              <div className="col-span-5 text-[13px] font-semibold text-orange-500">
                Makan Siang
              </div>
            </div>

            <select className="ml-4 text-xs border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200">
              <option>Person #01 ↑</option>
              <option>Person #02</option>
              <option>Person #03</option>
            </select>
          </div>

          {/* Rows */}
          <div className="divide-y dark:divide-gray-700">
            {[
              {
                date: "Mar 4, 2022",
                sarapan: "Bubur Ayam Khas Cirebon (6)",
                makan: "Nasi Uduk + Tahu + Bihun + Telur Balado (14)",
                highlight: true,
              },
              {
                date: "Mar 5, 2022",
                sarapan: "Soto Lamongan (14)",
                makan: "Soto Lamongan (14)",
              },
              {
                date: "Mar 6, 2022",
                sarapan: "Nasi Gudeg + Semur tahu (6)",
                makan: "Nasi Kuning + Semur Daging (15)",
              },
              {
                date: "Mar 7, 2022",
                sarapan: "Nasi Uduk + Tahu + Bihun + Telur Balado (6)",
                makan: "-",
              },
              {
                date: "Mar 8, 2022",
                sarapan: "Mie Bangka (7)",
                makan: "Nasi Gudeg + Semur tahu (14)",
              },
            ].map((row, i) => (
              <div key={i} className="px-6 py-5">
                <div className="grid grid-cols-12 items-center gap-4">
                  {/* Date */}
                  <div className="col-span-2 text-sm text-gray-500">
                    {row.date}
                  </div>

                  {/* Sarapan */}
                  <div className="col-span-5 flex items-center justify-between gap-3">
                    <div
                      className={
                        row.highlight
                          ? "flex-1 bg-[#FCEFD8] rounded-lg px-4 py-3 text-sm text-gray-700"
                          : "flex-1 text-sm text-gray-700 dark:text-gray-200"
                      }
                    >
                      {row.sarapan}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* camera */}
                      <button
                        type="button"
                        className={`w-9 h-9 rounded-lg border border-green-700 text-green-700 flex items-center justify-center ${
                          row.highlight ? "bg-[#FCEFD8]" : "bg-white"
                        }`}
                        title="Preview"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 7L10.5 5H13.5L15 7H18C19.1046 7 20 7.89543 20 9V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V9C4 7.89543 4.89543 7 6 7H9Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>

                      {/* edit */}
                      <button
                        type="button"
                        className="w-9 h-9 rounded-lg border border-green-700 text-green-700 flex items-center justify-center bg-white"
                        title="Edit"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5 8.5L16.5 11.5"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Makan Siang */}
                  <div className="col-span-5 flex items-center justify-between gap-3">
                    <div className="flex-1 text-sm text-gray-700 dark:text-gray-200">
                      {row.makan}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* camera solid */}
                      <button
                        type="button"
                        className="w-9 h-9 rounded-lg bg-green-800 text-white flex items-center justify-center"
                        title="Preview"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 7L10.5 5H13.5L15 7H18C19.1046 7 20 7.89543 20 9V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V9C4 7.89543 4.89543 7 6 7H9Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>

                      {/* edit */}
                      <button
                        type="button"
                        className="w-9 h-9 rounded-lg border border-green-700 text-green-700 flex items-center justify-center bg-white"
                        title="Edit"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5 8.5L16.5 11.5"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT DETAIL CARD */}
        <div className="col-span-12 xl:col-span-4 bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
          {/* TOP */}
          <div className="p-6 border-b dark:border-gray-700">
            <div className="flex gap-5">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                <img
                  src="/images/buburayam.png"
                  alt="Bubur Ayam"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Bubur Ayam Khas Cirebon (6)
                </h3>

                <div className="mt-4 space-y-2 text-sm">
                  {[
                    { label: "Kalori", value: "490", unit: "kCal" },
                    { label: "Karbohidrat", value: "54,00", unit: "C" },
                    { label: "Lemak", value: "15,2", unit: "F" },
                    { label: "Protein", value: "43,7", unit: "P" },
                  ].map((x, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-gray-300">{x.label}</span>
                      <span className="text-gray-700 dark:text-gray-200">
                        {x.value}{" "}
                        <span className="text-gray-400">{x.unit}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="px-6 py-5 border-b dark:border-gray-700">
            <div className="grid grid-cols-12 gap-y-3 text-sm">
              <div className="col-span-4 text-gray-300">Protein</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-200">
                Ayam, Telur Puyuh, Usus Ayam, Kacang
              </div>

              <div className="col-span-4 text-gray-300">Karbohidrat</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-200">
                Nasi (Bubur)
              </div>

              <div className="col-span-4 text-gray-300">Serat</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-200">
                Daun Bawang
              </div>

              <div className="col-span-4 text-gray-300">Topping</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-200">
                Cakwey, Emping
              </div>

              <div className="col-span-4 text-gray-300">Alat Makan</div>
              <div className="col-span-8 text-gray-700 dark:text-gray-200">
                No
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="p-6">
            <div className="grid grid-cols-12 gap-y-6 text-sm">
              <div className="col-span-4 text-gray-300">Penerima #01</div>
              <div className="col-span-8">
                <p className="font-semibold text-gray-800 dark:text-white">
                  PAUD Harapan Bangsa
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Jl. Siliwangi No.13, Kuningan, Kec. Kuningan, Kabupaten
                  Kuningan, Jawa Barat 45511.
                </p>
              </div>

              <div className="col-span-4 text-gray-300">Penerima #02</div>
              <div className="col-span-8">
                <p className="font-semibold text-gray-800 dark:text-white">
                  PAUD Mutiara Sejati
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Jl. Cirendang - Cigugur, Cirendang, Kec. Kuningan, Kabupaten
                  Kuningan, Jawa Barat 45518
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== END BOTTOM SECTION ===================== */}
    </div>
  );
}
