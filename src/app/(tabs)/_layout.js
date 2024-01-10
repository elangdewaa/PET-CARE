import { Tabs } from "expo-router/tabs";
import { Text, borderRadius } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const noHead = { headerShown: false };

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "home":
              iconName = "home-outline";
              break;
            case "reservation":
              iconName = "clipboard-outline";
              break;
            case "history":
              iconName="refresh-circle-outline";
              break;
            case "profile":
              iconName = "person-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "white" : "brown"}
              borderRadius={20}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          backgroundColor: "coral",
          borderTopLeftRadius: 10,  
          borderTopRightRadius: 10, 
          borderBottomLeftRadius: 10, 
          borderBottomRightRadius: 10, 
          marginBottom: 20,
          marginHorizontal: 10,

        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text mb="$2" color={focused ? "$white" : "brown"} fontSize="$sm">
              {children}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home", ...noHead }} />
      <Tabs.Screen name="reservation" options={{ title: "Reservation", ...noHead }} />
      <Tabs.Screen name="history" options={{ title: "History", ...noHead }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", ...noHead }} />

    </Tabs>
  );
};

export default TabsLayout;