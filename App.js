import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GreetingScreen from './screens/GreetingScreen';

export default function App() {
  return (
    <View>
      <GreetingScreen style={styles.container}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#FFF",
  }

  
})
