import {Button, Text, View, Image } from 'react-native';
import React from 'react';




const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#DC7633', }}>
      <Text style={{ padding:5, marginTop: 400, fontSize: 30, alignItems:''}}> EASY TO </Text>
      <Text style={{ padding:1, marginBottom: 80, fontSize: 30, alignItems:''}}>Use</Text>
      {/* <Image
        style={styles.tinyLogo}
        source={require("../Img/ok-1.jpg")}
      ></Image> */}
      <Button
        title="START"
        onPress={() => navigation.navigate('Login')}
      />
   
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius:5,
//     backgroundColor: '#eaeaea',
   
    
    
//   },

//   title: {
//       textAlign: 'center',
//       fontSize: 30,
//       margin: 21,
//       marginTop: 200,
//       color: '#FBFCFC',
      
//   },

  

// });

export default Home;