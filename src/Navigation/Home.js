import { Button, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';




const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#D35400', }}>
      <Text style={{ padding: 5, marginTop: 400, fontSize: 35, marginLeft: 10, color: "#FBFCFC", }}> Easy To </Text>
      <Text style={{ padding: 1, marginBottom: 80, fontSize: 35, marginLeft: 22, color: "#FBFCFC", }}>Use</Text>


      {/* <View style={{ color:"#FBFCFC", width:180, marginLeft:100, }}>
      <Button
        title="START"
        onPress={() => navigation.navigate('Login')}
      />
      </View> */}

      <View style={{ height: 140, backgroundColor: '#F7F9F9', }}>
        <View style={{ marginTop: 30, width: 160, marginLeft: 120 }}>
          <Button
            title="START"
            color="#D35400"
            onPress={() => navigation.navigate('Login')}
          />
        </View>

      </View>


    </View>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     marginLeft: 130,
//     width: 150,
//     height: 35,
//     backgroundColor: '#D35400',
//     marginTop: 60,

//   }
// });

export default Home;