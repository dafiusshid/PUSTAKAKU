import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDataContext } from '../../../DataContext';

const AddTransaction = ({ navigation }) => {
    const { addNewItemTransaction } = useDataContext();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [productName, setProductName] = useState('');

    const handleAddTransaction = () => {
        const newTransaction = {
            id: Math.random().toString(),
            description,
            amount,
            productName,
        };
        addNewItemTransaction(newTransaction)
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Deskripsi:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={(text) => setDescription(text)}
            />

            <Text style={styles.label}>Jumlah:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={amount}
                onChangeText={(text) => setAmount(text)}
            />

            <Text style={styles.label}>Nama Produk:</Text>
            <TextInput
                style={styles.input}
                value={productName}
                onChangeText={(text) => setProductName(text)}
            />

            <Button title="Tambah Transaksi" onPress={handleAddTransaction} />
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
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
});

export default AddTransaction;
