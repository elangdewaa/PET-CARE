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
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import FIREBASE from "../config";


const add_detail_penitipan = () => {
  const [showModal, setShowModal] = useState(false);
  const [penitipanData, setPenitipanData] = useState({
    paketPenitipan: "",
    harga: "",
    deskripsi: "",
  });

  const handleInputChange = (field, value) => {
    setPenitipanData((prevData) => ({ ...prevData, [field]: value }));
  };

  const addPenitipanDataToFirebase = () => {
    const databaseRef = FIREBASE.database().ref("addpenitipan");

    // buat push data ke database
    databaseRef
      .push(penitipanData)
      .then(() => {
        // data sukses untuk di tambahkan
        console.log("Data added successfully!");
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error adding data to Firebase: ", error);
      });
  };

  return (
    <>
      <Header title={"Penitipan Hewan"} />
      <FormControl
        p="$4"
        borderWidth="$1"
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
              Paket Penitipan Hewan
            </Text>
            <TextInput
              placeholder="Isi Paket Penitipan"
              placeholderTextColor="#6b7280"
              style={{
                height: 44,
                backgroundColor: '#ffffff',
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: '500',
              }}
              value={penitipanData.paketPenitipan}
              onChangeText={(text) => handleInputChange("paketPenitipan", text)}
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
              value={penitipanData.harga}
              onChangeText={(text) => handleInputChange("harga", text)}
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
              value={penitipanData.deskripsi}
              onChangeText={(text) => handleInputChange("deskripsi", text)}
            />
          </VStack>
          <Button
            onPress={() => {
              console.log("Button pressed!");
              addPenitipanDataToFirebase();
            }}
            ref={ref}
            style={{
              backgroundColor: "coral",
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
              setShowModal(false);
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
                <Text>Layanan akan ditambah</Text>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="outline"
                  size="sm"
                  action="secondary"
                  mr="$3"
                  onPress={() => {
                    setShowModal(false);
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
                    setShowModal(false);
                  }}
                >
                  <TouchableOpacity>
                    <Link href="/detail_penitipan">
                      <ButtonText >Save</ButtonText>
                    </Link>
                  </TouchableOpacity>

                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </FormControl>
    </>
  );
};

export default add_detail_penitipan;