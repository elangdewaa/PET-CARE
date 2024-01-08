import { ScrollView, Box, VStack, Text, Image, Heading, Button, HStack, } from "@gluestack-ui/themed";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Header } from "../../components";
import React from 'react';
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Reservation = () => {

  const handleBoxPress = (screenName) => {
    router.push(screenName);
  };

  return (
    <>
      <Header title={"Reservation"} />
      <ScrollView flex={1} backgroundColor="floralwhite">

        <TouchableOpacity onPress={() => handleBoxPress('/DetailGrooming')}>
          <Box
            maxWidth='$54'
            borderColor='$borderLight200'
            borderRadius='$lg'
            borderWidth='$1'
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: '$5',
              },
              "_dark": {
                bg: "$backgroundDark900",
                borderColor: '$borderDark800'
              },
            }}
          >
            <Box>
              <Image
                h={150}
                width="100%"
                source={require('../../assets/grooming.jpg')}
              />
            </Box>
            <Box>
              <VStack px='$6' pt='$4' pb='$6'>
                <Heading _dark={{ color: "$textLight200" }} size='sm'>
                  Paket Grooming
                </Heading>
                <Text my='$1.5' _dark={{ color: "$textLight200" }} fontSize='$xs'>
                  Menyediakan layanan grooming hewan dengan beberapa paket pilihan
                </Text>
              </VStack>
            </Box>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleBoxPress('DetailPenitipan')}>
          <Box
            maxWidth='$54'
            borderColor='$borderLight200'
            borderRadius='$lg'
            borderWidth='$1'
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: '$5',
              },
              "_dark": {
                bg: "$backgroundDark900",
                borderColor: '$borderDark800'
              },
            }}
          >
            <Box>
              <Image
                h={150}
                width="100%"
                source={require('../../assets/Pethotel.jpg')}
              />
            </Box>
            <VStack px='$6' pt='$4' pb='$6'>
              <Heading _dark={{ color: "$textLight200" }} size='sm'>
                Paket Penitipan Hewan
              </Heading>
              <Text my='$1.5' _dark={{ color: "$textLight200" }} fontSize='$xs'>
                Menyediakan layanan penitipan hewan dengan beberapa kamar pilihan
              </Text>
            </VStack>
          </Box>
        </TouchableOpacity>
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

      </ScrollView>
    </>
  );
};

export default Reservation;


// import { Center, Heading } from "@gluestack-ui/themed";
// import { Header } from "../../components";
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// const Reservation = ({ isLoading, setIsLoading }) => {
//   const [animalType, setAnimalType] = useState('');
//   const [reservationDate, setReservationDate] = useState('');
//   const [serviceType, setServiceType] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleReservation = () => {
//     if (animalType && reservationDate && serviceType) {
//       // mengirim request ke server
//       setTimeout(() => {
//         setSuccessMessage('Reservasi berhasil disimpan');
//       }, 2000);
//     } else {
//       setSuccessMessage('Semua kolom harus diisi');
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       {/* <Header/> */}
//       <View style={{ marginBottom: 10 }}>
//         <Text style={{ marginBottom: 5 }}>Jenis Hewan:</Text>
//         <TextInput
//           style={{
//             height: 40,
//             borderColor: 'gray',
//             borderWidth: 1,
//             marginBottom: 10,
//             paddingHorizontal: 8,
//           }}
//           onChangeText={(text) => setAnimalType(text)}
//           value={animalType}
//           placeholder="Misal: Anjing, Kucing"
//         />
//       </View>

//       <Text style={{ marginBottom: 5 }}>Masukkan Tanggal Reservasi:</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 10,
//           paddingHorizontal: 8,
//         }}
//         onChangeText={(text) => setReservationDate(text)}
//         value={reservationDate}
//         placeholder="YYYY-MM-DD"
//       />

//       <View style={{ marginBottom: 20 }}>
//         <Text style={{ marginBottom: 5 }}>Layanan:</Text>
//         <TextInput
//           style={{
//             height: 40,
//             borderColor: 'gray',
//             borderWidth: 1,
//             marginBottom: 10,
//             paddingHorizontal: 8,
//           }}
//           onChangeText={(text) => setServiceType(text)}
//           value={serviceType}
//           placeholder="Misal: Grooming, Penitipan"
//         />
//       </View>

//       <Button
//         title="Simpan Reservasi"
//         onPress={handleReservation}
//         disabled={isLoading}
//         style={{
//           marginTop: 20,
//           backgroundColor: 'blue',
//           padding: 10,
//           borderRadius: 5,
//           alignItems: 'center',
//           alignSelf: 'center',
//         }}
//       />

//       <Text style={{ marginTop: 10, color: successMessage.includes('berhasil') ? 'green' : 'red' }}>
//         {successMessage}
//       </Text>
//     </View>
//   );
// };

// export default Reservation;