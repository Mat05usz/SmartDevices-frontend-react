import { useState } from "react";
import Device from "./Device";

export default function DeviceList() {
  const [devices, setDevices] = useState<SmartDevice[]>([
    {
      name: "Lightbulb",
      id: "dummyID",
      type: "bulb",
      connectionState: "connected",
      isTurnedOn: true,
      brightness: 3,
      color: "yellow"
    },
    {
      name: "Outlet",
      id: "dummyID",
      type: "outlet",
      connectionState: "connected",
      isTurnedOn: false,
      powerConsumption: 30
    },
    {
      name: "Sensor",
      id: "dummyID",
      type: "temperatureSensor",
      connectionState: "connected",
      temperature: 20
    },
  ]);

  return (
    <>
      {devices.map((device, index) => {
        return <Device {...device} key={index}/>;
      })}
    </>
  );
}
