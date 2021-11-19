import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import { DateViewer, TimeViewer } from "./PickerComponent";

export const AnotherRoom = () => {

    const [time, setTime] = useState(new Date(Date.now()));
    const [date, setDate] = useState(new Date(Date.now()));
    const submit = () => {
        console.log(time.toLocaleTimeString());
        console.log(date.toLocaleDateString());
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerWrapper}>
                <View style={{ flex: 2 }}>
                    <TimeViewer time={time} setTime={setTime} />
                </View>
                <View style={{ flex: 2 }}>
                    <DateViewer date={date} setDate={setDate} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text>Purpose</Text>
                    <TextInput style={styles.textInput} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text>Who is Booking this?</Text>
                    <TextInput style={styles.textInput} />
                </View>
                <View style={{ flex: 5 }}>
                    <Pressable onPress={submit} style={styles.confirmButton}>
                        <Text>Confirm Booking</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    innerWrapper: {
        display: "flex",
        height: '75%',
        width: '80%',
    },

    confirmButton: {
        display: "flex",
        width: '80%',
        height: '20%',
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: '#e6dcff'
    },

    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        height: "50%"
    }
});