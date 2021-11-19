import React from "react";
import { Button, View, StyleSheet, Pressable, Text } from "react-native";

export const HomeScreen = ({ navigation }: any) => {


    return (
        <View style={styles.container}>
            <View style={styles.innerWrapper}>
                <Pressable
                    onPress={() => navigation.navigate('Conference Room')}
                    style={styles.button}
                >
                    <Text style={styles.text}>Book Conference Room</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Another Room')}
                    style={styles.button}
                >
                    <Text style={styles.text}>Book Another Room</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: 'red'
    },

    innerWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: '30%',
        width: '80%'
    },

    button: {
        width: '100%',
        height: '40%',
        maxHeight: 90,
        maxWidth: 500,
        minWidth: 300,
        backgroundColor: '#e6dcff',
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontSize: 16
    }

});