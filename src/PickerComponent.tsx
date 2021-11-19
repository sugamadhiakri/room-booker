import React, { useState } from "react";
import { Button, Platform, View, Text, StyleSheet } from "react-native";
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
            <View style={styles.viewer}>
                <Text style={{ fontSize: '1.2rem' }}>Time: {time.toLocaleTimeString()}</Text>
                <Button onPress={showTimePicker} title="Pick" />
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
            <View style={styles.viewer}>
                <Text style={{ fontSize: '1.2rem' }}>Date: {date.toLocaleDateString()}</Text>
                <Button onPress={showDatePicker} title={"Pick"} />
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

const styles = StyleSheet.create({
    viewer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        justifyContent: "space-around"
    },

})