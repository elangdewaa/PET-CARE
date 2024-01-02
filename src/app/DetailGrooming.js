import {
  Heading,
  Text,
  Center,
  Image,
  Box,
  VStack,
  Link,
  ScrollView,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import {  FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import FIREBASE from "../config";

const Reservation = () => {
    // State untuk menyimpan data dari Firebase salam hangat dari mamat :*
    const [firebaseData, setFirebaseData] = useState([]);
  
    // UseEffect untuk mendapatkan data dari Firebase saat komponen dimuat
    useEffect(() => {
      const databaseRef = FIREBASE.database().ref("addgrooming");
  
      const onDataChange = (snapshot) => {
        const data = snapshot.val();
        const groomingItems = data
          ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
          : [];
  
        setFirebaseData(groomingItems);
      };
  
      databaseRef.on("value", onDataChange);
  
      return () => {
        databaseRef.off("value", onDataChange);
      };
    }, []);
  
    
    

  return (
    <>
      <Header title={"Detail Grooming"} />
      <ScrollView>
       
        <Center>
        <Heading lineHeight={"$5xl"} mb={"$7"} color="$black" pt={"$4"}>
          Our Services
        </Heading>
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
                Mandi biasa
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
                Rp. 30.000
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
                Shampoo biasa, bersihkan telinga, potong kuku, parfum.
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
          <FlatList
            data={firebaseData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box p="4"  borderColor="gray.300">

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

           
            <VStack px="$6" pt="$4" pb="$6">
              <Heading _dark={{ color: "$textLight200" }} size="sm">
              {item.paketGrooming}
              </Heading>
              <Heading _dark={{ color: "$textLight200" }} size="xs">
              {item.harga}
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
              {item.deskripsi}
              </Text>
            </VStack>
          </Box>
               
              </Box>
            )}
          />
        </Center>
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
