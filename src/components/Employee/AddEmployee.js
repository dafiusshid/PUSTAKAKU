// AddEmployee.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDataContext } from '../../../DataContext';

const AddEmployee = ({ navigation }) => {
    const { addNewItem, data } = useDataContext();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');

    const handleAddEmployee = () => {
        const newItem = {
            id: data.length + 1,
            name,
            position,
            salary,
          };
        addNewItem(newItem);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nama:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => setName(text)}
            />

            <Text style={styles.label}>Posisi:</Text>
            <TextInput
                style={styles.input}
                value={position}
                onChangeText={text => setPosition(text)}
            />

            <Text style={styles.label}>Gaji:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={salary}
                onChangeText={text => setSalary(text)}
            />

            <Button title="Tambah Pegawai" onPress={handleAddEmployee} />
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

export default AddEmployee;
