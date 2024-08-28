import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home"
import Test from "../screens/Test"
import Page from "../screens/page"

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="Page" component={Page} />
        </Stack.Navigator>
    )
}

export default StackRoutes;