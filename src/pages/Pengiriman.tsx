import { useMemo, useState } from "react";

type MenuType = "sarapan" | "siang";

export default function Pengiriman() {
  const today = new Date();
  const hari = today.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggalLengkap = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const [menuType, setMenuType] = useState<MenuType>("siang");
  const [selectedDay, setSelectedDay] = useState(30);

  const [qcMakanan, setQcMakanan] = useState(true);
  const [qcKuantitas, setQcKuantitas] = useState(false);
  const [konfirmasiPengantar, setKonfirmasiPengantar] = useState(false);

  const [driver, setDriver] = useState("Joko Dion Harahap");
  const [filterKelurahan, setFilterKelurahan] = useState("Kelurahan ↑");

  const calendarDays = useMemo(
    () => [
      { day: 26, label: "MON" },
      { day: 27, label: "TUE" },
      { day: 28, label: "WED" },
      { day: 29, label: "THU" },
      { day: 30, label: "FRI" },
      { day: 1, label: "SAT" },
      { day: 2, label: "SUN" },
    ],
    []
  );

  const orders = useMemo(
    () => [
      {
        no: "WLD-932498",
        logistik: "TIKI - JS99387",
        penerima: "SMP Cahaya Hati",
        alamat: "Jl. Sisingamangaraja No. 65, Padang Bar...",
        qty: 100,
      },
      {
        no: "WLD-932498",
        logistik: "TIKI - KL83992",
        penerima: "SMP Pintar Ceria",
        alamat: "Jl. Kartini No. 67, Semarang Tengah, J...",
        qty: 100,
      },
      {
        no: "WLD-932498",
        logistik: "POS - 829KLM",
        penerima: "SMP Jaya Mukti",
        alamat: "Jl. Otto Iskandardinata No...",
        qty: 100,
      },
      {
        no: "WLD-932498",
        logistik: "POS - 259KJD",
        penerima: "SMP Bakti Sari",
        alamat: "Jl. K.H. Ahmad Dahlan No. 13, Bali...",
        qty: 100,
      },
      {
        no: "WLD-932498",
        logistik: "TNI - BAT702",
        penerima: "SMP Mawar Indah",
        alamat: "Jl. Raya Ciputat No. 44, Tangerang Selat...",
        qty: 100,
      },
      {
        no: "WLD-932498",
        logistik: "TNI - BAT702",
        penerima: "SMP Cinta Ilmu",
        alamat: "Jl. Gajah Mada No. 17, Pontianak Utara...",
        qty: 100,
      },
      {
        no: "WLD-932498",
        logistik: "TNI - BAT702",
        penerima: "SMP Suka Maju",
        alamat: "Jl. Raya Bogor Km. 23, Depok, Jawa Ba...",
        qty: 100,
      },
    ],
    []
  );

  const [selectedOrderId, setSelectedOrderId] = useState("WLD-220001");

  const rightOrder = useMemo(
    () => ({
      title: "SMA Hari Cerah, Kasim Wijaya",
      phone: "0813 828 88222",
      code: "WLD-220001",
      menu: "Makan Siang - Nasi Gudeg Komplit",
      pax: 100,
      delivered: true,
      deliveryInfo: {
        logistik: "Pos Indonesia",
        alamat:
          "Gedung Cyber 2, Lt 22, Jl. Mampang Raya, No 18 Mampang - Jakarta Selatan",
      },
      notes: "Di area drop zone #32 - Halaman POLSEK Kabupaten Bendewar",
      image: "/images/pengemasan.jpg",
    }),
    []
  );

  const bottomRecipient = useMemo(
    () => ({
      title: "PAUD Harapan Bangsa",
      phone: "0813 828 88222",
      code: selectedOrderId,
      menu: "Sarapan - Bubur Ayam Khas Cirebon",
    }),
    [selectedOrderId]
  );

  const menuTitle = menuType === "siang" ? "Nasi Gudek Ayam" : "Bubur Ayam";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-4 md:p-6 space-y-6">
      {/* HEADER PAGE */}
      <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h1 className="text-lg font-bold text-green-800 dark:text-white">
          Pengemasan & Pengiriman
        </h1>

        <div className="flex items-start gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right capitalize">
            <p>{hari}</p>
            <p>{tanggalLengkap}</p>
          </div>
        </div>
      </div>

      {/* 3 KOLOM */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-12 xl:col-span-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Calendar */}
          <div className="p-5">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <div className="bg-green-800 text-white text-xs font-semibold py-2 text-center">
                February, 2022
              </div>

              <div className="p-3 flex items-center gap-3">
                <button
                  type="button"
                  className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-200"
                  onClick={() => alert("Simulasi prev minggu")}
                >
                  ‹
                </button>

                <div className="flex-1 grid grid-cols-7 gap-2">
                  {calendarDays.map((d) => (
                    <div
                      key={`${d.day}-${d.label}`}
                      onClick={() => setSelectedDay(d.day)}
                      className={`cursor-pointer rounded-lg border text-center py-2 transition ${
                        selectedDay === d.day
                          ? "bg-orange-500 border-orange-500 text-white"
                          : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <div className="text-sm font-bold leading-none">
                        {d.day}
                      </div>
                      <div className="text-[10px] opacity-80">{d.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-200"
                  onClick={() => alert("Simulasi next minggu")}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Toggle + filters */}
          <div className="px-5 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMenuType("sarapan")}
                  className={`text-xs px-3 py-2 rounded-lg ${
                    menuType === "sarapan"
                      ? "bg-green-800 text-white"
                      : "border border-green-800 text-green-800 dark:text-green-400 bg-white dark:bg-gray-800"
                  }`}
                >
                  Sarapan
                </button>
                <button
                  onClick={() => setMenuType("siang")}
                  className={`text-xs px-3 py-2 rounded-lg ${
                    menuType === "siang"
                      ? "bg-green-800 text-white"
                      : "border border-green-800 text-green-800 dark:text-green-400 bg-white dark:bg-gray-800"
                  }`}
                >
                  Makan Siang
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <select
                    className="text-xs border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200"
                    defaultValue="No Driver"
                    onChange={(e) => alert(`Simulasi pilih: ${e.target.value}`)}
                  >
                    <option>No Driver</option>
                    <option>Driver 01</option>
                    <option>Driver 02</option>
                  </select>

                  <span className="w-5 h-5 rounded-full bg-green-800 text-white text-[10px] flex items-center justify-center">
                    1
                  </span>
                </div>

                <select
                  className="text-xs border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200"
                  value={filterKelurahan}
                  onChange={(e) => setFilterKelurahan(e.target.value)}
                >
                  <option>Kelurahan ↑</option>
                  <option>Kelurahan A</option>
                  <option>Kelurahan B</option>
                </select>
              </div>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-green-800 dark:text-white">
              {menuTitle}
            </h2>
          </div>

          {/* Table */}
          <div className="border-t border-gray-200 dark:border-gray-700">
            <div className="px-5 py-3 grid grid-cols-12 text-xs font-semibold text-orange-500">
              <div className="col-span-2">Nomor Pesanan</div>
              <div className="col-span-2">Logistik</div>
              <div className="col-span-3">Penerima</div>
              <div className="col-span-4">Alamat</div>
              <div className="col-span-1 text-right">Qty</div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((o, idx) => (
                <div
                  key={`${o.no}-${idx}`}
                  className="px-5 py-4 grid grid-cols-12 text-sm items-start hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
                  onClick={() => {
                    setSelectedOrderId("WLD-220001");
                    alert(`Simulasi pilih order: ${o.no}`);
                  }}
                >
                  <div className="col-span-2 text-gray-600 dark:text-gray-200">
                    {o.no}
                  </div>
                  <div className="col-span-2 text-gray-600 dark:text-gray-200">
                    {o.logistik}
                  </div>
                  <div className="col-span-3 text-gray-700 dark:text-gray-200">
                    {o.penerima}
                  </div>
                  <div className="col-span-4 text-gray-500 dark:text-gray-300">
                    {o.alamat}
                  </div>
                  <div className="col-span-1 text-right text-green-800 dark:text-green-300 font-semibold">
                    {o.qty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="col-span-12 xl:col-span-3 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-green-800 dark:text-white">
              Check Kualitas & Kuantitas
            </h3>
          </div>

          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Kualitas Makanan</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Nasi Gudeg Ayam
                </p>
              </div>

              <button
                type="button"
                onClick={() => setQcMakanan((v) => !v)}
                className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                  qcMakanan
                    ? "bg-green-800 border-green-800 text-white"
                    : "border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                {qcMakanan && "✓"}
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Kuantitas Pesanan</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Paket Makan Siang
                </p>
              </div>

              <button
                type="button"
                onClick={() => setQcKuantitas((v) => !v)}
                className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                  qcKuantitas
                    ? "bg-green-800 border-green-800 text-white"
                    : "border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                {qcKuantitas && "✓"}
              </button>
            </div>
          </div>

          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-green-800 dark:text-white">
              Check Pengiriman
            </h3>
          </div>

          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              WLD-220001-01
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              SMPN 05 Bakti Sari
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Mampang - Jakarta Selatan
            </p>

            <button
              type="button"
              className="mt-4 text-xs border border-green-800 text-green-800 dark:text-green-400 px-4 py-2 rounded-lg"
              onClick={() => alert("Simulasi ubah alamat")}
            >
              Ubah Alamat
            </button>
          </div>

          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500">Pengantar</p>
            <select
              className="mt-2 w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              value={driver}
              onChange={(e) => setDriver(e.target.value)}
            >
              <option>Joko Dion Harahap</option>
              <option>Rizky Saputra</option>
              <option>Siti Aisyah</option>
            </select>
          </div>

          <div className="px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Konfirmasi Pengantar</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {driver}
                </p>
                <p className="text-sm text-gray-500">0813 828 88222</p>
              </div>

              <button
                type="button"
                onClick={() => setKonfirmasiPengantar((v) => !v)}
                className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                  konfirmasiPengantar
                    ? "bg-green-800 border-green-800 text-white"
                    : "border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                {konfirmasiPengantar && "✓"}
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                className="w-12 h-12 rounded-lg bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center"
                onClick={() => alert("Simulasi print")}
                title="Print"
              >
                🖨
              </button>

              <button
                type="button"
                className="flex-1 h-12 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-700"
                onClick={() =>
                  alert(
                    `Simulasi save\nQC Makanan: ${qcMakanan}\nQC Kuantitas: ${qcKuantitas}\nKonfirmasi: ${konfirmasiPengantar}\nDriver: ${driver}`
                  )
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-12 xl:col-span-3 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h3 className="font-bold text-green-800 dark:text-white">
              Order Release
            </h3>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-9 h-9 rounded-lg bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center"
                onClick={() => alert("Simulasi print order release")}
                title="Print"
              >
                🖨
              </button>

              <select
                className="text-xs border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200"
                defaultValue="Seluruh Instansi"
                onChange={(e) => alert(`Filter: ${e.target.value}`)}
              >
                <option>Seluruh Instansi</option>
                <option>SMA</option>
                <option>SMP</option>
                <option>SD</option>
              </select>
            </div>
          </div>

          <div className="p-5">
            <div className="rounded-xl border border-green-800 overflow-hidden bg-white dark:bg-gray-800">
              <div className="bg-green-800 text-white text-xs px-4 py-2 flex items-center justify-between">
                <span>Delivered</span>
                <button
                  type="button"
                  className="text-[11px] border border-white/40 px-3 py-1 rounded-lg"
                  onClick={() => alert("Simulasi delivery details")}
                >
                  Delivery Details
                </button>
              </div>

              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                      {rightOrder.title}
                    </p>
                    <p className="text-sm text-gray-500">{rightOrder.phone}</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
                    {rightOrder.code}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>{rightOrder.menu}</span>
                  <span className="text-orange-500 font-semibold">
                    {rightOrder.pax} Pax
                  </span>
                </div>
              </div>

              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-green-800 dark:text-white">
                    Delivery Info
                  </p>
                  <button
                    type="button"
                    onClick={() => alert("Simulasi collapse")}
                    className="text-green-800 dark:text-green-400"
                    title="Collapse"
                  >
                    ^
                  </button>
                </div>

                <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <p>
                    <span className="text-gray-400">Logistik:</span>{" "}
                    {rightOrder.deliveryInfo.logistik}
                  </p>
                  <p className="text-gray-500">{rightOrder.deliveryInfo.alamat}</p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-400 mb-1">Notes:</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {rightOrder.notes}
                </p>

                <div className="mt-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={rightOrder.image}
                    alt="Foto Pengemasan"
                    className="w-full h-36 object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/buburayam.png";
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <div
                className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                onClick={() => alert("Simulasi buka recipient detail")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                      {bottomRecipient.title}
                    </p>
                    <p className="text-sm text-gray-500">{bottomRecipient.phone}</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
                    {bottomRecipient.code}
                  </p>
                </div>

                <p className="mt-3 text-sm text-gray-500">{bottomRecipient.menu}</p>
              </div>
            </div>
          </div>

          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}