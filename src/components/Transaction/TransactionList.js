import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDataContext } from '../../../DataContext';

const TransactionList = ({ navigation }) => {
    const { dataTransaction } = useDataContext();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() =>
                navigation.navigate('TransactionDetail', {
                    description: item.description,
                    amount: item.amount,
                    productName: item.productName,
                })
            }
        >
            <Text style={styles.itemText}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Daftar Transaksi</Text>
            <FlatList
                data={dataTransaction}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#3498db', // Ganti warna latar belakang sesuai kebutuhan
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#fff', // Ganti warna teks sesuai kebutuhan
    },
    item: {
        backgroundColor: '#f9f9f9',
        padding: 16,
        marginVertical: 8,
        borderRadius: 4,
    },
    itemText: {
        fontSize: 16,
        color: '#333', // Ganti warna teks sesuai kebutuhan
    },
});

export default TransactionList;
