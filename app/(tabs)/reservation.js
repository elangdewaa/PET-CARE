import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Reservation = ({ isLoading, setIsLoading }) => {
  const [animalType, setAnimalType] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleReservation = () => {
    if (animalType && reservationDate && serviceType) {
      // mengirim request ke server
      setTimeout(() => {
        setSuccessMessage('Reservasi berhasil disimpan');
      }, 2000);
    } else {
      setSuccessMessage('Semua kolom harus diisi');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {/* <Header/> */}
      <View style={{ marginBottom: 10 }}>
        <Text style={{ marginBottom: 5 }}>Jenis Hewan:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 8,
          }}
          onChangeText={(text) => setAnimalType(text)}
          value={animalType}
          placeholder="Misal: Anjing, Kucing"
        />
      </View>

      <Text style={{ marginBottom: 5 }}>Masukkan Tanggal Reservasi:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 8,
        }}
        onChangeText={(text) => setReservationDate(text)}
        value={reservationDate}
        placeholder="YYYY-MM-DD"
      />

      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 5 }}>Layanan:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 8,
          }}
          onChangeText={(text) => setServiceType(text)}
          value={serviceType}
          placeholder="Misal: Grooming, Penitipan"
        />
      </View>

      <Button
        title="Simpan Reservasi"
        onPress={handleReservation}
        disabled={isLoading}
        style={{
          marginTop: 20,
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          alignSelf: 'center',
        }}
      />

      <Text style={{ marginTop: 10, color: successMessage.includes('berhasil') ? 'green' : 'red' }}>
        {successMessage}
      </Text>
    </View>
  );
};

export default Reservation;
