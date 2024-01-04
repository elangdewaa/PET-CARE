import React, { useState } from "react";
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
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import FIREBASE from "../config";

const add_detail_grooming = () => {
  const [showModal, setShowModal] = useState(false);
  const [groomingData, setGroomingData] = useState({
    paketGrooming: "",
    harga: "",
    deskripsi: "",
  });

  const handleInputChange = (field, value) => {
    setGroomingData((prevData) => ({ ...prevData, [field]: value }));
  };

  const addGroomingDataToFirebase = () => {
    const databaseRef = FIREBASE.database().ref("addgrooming");

    // buat push data ke database
    databaseRef
      .push(groomingData)
      .then(() => {
        // data sukses untuk di tambahkan
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error adding data to Firebase: ", error);
      });
  };

  return (
    <>
      <Header title={"Grooming"} />
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
              Paket Grooming
            </Text>
            <TextInput
              placeholder="Isi Paket Grooming"
              placeholderTextColor="#6b7280"
              style={{
                height: 44,
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
              value={groomingData.paketGrooming}
              onChangeText={(text) => handleInputChange("paketGrooming", text)}
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
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
              value={groomingData.harga}
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
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
              value={groomingData.deskripsi}
              onChangeText={(text) => handleInputChange("deskripsi", text)}
            />
          </VStack>

          <Button
            onPress={() => addGroomingDataToFirebase()}
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
                    <Link href="/detail_grooming">
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

export default add_detail_grooming;