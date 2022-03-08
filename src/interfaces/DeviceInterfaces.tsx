/* eslint-disable @typescript-eslint/no-unused-vars */

/* Base class for all SmartDevices */
export class DeviceData {
  type: DeviceTypes;
  id: string;
  name: string;
  connectionState: DeviceConnectionStates;

    constructor(type: DeviceTypes, params: DeviceParams)
    {
        this.type = type;
        this.id = params[0];
        this.name = params[1];
        this.connectionState = params[2];
    }

  getFields(callParent: boolean): string[][] {return(
  [ ["Type", this.type[0].toUpperCase() + this.type.slice(1)],
  ["ID", this.id],
  ["Name", this.name],
  ["Connection State", this.connectionState]])};
}

/* SmartDevice classes extending base DeviceData class, each has their own fields
   and custom GetFields method
*/

class SmartBulb extends DeviceData {
  
  isTurnedOn: boolean;
  brightness: number;
  color: string;

  constructor(
    type: "bulb", params: SmartBulbParams
  ) {
    super(type, params.slice(0,3) as DeviceParams);

    this.isTurnedOn = params[3];
    this.brightness = params[4];
    this.color = params[5];
  }

  getFields(callParent: boolean) {
    if(callParent)
      return super.getFields(false);
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

class SmartOutlet extends DeviceData {

  isTurnedOn: boolean;
  powerConsumption: number;

  constructor(
    type: "outlet", params: SmartOutletParams
  ) {
    super(type, params.slice(0,3) as DeviceParams);

    this.isTurnedOn = params[3];
    this.powerConsumption = params[4];
  }


  getFields(callParent: boolean): string[][] {
    if(callParent)
      return super.getFields(false);
    return [
      ["Type", "Outlet"],
      ["ID", this.id],
      ["Name", this.name],
      ["Connection State", this.connectionState],
      ["Turned On", this.isTurnedOn.toString()],
      ["Power Consumption", this.powerConsumption.toString()],
    ];
  }
}

class SmartTemperatureSensor extends DeviceData {

  temperature: number;

  constructor(
    type: "temperatureSensor", params: SmartTemperatureSensorParams
  ) {
    super(type, params.slice(0,3) as DeviceParams);
    
    this.temperature = params[3];
  }


  getFields(callParent: boolean): string[][] {
    if(callParent)
      return super.getFields(false);

    return [
      ["Type", "Temperature Sensor"],
      ["ID", this.id],
      ["Name", this.name],
      ["Connection State", this.connectionState],
      ["Temperature", this.temperature.toString()],
    ];
  }
}

/* Helper types to determine fields for arguments */

type DeviceParams = [
    id: string,
  name: string,
  connectionState: DeviceConnectionStates
]

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
type SmartDeviceParams = SmartBulbParams | SmartOutletParams | SmartTemperatureSensorParams;


/* Type used outside for passing objects to components */
export type SmartDevice = SmartBulb | SmartOutlet | SmartTemperatureSensor;

/* These functions return apropriate SmartDevice based on the type passed */

export function returnDeviceObject(type:"bulb", args: SmartBulbParams): SmartBulb;
export function returnDeviceObject(type:"outlet", args: SmartOutletParams): SmartOutlet;
export function returnDeviceObject(type:"temperatureSensor", args: SmartTemperatureSensorParams): SmartTemperatureSensor;
export function returnDeviceObject(type: DeviceTypes, args: SmartDeviceParams) {
  switch (type) {
    case "bulb":
      return new SmartBulb(type, args as SmartBulbParams);
    case "outlet":
      return new SmartOutlet(type, args as SmartOutletParams);
    case "temperatureSensor":
      return new SmartTemperatureSensor(type, args as SmartTemperatureSensorParams);
  }
}
