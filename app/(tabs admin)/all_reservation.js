import { ScrollView, Box, VStack, Text, Link, Image, Heading, TouchableOpacity } from "@gluestack-ui/themed";
import { Header } from "../../components";
import React from 'react';
import { FlatList } from "react-native-gesture-handler";

const noHead = { headerShown: false };

const all_reservation = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (

    <Box style={{ flex: 1, backgroundColor: '#fff', }}>
      <Box style={{
        width: '90%',
        alignSelf: 'center',
        marginTop: 50,
        height: 60,
        borderWidth: 0.5,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 5,
        paddingRight: 5,
      }}>
        <TouchableOpacity style={{
          width: 155,
          height: 50,
          backgroundColor: selectedTab == 0 ? 'coral' : 'white',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
          onPress={() => {
            setSelectedTab(0)
          }}>
          <Text style={{
            fontSize: 17,
            lineHeight: 24,
            fontWeight: '600',
            color: selectedTab == 0 ? '#fff' : '#000',
          }}>
            Grooming</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          width: 155,
          height: 50,
          backgroundColor: selectedTab == 1 ? 'coral' : 'white',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
          onPress={() => {
            setSelectedTab(1)
          }}>
          <Text style={{
            fontSize: 17,
            lineHeight: 24,
            fontWeight: '600',
            color: selectedTab == 1 ? '#fff' : '#000'
          }}>
            Penitipan</Text>
        </TouchableOpacity>
      </Box>
      {selectedTab == 0 ? (
        <Box style={{ flex: 1, marginTop: 10, alignItems: 'center', }}>
          <Box style={{
            width: '95%',
            marginTop: 10,
            height: 30,
            flexDirection: 'row',
            backgroundColor: '#ECE1CC',
            borderColor: '#ECE1CC',
            paddingLeft: 5,
            paddingRight: 5,
          }}>
            <VStack space={"2xl"} style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <HStack>
                <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#000' }}>Jasmine</Text>
                <Text style={{ fontSize: 17, color: '#000', textAlign: 'right', alignItems: 'right', paddingLeft: '55%' }}> 29/12/2023</Text>
              </HStack>
            </VStack>

          </Box>
          <Box style={{
            width: '95%',
            height: 140,
            flexDirection: 'row',
            backgroundColor: '#FBF2E1',
            borderColor: '#FBF2E1',
            paddingLeft: 5,
            paddingRight: 5,
          }}>
            <VStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Pet Name</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '20%' }}> : Mochi </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Category</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '22%' }}> : Grooming </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Package Option</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '8%' }}> : Dry Grooming + Anti Kutu </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Price</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '30%' }}> : Rp75.000 </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Number Order</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '11%' }}> : 01 </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Reservation for</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '9%' }}> : 10/12/2023 </Text>
              </HStack>
            </VStack>
          </Box>
          <Text>Grooming</Text>
        </Box>
      ) : (
        <Box style={{ flex: 1, alignItems: 'center', }}>
          <Box style={{
            width: '95%',
            marginTop: 20,
            height: 30,
            flexDirection: 'row',
            backgroundColor: '#ECE1CC',
            borderColor: '#ECE1CC',
            paddingLeft: 5,
            paddingRight: 5,
          }}>
            <VStack space={"2xl"} style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <HStack>
                <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#000' }}>Dhila</Text>
                <Text style={{ fontSize: 17, color: '#000', textAlign: 'right', alignItems: 'right', paddingLeft: '55%' }}> 04/12/2023</Text>
              </HStack>
            </VStack>

          </Box>
          <Box style={{
            width: '95%',
            height: 140,
            flexDirection: 'row',
            backgroundColor: '#FBF2E1',
            borderColor: '#FBF2E1',
            paddingLeft: 5,
            paddingRight: 5,
          }}>
            <VStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Pet Name</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '20%' }}> : Pony </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Category</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '22%' }}> : Penitipan </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Package Option</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '8%' }}> : Room 1 </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Price</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '30%' }}> : Rp100.000 </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Number Order</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '11%' }}> : 01 </Text>
              </HStack>
              <HStack>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Reservation for</Text>
                <Text style={{ fontSize: 17, color: '#000', paddingLeft: '9%' }}> : 06/12/2023 </Text>
              </HStack>
            </VStack>
          </Box>
          <Text>Penitipan</Text>
        </Box>
      )}
    </Box>
  )
}

export default all_reservation