import { Button, Text, View, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';




const Log = ({ navigation }) => {
  const onPressFunction = () => {
    // Your press event handler logic here
    console.log("Image Pressed!");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#D35400" }}>

      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image
          style={{
            width: 200,
            height: 200,
            marginTop: 250,
            marginLeft: 90,
          }}
          source={
            require('../Img/ok-2.png')
          }
        />
      </Pressable>
      {/* <View style={{ height: 140, }}>
        <View style={{ marginTop: -40, width: 100, marginLeft: 150 }}>
          <Button
            title="GO"
            color="#D35400"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    width: 50,
    marginLeft: 165,
    marginTop: -55,

  }


});

export default Log;


