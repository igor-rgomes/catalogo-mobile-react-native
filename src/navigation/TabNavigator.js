import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { femaleCategories, maleCategories } from "../data/categories";
import ProductsScreen from "../screens/ProductsScreen";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Masculino">
        {(props) => (
          <ProductsScreen {...props} categories={maleCategories} />
        )}
      </Tab.Screen>

      <Tab.Screen name="Feminino">
        {(props) => (
          <ProductsScreen {...props} categories={femaleCategories} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}