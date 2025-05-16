import React from 'react';
import useSensorMonitor from '../../hooks/useSensorMonitor';

const SensorMonitor = ({ warningNotification }) => {
  const { sensorData, loading } = useSensorMonitor(warningNotification);

  if (loading) {
    console.log('센서 데이터를 불러오는 중');
  }

  return (
    <>
      <div className="temperature-2">
        <div className="text-wrapper-31">{sensorData?.temperature ?? '-'}</div>
        <div className="text-wrapper-32">°C</div>
        <div className="text-wrapper-33">온도</div>
      </div>
      <div className="humidity">
        <div className="text-wrapper-32">%</div>
        <div className="text-wrapper-33">습도</div>
        <div className="text-wrapper-31">{sensorData?.humidity ?? '-'}</div>
      </div>
      <div className="co">
        <div className="topic">CO₂농도</div>
        <div className="text-wrapper-31">{sensorData?.co2 ?? '-'}</div>
        <div className="unit">ppm</div>
      </div>
      <div className="insolation">
        <div className="insolation-unit">wh/㎡</div>
        <div className="insolation-topic">일사량</div>
        <div className="insolation-data">{sensorData?.light ?? '-'}</div>
      </div>
    </>
  );
};

export default SensorMonitor;
