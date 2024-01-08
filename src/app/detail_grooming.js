import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonText,
  Box,
  ButtonIcon,
  AddIcon,
} from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { Header } from "../components";
import { Link } from "expo-router";

const detail_grooming = () => {
  return (
    <>
     <ScrollView>
      <Header title={"Grooming"}  withBack="true" />
      <VStack space="md">
        {/* Tombol untuk navigasi ke halaman tambah data */}
        <HStack>
        <Box alignSelf="flex-start" py={10} px={10}>
            <TouchableOpacity>
              <Ionicons name="arrow-back-circle-outline" size={40}></Ionicons>
              <Link href="/add_detail_grooming">
              </Link>
            </TouchableOpacity>
        </Box>
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
        </HStack>
        {/* Menampilkan data dari Firebase menggunakan FlatList */}
       
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

                <Text>{`Paket Grooming: ${item.paketGrooming}`}</Text>
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
      </ScrollView>
    </>
    
  );
};

export default detail_grooming;
