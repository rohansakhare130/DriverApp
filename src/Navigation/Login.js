import { Button, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { TextInput, SafeAreaView, TouchableHighlight} from 'react-native';


const Login = ({navigation}) => {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

    return (
<View style={{ flex:1, backgroundColor: '#DC7633', }} >
            <Text style={styles.title}>Login</Text>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="User Name"
        
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
    </SafeAreaView>
   
            <Button
                title="Login"
                onPress={() => navigation.navigate('Home')}
                // onPress={() => navigation.push('Login')}
                 /> 
    {/* <View style={styles.button}>
        <TouchableHighlight onPress={add} styel={styles.button}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View> */}
</View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:5,
      backgroundColor: '#eaeaea',
     
      
      
    },

    title: {
        textAlign: 'center',
        fontSize: 30,
        margin: 21,
        marginTop: 200,
        color: '#FBFCFC',
        
    },
    
    

  });


export default Login;