import { Button, Text, View, Image, Pressable, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';




const Join = ({ navigation }) => {


    return (
        <View style={{ flex: 1, backgroundColor: "#D35400" }}>
            <View style={styles.title}>
                <Text style={{ color: "#FBFCFC", fontSize: 35, }}> Do You </Text>
                <Text style={{ color: "#FBFCFC", fontSize: 35, marginLeft: 10 }}>Want To Join</Text>
                <Text style={{ color: "#FBFCFC", fontSize: 35, marginLeft: 10 }}>With Us</Text>
            </View>

            <View >
                <Text style={{ color: "#FBFCFC", backgroundColor: "#FBFCFC", height: 170, }}>.......c.</Text>
            </View>

            {/* <View style={styles.fixToText}>
                <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                    <View style={styles.yes}>
                        <Text style={{ marginTop: 6, marginLeft: 37, fontSize: 20, color: "#FBFCFC", }}>YES</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Log')}>
                    <View style={styles.no}>
                        <Text style={{ marginTop: 6, marginLeft: 40, fontSize: 20, color: "#FBFCFC", }}>NO</Text>
                    </View>
                </TouchableHighlight>
            </View> */}


            <View style={styles.fixToText}>
                <View style={{ marginTop: 30, width: 160, marginLeft:20,  }}>
                    <Button
                        title="YES"
                        color="#229954"
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
                <View style={{ marginTop: 30, width: 160, marginRight:20, borderRadius: 10, }}>
                    <Button
                        title="NO"
                        color="#FE0B04"
                        onPress={() => navigation.navigate('Log')}
                    />
                </View>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -120

    },

    yes: {
        marginLeft: 40,
        width: 120,
        backgroundColor: "#229954",
        height: 40,
        borderRadius: 10,
    },

    no: {
        marginRight: 40,
        width: 120,
        backgroundColor: "#FE0B04",
        height: 40,
        borderRadius: 10,
    },


    title: {

        margin: 21,
        marginTop: 400,
        color: '#FBFCFC',

    },



});

export default Join;