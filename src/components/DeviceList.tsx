import { useState } from "react";
import Device from "./Device";

export default function DeviceList() {
  const [devices, setDevices] = useState<DeviceData[]>([
    {
      name: "Lightbulb",
    },
    {
      name: "Contact",
    },
    {
      name: "Sensor",
    },
  ]);

  return (
    <>
      {devices.map((device, index) => {
        return <Device name={device.name} key={index}/>;
      })}
    </>
  );
}
