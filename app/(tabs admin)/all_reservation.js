import { View } from "react-native"; // Import View from React Native
import { Header } from "../../components";
import React, { useState } from 'react'; // Import useState from React
import { FlatList, TouchableOpacity, Text } from "react-native-gesture-handler";
const noHead = { headerShown: false };

const all_reservation = () => {
  const items = [
    {
      address: '225 Talbot Street Trumbull, CT 06611',
      bedrooms: 4,
      sqft: 1250,
      price: 2550,
    },
    {
      address: '998 Hillcrest Street Cookeville, TN 38501',
      bedrooms: 2,
      sqft: 800,
      price: 1725,
    },
    {
      address: '15 Santa Clara Street Antioch, TN 37013',
      bedrooms: 3,
      sqft: 920,
      price: 2200,
    },
    {
      address: '8757 Sunbeam Street Fullerton, CA 92831',
      bedrooms: 5,
      sqft: 2400,
      price: 6700,
    },
    {
      address: '468 E. Atlantic Dr. Passaic, NJ 07055',
      bedrooms: 3,
      sqft: 1975,
      price: 5650,
    },
    {
      address: '954 Bishop St. Capitol Heights, MD 20743',
      bedrooms: 2,
      sqft: 925,
      price: 2250,
    },
  ];

  const [filter, setfilter] = useState([
    { namaFilter: 'Grooming', tipe: 'grooming' },
    { namaFilter: 'Penitipan', tipe: 'penitipan' },
  ]);

  return (
    <>
      <Header title={"Welcome, Admin"} />
      <View>
        {/* <FlatList>
          horizontal
          data={filter}
          renderItem={((item)) => (
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              backgroundColor: "#FFFFFF",
              elevation: 2,
              height: 50,
              paddingHorizontal: 20,
            }}>
            <Text>{item.namaFilter}</Text>
          </TouchableOpacity>
       )}
       />
        </FlatList> */}
      </View >


    </>
  );
};

export default all_reservation;