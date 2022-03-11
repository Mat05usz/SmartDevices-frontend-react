import interact from "interactjs";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { SmartDevice } from "../interfaces/DeviceInterfaces";
import Device from "./Device";
import "../styles/devicewindow.scss";

export default function DeviceWindow(props?: {
  device: SmartDevice;
  setDeviceClicked: Dispatch<SetStateAction<SmartDevice>>;
}) {
  let { device, setDeviceClicked } = props;
  
  useEffect(() => {

    let deviceDiv = document.querySelector('.device-window') as HTMLDivElement;
    //deviceDiv.style.left = document.get
   

    interact(".device-window").draggable({
      inertia: true,
       modifiers: [
        interact.modifiers.restrictRect({
            restriction: document.querySelector('body'),
            endOnly: true
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
    }).resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },
  
      listeners: {
        move (event) {
          var target = event.target
          var x = (parseFloat(target.getAttribute('data-x')) || 0)
          var y = (parseFloat(target.getAttribute('data-y')) || 0)
  
          // update the element's style
          target.style.width = event.rect.width + 'px'
          target.style.height = event.rect.height + 'px'
  
          // translate when resizing from top or left edges
          x += event.deltaRect.left
          y += event.deltaRect.top
  
          target.style.transform = 'translate(' + x + 'px,' + y + 'px)'
  
          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
        }
      },
      modifiers: [
       
        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 300, height: 400 },
          max: {width: 600, height: 1000}
        })
      ],
  
      inertia: true
    });
  }, []);

  return (
    <div
      className="device-window"
      style={device ? { display: "block" } : { display: "none" }} 
    >
      <div className="" onClick={(e) => {e.preventDefault() ;console.log("test")
          setDeviceClicked(null);
        }}><span className="iconify close-button" data-icon="carbon:close"></span></div>
  
      
      <Device device={device} showDetailed={true} />
    </div>
  );
}
