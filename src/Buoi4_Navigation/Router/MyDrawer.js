import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="home">
            <Drawer.Screen name="home" component={HomeScreen} />
            <Drawer.Screen name="detail" component={DetailScreen} />
        </Drawer.Navigator>
    )
}

export default MyDrawer;