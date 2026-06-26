import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  User, 
  Lock, 
  LogIn, 
  Sparkles, 
  ChevronRight,
  Shield,
  Award,
  Heart,
  Globe,
  XCircle, // Tambahan ikon untuk error
  AlertCircle // Tambahan ikon untuk error
} from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  
  // State untuk Popup Notification
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);

      // ====== VALIDASI LOGIN ======
      if (email === 'admin' && password === 'admin123') {
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = '/dashboard';
      } else {
        // Menampilkan Pop-up Modern, bukan alert biasa
        setErrorMessage('Username atau Password yang Anda masukkan salah!');
        setShowError(true);
        
        // Notifikasi otomatis hilang setelah 4 detik
        setTimeout(() => {
          setShowError(false);
        }, 4000);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row relative">
      
      {/* ========== CUSTOM TOAST NOTIFICATION (ANIMASI ELEGAN) ========== */}
      <div 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          showError 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-12 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border border-red-200 shadow-2xl shadow-red-500/10 rounded-2xl p-4 pr-6 flex items-center gap-4 min-w-[320px] md:min-w-[400px] max-w-[90vw]">
          {/* Icon Container */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
            <XCircle className="w-6 h-6" />
          </div>
          
          {/* Text Content */}
          <div className="flex-1">
            <h4 className="text-sm font-bold text-gray-800">Login Gagal</h4>
            <p className="text-sm text-gray-600">{errorMessage}</p>
          </div>

          {/* Close Button */}
          <button 
            onClick={() => setShowError(false)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ========== LEFT SECTION - BRANDING ========== */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
        
        {/* BACKGROUND IMAGE - CHANGED HERE */}
        <div className="absolute inset-0">
          <img 
            src="/images/anakmbg.png" 
            alt="Anak Indonesia" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay agar teks tetap terbaca */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0f2847]/60 to-[#1a365d]/40"></div>
        </div>
        
        {/* Grid Pattern (Tetap dipertahankan sebagai aksen) */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative z-10 flex flex-col h-full p-12 lg:p-16">
          {/* Header - Logo */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-2.5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <img 
                    src="/images/badangizi.png" 
                    alt="Badan Gizi Nasional" 
                    className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <span className="text-white font-bold text-2xl tracking-tight block leading-tight">MBG</span>
                <span className="text-blue-300/60 text-[10px] font-medium tracking-[0.2em] uppercase">Makan Bergizi Gratis</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <span className="text-white/50 text-[10px] font-medium tracking-wider flex items-center gap-1.5">
                <Shield className="w-3 h-3" />
                Badan Gizi
              </span>
            </div>
          </div>
          
          {/* Hero Content - Center */}
          <div className="flex-1 flex flex-col justify-center items-center text-center -mt-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/20 rounded-full px-5 py-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-400 text-[10px] font-medium tracking-[0.15em] uppercase">Program Prioritas Nasional</span>
            </div>
            
            <h2 className="text-5xl xl:text-6xl font-bold leading-[1.1]">
              <span className="text-white">Generasi Sehat</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent animate-gradient">
                Indonesia Kuat
              </span>
            </h2>
            
            <p className="text-blue-200/60 text-base leading-relaxed max-w-sm">
              MBG hadir untuk memastikan setiap anak mendapatkan asupan gizi terbaik untuk masa depan yang lebih cerah.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-2">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-400/60" />
                <span className="text-white/40 text-xs">10K+</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400/60" />
                <span className="text-white/40 text-xs">Bersertifikat</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400/60" />
                <span className="text-white/40 text-xs">Nasional</span>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="pt-6 mt-2 border-t border-white/5">
            <p className="text-blue-300/30 text-[10px] text-center font-medium tracking-wider">
              Kementerian / Badan Gizi Nasional
            </p>
          </div>
        </div>
      </div>

      {/* ========== RIGHT SECTION - LOGIN FORM ========== */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10 lg:p-16 bg-gradient-to-b from-white via-white to-blue-50/30">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="md:hidden mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-lg">
                  <img 
                    src="/images/badangizi.png" 
                    alt="Badan Gizi Nasional" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="text-blue-900 font-bold text-xl block leading-tight">MBG</span>
                <span className="text-blue-400 text-[8px] font-medium tracking-[0.15em] uppercase">Makan Bergizi Gratis</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Selamat Datang!</h1>
            <p className="text-gray-500 text-sm">Silakan masuk untuk melanjutkan</p>
          </div>

          {/* Desktop Welcome */}
          <div className="hidden md:block mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              <span className="text-blue-600 text-xs font-semibold tracking-wider uppercase">Akses Dashboard</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Selamat Datang!</h1>
            <p className="text-gray-500">Silakan masuk untuk mengakses dashboard MBG</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email / Username
              </label>
              <div className={`relative transition-all duration-300 ${isFocused ? 'scale-[1.01]' : ''}`}>
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-blue-600' : 'text-gray-400'}`}>
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50/80 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400 focus:bg-white"
                  placeholder="Masukkan email atau username"
                  required
                />
                <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-blue-600/5 to-purple-600/5`}></div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50/80 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400 focus:bg-white"
                  placeholder="Masukkan password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${isFocusedPassword ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-blue-600/5 to-purple-600/5`}></div>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-300 inline-flex items-center gap-1">
                Lupa Password?
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:from-blue-950 hover:via-blue-900 hover:to-blue-950 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memproses...
                </>
              ) : (
                <>
                  Masuk ke Dashboard
                  <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider">
                atau masuk dengan
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="relative w-full py-3.5 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50/80 text-gray-700 font-medium rounded-2xl transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-3 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 24 48 24z"/>
              </svg>
              Masuk dengan Google
            </button>

            {/* Register Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Belum punya akun?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-300 inline-flex items-center gap-1 group">
                  Hubungi Administrator
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </p>
            </div>
          </form>

          {/* Footer Mobile */}
          <div className="mt-8 pt-6 border-t border-gray-100 md:hidden">
            <p className="text-gray-400 text-[10px] text-center font-medium tracking-wider">
              Kementerian / Badan Gizi Nasional
            </p>
          </div>
        </div>
      </div>

      {/* ========== ANIMATIONS ========== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.2); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(0.9); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 5s ease-in-out infinite;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 3.5s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;