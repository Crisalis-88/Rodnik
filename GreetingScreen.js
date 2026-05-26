import { StyleSheet, Text, Platform, StatusBar, View} from 'react-native';
// import { ImageBackground } from 'react-native/types_generated/index';
import { LinearGradient } from 'expo-linear-gradient';
import { WelcomeComponent } from "../components/WelcomeComponent";

function GreetingScreen() {
  return (
    <LinearGradient
        // Array of at least two colors
    colors={['#00F260E5', '#0072FF']}
    // Optional: Gradient direction
    start={{ x: 0, y: 0 }} 
    end={{ x: 1, y: 1 }}
    style={{ flex: 1 }}>
        <View>
            <View>
                <WelcomeComponent name="Misha"/>
            </View>
        </View>

    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
    body:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
        paddingInline:20
    }
});

export default GreetingScreen;