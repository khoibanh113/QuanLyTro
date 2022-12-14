import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListRoom from "../Screens/ListRoom";
import LoginScreen from "../Screens/LoginScreen";
import DetailsRoom from "../Screens/DetailsRoom";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListRoom"
          component={ListRoom}
          options={{
            headerBackVisible: false,
            title: "Danh sách các dãy phòng trọ",
          }}
        />

        <Stack.Screen name="DetailsRoom" component={DetailsRoom} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
