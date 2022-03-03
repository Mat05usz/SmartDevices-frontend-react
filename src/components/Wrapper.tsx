import DeviceList from "./DeviceList";
import DeviceWindow from "./DeviceWindow";
import { useState, useEffect } from 'react';
import { SmartDevice } from "../interfaces/DeviceInterfaces";



export default function Wrapper()
{
    const [deviceClicked, setDeviceClicked] = useState<SmartDevice>(null);

    useEffect(()=>{
        console.dir(deviceClicked);
    },[deviceClicked])

    return(
        <>
        <DeviceList setDeviceClicked= {setDeviceClicked}/>
        <DeviceWindow device={deviceClicked}/>

        </>
    );
}