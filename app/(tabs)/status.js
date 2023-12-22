import {
  Center,
  Heading,
  Box,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  ScrollView,
  Divider,
  fontSize,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  InputField,
  ButtonText,
} from "@gluestack-ui/themed";
import { Header } from "../../components";
import { useState } from "react";

const data = [
  {
    id: 1,
    tanggal: "02 November 2023",
    jenis: "ginza",
    layanan: "Grooming",
    harga: "Rp 75.000",
    status: "Selesai"
  },
];


const status = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <>
      <Header title={"Status"} />
      <ScrollView flex={1} backgroundColor="floralwhite">
        <VStack px={9}>
          
          <Box
            bg={"#FF7F50"}
            pt={5}
            pr={4}
            pb={2}
            pl={4}
            mt={10}
            borderRadius={"$xl"}
          >
            <Text bold py={2} fontSize={"$xl"} color={"#FFF"}>
              Grooming
            </Text>
            <Divider mb={2} />
            <HStack mt={"$2"} mb={"$2"} pt={2}>
            {data.map((item) => (

              <VStack ml={"$2"} pl={2} fontSize={"$sm"} color={"#FFF"}>

                <Text color="#fefce8" bold> 
                  Tanggal Reservasi : {item.tanggal}
                </Text>
                <Text color="#fefce8" bold>
                  Jenis Hewan : {item.jenis}
                </Text>
                <Text color="#fefce8" bold>
                  Harga : {item.harga}
                </Text>
              </VStack>
            ))}
            </HStack>
            <Divider mt={2} mb={2} />
            
            {data.map((item) => (
            <HStack justifyContent={"flex-end"}>
              <Button
                mx={10}
                px={15}
                rounded={10}
                bg={"#fefce8"}
                onPress={() => setShowModal(true)}
              >
                <Text bold color={"#black"}>
                  Nilai
                </Text>
              </Button>
              <Button mx={2} px={4} rounded={10} bg={"#fefce8"}>
                <Text bold color={"#black"}>
                  {item.status}
                </Text>
              </Button>
            </HStack>
            ))}
          </Box>
          <Modal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader borderBottomWidth="$0">
                <VStack space="sm">
                  <Heading size="lg">Rate us !</Heading>
                  <Text size="sm">Give us your rate</Text>
                </VStack>
              </ModalHeader>
              <ModalBody>
                <Input>
                  <InputField placeholder="Drop ur Rate Here!" />
                </Input>
              </ModalBody>
              <ModalFooter borderTopWidth="$0">
                <VStack space="lg" w="$full">
                  <Button
                    backgroundColor="#f59e0b"
                    onPress={() => {
                      setShowModal2(true);
                    }}
                  >
                    <ButtonText>Submit</ButtonText>
                  </Button>
                </VStack>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal
            isOpen={showModal2}
            onClose={() => {
              setShowModal2(false);
            }}
          >
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader borderBottomWidth="$0">
                <VStack space="sm">
                  <Heading size="lg">Thank You!</Heading>
                  <Text size="sm">
                    Your feedback is incredibly valuable to us
                  </Text>
                </VStack>
              </ModalHeader>
              <ModalFooter borderTopWidth="$0">
                <VStack space="lg" w="$full">
                  <Button
                    backgroundColor="#f59e0b"
                    variant="link"
                    size="sm"
                    onPress={() => {
                      setShowModal2(false);
                      setShowModal(false);
                    }}
                  ><ButtonText color="white">Submit</ButtonText>
                  </Button>
                </VStack>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </ScrollView>
    </>
  );
};

export default status;