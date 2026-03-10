import { useMemo, useState } from "react";

export default function Dapur() {
  const today = new Date();

  const hari = today.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggalLengkap = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const [menuType, setMenuType] = useState<"sarapan" | "siang">("siang");
  const [selectedDay, setSelectedDay] = useState(30);

  const [packingList, setPackingList] = useState<
    { name: string; qty: number; done: boolean }[]
  >([
    { name: "Nasi Gudeg Komplit - Standar", qty: 13, done: true },
    { name: "Nasi Gudeg Komplit - Pedas", qty: 10, done: false },
    { name: "Nasi Gudeg Komplit - Tanpa Tahu", qty: 14, done: true },
    { name: "Nasi Gudeg Komplit - Tanpa Krecek", qty: 18, done: true },
    { name: "Nasi Gudeg Komplit - Tanpa Kecap", qty: 15, done: false },
    { name: "Bubur Ayam Khas Cirebon - Komplit", qty: 7, done: false },
    { name: "Bubur Ayam Khas Cirebon - Tanpa Telur Puyuh", qty: 19, done: true },
    { name: "Bubur Ayam Khas Cirebon - Pedas", qty: 6, done: false },
    { name: "Bubur Ayam Khas Cirebon - Tanpa Jeroan", qty: 17, done: false },
    { name: "Bubur Ayam Khas Cirebon - Tanpa Cakwe", qty: 20, done: false },
    { name: "Bubur Ayam Khas Cirebon - Tanpa Emping", qty: 16, done: true },
    { name: "Bubur Ayam Khas Cirebon - Polosan", qty: 9, done: false },
  ]);

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

  const daftarMasakanSarapan = useMemo(
    () => [
      {
        group: "Carbs 1",
        title: "Bubur",
        total: 30,
        items: [{ name: "Standard", value: 25, max: 30 }],
      },
      {
        group: "Protein",
        title: "Ayam",
        total: 30,
        items: [{ name: "Ayam Suwir", value: 20, max: 30 }],
      },
      {
        group: "Topping",
        title: "Cakwe",
        total: 30,
        items: [{ name: "Standard", value: 18, max: 30 }],
      },
    ],
    []
  );

  const daftarMasakanSiang = useMemo(
    () => [
      {
        group: "Carbs 1",
        title: "Nasi Gudeg",
        total: 100,
        items: [
          { name: "Standard", value: 40, max: 65 },
          { name: "Pedas", value: 5, max: 10 },
          { name: "Tidak Pedas", value: 5, max: 10 },
          { name: "Tanpa Kecap Manis", value: 10, max: 15 },
        ],
      },
      {
        group: "Protein 1",
        title: "Ayam",
        total: 130,
        items: [
          { name: "Ayam Opor", value: 85, max: 100 },
          { name: "Ayam Suwir", value: 20, max: 30 },
        ],
      },
      {
        group: "Protein",
        title: "Telur Puyuh",
        total: 60,
        items: [{ name: "Standard", value: 45, max: 60 }],
      },
      {
        group: "Fiber",
        title: "Sayur Buncis",
        total: 100,
        items: [
          { name: "Standard", value: 5, max: 85 },
          { name: "Pedas", value: 2, max: 15 },
        ],
      },
    ],
    []
  );

  const ticketingSarapan = useMemo(
    () => [
      {
        title: "Bubur Ayam Khas Cirebon",
        total: 30,
        variants: [
          { name: "Komplit", value: 7 },
          { name: "Tanpa Emping", value: 16 },
          { name: "Pedas", value: 6 },
        ],
      },
    ],
    []
  );

  const ticketingSiang = useMemo(
    () => [
      {
        title: "Nasi Gudeg",
        total: 100,
        variants: [
          { name: "Standard", value: 20 },
          { name: "Pedas", value: 20 },
          { name: "Tidak Pedas", value: 60 },
        ],
      },
      {
        title: "Nasi Gudeg - Protein - Telur Mata Sapi",
        total: 100,
        variants: [
          { name: "Standard", value: 80 },
          { name: "Setengah Matang", value: 20 },
        ],
      },
      {
        title: "Nasi Gudeg - Protein - Ayam",
        total: 100,
        variants: [
          { name: "Standard", value: 80 },
          { name: "Pedas", value: 20 },
        ],
      },
    ],
    []
  );

  const daftarMasakan =
    menuType === "sarapan" ? daftarMasakanSarapan : daftarMasakanSiang;
  const ticketing = menuType === "sarapan" ? ticketingSarapan : ticketingSiang;

  const sarapanCard = useMemo(
    () => ({
      title: "Bubur Ayam Khas Cirebon",
      pax: 30,
      img: "/images/buburayam.png",
      stats: [
        { label: "Calories", value: "490 kCal" },
        { label: "Carbs", value: "54,00 C" },
        { label: "Fats", value: "15,2 F" },
        { label: "Protein", value: "43,7 P" },
      ],
    }),
    []
  );

  const siangCard = useMemo(
    () => ({
      title: "Nasi Gudeg Komplit",
      pax: 100,
      img: "/images/nasigudeg.png",
      stats: [
        { label: "Calories", value: "490 kCal" },
        { label: "Carbs", value: "54,00 C" },
        { label: "Fats", value: "15,2 F" },
        { label: "Protein", value: "43,7 P" },
      ],
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-4 md:p-6 space-y-6">
      {/* HEADER PAGE */}
      <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h1 className="text-lg font-bold text-green-800 dark:text-white">
          Dapur
        </h1>

        <div className="text-sm text-gray-500 dark:text-gray-400 text-right capitalize">
          <p>{hari}</p>
          <p>{tanggalLengkap}</p>
        </div>
      </div>

      {/* TOP ROW: CALENDAR + MENU CARDS */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="p-5 grid grid-cols-12 gap-5 items-stretch">
          {/* Calendar */}
          <div className="col-span-12 xl:col-span-5">
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
                      <div className="text-sm font-bold leading-none">{d.day}</div>
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

              <div className="px-4 pb-4 text-center">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Batch 2, Hari ke 5
                </p>
                <p className="text-xs text-gray-400">
                  Friday, February {selectedDay}, 2022
                </p>
              </div>
            </div>
          </div>

          {/* Sarapan card */}
          <div className="col-span-12 xl:col-span-3">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden h-full bg-white dark:bg-gray-800">
              <div className="bg-green-800 text-white px-4 py-2 flex items-center justify-between text-xs font-semibold">
                <span>Sarapan</span>
                <span>{sarapanCard.pax} pax</span>
              </div>

              <div className="p-4 flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 shrink-0">
                  <img
                    src={sarapanCard.img}
                    alt="Sarapan"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {sarapanCard.title}
                  </p>

                  <div className="mt-2 grid grid-cols-2 gap-y-1 text-[11px]">
                    {sarapanCard.stats.map((s) => (
                      <div key={s.label} className="contents">
                        <div className="text-gray-400">{s.label}</div>
                        <div className="text-right text-gray-700 dark:text-gray-200">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-3 text-xs border border-green-800 text-green-800 dark:text-green-400 px-3 py-1 rounded-lg"
                    onClick={() => alert("Simulasi lihat resep Sarapan")}
                  >
                    Lihat Resep Masakan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Makan siang card */}
          <div className="col-span-12 xl:col-span-4">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden h-full bg-white dark:bg-gray-800">
              <div className="bg-green-800 text-white px-4 py-2 flex items-center justify-between text-xs font-semibold">
                <span>Makan Siang</span>
                <span>{siangCard.pax} pax</span>
              </div>

              <div className="p-4 flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 shrink-0">
                  <img
                    src={siangCard.img}
                    alt="Makan Siang"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = sarapanCard.img;
                    }}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {siangCard.title}
                  </p>

                  <div className="mt-2 grid grid-cols-2 gap-y-1 text-[11px]">
                    {siangCard.stats.map((s) => (
                      <div key={s.label} className="contents">
                        <div className="text-gray-400">{s.label}</div>
                        <div className="text-right text-gray-700 dark:text-gray-200">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-3 text-xs border border-green-800 text-green-800 dark:text-green-400 px-3 py-1 rounded-lg"
                    onClick={() => alert("Simulasi lihat resep Makan Siang")}
                  >
                    Lihat Resep Masakan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM 3 PANELS */}
      <div className="grid grid-cols-12 gap-6">
        {/* Daftar Masakan */}
        <div className="col-span-12 xl:col-span-4 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h3 className="font-bold text-green-800 dark:text-white">
              Daftar Masakan
            </h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuType("sarapan")}
                className={`text-xs px-3 py-1 rounded-lg ${
                  menuType === "sarapan"
                    ? "bg-green-800 text-white"
                    : "border border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                Sarapan
              </button>
              <button
                onClick={() => setMenuType("siang")}
                className={`text-xs px-3 py-1 rounded-lg ${
                  menuType === "siang"
                    ? "bg-green-800 text-white"
                    : "border border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                Makan Siang
              </button>
            </div>
          </div>

          <div className="p-5 space-y-6">
            {daftarMasakan.map((g) => (
              <div key={`${g.group}-${g.title}`}>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400">
                    {g.group} <span className="mx-1">|</span>{" "}
                    <span className="text-gray-700 dark:text-gray-200 font-semibold">
                      {g.title}
                    </span>
                  </p>
                  <p className="text-xs text-orange-500 font-semibold">{g.total}</p>
                </div>

                <div className="mt-3 space-y-3">
                  {g.items.map((it) => {
                    const pct = Math.min(100, Math.round((it.value / it.max) * 100));
                    return (
                      <div
                        key={`${g.title}-${it.name}`}
                        className="grid grid-cols-12 gap-3 items-center"
                      >
                        <div className="col-span-5">
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            {it.name}
                          </p>
                        </div>

                        <div className="col-span-5">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div
                              className="h-2 rounded-full bg-orange-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>

                        <div className="col-span-2 text-right">
                          <p className="text-[11px] text-gray-400">
                            {it.value} / {it.max}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticketing */}
        <div className="col-span-12 xl:col-span-4 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h3 className="font-bold text-green-800 dark:text-white">Ticketing</h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuType("sarapan")}
                className={`text-xs px-3 py-1 rounded-lg ${
                  menuType === "sarapan"
                    ? "bg-green-800 text-white"
                    : "border border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                Sarapan
              </button>
              <button
                onClick={() => setMenuType("siang")}
                className={`text-xs px-3 py-1 rounded-lg ${
                  menuType === "siang"
                    ? "bg-green-800 text-white"
                    : "border border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                Makan Siang
              </button>

              <button
                type="button"
                className="ml-1 w-9 h-9 rounded-lg bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center"
                title="Print"
                onClick={() => alert("Simulasi print ticket")}
              >
                🖨
              </button>
            </div>
          </div>

          <div className="p-5 space-y-5">
            {ticketing.map((t) => (
              <div key={t.title}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {t.title}
                  </p>
                  <p className="text-sm text-gray-500">{t.total}</p>
                </div>

                <div className="mt-2 space-y-1">
                  {t.variants.map((v) => (
                    <div
                      key={`${t.title}-${v.name}`}
                      className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300"
                    >
                      <span>{v.name}</span>
                      <span>{v.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pengemasan */}
        <div className="col-span-12 xl:col-span-4 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h3 className="font-bold text-green-800 dark:text-white">
              Pengemasan
            </h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuType("sarapan")}
                className={`text-xs px-3 py-1 rounded-lg ${
                  menuType === "sarapan"
                    ? "bg-green-800 text-white"
                    : "border border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                Sarapan
              </button>
              <button
                onClick={() => setMenuType("siang")}
                className={`text-xs px-3 py-1 rounded-lg ${
                  menuType === "siang"
                    ? "bg-green-800 text-white"
                    : "border border-green-800 text-green-800 dark:text-green-400"
                }`}
              >
                Makan Siang
              </button>

              <button
                type="button"
                className="ml-1 w-9 h-9 rounded-lg bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center"
                title="Print"
                onClick={() => alert("Simulasi print pengemasan")}
              >
                🖨
              </button>
            </div>
          </div>

          <div className="p-5">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {packingList.map((p) => (
                <div key={p.name} className="py-3 flex items-center justify-between">
                  <div className="pr-4">
                    <p className="text-xs text-gray-700 dark:text-gray-200">
                      {p.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500 w-6 text-right">
                      {p.qty}
                    </span>

                    <span
                      onClick={() =>
                        setPackingList((prev) =>
                          prev.map((item) =>
                            item.name === p.name ? { ...item, done: !item.done } : item
                          )
                        )
                      }
                      className={`cursor-pointer w-6 h-6 rounded-md border flex items-center justify-center transition ${
                        p.done
                          ? "bg-green-800 border-green-800 text-white"
                          : "border-green-800 text-green-800 dark:text-green-400"
                      }`}
                      title={p.done ? "Done" : "Not Done"}
                    >
                      {p.done && "✓"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setPackingList((prev) => prev.map((x) => ({ ...x, done: true })))
              }
              className="mt-4 w-full text-xs bg-green-800 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Tandai Semua Selesai (Simulasi)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}