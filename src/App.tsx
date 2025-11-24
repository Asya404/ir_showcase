import { useState } from 'react';
import { View, Text, Button } from './react-native';


function App() {

  const equipment = [
    { name: 'Drill Rigs', img: 'drill-rig.webp' },
    { name: 'Chargers', img: 'charger.jpg' },
    { name: 'LHDs/Trucks', img: 'lhd.jpeg' },
    { name: 'Shotcrete Machines', img: 'shotcrete.webp' },
    { name: 'Tracking', img: 'tracking.webp' },
  ];

  const [selected, setSelected] = useState(equipment[0]);

  return (
    <View>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, with: '100%' }}>IREDES showcase</Text>
        <Button title="Button" style={{ backgroundColor: 'green' }}></Button>
      </div>
      <hr></hr>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <ul>
          {equipment.map((item, index) => (
            <li onClick={() => setSelected(item)} key={index}>
              <Text>{item.name}</Text>
            </li>
          ))}
        </ul>
        {selected && (
          <div>
            <div style={{ backgroundImage: `url(${selected.img})`, width: 100, height: 100, backgroundSize: 'cover', marginBottom: 10 }}></div>
            <div>
              <Text>{selected.name}</Text>
            </div>
          </div>
        )}
      </div>
    </View>
  );
}

export default App;