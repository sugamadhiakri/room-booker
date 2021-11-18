import React from "react";
import { Button, Text, View } from "react-native";

export const HomeScreen = ({ navigation }: any) => {


    return (
        <View>


            <Button
                title="Book Conference Room"
                onPress={() => navigation.navigate('Conference Room')}
            />
            <Button
                title="Book Another Room"
                onPress={() => navigation.navigate('Another Room')}
            />
        </View>
    );
}