import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Pesanan from "./pages/Pesanan";
import Dapur from "./pages/Dapur";
import Batches from "./pages/Batches";
import Penerima from "./pages/Penerima";
import Laporan from "./pages/Laporan";
import Pengaturan from "./pages/Pengaturan";
import Pengiriman from "./pages/Pengiriman";
import TambahPesanan from "./pages/TambahPesanan";
import TambahPenerima from "./pages/TambahPenerima";
import PesananBaru from "./pages/PesananBaru";
import NewBatch from "./pages/NewBatch";
import ModifikasiExisting from "./pages/ModifikasiExisting";
import SettingBatch from "./pages/SettingBatch";
import SettingFinance from "./pages/SettingFinance";
import SettingAccount from "./pages/SettingAccount";
import SettingShipper from "./pages/SettingShipper";
import SettingUser from "./pages/SettingUser";
import Administration from "./pages/Administration";

// Component untuk Protected Route
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Auth Routes - Outside AppLayout (No Authentication Required) */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Redirect root to login if not authenticated, or dashboard if authenticated */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard Layout - Protected Routes (Authentication Required) */}
        <Route element={<AppLayout />}>
          {/* Main Dashboard - Protected */}
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } 
          />

          {/* Menu Sidebar - Core Features - Protected */}
          <Route 
            path="/pesanan" 
            element={
              <PrivateRoute>
                <Pesanan />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/dapur" 
            element={
              <PrivateRoute>
                <Dapur />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/batches" 
            element={
              <PrivateRoute>
                <Batches />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/penerima" 
            element={
              <PrivateRoute>
                <Penerima />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/laporan" 
            element={
              <PrivateRoute>
                <Laporan />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pengaturan" 
            element={
              <PrivateRoute>
                <Pengaturan />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pengiriman" 
            element={
              <PrivateRoute>
                <Pengiriman />
              </PrivateRoute>
            } 
          />

          {/* Pesanan - Sub Routes - Protected */}
          <Route 
            path="/pesanan/tambah" 
            element={
              <PrivateRoute>
                <TambahPesanan />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pesanan/menu" 
            element={
              <PrivateRoute>
                <PesananBaru />
              </PrivateRoute>
            } 
          />

          {/* Penerima - Sub Routes - Protected */}
          <Route 
            path="/penerima/tambah" 
            element={
              <PrivateRoute>
                <TambahPenerima />
              </PrivateRoute>
            } 
          />

          {/* Batches - Sub Routes - Protected */}
          <Route 
            path="/batches/new" 
            element={
              <PrivateRoute>
                <NewBatch />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/batches/existing" 
            element={
              <PrivateRoute>
                <ModifikasiExisting />
              </PrivateRoute>
            } 
          />

          {/* Pengaturan - Sub Routes - Protected */}
          <Route 
            path="/pengaturan/batch" 
            element={
              <PrivateRoute>
                <SettingBatch />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pengaturan/finance" 
            element={
              <PrivateRoute>
                <SettingFinance />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pengaturan/account" 
            element={
              <PrivateRoute>
                <SettingAccount />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pengaturan/shipper" 
            element={
              <PrivateRoute>
                <SettingShipper />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pengaturan/user" 
            element={
              <PrivateRoute>
                <SettingUser />
              </PrivateRoute>
            } 
          />

          {/* Others Page - Protected */}
          <Route 
            path="/profile" 
            element={
              <PrivateRoute>
                <UserProfiles />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/calendar" 
            element={
              <PrivateRoute>
                <Calendar />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/blank" 
            element={
              <PrivateRoute>
                <Blank />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/administration" 
            element={
              <PrivateRoute>
                <Administration />
              </PrivateRoute>
            } 
          />

          {/* Forms - Protected */}
          <Route 
            path="/form-elements" 
            element={
              <PrivateRoute>
                <FormElements />
              </PrivateRoute>
            } 
          />

          {/* Tables - Protected */}
          <Route 
            path="/basic-tables" 
            element={
              <PrivateRoute>
                <BasicTables />
              </PrivateRoute>
            } 
          />

          {/* UI Elements - Protected */}
          <Route 
            path="/alerts" 
            element={
              <PrivateRoute>
                <Alerts />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/avatars" 
            element={
              <PrivateRoute>
                <Avatars />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/badge" 
            element={
              <PrivateRoute>
                <Badges />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/buttons" 
            element={
              <PrivateRoute>
                <Buttons />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/images" 
            element={
              <PrivateRoute>
                <Images />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/videos" 
            element={
              <PrivateRoute>
                <Videos />
              </PrivateRoute>
            } 
          />

          {/* Charts - Protected */}
          <Route 
            path="/line-chart" 
            element={
              <PrivateRoute>
                <LineChart />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/bar-chart" 
            element={
              <PrivateRoute>
                <BarChart />
              </PrivateRoute>
            } 
          />
        </Route>

        {/* Fallback Route - 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}