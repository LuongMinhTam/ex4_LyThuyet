import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";

const Tab = createMaterialBottomTabNavigator();

const MyBottomTab = () => {
    return (
        <Tab.Navigator initialRouteName="home" activeColor="#e91e63" barStyle={{backgroundColor: 'tomato'}}>
            <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="detail"
        component={DetailScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
        </Tab.Navigator>
    );
}

export default MyBottomTab;