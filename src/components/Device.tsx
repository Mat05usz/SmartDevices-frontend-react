
export default function Device(props: DeviceData){


    return(
        <>
        <div className="device-wrapper" onClick={(e) => {
            window.open("", "", "width=600, height=400, left=200, top=200");
        }}>
            <p>{props.name}</p>
        </div>
        </>
    );
}