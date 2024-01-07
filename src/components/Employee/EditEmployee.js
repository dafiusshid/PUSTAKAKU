// EditEmployee.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDataContext } from '../../../DataContext';

const EditEmployee = ({ route, navigation }) => {
    const { editItem } = useDataContext();
    const { id, name: initialName, position: initialPosition, salary: initialSalary } = route.params;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);
    const [salary, setSalary] = useState(initialSalary);

    const handleEditEmployee = () => {
      // Update the employee data in the context
      editItem(id, { name: updatedName, position: updatedPosition, salary: updatedSalary });

      // Navigate back to the previous screen after editing
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

            <Button title="Simpan Perubahan" onPress={handleEditEmployee} />
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

export default EditEmployee;
