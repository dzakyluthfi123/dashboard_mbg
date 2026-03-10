import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
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

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Menu Sidebar */}
            <Route path="/pesanan" element={<Pesanan />} />
            <Route path="/dapur" element={<Dapur />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/penerima" element={<Penerima />} />
            <Route path="/laporan" element={<Laporan />} />
            <Route path="/pengaturan" element={<Pengaturan />} />
            <Route path="/pengiriman" element={<Pengiriman />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/administration" element={<Administration />} />


            {/* Pesanan */}
            <Route path="/pesanan/tambah" element={<TambahPesanan />} />
            <Route path="/pesanan/menu" element={<PesananBaru />} />

            {/* Penerima */}
            <Route path="/penerima" element={<Penerima />} />
            <Route path="/penerima/tambah" element={<TambahPenerima />} />

            {/* Batches */}
            <Route path="/batches/new" element={<NewBatch />} />
            <Route path="/batches/existing" element={<ModifikasiExisting />} />

            {/* Pengaturan */}
            <Route path="/pengaturan/batch" element={<SettingBatch />} />
            <Route path="/pengaturan/finance" element={<SettingFinance />} />
            <Route path="/pengaturan/account" element={<SettingAccount />} />
            <Route path="/pengaturan/shipper" element={<SettingShipper />} />
            <Route path="/pengaturan/user" element={<SettingUser />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
