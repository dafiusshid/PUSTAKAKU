import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TransactionDetail = ({ route, navigation }) => {
    const { description, amount, productName } = route.params.transaction;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Deskripsi:</Text>
            <Text style={styles.text}>{description}</Text>

            <Text style={styles.label}>Jumlah:</Text>
            <Text style={styles.text}>{amount}</Text>

            <Text style={styles.label}>Nama Produk:</Text>
            <Text style={styles.text}>{productName}</Text>

            <Button title="Edit Transaksi"
                onPress={() => navigation.navigate('EditTransaction', { transaction: route.params.transaction })}
            />
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
    text: {
        fontSize: 18,
        marginBottom: 16,
    },
});

export default TransactionDetail;
