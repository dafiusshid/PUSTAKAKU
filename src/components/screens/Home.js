// components/MainMenu.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MainMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Tambah Pegawai" onPress={() => navigation.navigate('AddEmployee')} color="#2ecc71" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Tambah Transaksi" onPress={() => navigation.navigate('AddTransaction')} color="#e74c3c" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Lihat Buku" onPress={() => navigation.navigate('BookList')} color="#9b59b6" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Lihat Pegawai" onPress={() => navigation.navigate('EmployeeList')} color="#f39c12" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Lihat Transaksi" onPress={() => navigation.navigate('TransactionList')} color="#34495e" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default MainMenu;
