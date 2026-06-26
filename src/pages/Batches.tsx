import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type TabType = "upcoming" | "history";

export default function Batches() {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const fullDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [tab, setTab] = useState<TabType>("upcoming");
  const [filter, setFilter] = useState("Filter");
  const [activeDayBatch10, setActiveDayBatch10] = useState(3);
  const [activeDayBatch9, setActiveDayBatch9] = useState(3);
  const navigate = useNavigate();

  const ongoing = useMemo(
    () => ({
      batch: 7,
      sarapan: {
        title: "Soto Banjar Khas Kalimantan",
        pax: 710,
        img: "/images/soto-banjar.jpg",
        stats: [
          { label: "Calories", value: "490 kCal" },
          { label: "Carbs", value: "54,00 c" },
          { label: "Fats", value: "15,2 F" },
          { label: "Protein", value: "43,7 P" },
        ],
      },
      siang: {
        title: "Nasi Goreng Ayam + Telur Mata Sapi",
        pax: 1020,
        img: "/images/nasigoreng.jpg",
        stats: [
          { label: "Calories", value: "490 kCal" },
          { label: "Carbs", value: "54,00 c" },
          { label: "Fats", value: "15,2 F" },
          { label: "Protein", value: "43,7 P" },
        ],
      },
    }),
    []
  );

  const batches = useMemo(
    () => [
      {
        id: 10,
        activeDay: activeDayBatch10,
        onPickDay: (d: number) => setActiveDayBatch10(d),
        sarapan: {
          pax: 700,
          title: "Ayam Betutu Bali + Sate Lilit+ Sayur",
          img: "/images/ayam-betutu.jpg",
          stats: [
            { label: "Calories", value: "490 kCal" },
            { label: "Carbs", value: "54,00 c" },
            { label: "Fats", value: "15,2 g" },
            { label: "Protein", value: "43,7 g" },
          ],
        },
        siang: {
          pax: 1000,
          title: "Bakso Sapi + Bihun + Mie",
          img: "/images/bakso.jpg",
          stats: [
            { label: "Calories", value: "490 kCal" },
            { label: "Carbs", value: "54,00 c" },
            { label: "Fats", value: "15,2 g" },
            { label: "Protein", value: "43,7 g" },
          ],
        },
      },
      {
        id: 9,
        activeDay: activeDayBatch9,
        onPickDay: (d: number) => setActiveDayBatch9(d),
        sarapan: {
          pax: 700,
          title: "Sate Ayam + Lontong",
          img: "/images/sate.jpg",
          stats: [
            { label: "Calories", value: "490 kCal" },
            { label: "Carbs", value: "54,00 c" },
            { label: "Fats", value: "15,2 g" },
            { label: "Protein", value: "43,7 g" },
          ],
        },
        siang: {
          pax: 1000,
          title: "Nasi Uduk + Semur Tahu + Orek Tempe + Bihun",
          img: "/images/nasiuduk.jpg",
          stats: [
            { label: "Calories", value: "490 kCal" },
            { label: "Carbs", value: "54,00 c" },
            { label: "Fats", value: "15,2 g" },
            { label: "Protein", value: "43,7 g" },
          ],
        },
      },
      {
        id: 8,
        activeDay: 1,
        onPickDay: () => alert("Simulasi pilih day batch 8"),
        sarapan: {
          pax: 100,
          title: "Bubur Ayam Cirebon",
          img: "/images/buburayam.png",
          stats: [
            { label: "Calories", value: "490 kCal" },
            { label: "Carbs", value: "54,00 c" },
            { label: "Fats", value: "15,2 g" },
            { label: "Protein", value: "43,7 g" },
          ],
        },
        siang: {
          pax: 120,
          title: "Empek - empek Palembang",
          img: "/images/empek.jpg",
          stats: [
            { label: "Calories", value: "490 kCal" },
            { label: "Carbs", value: "54,00 c" },
            { label: "Fats", value: "15,2 g" },
            { label: "Protein", value: "43,7 g" },
          ],
        },
      },
    ],
    [activeDayBatch10, activeDayBatch9]
  );

  const pillBtn = (active: boolean) =>
    `px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 ${
      active
        ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white border-[#0d5c3b] dark:border-emerald-600 shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
        : "bg-white dark:bg-[#1e293b] text-[#0d5c3b] dark:text-emerald-400 border-[#0d5c3b] dark:border-emerald-500 hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] p-4 md:p-6 lg:p-8 space-y-6 transition-colors duration-300">
      
      {/* ========== TOP HEADER ========== */}
      <div className="bg-white dark:bg-[#1e293b] px-6 py-4 rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 flex items-start justify-between transition-colors duration-300">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/batches/new")}
            className="w-12 h-12 rounded-xl bg-[#0d5c3b] dark:bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-md shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20 hover:bg-[#09472e] dark:hover:bg-emerald-500 transition-colors duration-200"
            title="Tambah"
          >
            +
          </button>

          <h1 className="text-2xl font-bold text-[#0d5c3b] dark:text-emerald-400">
            Batches
          </h1>
        </div>

        <div className="flex items-start gap-3">
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            <div className="font-medium text-gray-700 dark:text-gray-300">{dayName}</div>
            <div className="text-xs">{fullDate}</div>
          </div>
        </div>
      </div>

      {/* ========== MAIN GRID ========== */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* LEFT: ONGOING */}
        <div className="col-span-12 xl:col-span-4 bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700/60">
            <h2 className="text-lg font-bold text-[#0d5c3b] dark:text-emerald-400">
              Ongoing:{" "}
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Batch {ongoing.batch}
              </span>
            </h2>
          </div>

          <div className="p-5 space-y-6">
            {/* Sarapan card */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 overflow-hidden bg-white dark:bg-[#1e293b] transition-colors duration-300">
              <div className="bg-[#0d5c3b] dark:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 flex items-center justify-between">
                <span>Sarapan</span>
                <span>{ongoing.sarapan.pax} pax</span>
              </div>

              <div className="p-4 flex gap-4">
                <div className="w-36 h-36 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 shrink-0 border border-gray-200 dark:border-gray-700/80">
                  <img
                    src={ongoing.sarapan.img}
                    alt="Sarapan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/buburayam.png";
                    }}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {ongoing.sarapan.title}
                  </p>

                  <div className="mt-2 grid grid-cols-2 gap-y-1 text-[11px]">
                    {ongoing.sarapan.stats.map((s) => (
                      <div key={s.label} className="contents">
                        <div className="text-gray-400 dark:text-gray-500">{s.label}</div>
                        <div className="text-right text-gray-700 dark:text-gray-300">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="mt-4 text-xs border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 px-3 py-2 rounded-lg hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors duration-200"
                    onClick={() => alert("Simulasi lihat resep sarapan")}
                  >
                    Lihat Resep Masakan
                  </button>
                </div>
              </div>
            </div>

            {/* Makan Siang card */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 overflow-hidden bg-white dark:bg-[#1e293b] transition-colors duration-300">
              <div className="bg-[#0d5c3b] dark:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 flex items-center justify-between">
                <span>Makan Siang</span>
                <span>{ongoing.siang.pax} pax</span>
              </div>

              <div className="p-4 flex gap-4">
                <div className="w-36 h-36 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 shrink-0 border border-gray-200 dark:border-gray-700/80">
                  <img
                    src={ongoing.siang.img}
                    alt="Makan Siang"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/buburayam.png";
                    }}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {ongoing.siang.title}
                  </p>

                  <div className="mt-2 grid grid-cols-2 gap-y-1 text-[11px]">
                    {ongoing.siang.stats.map((s) => (
                      <div key={s.label} className="contents">
                        <div className="text-gray-400 dark:text-gray-500">{s.label}</div>
                        <div className="text-right text-gray-700 dark:text-gray-300">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="mt-4 text-xs border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 px-3 py-2 rounded-lg hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors duration-200"
                    onClick={() => alert("Simulasi lihat resep siang")}
                  >
                    Lihat Resep Masakan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: UPCOMING / HISTORY */}
        <div className="col-span-12 xl:col-span-8 bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-colors duration-300">
          
          {/* Tabs + Filter */}
          <div className="p-5 border-b border-gray-200 dark:border-gray-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                className={pillBtn(tab === "upcoming")}
                onClick={() => setTab("upcoming")}
              >
                Upcoming{" "}
                <span
                  className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    tab === "upcoming"
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                  }`}
                >
                  75
                </span>
              </button>

              <button
                className={pillBtn(tab === "history")}
                onClick={() => setTab("history")}
              >
                History{" "}
                <span
                  className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    tab === "history"
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                  }`}
                >
                  16
                </span>
              </button>
            </div>

            <select
              className="text-sm border border-gray-200 dark:border-gray-700/80 rounded-lg px-4 py-2 bg-white dark:bg-[#1e293b] text-gray-600 dark:text-gray-300 outline-none focus:ring-2 focus:ring-[#0d5c3b]/20 dark:focus:ring-emerald-500/30 focus:border-[#0d5c3b] dark:focus:border-emerald-500 transition-colors cursor-pointer"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>Filter</option>
              <option>Kelurahan A</option>
              <option>Kelurahan B</option>
            </select>
          </div>

          {/* CONTENT */}
          <div className="p-5 space-y-8">
            {tab === "history" ? (
              <div className="text-gray-500 dark:text-gray-400 text-center py-12 border-2 border-dashed border-gray-200 dark:border-gray-700/60 rounded-xl">
                Belum ada data history (simulasi)
              </div>
            ) : (
              <>
                {batches.map((b) => (
                  <div key={b.id} className="space-y-4">
                    <h3 className="text-lg font-bold text-[#0d5c3b] dark:text-emerald-400">
                      Batch {b.id}
                    </h3>

                    <div className="grid grid-cols-12 gap-4">
                      {/* Day buttons */}
                      <div className="col-span-12 md:col-span-2">
                        <div className="space-y-2">
                          {[1, 2, 3, 4, 5].map((d) => (
                            <button
                              key={d}
                              onClick={() => b.onPickDay(d)}
                              className={`w-full text-left text-sm px-3 py-2 rounded-lg border transition-all duration-200 ${
                                b.activeDay === d
                                  ? "bg-[#0d5c3b] dark:bg-emerald-600 text-white border-[#0d5c3b] dark:border-emerald-600 shadow-sm shadow-[#0d5c3b]/20 dark:shadow-emerald-600/20"
                                  : "border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 bg-white dark:bg-[#1e293b] hover:bg-[#0d5c3b]/5 dark:hover:bg-emerald-500/10"
                              }`}
                            >
                              Day {d}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Sarapan card */}
                      <div className="col-span-12 md:col-span-5">
                        <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 overflow-hidden bg-white dark:bg-[#1e293b] transition-colors duration-300">
                          <div className="bg-[#0d5c3b] dark:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 flex items-center justify-between">
                            <span>Sarapan</span>
                            <span>{b.sarapan.pax}</span>
                          </div>

                          <div className="p-4 flex gap-4">
                            <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 shrink-0 border border-gray-200 dark:border-gray-700/80">
                              <img
                                src={b.sarapan.img}
                                alt="sarapan"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src =
                                    "/images/buburayam.png";
                                }}
                              />
                            </div>

                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                {b.sarapan.title}
                              </p>

                              <button
                                className="mt-3 text-xs border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 px-3 py-2 rounded-lg hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors duration-200"
                                onClick={() =>
                                  alert(`Simulasi lihat resep sarapan batch ${b.id}`)
                                }
                              >
                                Lihat Resep Masakan
                              </button>

                              <div className="mt-3 grid grid-cols-2 gap-y-1 text-[11px]">
                                {b.sarapan.stats.map((s) => (
                                  <div key={s.label} className="contents">
                                    <div className="text-gray-400 dark:text-gray-500">{s.label}</div>
                                    <div className="text-right text-gray-700 dark:text-gray-300">
                                      {s.value}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Makan siang card */}
                      <div className="col-span-12 md:col-span-5">
                        <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 overflow-hidden bg-white dark:bg-[#1e293b] transition-colors duration-300">
                          <div className="bg-[#0d5c3b] dark:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 flex items-center justify-between">
                            <span>Makan Siang</span>
                            <span>{b.siang.pax}</span>
                          </div>

                          <div className="p-4 flex gap-4">
                            <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/50 shrink-0 border border-gray-200 dark:border-gray-700/80">
                              <img
                                src={b.siang.img}
                                alt="siang"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src =
                                    "/images/buburayam.png";
                                }}
                              />
                            </div>

                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                {b.siang.title}
                              </p>

                              <button
                                className="mt-3 text-xs border border-[#0d5c3b] dark:border-emerald-500 text-[#0d5c3b] dark:text-emerald-400 px-3 py-2 rounded-lg hover:bg-[#0d5c3b] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors duration-200"
                                onClick={() =>
                                  alert(`Simulasi lihat resep siang batch ${b.id}`)
                                }
                              >
                                Lihat Resep Masakan
                              </button>

                              <div className="mt-3 grid grid-cols-2 gap-y-1 text-[11px]">
                                {b.siang.stats.map((s) => (
                                  <div key={s.label} className="contents">
                                    <div className="text-gray-400 dark:text-gray-500">{s.label}</div>
                                    <div className="text-right text-gray-700 dark:text-gray-300">
                                      {s.value}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 dark:border-gray-700/60 pt-2" />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}