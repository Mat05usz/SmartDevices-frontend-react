/* eslint-disable @typescript-eslint/no-unused-vars */
interface DeviceData
{
    type: DeviceTypes; 
    id: string;
    name: string;
    connectionState: DeviceConnectionStates;
}

interface SmartBulb extends DeviceData
{
  type: 'bulb';
  isTurnedOn: boolean;
  brightness: number; 
  color: string; 
}


interface SmartOutlet extends DeviceData
{
  type: 'outlet';
  isTurnedOn: boolean;
  powerConsumption: number;
}


interface SmartTemperatureSensor extends DeviceData
{
  type: 'temperatureSensor';
  temperature: number; 
}

//interface DeviceProps extends SmartBulb, SmartOutlet, SmartTemperatureSensor {}
type DeviceTypes = 'bulb' | 'outlet' | 'temperatureSensor';
type DeviceConnectionStates = 'connected' | 'disconnected' | 'poorConnection'
type SmartDevice = SmartBulb | SmartOutlet | SmartTemperatureSensor;