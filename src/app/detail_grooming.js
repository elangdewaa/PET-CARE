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
      <Header title={"Grooming"} />
      <Box alignSelf="flex-start" py={10} px={10}>
        <Button size="md" variant="solid" backgroundColor="coral" isDisabled={false} isFocusVisible={false} >
          <TouchableOpacity>
            <Link href='/add_detail_grooming' >
              <ButtonText>Add </ButtonText>
              <ButtonIcon as={AddIcon} />
            </Link>
          </TouchableOpacity>
        </Button>
      </Box>
    </>
  );
};

export default detail_grooming;
