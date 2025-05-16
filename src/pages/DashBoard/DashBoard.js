import React from 'react';
import Actuator from '../../components/DashBoardSection/Actuator';
import Ai from './sections/Ai/Ai';
import Energy from './sections//Energy/Energy';
import Soil from './sections/Soil/Soil';
import Weather from '../../components/DashBoardSection/Weather';
import UsageStatus from '../../components/DashBoardSection/UseStatus';
import SensorMonitor from '../../components/DashBoardSection/SensorMonitor';
import './DashBoard.css';

// 이름 수정: Dashboard → DashBoard
const DashBoard = () => {
  return (
    <div className="dashboard" data-model-id="38:787">
      <div className="div-3">
        <Soil />
        <SensorMonitor />
        <Actuator />
        <Energy />
        <UsageStatus />
        <Weather />
        <Ai />
      </div>
    </div>
  );
};

// 이름 통일
export default DashBoard;
