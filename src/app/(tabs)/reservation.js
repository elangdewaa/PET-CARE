<<<<<<< HEAD:app/(tabs)/reservation.js
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
=======
import { ScrollView, Box, VStack, Text, Image, Heading, Button, HStack, } from "@gluestack-ui/themed";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Header } from "../../components";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


>>>>>>> e10f11ecca9ab59baa825875476412f7a639f2e8:src/app/(tabs)/reservation.js

const Reservation = () => {

  const handleBoxPress = (screenName) => {
    router.push(screenName);
  };


  return (
    <>
      <Header title={"Reservation"} />
      <ScrollView flex={1} backgroundColor="floralwhite">
<<<<<<< HEAD:app/(tabs)/reservation.js
        <TouchableOpacity onPress={() => handleBoxPress("DetailGrooming")}>
=======
     
        <TouchableOpacity onPress={() => handleBoxPress('/DetailGrooming')}>
>>>>>>> e10f11ecca9ab59baa825875476412f7a639f2e8:src/app/(tabs)/reservation.js
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
<<<<<<< HEAD:app/(tabs)/reservation.js
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
=======
            <VStack px='$6' pt='$4' pb='$6'>
              <Heading _dark={{color:"$textLight200"}} size='sm'>
                Paket Grooming 
              </Heading>
              <Text my='$1.5' _dark={{color:"$textLight200"}} fontSize='$xs'>
                Menyediakan layanan grooming hewan dengan beberapa paket pilihan
              </Text>
            </VStack>
>>>>>>> e10f11ecca9ab59baa825875476412f7a639f2e8:src/app/(tabs)/reservation.js
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

<<<<<<< HEAD:app/(tabs)/reservation.js
=======
      
>>>>>>> e10f11ecca9ab59baa825875476412f7a639f2e8:src/app/(tabs)/reservation.js
        <TouchableOpacity onPress={() => handleBoxPress("FormBooking")}>
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
          </Box>
        </TouchableOpacity>
<<<<<<< HEAD:app/(tabs)/reservation.js
=======
               
        
>>>>>>> e10f11ecca9ab59baa825875476412f7a639f2e8:src/app/(tabs)/reservation.js
      </ScrollView>
    </>
  );
};

export default Reservation;
