import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';
import Setting from './pages/Setting';
import SettingAccount from './pages/SettingAccount';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DataStatistics from './pages/DataStatistics';
import useSensorMonitor from './hooks/useSensorMonitor';
import usePushNotification from './hooks/usePushNotification';
// 로그인/회원가입/비밀번호찾기/채팅 페이지
import { Screen } from './pages/Screen'; // 로그인
import { ScreenScreen } from './pages/ScreenScreen'; // 회원가입
import { FormForgotPassword } from './pages/FormForgotPassword'; // 비번찾기
import { Screen2 } from './pages/Screen2'; // 채팅

function App() {
  const { warningNotification } = usePushNotification();
  const { sensorData, loading } = useSensorMonitor(warningNotification);
  const location = useLocation();

  // 로그인/회원가입/비번찾기/채팅은 전체화면 단독 렌더링
  const isAuthPage = ["/", "/screen", "/screen2", "/findpassword", "/chat"].includes(location.pathname);

  if (loading) return <div>Loading...</div>;

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/screen2" element={<ScreenScreen />} />
        <Route path="/findpassword" element={<FormForgotPassword />} />
        <Route path="/chat" element={<Screen2 />} />
      </Routes>
    );
  }

  // 그 외 페이지는 Navbar + Sidebar 포함된 레이아웃으로 렌더링
  return (
    <div>
      <Navbar />
      <div className="layout-row">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<DashBoard sensorData={sensorData} />} />
            <Route path="/DashBaord" element={<DashBoard sensorData={sensorData} />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/SettingAccount" element={<SettingAccount />} />
            <Route path="/DataStatistics" element={<DataStatistics />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;









