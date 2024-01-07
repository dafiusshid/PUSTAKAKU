import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditTransaction = ({ navigation, route }) => {
    const [description, setDescription] = useState(route.params.transaction.description);
    const [amount, setAmount] = useState(route.params.transaction.amount);
    const [productName, setProductName] = useState(route.params.transaction.productName);

    const handleEditTransaction = () => {
        const editedTransaction = {
            ...route.params.transaction,
            description,
            amount,
            productName,
        };

        // Panggil fungsi edit transaksi dari properti rute
        route.params.onEditTransaction(editedTransaction);

        // Kembali ke layar sebelumnya
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Deskripsi:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={text => setDescription(text)}
            />

            <Text style={styles.label}>Jumlah:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={amount}
                onChangeText={text => setAmount(text)}
            />

            <Text style={styles.label}>Nama Produk:</Text>
            <TextInput
                style={styles.input}
                value={productName}
                onChangeText={text => setProductName(text)}
            />

            <Button title="Edit Transaksi" onPress={handleEditTransaction} />
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

export default EditTransaction;
