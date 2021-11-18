import React, { useState } from "react";
import { Button, Platform, View, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


export const TimeViewer = (props: any) => {

    const [show, setShow] = useState(false);
    const [time, setTime] = [props.time, props.setTime];

    const onChange = (event: Event, selectedTime: Date) => {
        const currentTime = selectedTime || time;
        setTime(currentTime);
        if (Platform.OS == 'android')
            setShow(false);
    }

    const showTimePicker = () => {
        setShow(true);
    }

    return (
        <View>
            <View>
                <Text>Current Time Picked: {time.toLocaleTimeString()}</Text>
                <Button onPress={showTimePicker} title="Pick Time" />
            </View>
            <View>
                {show && (<DateTimePicker
                    value={time}
                    mode="time"
                    display="default"
                    onChange={onChange}
                />)}
            </View>
        </View>
    );
}

export const DateViewer = (props: any) => {

    const [show, setShow] = useState(false);
    const [date, setDate] = [props.date, props.setDate];

    const onChange = (event: Event, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        if (Platform.OS == 'android')
            setShow(false);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <View>
            <View>
                <Text>Current Date Picked: {date.toLocaleDateString()}</Text>
                <Button onPress={showDatePicker} title="Pick Date" />
            </View>
            <View>
                {show && (<DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />)}
            </View>
        </View>
    );
}