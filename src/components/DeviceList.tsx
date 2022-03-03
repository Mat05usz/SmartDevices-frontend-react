import { Dispatch, SetStateAction, useState } from "react";
import Device from "./Device";
import { returnDeviceObject, SmartDevice } from '../interfaces/DeviceInterfaces';

interface DeviceListProps {
  setDeviceClicked: Dispatch<SetStateAction<SmartDevice>>;
}

export default function DeviceList(deviceListProps: DeviceListProps) {
  const [devices, setDevices] = useState<SmartDevice[]>([returnDeviceObject("outlet", "d", "d", "connected", true, 3),
  returnDeviceObject("bulb", "Lightbulb", "dummyID", "connected", true, 3, "yellow"),
  returnDeviceObject("temperatureSensor", "Sensor", "dummyID", "connected", 20)
   /* {
      name: "Lightbulb",
      id: "dummyID",
      type: "bulb",
      connectionState: "connected",
      isTurnedOn: true,
      brightness: 3,
      color: "yellow",
      
    },
    {
      name: "Outlet",
      id: "dummyID",
      type: "outlet",
      connectionState: "connected",
      isTurnedOn: false,
      powerConsumption: 30,
    },
    {
      name: "Sensor",
      id: "dummyID",
      type: "temperatureSensor",
      connectionState: "connected",
      temperature: 20,
    },*/
  ]);

  return (
    <>
      {devices.map((device, index) => {
        return (
          <Device
            device={device}
            setDeviceClicked={deviceListProps.setDeviceClicked}
            key={index}
          />
        );
      })}
    </>
  );
}
