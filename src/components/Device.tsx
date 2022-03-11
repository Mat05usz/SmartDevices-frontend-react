import { Dispatch, SetStateAction } from "react";
import {
  DeviceConnectionStates,
  DeviceTypes,
  SmartDevice,
} from "../interfaces/DeviceInterfaces";
import "../styles/device.scss";

import { ReactComponent as BulbSVG } from "../svg/bulb.svg";

interface DeviceProps {
  device: SmartDevice;
  setDeviceClicked?: Dispatch<SetStateAction<SmartDevice>>;
  showDetailed: boolean;
}

const statusDotColors: Record<DeviceConnectionStates, string> = {
  connected: "#39C336",
  disconnected: "#E71F1F",
  poorConnection: "#E0C11D",
};

const deviceBackgroundColors: Record<DeviceTypes, string> = {
  bulb: "#FEF6AA",
  outlet: "#7ADA4C",
  temperatureSensor: "#f17e77",
};

const deviceDecorators: Record<
  DeviceTypes,
  | Record<"brightness" | "color", Function>
  | Record<"powerConsumption", Function>
  | Record<
      "temperature",
      Function
    > /*{getBrightness: Function, getColor: Function}*/
> = {
  bulb: {
    brightness: (brightness) => {return(
      <>
        <BulbSVG width="18" height="25" />
        <span
          className="device-detail-bulb"
          style={{
            backgroundColor: "#000000",
            opacity: 1 - brightness / 9
          }}
        ></span>
      </>);
    },
    color: (color) => { return(
      <>
        <BulbSVG width="18" height="25" />
        <span
          className="device-detail-bulb"
          style={{
            backgroundColor: color,
          }}
        ></span>
      </>);
    },
  },
  outlet: {
    powerConsumption: (powerConsumption) => {},
  },
  temperatureSensor: {
    temperature: (temperature) => {},
  },
};

export default function Device(deviceProps: DeviceProps) {
  const { device, setDeviceClicked, showDetailed } = deviceProps;

  function fetchDevice() {
    fetch(`https://api.com/devices/${device.id}`, { method: "GET" })
      .then((result) => {
        return result.json();
      })
      .then((data) => {});
  }

  function setupDeviceLayout() {
    let fields = device.getFields();

    const colouredBackground = (
      <span
        className="coloured-background"
        style={{ backgroundColor: deviceBackgroundColors[device.type] }}
      />
    );

    return (
      <>
        <p className="device-type">
          <b>{fields[0][1]}</b>
          {colouredBackground}
        </p>
        <p className="device-id">
          <i>{fields[1][1]}</i>
          {colouredBackground}
        </p>
        <p className="device-name">
          <b>{fields[2][1]}</b>
        </p>
        <div className="device-status">
          <p className="device-status-title">{fields[3][0]}</p>
          <p className="device-status-state">
            <b>{fields[3][1]}</b>
          </p>
          <div className="status-dot-container">
            <span
              className="device-status-dot"
              style={{
                backgroundColor: statusDotColors[device.connectionState],
              }}
            ></span>
          </div>
        </div>
        <div className="device-details">
          {fields
            .filter((entry, index) => showDetailed && index > 3)
            .map((entry, index) => {
              return (
                <div className="device-detail" key={index}>
                  <p className="device-detail-title">{entry[0]}</p>
                  <p className="device-detail-value">
                    <b>{entry[1]}</b>
                  </p>{entry[0] !== 'Turned On' &&
                  <div className="device-detail-decorator">
                
                    {deviceDecorators[device.type][Object.keys(device)[index + 4]](entry[1])}
                  </div>}
                </div>
              );
            })}
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="device-wrapper"
        onClick={(e) => {
          if (setDeviceClicked) setDeviceClicked(device);
          fetchDevice();
        }}
      >
        {device && setupDeviceLayout()}
      </div>
    </>
  );
}
