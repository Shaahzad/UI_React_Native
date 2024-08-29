import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Homescreen"
import Welcomescreen from "./screens/Welcomescreen"
import Loginscreen from "./screens/Loginscreen"
import Signupscreen from "./screens/Signupscreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={Welcomescreen} />
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Signup" component={Signupscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


