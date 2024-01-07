// EmployeeDetail.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// Impor komponen yang diperlukan dari React Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Impor layar Anda
import AddEmployee from './AddEmployee';
import EmployeeDetail from './EmployeeDetail';

// Buat navigator tumpukan
const Stack = createStackNavigator();

// Tentukan tumpukan navigasi
const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AddEmployee" component={AddEmployee} />
            <Stack.Screen name="EmployeeDetail" component={EmployeeDetail} />
        </Stack.Navigator>
    );
};

const EmployeeDetail = ({ route, navigation }) => {
    const { id, name, position, salary } = route.params;

    const kembali = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>ID Pegawai:</Text>
            <Text style={styles.text}>{id}</Text>

            <Text style={styles.label}>Nama:</Text>
            <Text style={styles.text}>{name}</Text>

            <Text style={styles.label}>Posisi:</Text>
            <Text style={styles.text}>{position}</Text>

            <Text style={styles.label}>Gaji:</Text>
            <Text style={styles.text}>{salary}</Text>

            <Button title="Kembali" onPress={kembali} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default EmployeeDetail;
