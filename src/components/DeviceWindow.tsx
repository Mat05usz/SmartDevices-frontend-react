import interact from "interactjs";
import { useEffect } from "react";
import { SmartDevice } from "../interfaces/DeviceInterfaces";

export default function DeviceWindow(props?: {device: SmartDevice}) {

    let {device} = props;

  useEffect(() => {
    
    console.log("MOUNTED");

    interact(".device-window").draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          }),
      ],
      // Step 3
      listeners: {
        move(event) {
          /*
                  const sliderWidth = interact.getElementRect(event.target).width
                  const value = event.pageX / sliderWidth
          
                  event.target.style.paddingLeft = (value * 100) + '%'
                  event.target.setAttribute('data-value', value.toFixed(2))*/
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
        end(event) {
          console.log("stopped");
        },
      },
    });
  }, []);

  return <div className="device-window">{device && device.getFields().map((entry, index) => {
      return <p key={index}>{entry[0]}: {entry[1]}</p>
  })}
  </div>;
}
