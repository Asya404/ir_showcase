import { View, Text, Button } from './react-native';


function App() {
  return (
    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 20, with: '100%' }}>Hello!</Text>
      <Button title="Button" style={{ backgroundColor: 'green' }}></Button>
    </View>
  );    
}

export default App;