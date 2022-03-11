import DeviceList from "./DeviceList";
import DeviceWindow from "./DeviceWindow";
import { useState, useEffect } from 'react';
import { SmartDevice } from "../interfaces/DeviceInterfaces";
import '../styles/wrapper.scss';


export default function Wrapper()
{
    const [deviceClicked, setDeviceClicked] = useState<SmartDevice>(null);

    return(
        <div className="wrapper">
        <DeviceList deviceClicked={deviceClicked} setDeviceClicked= {setDeviceClicked}/>
        <DeviceWindow device={deviceClicked} setDeviceClicked = {setDeviceClicked}/>
        </div>
    );
}