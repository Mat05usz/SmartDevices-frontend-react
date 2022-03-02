import DeviceList from "./DeviceList";
import DeviceWindow from "./DeviceWindow";
import { useState, useEffect } from 'react';



export default function Wrapper()
{
    const [deviceClicked, setDeviceClicked] = useState<SmartDevice>(null);

    useEffect(()=>{
        console.log(deviceClicked);
    },[deviceClicked])

    return(
        <>
        <DeviceList setDeviceClicked= {setDeviceClicked}/>
        <DeviceWindow {...deviceClicked}/>
        </>
    );
}