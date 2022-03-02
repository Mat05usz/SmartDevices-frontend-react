import { Dispatch, SetStateAction } from "react";

interface DeviceProps {
    device: SmartDevice,
    setDeviceClicked : Dispatch<SetStateAction<SmartDevice>>
}

export default function Device(deviceProps: DeviceProps){

    const {device, setDeviceClicked} = deviceProps;

    return(
        <>
        <div className="device-wrapper" onClick={(e) => {
            setDeviceClicked(device);
        }}>
            {
                Object.entries(device).map((entry, index) => {
                    return <p key={index}>{entry}</p>
                })
            }
        </div>
        </>
    );
}