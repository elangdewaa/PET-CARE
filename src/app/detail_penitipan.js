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
import { Link } from "expo-router";
import FIREBASE from "../config";

const DetailPenitipan = () => {
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

  // Fungsi untuk menavigasi ke halaman tambah data
  const handleAddDetail = () => {
    router.replace("add_detail_penitipan");
    // Implementasikan navigasi ke halaman 'add_detail_grooming' sesuai kebutuhan
  };

  // Fungsi untuk menghapus data dari Firebase
  const handleDelete = (itemId) => {
    if (itemId) {
      const databaseRef = FIREBASE.database().ref("addgrooming").child(itemId);

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
      <Header title={"Penitipan"} />
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
              <Link href="/add_detail_grooming">
                <ButtonText>Add</ButtonText>
                <ButtonIcon as={AddIcon} />
              </Link>
            </TouchableOpacity>
          </Button>
        </Box>

       
      </VStack>
    </>
  );
};

export default DetailPenitipan;