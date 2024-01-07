import { Box, Image, HStack, Heading } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";


const Header = ({ title, withBack = false }) => {
  const coral = "#FF7F50";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={coral} />
      <Box bg="$coral" p="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
                {!withBack ? (
              <>
                <Image
                  source={require("../assets/paw.png")}
                  w="$12"
                  h="$12"
                  alt="CNN Logo"
                  mr={"$3"}
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"$3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"$white"}>{title}</Heading> 
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;