import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";
import { Image } from "react-native";
import ima from './../../asset/backgroundmommy.png'
import CustomNavigationBar from "../../component/CustomNavigationBar";

const stack = createStackNavigator();
const NewTitle = () => {
    return(
        <Image style={{height: 50, width: 50, borderRadius: 40}} source={ima}/>
    )
}
const MyStack = () => {
    return(
    <stack.Navigator initialRouteName="home"
     screenOptions={{
        header: (props) => <CustomNavigationBar {...props } />, 
        }}>
        <stack.Screen name="home" component={HomeScreen} />
        <stack.Screen name="detail" component={DetailScreen} />
    </stack.Navigator>
    )
}

export default MyStack;