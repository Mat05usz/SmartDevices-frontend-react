export function findByID(id: string)
{
    let results = getMockDevices().filter(device => device.id === id);

    return results;
    
}

export function getMockDevices()
{
    let mockDevices = [{
        type: "bulb",
        id: 'dsde32asf1',
        name: "Lightbulb",
        connectionState: `${Math.floor(Math.random() * 100) > 20 ? 'connected' : `${Math.floor(Math.random() * 100) > 20 ? 'poorConnection' : 'disconnected'}`}`,
        isTurnedOn: true,
        brightness: Math.floor(Math.random() * 10),
        color: `#${Math.floor(Math.random() * 99)}FF00`,
      },
      {
        type: "outlet",
        id: 'dsde32asf2',
        name: "Outlet",
        connectionState: `${Math.floor(Math.random() * 100) > 20 ? 'connected' : 'poorConnection'}`,
        isTurnedOn: false,
        powerConsumption: Math.floor(Math.random() * 100),
      },
      {
        type: "temperatureSensor",
        id: 'dsde32asf3',
        name: "Sensor",
        connectionState: `${Math.floor(Math.random() * 100) > 20 ? 'connected' : 'poorConnection'}`,
        temperature: Math.floor(Math.random() * 60),
      },
      {
        type: "temperatureSensor",
        id: 'dsde32asf4',
        name: "Sensor",
        connectionState: `${Math.floor(Math.random() * 100) > 20 ? 'connected' : 'poorConnection'}`,
        temperature: Math.floor(Math.random() * 60),
      },
      {
        type: "bulb",
        id: 'dsde32asf5',
        name: "Lightbulb",
        connectionState: `${Math.floor(Math.random() * 100) > 20 ? 'connected' : 'poorConnection'}`,
        isTurnedOn: true,
        brightness: Math.floor(Math.random() * 10),
        color: `#${Math.floor(Math.random() * 89) + 10}FF00`,
      }
    ];

    return mockDevices;
}