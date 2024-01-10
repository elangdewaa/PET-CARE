import { ScrollView, Box, VStack, Text, Image, Heading, Center, Button, HStack, } from "@gluestack-ui/themed";
import { Header } from "../../components";

import React from 'react';
import { Link, router } from "expo-router";

import { TouchableOpacity } from "react-native";

const Paket = () => {
 

  const handleBoxPress = (screenName) => {
    router.push(screenName);
  };
  return (
    <>
      <Header title={"Welcome, Admin"}  />
      
      <ScrollView flex={1} backgroundColor="floralwhite">
      <Center my={15}>
         <Heading color="$warning900" lineHeight="$md" alignContent="center">
           Layanan Pet Care
         </Heading>
         </Center>
         <TouchableOpacity onPress={() => handleBoxPress('/detail_grooming')}>
          <Box
            maxWidth='$54'
            borderColor='$borderLight200'
            borderRadius='$lg'
            borderWidth='$1'
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: '$3',
              },            
              "_dark": {
                bg:"$backgroundDark900",
                borderColor: '$borderDark800'
              },
            }}
          >
            
            <Box>
            <HStack>
            <Image
                        alt=""
                        resizeMode="contain"
                        style={{
                            width: 95,
                            height: 100,
                            alignSelf: 'center',
                            marginBottom: 0,
                        }}
                        source={require('../../assets/admin.png')}

                    />
            <VStack px='$6' pt='$4' pb='$6'>
              <Heading _dark={{color:"$textLight200"}} size='sm'>
                Tambah Paket Grooming 
              </Heading>
              <Text my='$1' _dark={{color:"$textLight200"}} fontSize='$xs'>
                Menyediakan paket grooming hewan
              </Text>
            </VStack>
            </HStack>
            </Box>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBoxPress('/detail_penitipan')}>
          <Box
            maxWidth='$54'
            borderColor='$borderLight200'
            borderRadius='$lg'
            borderWidth='$1'
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: '$3',
              },            
              "_dark": {
                bg:"$backgroundDark900",
                borderColor: '$borderDark800'
              },
            }}
          >
            <HStack>
            <Image
                        alt=""
                        resizeMode="contain"
                        style={{
                            width: 95,
                            height: 100,
                            alignSelf: 'center',
                            marginBottom: 0,
                        }}
                        source={require('../../assets/admin2.png')}

                    />
            <VStack px='$6' pt='$4' pb='$6'>
              <Heading _dark={{color:"$textLight200"}} size='sm'>
                Tambah Paket Penitipan  
              </Heading>
              <Text my='$1.5' _dark={{color:"$textLight200"}} fontSize='$xs'>
                Menyediakan paket penitipan hewan 
              </Text>
            </VStack>
            </HStack>
          </Box>
        </TouchableOpacity>
      </ScrollView>
      
      
    </>
  );
};

export default Paket;