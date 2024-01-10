import {
  Heading,
  Text,
  Center,
  Box,
  VStack,
  ScrollView,
} from "@gluestack-ui/themed";
import { Header } from "../../components";
import { FlatList, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import FIREBASE from "../../config";

const Reservation = () => {
  const [firebaseDataGrooming, setFirebaseDataGrooming] = useState([]);
  const [firebaseDataPenitipan, setFirebaseDataPenitipan] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

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
      <ScrollView style={{ backgroundColor: "floralwhite", height: "100%" }}>
        <Center>
          <Box>
            <Box
              style={{
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                height: 60,
                borderWidth: 0.5,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'floralwhite',
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 155,
                  height: 50,
                  backgroundColor: selectedTab === 0 ? 'coral' : 'floralwhite',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setSelectedTab(0);
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    lineHeight: 24,
                    fontWeight: '600',
                    color: selectedTab === 0 ? '#fff' : '#000',
                  }}
                >
                  Grooming
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 155,
                  height: 50,
                  backgroundColor: selectedTab === 1 ? 'coral' : 'floralwhite',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setSelectedTab(1);
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    lineHeight: 24,
                    fontWeight: '600',
                    color: selectedTab === 1 ? 'floralwhite' : '#000',
                  }}
                >
                  Penitipan
                </Text>
              </TouchableOpacity>
            </Box>
            {selectedTab === 0 ? (
              <FlatList
                data={firebaseDataGrooming}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
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
                      <Heading
                        style={{
                          fontSize: 17,
                          lineHeight: 24,
                          fontWeight: '600',
                          color: '#000',
                        }}
                      >
                        {item.jenisHewan}
                      </Heading>
                      <Heading
                        style={{
                          fontSize: 15,
                          lineHeight: 24,
                          fontWeight: '500',
                          color: '#000',
                        }}
                      >
                        {item.jenisLayanan}
                      </Heading>
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 24,
                          fontWeight: '350',
                          color: '#000',
                        }}
                      >
                        {item.tanggalReservasi}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 24,
                          fontWeight: '350',
                          color: '#000',
                        }}
                      >
                        {item.namaHewan}
                      </Text>
                    </VStack>
                  </Box>
                )}
              />
            ) : (
              <FlatList
                data={firebaseDataPenitipan}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
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
                      <Heading
                        style={{
                          fontSize: 17,
                          lineHeight: 24,
                          fontWeight: '600',
                          color: '#000',
                        }}
                      >
                        {item.jenisHewan}
                      </Heading>
                      <Heading
                        style={{
                          fontSize: 15,
                          lineHeight: 24,
                          fontWeight: '500',
                          color: '#000',
                        }}
                      >
                        {item.jenisLayanan}
                      </Heading>
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 24,
                          fontWeight: '350',
                          color: '#000',
                        }}
                      >
                        {item.tanggalReservasi}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 24,
                          fontWeight: '350',
                          color: '#000',
                        }}
                      >
                        {item.namaHewan}
                      </Text>
                    </VStack>
                  </Box>
                )}
              />
            )}
          </Box>
        </Center>
      </ScrollView>
    </>
  );
};

export default Reservation;
