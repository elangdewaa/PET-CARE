import {
  Heading,
  Text,
  Center,
  Image,
  Box,
  VStack,
  ScrollView,
  FlatList,
  HStack,
  Button,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Reservation = () => {

  const handleBackPress = () => {
    router.back()
  };

  return (
    <>
      <Header title={"Detail Penitipan"} />
      <ScrollView>
        <Heading lineHeight={"$5xl"} mb={"$7"} ml={"$5"}>
          Our Services
        </Heading>
        <Center>
          <Box
            maxWidth="$70"
            borderColor="$borderLight200"

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

            </Box>
            <VStack px="$6" pt="$4" pb="$6">
              <Heading _dark={{ color: "$textLight200" }} size="sm">
                Penitipan perhari
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 40.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Harga penitipan dihitung perhari, include makan, mandi, cek kesehatan, perawatan.
              </Text>
            </VStack>
          </Box>
          <Box
            maxWidth="$70"
            borderColor="$borderLight200"

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


            </Box>
            <VStack px="$6" pt="$4" pb="$6">
              <Heading _dark={{ color: "$textLight200" }} size="sm">
                Penitipan perminggu
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 60.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Harga penitipan dihitung perminggu, include makan, vitamin, mandi, cek kesehatan, perawatan.
              </Text>
            </VStack>
          </Box>
          <Box
            maxWidth="$70"
            borderColor="$borderLight200"
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

            </Box>
            <VStack px="$6" pt="$4" pb="$6">
              <Heading _dark={{ color: "$textLight200" }} size="sm">
                Penitipan perbulan
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 100.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Harga penitipan dihitung perbulan, include makan, vitamin, mandi, cek kesehatan, perawatan.
              </Text>
            </VStack>
          </Box>
        </Center>
        <TouchableOpacity onPress={() => handleBoxPress('FormBooking')}>
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
                pathname: "./form_pesan"
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
      </ScrollView>
    </>
  );
};

export default Reservation;

// import { ScrollView, Box, VStack, Text, Link, Image, Heading, TouchableOpacity } from "@gluestack-ui/themed";
// import { Header } from "../../components";
// import React from 'react';

// const DetailPenginapan = () => {
//   return (
//     <>
//       <Header title={"Reservation"} />
//       <ScrollView flex={1} backgroundColor="floralwhite">
//        {/* isi konten */}
//       </ScrollView>
//     </>
//   );
// };

// export default DetailPenginapan;