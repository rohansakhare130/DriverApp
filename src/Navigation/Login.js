import { Button, Text, View, StyleSheet, TextInput, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';



const Login = ({ navigation }) => {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F6F7', borderColor: "#D35400", }} >

      <SafeAreaView >
       
        <Text style={styles.title}>Login</Text>
        <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="User Name"
        />
        </View>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          keyboardType="numeric"
        />
        
      </SafeAreaView>
      <View style={{ height: 140, }}>
        <View style={{ marginTop: 30, width: 160, marginLeft: 120, }}>
          <Button
            title="login"
            color="#D35400"
            onPress={() => navigation.navigate('Join')}
          />
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    backgroundColor:"#D35400",
    width: 280,
    marginLeft: 50,
    
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    margin: 21,
    marginTop: 200,
    color: '#D35400',
  },

  button: {
    width: 150,
    marginLeft: 125,

  }


});


export default Login;