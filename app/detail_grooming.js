import {
    Button,
    ButtonText,
    Box,
    ButtonIcon,
    AddIcon,
    
  } from "@gluestack-ui/themed";
  import { Header } from "../components";
  import React from "react";
  
  const detail_grooming = () => {
    return (
      <>
      <Header title={"Grooming"} />
      <Box alignSelf="flex-start" py={10} px={10}>
        <Button size="md" variant="solid" backgroundColor="coral" isDisabled={false} isFocusVisible={false} >
          <ButtonText>Add </ButtonText>
          <ButtonIcon as={AddIcon} />
        </Button>
        </Box>
      </>
    );
  };
  
  export default detail_grooming;
  