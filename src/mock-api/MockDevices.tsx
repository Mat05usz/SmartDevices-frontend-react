export function findByID(id: string)
{
    let results = getMockDevices().filter(device => device.id === id);

    return results;
    
}

export function getMockDevices()
{
    let mockDevices = [{
        type: "bulb",
        id: '1',
        name: "Lightbulb",
        connectionState: "connected",
        isTurnedOn: true,
        brightness: Math.floor(Math.random() * 10),
        color: "yellow",
      },
      {
        type: "outlet",
        id: '2',
        name: "Outlet",
        connectionState: "connected",
        isTurnedOn: false,
        powerConsumption: Math.floor(Math.random() * 100),
      },
      {
        type: "temperatureSensor",
        id: '3',
        name: "Sensor",
        connectionState: "connected",
        temperature: Math.floor(Math.random() * 60),
      }
    ];

    return mockDevices;
}