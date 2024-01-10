import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from "react-native"; 
import FIREBASE from "../../config";
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from "../../components";
import { Box,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton, 
  ref,
  Heading,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,} from '@gluestack-ui/themed';
  import { Link } from "expo-router";

const noHead = { headerShown: false };

const AllReservation = () => {
  const [showModal, setShowModal] = useState(true);
  const [firebaseDataGrooming, setFirebaseDataGrooming] = useState([]);
  const [firebaseDataPenitipan, setFirebaseDataPenitipan] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [deleteItemId, setDeleteItemId] = useState(null);

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
// Fungsi untuk menghapus data dari Firebase
const handleDelete = (itemId) => {
  if (itemId) {
    const databaseRef = FIREBASE.database().ref("userpenitipan").child(itemId);
    

    databaseRef
      .remove()
      .then(() => {
        console.log("Data berhasil dihapus");
      })
      .catch((error) => {
        console.error("Error menghapus data dari Firebase: ", error);
      });
  }

  if (itemId) {
    const databaseRef = FIREBASE.database().ref("usergrooming").child(itemId);
    

    databaseRef
      .remove()
      .then(() => {
        console.log("Data berhasil dihapus");
      })
      .catch((error) => {
        console.error("Error menghapus data dari Firebase: ", error);
      });
  }
};

const handleShowModal = (itemId) => {
  setDeleteItemId(itemId);
  setShowModal(true);
};

  return (
    <>
    <Header title={"Welcome, Admin"} />
    <ScrollView flex={1} backgroundColor="floralwhite">

      <Box>
        <Box style={{
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
        }}>
          <TouchableOpacity style={{
            width: 155,
            height: 50,
            backgroundColor: selectedTab === 0 ? 'coral' : 'floralwhite',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onPress={() => {
              setSelectedTab(0);
            }}>
            <Text style={{
              fontSize: 17,
              lineHeight: 24,
              fontWeight: '600',
              color: selectedTab === 0 ? '#floralwhite' : '#000',
            }}>
              Grooming
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            width: 155,
            height: 50,
            backgroundColor: selectedTab === 1 ? 'coral' : 'floralwhite',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onPress={() => {
              setSelectedTab(1);
            }}>
            <Text style={{
              fontSize: 17,
              lineHeight: 24,
              fontWeight: '600',
              color: selectedTab === 1 ? 'floralwhite' : '#000',
            }}>
              Penitipan
            </Text>
          </TouchableOpacity>
        </Box>
        {selectedTab === 0 ? (
          <Box
            maxWidth="$70"
            borderColor="$borderLight200"
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{ "@base": { mx: "$5" }, _dark: { bg: "$backgroundDark900", borderColor: "$borderDark800" } }}
          >
            <FlatList
              data={firebaseDataGrooming}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Box
                  maxWidth="$70"
                  backgroundColor="#FFE8BD"
                  borderRadius={5}
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
                  <View>
                    <Text>{`Paket Grooming: ${item.jenisHewan}`}</Text>
                    <Text>{`Jenis Layanan: ${item.jenisLayanan}`}</Text>
                    <Text>{`Tanggal: ${item.tanggalReservasi}`}</Text>
                    <Text>{`Nama Hewan: ${item.namaHewan}`}</Text>
                    <TouchableOpacity onPress={() => handleDelete(item.id)}style={{ marginLeft: 'auto'}}>
                      <MaterialIcons name="delete" size={30} color="red" />
                    </TouchableOpacity>

                  </View>
                </Box>
              )}
            />
          </Box>

          
          
          
        ) : (
          <Box style={{ flex: 1, alignItems: 'center', }}>
          
              <FlatList
                data={firebaseDataPenitipan}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Box
                    maxWidth="$70"
                    backgroundColor="#FFE8BD"
                    borderRadius={5}
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
                     <View>
                  <Text>{`Paket Penitipan: ${item.jenisHewan}`}</Text>
                  <Text>{`Jenis Layanan: ${item.jenisLayanan}`}</Text>
                  <Text>{`Tanggal: ${item.tanggalReservasi}`}</Text>
                  <Text>{`Nama Hewan: ${item.namaHewan}`}</Text>
                  <TouchableOpacity onPress={() => handleShowModal(item.id)} style={{ marginLeft: 'auto' }}>
                    <MaterialIcons name="delete" size={30} color="red" />
                  </TouchableOpacity>
                </View>
              </Box>

            )}
          />
        </Box>
      )}
      </Box>

      
      </ScrollView>
      </>         
  );
}

export default AllReservation;
