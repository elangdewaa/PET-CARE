import React, { useState, useEffect } from "react";
import {
  Heading,
  Text,
  Button,
  ButtonText,
  Box,
  ButtonIcon,
  AddIcon,
  VStack,
} from "@gluestack-ui/themed";
import { TouchableOpacity, FlatList } from "react-native";
import { Header } from "../components";
import { Link, router } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import FIREBASE from "../config";

const DetailPenitipan = () => {
  // State untuk menyimpan data dari Firebase salam hangat dari mamat :*
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

  // Fungsi untuk menavigasi ke halaman tambah data
  const handleAddDetail = () => {
    router.replace("add_detail_penitipan");
    // Implementasikan navigasi ke halaman 'add_detail_grooming' sesuai kebutuhan
  };

  // Fungsi untuk menghapus data dari Firebase
  const handleDelete = (itemId) => {
    if (itemId) {
      const databaseRef = FIREBASE.database().ref("addpenitipan").child(itemId);

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

  return (
    <>
      <Header title={"Penitipan"}  withBack="true" />
      <VStack space="md">
        {/* Tombol untuk navigasi ke halaman tambah data */}
        <Box alignSelf="flex-start" py={10} px={10}>
          <Button
            size="md"
            variant="solid"
            backgroundColor="coral"
            isDisabled={false}
            isFocusVisible={false}
            onPress={handleAddDetail}
          >
            <TouchableOpacity>
              <Link href="/add_detail_penitipan">
                <ButtonText>Add</ButtonText>
                <ButtonIcon as={AddIcon} />
              </Link>
            </TouchableOpacity>
          </Button>
        </Box>

        <VStack space="xl">
          <Heading color="$warning900" lineHeight="$md" alignContent="center">
            Data dari Firebase
          </Heading>
          <FlatList
            data={firebaseData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box  maxWidth="$70"
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
              }}>

                <Text>{`Paket Penitipan: ${item.paketPenitipan}`}</Text>
                <Text>{`Harga: ${item.harga}`}</Text>
                <Text>{`Deskripsi: ${item.deskripsi}`}</Text>
                {/* Tombol untuk menghapus data */}
                
                <TouchableOpacity onPress={() => handleDelete(item.id)}style={{ marginLeft: 'auto'}}>
                <MaterialIcons name="delete" size={30} color="red" />
                </TouchableOpacity>
                
              </Box>
            )}
          />
        </VStack>
      </VStack>
    </>
  );
};

export default DetailPenitipan;