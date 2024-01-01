import { ScrollView, Box, VStack, Text, Link, Image, Heading, TouchableOpacity } from "@gluestack-ui/themed";
import { Header } from "../../components";
import React from 'react';

const noHead = { headerShown: false };

const all_reservation = () => {
  return (
    <>
      <Header title={"Welcome, Admin"} />
      <ScrollView flex={1} backgroundColor="floralwhite">
       {/* isi konten */}
      </ScrollView>
    </>
  );
};

export default all_reservation;