import { Dispatch, SetStateAction } from "react";
import { SmartDevice } from "../interfaces/DeviceInterfaces";

interface DeviceProps {
  device: SmartDevice;
  setDeviceClicked: Dispatch<SetStateAction<SmartDevice>>;
}

export default function Device(deviceProps: DeviceProps) {
  const { device, setDeviceClicked } = deviceProps;

    function fetchDevice()
    {
        fetch(`https://api.com/devices/${device.id}`, {method: "GET"}).then((result) => {
            
            return result.json()
        }).then((data)=>{
            
           
        });
    }

  return (
    <>
      <div
        className="device-wrapper"
        onClick={(e) => {
          setDeviceClicked(device);
          fetchDevice();
        }}
      >
        {device &&
          device.getFields().map((entry, index) => {
            return (
              <p key={index}>
                {entry[0]}: {entry[1]}
              </p>
            );
          })}
      </div>
    </>
  );
}
