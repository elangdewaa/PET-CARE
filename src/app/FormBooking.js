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
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Reservation = () => {

  const handleBackPress = () => {
    router.back()
  };

  return (
    <>
      <Header title={"Form Booking"} />
      <FormControl
        p="$4"
        borderWidth="$1"
        borderRadius="$lg"
        borderColor="$borderLight300"
        backgroundColor="floralwhite"
        height="$full"
        sx={{
          _dark: {
            borderWidth: "$1",
            borderRadius: "$lg",
            borderColor: "$borderDark800",
          },
        }}
      >
        <VStack space="xl">
          <Heading color="$warning900" lineHeight="$md">
            Form Booking
          </Heading>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Jenis Hewan
            </Text>
            <TextInput
              
              placeholder="Isi jenis hewan Anda"
              placeholderTextColor="#6b7280"
              style={{
                height: 44,
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
            />
          </VStack>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Tanggal Reservasi dan booking
            </Text>
            <TextInput
            //   ref={tanggalReservasiInputRef}
              placeholder="Isi tanggal rencana reservasi dan booking"
              placeholderTextColor="#6b7280"
              style={{
                height: 44,
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
            />
          </VStack>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Jenis Layanan
            </Text>
            <TextInput
            //   ref={jenisLayananInputRef}
              placeholder="Isi jenis layanan yang ingin dipesan"
              placeholderTextColor="#6b7280"
              style={{
                height: 44,
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
            />
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
                Mandi kutu
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 50.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Shampoo kutu, bersihkan telinga, pengecekan bulu, potong kuku, parfum.
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
                Mandi Lengkap
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 60.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Shampoo biasa/kutu, potong kuku, pengecekan kesehatan, parfum.
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
      </ScrollView>
    </>
  );
};

export default Reservation;

// import { ScrollView, Box, VStack, Text, Image, Heading, TouchableOpacity } from "@gluestack-ui/themed";
// import { Header } from "../../components";
// import React from 'react';
// import { useNavigation } from "@react-navigation/native";

// const DetailGrooming = () => {
//   const navigation = useNavigation();

//   const handleBackPress = () => {
//     router.back()
//   };

//   return (
//     <>
//       <Header title={"Reservation"} />
//       <ScrollView flex={1} backgroundColor="floralwhite">
//         {/* isi konten */}
//         <TouchableOpacity onPress={handleBackPress}>
//         </TouchableOpacity>
//       </ScrollView>
//     </>
//   );
// };

// export default DetailGrooming;