import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SettingAccount() {
  const [loginName, setLoginName] = useState("samiahraiana");
  const [password, setPassword] = useState("password123");
  const [confirmPassword, setConfirmPassword] = useState("password123");

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="space-y-3 py-2 px-4">
      {/* HEADER */}
      <div className="border-b border-[#CFE8D6] py-2">
        <h2 className="text-lg font-semibold text-[#0A7A3F]">
          Account Setting
        </h2>
      </div>

      {/* BODY */}
      <div className="py-2 flex-1">
        <div className="border border-gray-200 rounded-xl p-6 max-w-2xl space-y-6">
          {/* MY NAME */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">My name</label>

            <p className="font-medium text-gray-700">Samiah Raina</p>
          </div>

          {/* POSITION */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">Position</label>

            <p className="font-medium text-gray-700">General Manager</p>
          </div>

          {/* LOGIN NAME */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">
              Login Name
            </label>

            <input
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              className="w-full h-11 border border-gray-300 rounded-lg px-4"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-500 block mb-1">Password</label>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#CFE8D6] p-6 flex justify-end gap-4">
        <button className="px-10 py-3 border border-[#0A7A3F] text-[#0A7A3F] rounded-xl hover:bg-green-50">
          Kembali
        </button>

        <button className="px-10 py-3 bg-[#0A7A3F] text-white rounded-xl hover:bg-green-800">
          Save
        </button>
      </div>
    </div>
  );
}
