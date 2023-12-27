import { ScrollView, Box, VStack, Text, Image, Heading, Center, Button, ButtonText, } from "@gluestack-ui/themed";
import { Header } from "../../components";
import React from 'react';
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
const Paket = () => {
  return (
    <>
      <Header title={"Welcome, Admin"} />
      <ScrollView flex={1} backgroundColor="floralwhite">
      <Center my={15}>
         <Heading color="$warning900" lineHeight="$md" alignContent="center">
           Layanan Pet Care
         </Heading>
         </Center>
                <Box alignSelf="flex-start"
                width="100%"
                py="$"
                px="$10"
                my={20}>
                 <Button size="md" variant="solid" backgroundColor="coral" isDisabled={false} isFocusVisible={false}>
                 <TouchableOpacity  >
                    <Link href='/detail_grooming' >
                        <ButtonText>Grooming </ButtonText>
                      </Link>
                  </TouchableOpacity>
                 </Button>
                </Box>
                <Box alignSelf="flex-start"
                width="100%"
                py="$"
                px="$10"
                my={20}>
                    
                    <Button size="md" variant="solid" backgroundColor="coral" isDisabled={false} isFocusVisible={false} >
                        <ButtonText>Penitipan </ButtonText>
                    </Button>
                </Box>
               
           
         
      </ScrollView>
    </>
  );
};

export default Paket;