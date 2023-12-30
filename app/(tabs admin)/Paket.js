import { ScrollView, Box, VStack, Text, Image, Heading, Center, Button, ButtonText, } from "@gluestack-ui/themed";
import { Header } from "../../components";
import React from 'react';
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Paket = () => {
  const navigation = useNavigation();

  const handleBoxPress = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <>
      <Header title={"Welcome, Admin"} />
      <ScrollView flex={1} backgroundColor="floralwhite">
      <Center my={15}>
         <Heading color="$warning900" lineHeight="$md" alignContent="center">
           Layanan Pet Care
         </Heading>
         </Center>
         <TouchableOpacity onPress={() => handleBoxPress('detail_grooming')}>
          <Box
            maxWidth='$54'
            borderColor='$borderLight200'
            borderRadius='$lg'
            borderWidth='$1'
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: '$5',
              },            
              "_dark": {
                bg:"$backgroundDark900",
                borderColor: '$borderDark800'
              },
            }}
          >
            <Box>
              <Image
                h={150}
                width="100%"
                source={require('../../assets/grooming.jpg')}
              />
            </Box>
            <Box>
            <VStack px='$6' pt='$4' pb='$6'>
              <Heading _dark={{color:"$textLight200"}} size='sm'>
                Edit Paket Grooming 
              </Heading>
              <Text my='$1.5' _dark={{color:"$textLight200"}} fontSize='$xs'>
                Menyediakan layanan grooming hewan dengan beberapa paket pilihan
              </Text>
            </VStack>
            </Box>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBoxPress('DetailPenginapan')}>
          <Box
            maxWidth='$54'
            borderColor='$borderLight200'
            borderRadius='$lg'
            borderWidth='$1'
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: '$5',
              },            
              "_dark": {
                bg:"$backgroundDark900",
                borderColor: '$borderDark800'
              },
            }}
          >
            <Box>
              <Image
                h={150}
                width="100%"
                source={require('../../assets/Pethotel.jpg')}
              />
            </Box>
            <VStack px='$6' pt='$4' pb='$6'>
              <Heading _dark={{color:"$textLight200"}} size='sm'>
                Edit Paket Penitipan Hewan 
              </Heading>
              <Text my='$1.5' _dark={{color:"$textLight200"}} fontSize='$xs'>
                Menyediakan layanan penitipan hewan dengan beberapa kamar pilihan
              </Text>
            </VStack>
          </Box>
        </TouchableOpacity>
               
           
         
      </ScrollView>
    </>
  );
};

export default Paket;