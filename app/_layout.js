import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";


const noHead = { headerShown: false };

const StackLayout = () => {
  return (
    <GluestackUIProvider config={config}>

      <Stack>
        <Stack.Screen name="(tabs)" options={noHead} />
        <Stack.Screen name="home" options={noHead} />
        <Stack.Screen name="index" options={noHead} />
        <Stack.Screen name="editProfile" options={noHead} />
        <Stack.Screen name="setting" options={true} />
        <Stack.Screen name="LanguageSelection" options={true} />
        <Stack.Screen name="Aboutus" options={noHead} />
        <Stack.Screen name="changepassword" options={noHead} />
        <Stack.Screen name="reservation" options={noHead} />
        <Stack.Screen name="AdminLogin" options={noHead} />
        <Stack.Screen name="Dashboard" options={noHead} />
        <Stack.Screen name="Login" options={noHead} />
        <Stack.Screen name="(tabs admin)" options={noHead} />
        <Stack.Screen name="Register" options={noHead} />
      </Stack>
    </GluestackUIProvider>
  );
};

export default StackLayout;
