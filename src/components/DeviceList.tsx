import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Device from "./Device";
import {
  returnDeviceObject,
  SmartDevice
} from "../interfaces/DeviceInterfaces";

interface DeviceListProps {
  deviceClicked: SmartDevice;
  setDeviceClicked: Dispatch<SetStateAction<SmartDevice>>;
}

export default function DeviceList(deviceListProps: DeviceListProps) {
  const [devices, setDevices] = useState<SmartDevice[]>();

  let { deviceClicked, setDeviceClicked } = deviceListProps;

  useEffect(() => {

    let connection = new WebSocket('ws://api.com/v1/refresh');
    connection.onmessage = event => {
        let data = JSON.parse(event.data);
        let fetchedDevices: SmartDevice[] = [];

          for (let device of data) {
            let values = Object.values(device) ;
            
            fetchedDevices.push(
              returnDeviceObject(values[0] as any, values.slice(1) as any)
            );
          }
          setDevices(fetchedDevices);
    }
    /*setInterval(() => {
      fetch("https://api.com/devices", { method: "GET" })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          let fetchedDevices: SmartDevice[] = [];

          for (let device of data) {
            let values = Object.values(device);
            fetchedDevices.push(
              returnDeviceObject(values[0] as any, values.slice(1) as any)
            );
          }
          setDevices(fetchedDevices);
        });
    }, 1000);*/
    return ()=>{connection.close()};
  }, []);

  useEffect(() => {
      if(devices && deviceClicked)
      {
          setDeviceClicked(devices.filter(device => device.id === deviceClicked.id)[0]);
      }
  }, [devices]);

  return (
    <>
      {devices &&
        devices.map((device, index) => {
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
