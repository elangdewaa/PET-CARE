import {
  Heading,
  Text,
  Center,
  Box,
  VStack,
  Link,
  ScrollView,
} from "@gluestack-ui/themed";
import { Header } from "../../components";
import { FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import FIREBASE from "../../config";

const Reservation = () => {
  // State untuk menyimpan data dari Firebase 
  const [firebaseDataGrooming, setFirebaseDataGrooming] = useState([]);
  const [firebaseDataPenitipan, setFirebaseDataPenitipan] = useState([]);

  // UseEffect untuk mendapatkan data dari Firebase saat komponen dimuat
  useEffect(() => {
    const groomingRef = FIREBASE.database().ref("usergrooming");
    const penitipanRef = FIREBASE.database().ref("userpenitipan");

    const onDataChangeGrooming = (snapshot) => {
      const data = snapshot.val();
      const groomingItems = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];

      setFirebaseDataGrooming(groomingItems);
    };

    const onDataChangePenitipan = (snapshot) => {
      const data = snapshot.val();
      const penitipanItems = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];

      setFirebaseDataPenitipan(penitipanItems);
    };

    groomingRef.on("value", onDataChangeGrooming);
    penitipanRef.on("value", onDataChangePenitipan);

    return () => {
      groomingRef.off("value", onDataChangeGrooming);
      penitipanRef.off("value", onDataChangePenitipan);
    };
  }, []);

  return (
    <>
      <Header title={"History"} />
      <ScrollView style={{
        backgroundColor: "floralwhite", height: "$full"
      }}>

        <Center>

          <FlatList
            data={firebaseDataGrooming}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box >

                <Box
                  maxWidth="$70"

                  backgroundColor="#FFE8BD"
                  borderRadius={20}

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


                  <VStack px="$11" pt="$4" pb="$6">
                    <Heading style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#000' }}>
                      {item.jenisHewan}
                    </Heading>
                    <Heading style={{ fontSize: 15, lineHeight: 24, fontWeight: '500', color: '#000' }}>
                      {item.jenisLayanan}
                    </Heading>
                    <Text style={{ fontSize: 12, lineHeight: 24, fontWeight: '350', color: '#000' }}>
                      {item.tanggalReservasi}
                    </Text>
                    <Text style={{ fontSize: 12, lineHeight: 24, fontWeight: '350', color: '#000' }}>
                      {item.namaHewan}
                    </Text>
                  </VStack>
                </Box>

              </Box>
            )}
          />
          <FlatList
            data={firebaseDataPenitipan}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box >

                <Box
                  maxWidth="$70"

                  backgroundColor="#FFE8BD"
                  borderRadius={20}

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


                  <VStack px="$11" pt="$4" pb="$6">
                    <Heading style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#000' }}>
                      {item.jenisHewan}
                    </Heading>
                    <Heading style={{ fontSize: 15, lineHeight: 24, fontWeight: '500', color: '#000' }}>
                      {item.jenisLayanan}
                    </Heading>
                    <Text style={{ fontSize: 12, lineHeight: 24, fontWeight: '350', color: '#000' }}>
                      {item.tanggalReservasi}
                    </Text>
                    <Text style={{ fontSize: 12, lineHeight: 24, fontWeight: '350', color: '#000' }}>
                      {item.namaHewan}
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
