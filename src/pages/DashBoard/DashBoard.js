import React from "react";
import Actuator from "../../components/DashBoardSection/Actuator";
import { Ai } from "./sections/Ai";
import { Energy } from "./sections/Energy";
import { Soil } from "./sections/Soil";
import UsageStatus from "../../components/DashBoardSection/UseStatus";
import Weather from "../../components/DashBoardSection/Weather";
import "./style.css";

const DashBoard = ({ sensorData }) => {
  return (
    <div className="dashboard-content">
      {/* 1행: 현재기온 + 명령어 입력 */}
      <div className="row row-1">
        <Weather />
        <Ai />
      </div>

      {/* 2행: 토양환경 */}
      <div className="row row-2">
        <div className="soil-wrapper">
          <Soil />
        </div>
      </div>

      {/* 3행: 센서 카드들 */}
      <div className="row row-3 sensor-row">
        <div className="sensor-card">
          <div className="label">온도</div>
          <div className="value">23°C</div>
        </div>
        <div className="sensor-card">
          <div className="label">습도</div>
          <div className="value">68%</div>
        </div>
        <div className="sensor-card">
          <div className="label">CO₂농도</div>
          <div className="value">527 ppm</div>
        </div>
        <div className="sensor-card">
          <div className="label">일사량</div>
          <div className="value">1.824 kWh/㎡</div>
        </div>
      </div>

      {/* 4행: 에너지, 사용현황, 제어시스템 */}
      <div className="row row-4">
        <Energy />
        <UsageStatus />
        <Actuator />
      </div>

      {/* 디버깅용 sensorData 출력 */}
      <pre style={{ marginTop: "40px", background: "#eee", padding: "10px" }}>
        {JSON.stringify(sensorData, null, 2)}
      </pre>
    </div>
  );
};

export default DashBoard;

