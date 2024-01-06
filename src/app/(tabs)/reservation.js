import {
  ScrollView,
  Box,
  VStack,
  Text,
  Image,
  Heading,
  Button,
  ButtonText,
  ButtonIcon,
  AddIcon,
  HStack,
} from "@gluestack-ui/themed";
import { Link, useLocalSearchParams } from "expo-router";
import { Header } from "../../components";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Reservation = () => {
  const navigation = useNavigation();

  const handleBoxPress = (screenName) => {
    navigation.navigate(screenName);
  };


  return (
    <>
      <Header title={"Reservation"} />
      <ScrollView flex={1} backgroundColor="floralwhite">
        <TouchableOpacity onPress={() => handleBoxPress("DetailGrooming")}>
          <Box
            maxWidth="$54"
            borderColor="$borderLight200"
            borderRadius="$lg"
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: "$5",
              },
              _dark: {
                bg: "$backgroundDark900",
                borderColor: "$borderDark800",
              },
            }}
          >
            <Box>
              <Image
                h={150}
                width="100%"
                source={require("../../assets/grooming.jpg")}
              />
            </Box>
            <Box>
              <VStack px="$6" pt="$4" pb="$6">
                <Heading _dark={{ color: "$textLight200" }} size="sm">
                  Paket Grooming
                </Heading>
                <Text
                  my="$1.5"
                  _dark={{ color: "$textLight200" }}
                  fontSize="$xs"
                >
                  Menyediakan layanan grooming hewan dengan beberapa paket
                  pilihan
                </Text>
              </VStack>
            </Box>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleBoxPress("DetailPenginapan")}>
          <Box
            maxWidth="$54"
            borderColor="$borderLight200"
            borderRadius="$lg"
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: "$5",
              },
              _dark: {
                bg: "$backgroundDark900",
                borderColor: "$borderDark800",
              },
            }}
          >
            <Box>
              <Image
                h={150}
                width="100%"
                source={require("../../assets/Pethotel.jpg")}
              />
            </Box>
            <VStack px="$6" pt="$4" pb="$6">
              <Heading _dark={{ color: "$textLight200" }} size="sm">
                Paket Penitipan Hewan
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Menyediakan layanan penitipan hewan dengan beberapa kamar
                pilihan
              </Text>
            </VStack>
          </Box>
        </TouchableOpacity>


        <TouchableOpacity>
          <Box
            w={110}
            h="$100"
            mr="$10"
            bg="$coral"
            ml={19}
            borderRadius="$3xl"
            borderWidth={2}
            alignItems="center"
            softShadow=""
          >
            <Link
              href={{
                pathname: "/FormBooking"
              }}
            >
              <HStack>
                <Ionicons
                  name="add-circle-outline"
                  size={30}
                  color="floralwhite"
                  paddingBottom="3"
                />
                <Text color="floralwhite" fontWeight="bold" size="md" pt="$1.5">
                  Pesan
                </Text>
              </HStack>
            </Link>
          </Box>
        </TouchableOpacity>


      </ScrollView >
    </>
  );
};

export default Reservation;
