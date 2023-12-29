import { ScrollView, Box, VStack, Text, Image, Heading, Center, Button, ButtonText, } from "@gluestack-ui/themed";
import { Header } from "../../components";
import React from 'react';
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

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
         <Center>
         <VStack>
         <Box
                      w={100}
                      h="$20"
                      bg="$coral"
                      borderRadius="$3xl"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                      softShadow=""
                      mb="$20"
                    >
                      <Ionicons
                        name="clipboard-sharp"
                        size={35}
                        color="floralwhite"
                        paddingBottom="3"
                      />
                      <VStack>
                        <Text color="floralwhite" fontWeight="bold">
                          Reservation
                        </Text>
                      </VStack>
                    </Box>
                    <Box
                      w={100}
                      h="$20"
                      bg="$coral"
                      borderRadius="$3xl"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                      softShadow=""
                      
                    >
                      <Ionicons
                        name="clipboard-sharp"
                        size={35}
                        color="floralwhite"
                        paddingBottom="3"
                      />
                      <VStack>
                        <Text color="floralwhite" fontWeight="bold">
                          Reservation
                        </Text>
                      </VStack>
                    </Box>
                    </VStack>
                    </Center>
         
      </ScrollView>
    </>
  );
};

export default Paket;