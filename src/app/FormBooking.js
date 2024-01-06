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
  Pressable,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { Platform, TextInput } from "react-native";
import { Link, router } from "expo-router";
import firebase from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FIREBASE from "../config";
import DateTimePicker from '@react-native-community/datetimepicker';


const FormBooking = () => {
  const [showModal, setShowModal] = useState(false);
  const jenisHewanInputRef = useRef(null);
  const tanggalReservasiInputRef = useRef(null);
  const jenisLayananInputRef = useRef(null);
  const [Booking, setBooking] = useState(new Date()); // State untuk tanggal peminjaman
  const [showBookingPicker, setShowBookingPicker] = useState(true);
  const onBookingChange = (_, selected) => {
    if (selected) {
      setBooking(selected);
      setShowBookingPicker(true);
    }
  };

  const [bookingData, setBookingData] = useState({
    jenisHewan: "",
    tanggalReservasi: "",
    jenisLayanan: "",
  });

  const handleInputChange = (field, value) => {
    setBookingData((prevData) => ({ ...prevData, [field]: value }));
  };

  const addBookingDataToFirebase = () => {
    const databaseRef = FIREBASE.database().ref("addbook");

    // buat push data ke database
    databaseRef
      .push(bookingData)
      .then(() => {
        // data sukses untuk di tambahkan
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error adding data to Firebase: ", error);
      });
  };

  const getUser = async () => {
    try {
      // Ambil data dari AsyncStorage
      const userData = await AsyncStorage.getItem("user-data");
      if (userData !== null) {
        // Diarahkan ke Halaman Home
        router.replace("/home");
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const booking = () => {
    firebase
      .auth()
      .Input(jenishewan, tanggal)
      .then((layanan) => {
        // const user = userCredential.user
        saveUserData(jenishewan, tanggal, layanan);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const saveUserData = async (jenishewan, tanggal, layanan) => {
    const userData = { jenishewan, tanggal, layanan };
    try {
      // Menyimpan data ke AsyncStorage
      await AsyncStorage.setItem("user-data", JSON.stringify(userData));
      // Diarahkan ke Home
      router.replace("/home");
    } catch (error) {
      console.error(error);
    }
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
              value={bookingData.jenisHewan}
              onChangeText={(text) => handleInputChange("jenisHewan", text)}
            />
          </VStack>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Tanggal Reservasi dan booking
            </Text>
            <Pressable onPress={() => setShowBookingPicker(true)}>
              <TextInput
                //   ref={tanggalReservasiInputRef}
                placeholder="Isi tanggal rencana reservasi dan booking"
                placeholderTextColor="#6b7280"
                style={{
                  height: 44,
                  backgroundColor: "#ffffff",
                  paddingHorizontal: 16,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: "500",
                  color: "#6b7280"
                }}
                editable={false}
                value={Booking.toDateString() }
              />
            </Pressable>
            {showBookingPicker && (
              <DateTimePicker
                value={Booking}
                mode="date"
                display="calendar"
                onChange={onBookingChange}
                style={{
                  borderBottomWidth: 3,
                  borderEndWidth: 3,
                  borderTopWidth: 1,
                  borderStartWidth: 1,
                  borderColor: '#021C35',
                  // Tambahkan properti gaya lainnya di sini sesuai kebutuhan
                }}
              />

            )}
          </VStack>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Jenis Layanan
            </Text>
            <TextInput
                ref={jenisLayananInputRef}
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
              value={bookingData.jenisLayanan}
              onChangeText={(text) => handleInputChange("jenisLayanan", text)}
            />

          </VStack>
          <Button
            onPress={() => addBookingDataToFirebase()}
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
          // finalFocusRef={jenisHewanInputRef} // Use any input ref here for accessibility
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