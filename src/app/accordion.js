import React, { useEffect } from 'react';
import { View, SafeAreaView, Text, Platform, UIManager } from 'react-native';
import { AccordionList } from 'react-native-accordion-list-view';

const Accordion = () => {
  const data = [
    {
      id: 0,
      title: 'Bagaimana Cara Reservasi',
      body: "Pilih halaman reservasi pada layout, Kemudian isi form sesuai perintah dan simpan",
    },
    {
      id: 1,
      title: 'Lupa Password Akun',
      body: "Masuk halaman profil dan pilih ubah password",
    },
  ];
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <SafeAreaView>
      <View>
        <AccordionList
          data={data}
          customTitle={item => <Text>{item.title}</Text>}
          customBody={item => <Text>{item.body}</Text>}
          animationDuration={400}
          expandMultiple={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Accordion