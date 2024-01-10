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
import React, { useState, useEffect } from "react";
import { Header } from "../components";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FIREBASE from "../config";

const Reservation = () => {
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
      <Header title={"Detail Grooming"}  withBack="true" />
      <ScrollView>
        <Heading lineHeight={"$5xl"} color="$black" ml={"$5"}>
          Our Services
        </Heading>
        <TouchableOpacity onPress={() => handleBoxPress('FormGrooming')}>
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
                pathname: "/FormGrooming"
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
              {item.paketPenitipan}
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
