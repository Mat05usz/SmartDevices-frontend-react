export default function Device(device: SmartDevice){

    Object.entries(device).map((entry) => {
        console.log(entry[1]);
    })

    return(
        <>
        <div className="device-wrapper" onClick={(e) => {
            window.open("", "", "width=600, height=400, left=200, top=200");
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