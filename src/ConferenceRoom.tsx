import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { DateViewer, TimeViewer } from "./PickerComponent";

export const ConferenceRoom = () => {

    const [time, setTime] = useState(new Date(Date.now()));
    const [date, setDate] = useState(new Date(Date.now()));
    const submit = () => {
        console.log(time.toLocaleTimeString());
        console.log(date.toLocaleDateString());
    }
    return (
        <View>
            <TimeViewer time={time} setTime={setTime} />
            <DateViewer date={date} setDate={setDate} />
            <View>
                <Text>Purpose</Text>
                <TextInput />
            </View>
            <View>
                <Text>Who is Booking this?</Text>
                <TextInput />
            </View>
            <Button
                onPress={submit}
                title="Confirm Booking"
            />
        </View>
    )
}