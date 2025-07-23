import React, { useState, useEffect } from 'react';
import { RobotVisualizer } from './components/RobotVisualizer';
import { ControlPanel } from './components/ControlPanel';
import { MovementControls } from './components/MovementControls';
import { DiagnosticsPanel } from './components/DiagnosticsPanel';
import { VoiceCommands } from './components/VoiceCommands';
import { TaskScheduler } from './components/TaskScheduler';
import { SensorReadings } from './components/SensorReadings';
import { EmergencyControls } from './components/EmergencyControls';
import { AdvancedFunctions } from './components/AdvancedFunctions';
import { RealTimeChat } from './components/RealTimeChat';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { SecuritySystem } from './components/SecuritySystem';
import { WeatherEnvironment } from './components/WeatherEnvironment';
import { MissionControl } from './components/MissionControl';
import { NetworkConnectivity } from './components/NetworkConnectivity';
import { MaintenanceScheduler } from './components/MaintenanceScheduler';
import { BatteryManagement } from './components/BatteryManagement';
import { Bot, Wifi, WifiOff } from 'lucide-react';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [battery, setBattery] = useState(85);
  const [systemStatus, setSystemStatus] = useState('Standby');
  const [lastAction, setLastAction] = useState('');
  const [notifications, setNotifications] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState<string[]>([]);
  
  const [parts, setParts] = useState({
    head: false,
    torso: false,
    leftArm: false,
    rightArm: false,
    leftLeg: false,
    rightLeg: false
  });

  // Add notification system
  const addNotification = (message: string) => {
    setNotifications(prev => [...prev.slice(-4), message]);
    setTimeout(() => {
      setNotifications(prev => prev.slice(1));
    }, 5000);
  };
export default App;
