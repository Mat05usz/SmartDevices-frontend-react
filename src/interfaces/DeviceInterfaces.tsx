/* eslint-disable @typescript-eslint/no-unused-vars */
interface DeviceData {
  type: DeviceTypes;
  id: string;
  name: string;
  connectionState: DeviceConnectionStates;
  getFields(): string[][];
}

class SmartBulb implements DeviceData {
  type: "bulb";
  id: string;
  name: string;
  connectionState: DeviceConnectionStates;
  isTurnedOn: boolean;
  brightness: number;
  color: string;

  constructor(
    type: "bulb", params: SmartBulbParams
  ) {
    this.type = type;
    this.id = params[0];
    this.name = params[1];
    this.connectionState = params[2];
    this.isTurnedOn = params[3];
    this.brightness = params[4];
    this.color = params[5];
  }

  getFields() {
    return [
      ["Type", "Bulb"],
      ["ID", this.id],
      ["Name", this.name],
      ["Connection State", this.connectionState],
      ["Turned On", this.isTurnedOn.toString()],
      ["Brightness", this.brightness.toString()],
      ["Color", this.color],
    ];
  }
}

class SmartOutlet implements DeviceData {
  type: "outlet";
  id: string;
  name: string;
  connectionState: DeviceConnectionStates;
  isTurnedOn: boolean;
  powerConsumption: number;

  constructor(
    type: "outlet", params: SmartOutletParams
  ) {
    this.type = type;
    this.id = params[0];
    this.name = params[1];
    this.connectionState = params[2];
    this.isTurnedOn = params[3];
    this.powerConsumption = params[4];
  }


  getFields(): string[][] {
    return [
      ["Type", "Outlet"],
      ["ID", this.id],
      ["Name", this.name],
      ["Connection State", this.connectionState],
      ["Turned On", this.isTurnedOn.toString()],
      ["Brightness", this.powerConsumption.toString()],
    ];
  }
}

class SmartTemperatureSensor implements DeviceData {
  type: "temperatureSensor";
  id: string;
  name: string;
  connectionState: DeviceConnectionStates;
  temperature: number;

  constructor(
    type: "temperatureSensor", params: SmartTemperatureSensorParams
  ) {
    this.type = type;
    this.id = params[0];
    this.name = params[1];
    this.connectionState = params[2];
    this.temperature = params[3];
  }


  getFields(): string[][] {
    return [
      ["Type", "Bulb"],
      ["ID", this.id],
      ["Name", this.name],
      ["Connection State", this.connectionState],
      ["Temperature", this.temperature.toString()],
    ];
  }
}

type SmartBulbParams = [
    id: string,
  name: string,
  connectionState: DeviceConnectionStates,
  isTurnedOn: boolean,
  brightness: number,
  color: string
]

type SmartOutletParams = [
    id: string,
  name: string,
  connectionState: DeviceConnectionStates,
  isTurnedOn: boolean,
  powerConsumption: number
]

type SmartTemperatureSensorParams = [
    id: string,
  name: string,
  connectionState: DeviceConnectionStates,
  temperature: number
]


type DeviceTypes = "bulb" | "outlet" | "temperatureSensor";
type DeviceConnectionStates = "connected" | "disconnected" | "poorConnection";

export type SmartDevice = SmartBulb | SmartOutlet | SmartTemperatureSensor;
type SmartDeviceParams = SmartBulbParams | SmartOutletParams | SmartTemperatureSensorParams;

export function returnDeviceObject(type:"bulb", ...args: SmartBulbParams): SmartBulb;
export function returnDeviceObject(type:"outlet", ...args: SmartOutletParams): SmartOutlet;
export function returnDeviceObject(type:"temperatureSensor", ...args: SmartTemperatureSensorParams): SmartTemperatureSensor;
export function returnDeviceObject(type: DeviceTypes, ...args: SmartDeviceParams) {
  switch (type) {
    case "bulb":
      return new SmartBulb(type, args as SmartBulbParams);
    case "outlet":
      return new SmartOutlet(type, args as SmartOutletParams);
    case "temperatureSensor":
      return new SmartTemperatureSensor(type, args as SmartTemperatureSensorParams);
  }
}
