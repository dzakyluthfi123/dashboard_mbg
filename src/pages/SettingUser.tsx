import { useState } from "react";
import { Plus, Eye, EyeOff } from "lucide-react";

type User = {
  name: string;
  position: string;
  login: string;
  password: string;
};

export default function UserSettings() {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [users, setUsers] = useState<User[]>([
    {
      name: "Rizki Saputra",
      position: "Pimpinan Pusat",
      login: "rizki",
      password: "12345678",
    },
    {
      name: "Muhammad Reyhandi",
      position: "Pimpinan Daerah",
      login: "reyhandi",
      password: "12345678",
    },
    {
      name: "Joko Susanto",
      position: "Pimpinan Dapur Bersama Terkait",
      login: "balidinrangga",
      password: "12345678",
    },
    {
      name: "Rizki Saputra",
      position: "Head Chef",
      login: "chef",
      password: "12345678",
    },
    {
      name: "Maulana Ibrahim",
      position: "Menejer",
      login: "maulana",
      password: "12345678",
    },
    {
      name: "Maulana Ibrahim",
      position: "Kepala Operasional",
      login: "operasional",
      password: "12345678",
    },
    {
      name: "Rizki Saputra",
      position: "Pimpinan Pusat",
      login: "rizki",
      password: "12345678",
    },
    {
      name: "Muhammad Reyhandi",
      position: "Pimpinan Daerah",
      login: "reyhandi",
      password: "12345678",
    },
    {
      name: "Joko Susanto",
      position: "Pimpinan Dapur Bersama Terkait",
      login: "balidinrangga",
      password: "12345678",
    },
    {
      name: "Rizki Saputra",
      position: "Head Chef",
      login: "chef",
      password: "12345678",
    },
    {
      name: "Maulana Ibrahim",
      position: "Menejer",
      login: "maulana",
      password: "12345678",
    },
    {
      name: "Maulana Ibrahim",
      position: "Kepala Operasional",
      login: "operasional",
      password: "12345678",
    },
  ]);

  const selected = users[selectedIndex];

  const updateField = (field: keyof User, value: string) => {
    const updated = [...users];
    updated[selectedIndex][field] = value;
    setUsers(updated);
  };

  return (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-[#CFE8D6]">
        <button className="bg-green-700 text-white p-2 rounded-lg">
          <Plus size={18} />
        </button>

        <h2 className="text-lg font-semibold text-[#0A7A3F]">User</h2>
      </div>

      {/* BODY */}
      <div className="grid grid-cols-12 flex-1">
        {/* LEFT TABLE */}
        <div className="col-span-7 border-r border-[#CFE8D6]">
          {/* HEADER TABLE */}
          <div className="grid grid-cols-12 px-6 py-3 text-sm font-semibold text-orange-500 border-b">
            <div className="col-span-6">Name</div>
            <div className="col-span-6">Position</div>
          </div>

          {/* ROWS */}
          <div className="divide-y max-h-[500px] overflow-auto">
            {users.map((u, i) => {
              const active = i === selectedIndex;

              return (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-full text-left grid grid-cols-12 px-6 py-4 text-sm items-center transition
                  ${active ? "bg-[#FCEFD8]" : "hover:bg-gray-50"}`}
                >
                  <div className="col-span-6 font-medium text-gray-700">
                    {u.name}
                  </div>

                  <div className="col-span-6 text-gray-600">{u.position}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT DETAIL */}
        <div className="col-span-5 flex flex-col">
          <div className="px-6 py-4 border-b border-[#CFE8D6]">
            <h3 className="font-semibold text-[#0A7A3F]">User Information</h3>
          </div>

          <div className="p-6 space-y-5 flex-1">
            {/* EMPLOYEE NAME */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Employee Name
                </label>

                <input
                  value={selected.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full h-11 border border-gray-300 rounded-lg px-4"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 block mb-1">
                  Login Name
                </label>

                <input
                  value={selected.login}
                  onChange={(e) => updateField("login", e.target.value)}
                  className="w-full h-11 border border-gray-300 rounded-lg px-4"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={selected.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={selected.password}
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* POSITION */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">
                Position
              </label>

              <select
                value={selected.position}
                onChange={(e) => updateField("position", e.target.value)}
                className="w-full h-11 border border-gray-300 rounded-lg px-4"
              >
                <option>Pimpinan Pusat</option>
                <option>Pimpinan Daerah</option>
                <option>Head Chef</option>
                <option>Sous Chef</option>
                <option>Admin</option>
              </select>
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
