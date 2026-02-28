import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Dashboard MBG | NEXONUS Teknologi Digital"
        description="Dashboard Sistem Monitoring Program Makanan Bergizi Gratis"
      />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Header */}
        <div className="col-span-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Dashboard Program Makanan Bergizi Gratis
            </h1>
            <p className="text-gray-500 mt-1">
              Monitoring distribusi, penerima, dan aktivitas program MBG
            </p>
          </div>
        </div>

        {/* Statistik Cards */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Penerima */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <p className="text-gray-500">Total Penerima</p>
            <h2 className="text-3xl font-bold text-green-800 dark:text-white">
              1,250
            </h2>
            {/* <p className="text-green-500 text-sm mt-1">
              +12% bulan ini
            </p> */}
          </div>

          {/* Total pengiriman */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <p className="text-gray-500">Total Pengiriman</p>
            <h2 className="text-3xl font-bold text-green-800 dark:text-white">
              25
            </h2>
            {/* <p className="text-green-500 text-sm mt-1">
              +3 sekolah baru
            </p> */}
          </div>

          {/* Distribusi total hidangan */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <p className="text-gray-500">Total Hidangan</p>
            <h2 className="text-3xl font-bold text-green-800 dark:text-white">
              320
            </h2>
            {/* <p className="text-blue-500 text-sm mt-1">
              Update realtime
            </p> */}
          </div>

          {/* Distribusi jumlah sarapan */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <p className="text-gray-500">Jumlah Sarapan</p>
            <h2 className="text-3xl font-bold text-green-800 dark:text-white">
              320
            </h2>
            {/* <p className="text-blue-500 text-sm mt-1">
              Update realtime
            </p> */}
          </div>

          {/* Distribusi jumlah makan siang */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <p className="text-gray-500">Jumlah Makan Siang</p>
            <h2 className="text-3xl font-bold text-green-800 dark:text-white">
              320
            </h2>
            {/* <p className="text-blue-500 text-sm mt-1">
              Update realtime
            </p> */}
          </div>

          {/* Distribusi hidangan yang dikembalikan */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <p className="text-gray-500">Hidangan Yang Dikembalikan</p>
            <h2 className="text-3xl font-bold text-green-800 dark:text-white">
              320
            </h2>
            {/* <p className="text-blue-500 text-sm mt-1">
              Update realtime
            </p> */}
          </div>
        </div>

        {/* ====== TAMBAHAN SESUAI GAMBAR (Menu Hari Ini, Pesanan, Chat, Delivery) ====== */}
        <div className="col-span-12 grid grid-cols-12 gap-4 md:gap-6">
          {/* LEFT COLUMN */}
          <div className="col-span-12 xl:col-span-4 space-y-4 md:space-y-6">
            {/* Menu Hari Ini */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Menu Hari ini
                </h3>
                <span className="text-green-700 font-semibold text-sm">
                  1267 pcs
                </span>
              </div>

              <div className="space-y-5">
                {/* Sarapan */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                   <img
                          src="public/images/nasgor.png"
                          alt="Sate Ayam Bumbu Kacang"
                          className="w-full h-full object-cover"
                  />
                  </div>

                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-green-700 text-white">
                      Sarapan
                    </div>

                    <p className="mt-2 font-semibold text-gray-800 dark:text-white">
                      Nasi Goreng Ayam + Telur Mata Sapi
                    </p>

                    <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-400 h-2 rounded-full w-[70%]"></div>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">16 / 16</p>
                  </div>
                </div>

                {/* Makan Siang */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                  <img
                          src="public/images/sate.png"
                          alt="Sate Ayam Bumbu Kacang"
                          className="w-full h-full object-cover"
                  />
                  </div>

                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-green-700 text-white">
                      Makan Siang
                    </div>

                    <p className="mt-2 font-semibold text-gray-800 dark:text-white">
                      Sate Ayam Bumbu Kacang + Sup Masakan
                    </p>

                    <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-400 h-2 rounded-full w-[35%]"></div>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">27 / 80</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Today Delivery */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Today Delivery
                </h3>
                <div className="text-xs text-gray-500 border rounded-lg px-3 py-1 dark:border-gray-700">
                  Start Date
                </div>
              </div>

              <div className="flex justify-between text-sm font-semibold text-gray-600 dark:text-gray-300 pb-2 border-b dark:border-gray-700">
                <span>Destination</span>
                <span>Qty</span>
              </div>

              <div className="mt-3 space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-200">
                    SMP 30 Kabupaten Bangkalan
                  </span>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                    4/4
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-200">
                    SD K Golgota Kabupaten Banyuwangi
                  </span>
                  <span className="text-gray-400 text-xs font-semibold">
                    0/10
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-200">
                    SMA N Bunda Kandung Kabupaten Bondowoso
                  </span>
                  <span className="text-gray-400 text-xs font-semibold">
                    0/12
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN - Pesanan Hari Ini */}
          <div className="col-span-12 xl:col-span-5">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow h-full">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    Pesanan Hari ini
                  </h3>
                  <span className="text-xs text-gray-500">75</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-xs text-gray-500 border rounded-lg px-3 py-1 dark:border-gray-700">
                    Filter
                  </div>
                  <div className="text-xs text-gray-500 border rounded-lg px-3 py-1 dark:border-gray-700">
                    Hari Ini
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 text-xs font-semibold text-gray-600 dark:text-gray-300 pb-2 border-b dark:border-gray-700">
                <div className="col-span-4">Sajian</div>
                <div className="col-span-6">Penerima</div>
                <div className="col-span-2 text-right">Qty</div>
              </div>

              <div className="mt-3 space-y-3 text-sm">
                {[
                  { sajian: "Sarapan", penerima: "SMP Mawar Biru", qty: "7/14" },
                  { sajian: "Sarapan", penerima: "SMP Pintar Ceria", qty: "8/14" },
                  { sajian: "Sarapan", penerima: "SMP Bhakti Nusa", qty: "8/8", highlight: true },
                  { sajian: "Makan Siang", penerima: "SMP Suka Maju", qty: "8/14" },
                  { sajian: "Sarapan", penerima: "SMP Cendikia Muda", qty: "2/2", highlight: true },
                  { sajian: "Makan Siang", penerima: "SMP Pesona Bahari", qty: "8/14" },
                  { sajian: "Sarapan", penerima: "SMP Jaya Mukti", qty: "7/13" },
                  { sajian: "Makan Siang", penerima: "SMP Abadi Jaya", qty: "8/14" },
                  { sajian: "Makan Siang", penerima: "SMP Harapan Bangsa", qty: "7/13" },
                  { sajian: "Sarapan", penerima: "SMP Gita Bahagia", qty: "4/4", highlight: true },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 items-center border-b pb-2 dark:border-gray-700"
                  >
                    <div className="col-span-4 text-gray-700 dark:text-gray-200">
                      {row.sajian}
                    </div>
                    <div className="col-span-6 text-gray-700 dark:text-gray-200">
                      {row.penerima}
                    </div>
                    <div className="col-span-2 text-right">
                      {row.highlight ? (
                        <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                          {row.qty}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs font-semibold">
                          {row.qty}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Chat */}
          <div className="col-span-12 xl:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    Chat
                  </h3>
                  <span className="text-xs text-gray-500">12</span>
                </div>

                <div className="text-xs text-gray-500 border rounded-lg px-3 py-1 dark:border-gray-700">
                  Start Date
                </div>
              </div>

              <div className="space-y-4 text-sm flex-1 overflow-auto pr-1">
                {[
                  {
                    name: "Tantri Hasanah",
                    role: "Sous Chef",
                    msg: "Tindidunt nullam ac odio in metus.",
                    time: "Feb 7, 2022 19.00",
                  },
                  {
                    name: "Usman Tarihoran",
                    role: "Sous Chef",
                    msg: "Odio placerat molestie euismod tristique tempus justo faucibus.",
                    time: "Feb 7, 2022 19.00",
                  },
                  {
                    name: "Sadina Vicky Safitri",
                    role: "Sous Chef",
                    msg: "Tindidunt nullam ac odio in metus.",
                    time: "Feb 7, 2022 19.00",
                  },
                  {
                    name: "Dwi Sihotang S.IP",
                    role: "Sous Chef",
                    msg: "Tindidunt tortor nam etiam nisi, mattis rutrum.",
                    time: "Feb 7, 2022 19.00",
                  },
                ].map((c, i) => (
                  <div key={i} className="border-b pb-3 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">
                          {c.name}
                        </p>
                        <p className="text-xs text-gray-400">{c.role}</p>
                      </div>
                      <p className="text-xs text-gray-400">{c.time}</p>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">{c.msg}</p>
                  </div>
                ))}
              </div>

              <button className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg font-semibold">
                Add Status
              </button>
            </div>
          </div>
        </div>
        {/* ====== END TAMBAHAN ====== */}


        {/* Grafik Distribusi */}
        <div className="col-span-12 xl:col-span-7">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <h2 className="font-bold text-gray-800 dark:text-white mb-4">
              Statistik Distribusi Bulanan
            </h2>

            <div className="h-64 flex items-center justify-center text-gray-400">
              Grafik distribusi akan ditampilkan di sini
            </div>
          </div>
        </div>

        {/* Target Bulanan */}
        <div className="col-span-12 xl:col-span-5">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <h2 className="font-bold text-gray-800 dark:text-white mb-4">
              Target Bulanan
            </h2>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Target Distribusi</p>
                <p className="font-bold text-lg">10,000 Paket</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tercapai</p>
                <p className="font-bold text-lg text-green-500">7,250 Paket</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
                  <div className="bg-blue-500 h-3 rounded-full w-[72%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div className="col-span-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <h2 className="font-bold text-gray-800 dark:text-white mb-4">
              Aktivitas Terbaru
            </h2>

            <div className="space-y-3">
              <div className="border-b pb-2">
                Distribusi makanan ke SDN 01 Bekasi
              </div>

              <div className="border-b pb-2">Penambahan 50 penerima baru</div>

              <div className="border-b pb-2">
                Update laporan distribusi harian
              </div>

              <div>Penambahan sekolah baru ke sistem</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}