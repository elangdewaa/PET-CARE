import {
  Heading,
  Text,
  Button,
  ButtonText,
  FormControl,
  VStack,
  Input,
  InputField,
  Modal, 
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
  inputRef,
  ref,
  Center,
  ButtonIcon,
  AddIcon,
  
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { useState } from "react";
import { TextInput } from 'react-native';
import React from "react";


const add_detail_grooming = () => {
  const [showModal, setShowModal] = useState(false)
   console.log(showModal)
   const inputRef = React.useRef(null)
  return (
    <>
    <Header title={"Grooming"} />
    <FormControl
      p="$4"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderLight300"
      backgroundColor="floralwhite"
      height="$full"
      sx={{
        _dark: {
          borderWidth: "$1",
          borderRadius: "$lg",
          borderColor: "$borderDark800",
        },
      }}
    >
      <VStack space="xl">
        <Center>
        <Heading color="$warning900" lineHeight="$md" alignContent="center">
          Layanan Pet Care
        </Heading>
        </Center>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Paket Grooming
          </Text>
          <TextInput
            placeholder="Isi Paket Grooming"
            placeholderTextColor="#6b7280"
              style={{
              height: 44,
              backgroundColor: '#ffffff',
              paddingHorizontal: 16,
              borderRadius: 12,
              fontSize: 15,
              fontWeight: '500',
              
              }}
          />
        </VStack>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Harga
          </Text>
          <TextInput
            placeholder="Isi Harga"
            placeholderTextColor="#6b7280"
              style={{
              height: 44,
              backgroundColor: '#ffffff',
              paddingHorizontal: 16,
              borderRadius: 12,
              fontSize: 15,
              fontWeight: '500',
              
              }}
          />
        </VStack>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Deskripsi
          </Text>
          <TextInput
            placeholder="Isi Deskripsi"
            placeholderTextColor="#6b7280"
              style={{
              height: 44,
              backgroundColor: '#ffffff',
              paddingHorizontal: 16,
              borderRadius: 12,
              fontSize: 15,
              fontWeight: '500',
              
              }}
          />
        </VStack>
      <Button onPress={() => setShowModal(true)} ref={ref}
       style={{
         backgroundColor: 'coral',
         padding: 10,
         borderRadius: 5,
       }}
      >
        <ButtonIcon as={AddIcon}></ButtonIcon>
        <ButtonText>Tambah</ButtonText>
        </Button>
        <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Tambah Layanan</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Layanan akan ditambah
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              backgroundColor="$coral"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </VStack>
    </FormControl>
    </>
  );
};

export default add_detail_grooming;
