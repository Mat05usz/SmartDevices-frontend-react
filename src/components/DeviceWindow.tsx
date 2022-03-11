import interact from "interactjs";
import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef } from "react";
import { SmartDevice } from "../interfaces/DeviceInterfaces";
import Device from "./Device";
import "../styles/devicewindow.scss";

export default function DeviceWindow(props?: {
  device: SmartDevice;
  setDeviceClicked: Dispatch<SetStateAction<SmartDevice>>;
}) {
  let { device, setDeviceClicked } = props;

  let wasClickedBefore = useRef<boolean>(false);

  useEffect(() => {
    interact(".device-window")
      .draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: document.querySelector("body"),
            endOnly: true,
          }),
        ],
        listeners: {
          move(event) {
            var target = event.target;

            // keep the dragged position in the data-x/data-y attributes
            var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
            var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

            // translate the element
            target.style.transform = "translate(" + x + "px, " + y + "px)";

            // update the posiion attributes
            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);
          },
        },
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

        listeners: {
          move(event) {
            var target = event.target;
            var x = parseFloat(target.getAttribute("data-x")) || 0;
            var y = parseFloat(target.getAttribute("data-y")) || 0;

            // update the element's style
            target.style.width = event.rect.width + "px";
            target.style.height = event.rect.height + "px";

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.transform = "translate(" + x + "px," + y + "px)";

            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);
          },
        },
        modifiers: [
          interact.modifiers.restrictSize({
            min: { width: 300, height: 400 },
            max: { width: 600, height: 600 },
          }),
        ],

        inertia: true,
      });
  }, []);


  /*
    useEffect below exists only to place the DeviceWindow in the middle of the current screen, when 
    it's its first appearance. 
  */

  useLayoutEffect(() => {
    if (device && !wasClickedBefore.current) {
      let deviceWindow = document.querySelector(
        ".device-window"
      ) as HTMLDivElement;
      deviceWindow.style.top = `${window.scrollY + window.screen.height / 2}px`;
      deviceWindow.style.left = `${window.scrollX + window.screen.width / 2}px`;

      deviceWindow.style.transform = "translate(-50%, -50%)";
      wasClickedBefore.current = true;
    }
  }, [device]);

  return (
    <div
      className="device-window"
      style={device ? { display: "block" } : { display: "none" }}
    >
      <div
        onClick={(e) => {
          setDeviceClicked(null);
        }}
      >
        <span className="iconify close-button" data-icon="carbon:close"></span>
      </div>

      <Device device={device} showDetailed={true} />
    </div>
  );
}
