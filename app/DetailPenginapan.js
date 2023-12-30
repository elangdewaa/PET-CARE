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
import { useNavigation } from "@react-navigation/native";

const Reservation = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <Header title={"Detail Penitipan"} />
      <ScrollView>
        <Heading lineHeight={"$5xl"} mb={"$7"} color="$black" ml={"$5"}>
          Our Services
        </Heading>
        <Center>
          <Box
            maxWidth="$70"
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
                borderRadius="$4xl"
                h={150}
                width="100%"
                source={{
                  uri: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/345904dd98766f700f6c92f61bc6a08b13a5b1f39d4b7c33ba4f789814cff17c.jpg",
                }}
              />
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
                borderRadius="$4xl"
                h={150}
                width="100%"
                source={{
                  uri: "https://asset-2.tstatic.net/jabar/foto/bank/images/ilustrasi-jasa-penitipan-kucing-anjing-binatang_20180612_090330.jpg"
                }}
              />
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
                borderRadius="$4xl"
                h={150}
                width="100%"
                source={{
                  uri: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/radarjogja/2022/09/WEB-LIFESTYLE-1-3.jpg",
                }}
              />
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