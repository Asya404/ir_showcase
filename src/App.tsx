import { useState, useEffect } from 'react';
import { View, Text } from './react-native';


function App() {

  const equipment = [
    { name: 'Drill Rigs', img: 'drill-rig.webp', xml: 'xmls/drill-rig.xml' },
    { name: 'Chargers', img: 'charger.jpg' },
    { name: 'LHDs/Trucks', img: 'lhd.jpeg', xml: 'xmls/lhd.xml' },
    { name: 'Shotcrete Machines', img: 'shotcrete.webp' },
    { name: 'Tracking', img: 'tracking.webp' },
  ];

  const [selected, setSelected] = useState(equipment[0]);

  const [xmlContent, setXmlContent] = useState('');

  useEffect(() => {
    if (selected?.xml) {
      fetch(selected.xml)
        .then(res => res.text())
        .then(text => setXmlContent(text));
    } else {
      setXmlContent('');
    }
  }, [selected]);


  return (
    <View>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20 }}>IREDES showcase</Text>
      </div>
      <hr></hr>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {equipment.map((item, index) => (
            <li onClick={() => setSelected(item)} key={index} style={{ fontWeight: selected?.name === item.name ? 'bold' : 'normal', cursor: 'pointer', marginBottom: 10, backgroundColor: selected?.name === item.name ? '#e0e0e0' : 'transparent', padding: 5 }}>
              <Text>{item.name}</Text>
            </li>
          ))}
        </ul>
        {selected && (
          <div>
            <div style={{ backgroundImage: `url(${selected.img})`, width: 400, height: 250, backgroundSize: 'cover', marginBottom: 10 }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Text>{selected.name}</Text>
              <Text>XML example</Text>
              {xmlContent && <pre style={{ maxHeight: 350, maxWidth: 400, overflow: 'auto', background: '#f0f0f0', padding: 10 }}>
                {xmlContent}
              </pre>}
            </div>
          </div>
        )}
      </div>
    </View>
  );
}

export default App;