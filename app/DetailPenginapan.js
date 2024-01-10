import {
  Heading,
  Text,
  Center,
  Image,
  Box,
  VStack,
  Link,
  ScrollView,
  FlatList,
  HStack,
  Button,
} from "@gluestack-ui/themed";
import { Header } from "../components";

const Reservation = () => {
  // State untuk menyimpan data dari Firebase 
  const [firebaseData, setFirebaseData] = useState([]);
  
  // UseEffect untuk mendapatkan data dari Firebase saat komponen dimuat
  useEffect(() => {
    const databaseRef = FIREBASE.database().ref("addpenitipan");

    const onDataChange = (snapshot) => {
      const data = snapshot.val();
      const penitipanItems = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];

      setFirebaseData(penitipanItems);
    };

    databaseRef.on("value", onDataChange);

    return () => {
      databaseRef.off("value", onDataChange);
    };
  }, []);

  const handleBackPress = () => {
    router.back()
  };

  return (
    <>
      <Header title={"Detail Penitipan"} />
      <ScrollView>
        <Heading lineHeight={"$5xl"} mb={"$7"}  ml={"$5"}>
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