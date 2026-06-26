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
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] p-4 md:p-6 lg:p-8 space-y-6 transition-colors duration-300">
      
      {/* ========== HEADER PAGE ========== */}
      <div className="bg-white dark:bg-[#1e293b] px-6 py-4 rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 flex justify-between items-center transition-colors duration-300">
        <h1 className="text-xl md:text-2xl font-bold text-[#0d5c3b] dark:text-emerald-400">
          Dapur
        </h1>

        <div className="text-right text-sm text-gray-500 dark:text-gray-400">
          <p className="capitalize font-medium text-gray-700 dark:text-gray-300">{hari}</p>
          <p className="text-xs">{tanggalLengkap}</p>
        </div>
      </div>

      {/* ========== TOP ROW: CALENDAR + MENU CARDS ========== */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
        <div className="p-5 grid grid-cols-12 gap-5 items-stretch">
          
          {/* Calendar */}
          <div className="col-span-12 xl:col-span-5">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 overflow-hidden bg-white dark:bg-[#1e293b] transition-colors duration-300">
              <div className="bg-[#0d5c3b] dark:bg-emerald-600 text-white text-xs font-semibold py-2 text-center">
                February, 2022
              </div>

              <div className="p-3 flex items-center gap-3">
                <button
                  type="button"
                  className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#1e293b] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  onClick={() => alert("Simulasi prev minggu")}
                >
                  ‹
                </button>

                <div className="flex-1 grid grid-cols-7 gap-2">
                  {calendarDays.map((d) => (
                    <div
                      key={`${d.day}-${d.label}`}
                      onClick={() => setSelectedDay(d.day)}
                      className={`cursor-pointer rounded-lg border text-center py-2 transition-all duration-200 ${
                        selectedDay === d.day
                          ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20"
                          : "border-gray-200 dark:border-gray-700/80 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                      }`}
                    >
                      <div className="text-sm font-bold leading-none">{d.day}</div>
                      <div className="text-[10px] opacity-80">{d.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#1e293b] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  onClick={() => alert("Simulasi next minggu")}
                >
                  ›
                </button>
              </div>

              <div className="px-4 pb-4 text-center">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Batch 2, Hari ke 5
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Friday, February {selectedDay}, 2022
                </p>
              </div>
            </div>
          </div>

          {/* Sarapan card */}
          <div className="col-span-12 xl:col-span-3">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 overflow-hidden h-full bg-white dark:bg-[#1e293b] transition-colors duration-300">
              <div className="bg-[#0d5c3b] dark:bg-emerald-600 text-white px-4 py-2 flex items-center justify-between text-xs font-semibold">
                <span>Sarapan</span>
                <span>{sarapanCard.pax} pax</span>
              </div>

              <div className="p-4 flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 shrink-0 border border-gray-200 dark:border-gray-700/80">
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
                        <div className="text-gray-400 dark:text-gray-500">{s.label}</div>
                        <div className="text-right text-gray-700 dark:text-gray-300">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-3 text-xs border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 px-3 py-1 rounded-lg hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors"
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
            <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 overflow-hidden h-full bg-white dark:bg-[#1e293b] transition-colors duration-300">
              <div className="bg-[#0d5c3b] dark:bg-emerald-600 text-white px-4 py-2 flex items-center justify-between text-xs font-semibold">
                <span>Makan Siang</span>
                <span>{siangCard.pax} pax</span>
              </div>

              <div className="p-4 flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 shrink-0 border border-gray-200 dark:border-gray-700/80">
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
                        <div className="text-gray-400 dark:text-gray-500">{s.label}</div>
                        <div className="text-right text-gray-700 dark:text-gray-300">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-3 text-xs border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 px-3 py-1 rounded-lg hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors"
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

      {/* ========== BOTTOM 3 PANELS ========== */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Daftar Masakan */}
        <div className="col-span-12 xl:col-span-4 bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60 flex items-center justify-between">
            <h3 className="font-bold text-[#0d5c3b] dark:text-emerald-400">
              Daftar Masakan
            </h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuType("sarapan")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                  menuType === "sarapan"
                    ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                    : "border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
                }`}
              >
                Sarapan
              </button>
              <button
                onClick={() => setMenuType("siang")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                  menuType === "siang"
                    ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                    : "border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
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
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {g.group} <span className="mx-1">|</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">
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
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {it.name}
                          </p>
                        </div>

                        <div className="col-span-5">
                          <div className="w-full bg-gray-200 dark:bg-gray-700/60 h-2 rounded-full overflow-hidden">
                            <div
                              className="h-2 rounded-full bg-orange-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>

                        <div className="col-span-2 text-right">
                          <p className="text-[11px] text-gray-400 dark:text-gray-500">
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
        <div className="col-span-12 xl:col-span-4 bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60 flex items-center justify-between">
            <h3 className="font-bold text-[#0d5c3b] dark:text-emerald-400">Ticketing</h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuType("sarapan")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                  menuType === "sarapan"
                    ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                    : "border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
                }`}
              >
                Sarapan
              </button>
              <button
                onClick={() => setMenuType("siang")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                  menuType === "siang"
                    ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                    : "border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
                }`}
              >
                Makan Siang
              </button>

              <button
                type="button"
                className="ml-1 w-9 h-9 rounded-lg bg-[#0d5c3b] dark:bg-emerald-600 text-white flex items-center justify-center hover:bg-[#09472e] dark:hover:bg-emerald-500 transition-colors shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
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
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {t.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.total}</p>
                </div>

                <div className="mt-2 space-y-1">
                  {t.variants.map((v) => (
                    <div
                      key={`${t.title}-${v.name}`}
                      className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400"
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
        <div className="col-span-12 xl:col-span-4 bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60 flex items-center justify-between">
            <h3 className="font-bold text-[#0d5c3b] dark:text-emerald-400">
              Pengemasan
            </h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuType("sarapan")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                  menuType === "sarapan"
                    ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                    : "border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
                }`}
              >
                Sarapan
              </button>
              <button
                onClick={() => setMenuType("siang")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                  menuType === "siang"
                    ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                    : "border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
                }`}
              >
                Makan Siang
              </button>

              <button
                type="button"
                className="ml-1 w-9 h-9 rounded-lg bg-[#0d5c3b] dark:bg-emerald-600 text-white flex items-center justify-center hover:bg-[#09472e] dark:hover:bg-emerald-500 transition-colors shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                title="Print"
                onClick={() => alert("Simulasi print pengemasan")}
              >
                🖨
              </button>
            </div>
          </div>

          <div className="p-5">
            <div className="divide-y divide-gray-200 dark:divide-gray-700/60">
              {packingList.map((p) => (
                <div key={p.name} className="py-3 flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/20 px-1 -mx-1 rounded-lg transition-colors">
                  <div className="pr-4">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {p.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400 w-6 text-right">
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
                      className={`cursor-pointer w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-200 ${
                        p.done
                          ? "bg-[#0d5c3b] dark:bg-emerald-600 border-[#0d5c3b] dark:border-emerald-600 text-white shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                          : "border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
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
              className="mt-4 w-full text-xs bg-[#0d5c3b] dark:bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-[#09472e] dark:hover:bg-emerald-500 shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20 transition-all duration-200"
            >
              Tandai Semua Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}