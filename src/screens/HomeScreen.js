import { Button, View } from "react-native";
import { useDispatch } from "react-redux";
import TabNavigator from "../navigation/TabNavigator";
import { logoutSuccess } from "../store/slices/authSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <Button title="Logout" onPress={() => dispatch(logoutSuccess())} />
      <TabNavigator />
    </View>
  );
}