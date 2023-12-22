import { ScrollView, Box, VStack, Text, Link, Image, Heading, TouchableOpacity, Center, Button, ButtonText, } from "@gluestack-ui/themed";
import { Header } from "../../components";
import React from 'react';
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
         <TouchableOpacity>
                <Box alignSelf="flex-start"
                width="100%"
                py="$"
                px="$10"
                my={20}>
                    <Button size="md" variant="solid" backgroundColor="coral" isDisabled={false} isFocusVisible={false} >
                        <ButtonText>Grooming </ButtonText>
                    </Button>
                </Box>
            </TouchableOpacity>
         
      </ScrollView>
    </>
  );
};

export default Paket;