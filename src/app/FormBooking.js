import React, { useState, useRef } from "react";
import {
  Heading,
  Text,
  Button,
  ButtonText,
  FormControl,
  VStack,
  Input,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { Platform, TextInput } from "react-native";
import { Link } from "expo-router";
// import DateTimePicker from '@react-native-community/datetimepicker';

const FormBooking = () => {
  const [showModal, setShowModal] = useState(false);
  const jenisHewanInputRef = useRef(null);
  const tanggalReservasiInputRef = useRef(null);
  const jenisLayananInputRef = useRef(null);

  const handleSave = () => {
    // Add logic for handling the save button press
    setShowModal(true);
  };

  return (
    <>
      <Header title={"Form Booking"} />
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
          <Heading color="$warning900" lineHeight="$md">
            Form Booking
          </Heading>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Jenis Hewan
            </Text>
            <TextInput
              ref={jenisHewanInputRef}
              placeholder="Isi jenis hewan Anda"
              placeholderTextColor="#6b7280"
              style={{
                height: 44,
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
            />
          </VStack>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Tanggal Reservasi dan booking
            </Text>
            <TextInput
              ref={tanggalReservasiInputRef}
              placeholder="Isi tanggal rencana reservasi dan booking"
              placeholderTextColor="#6b7280"
              style={{
                height: 44,
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
            />
          </VStack>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Jenis Layanan
            </Text>
            <TextInput
              ref={tanggalReservasiInputRef}
              placeholder="Isi jenis layanan yang ingin dipesan"
              placeholderTextColor="#6b7280"
              style={{
                height: 44,
                backgroundColor: "#ffffff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
              }}
            />
            </VStack>
          <Button
            onPress={handleSave}
            style={{
              backgroundColor: "coral",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <ButtonText>Save</ButtonText>
          </Button>
          <Modal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            finalFocusRef={jenisHewanInputRef} // Use any input ref here for accessibility
          >
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader>
                <Heading size="lg">Pemesanan Berhasil</Heading>
                <ModalCloseButton>
                  <Icon as={CloseIcon} />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <Text>Jadwal reservasi berhasil disubmit</Text>
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
                  <ButtonText>Booking</ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </FormControl>
    </>
  );
};

export default FormBooking;
