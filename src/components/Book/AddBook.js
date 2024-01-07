import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddBook = ({ navigation, route }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleAddBook = () => {
        const newItem = {
            id: Date.now(),
            title: title,
            author: author,
            description: description,
        };

        route.params.onAddBook(newItem);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Judul Buku:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
            />

            <Text style={styles.label}>Penulis:</Text>
            <TextInput
                style={styles.input}
                value={author}
                onChangeText={text => setAuthor(text)}
            />

            <Text style={styles.label}>Deskripsi:</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                multiline
                numberOfLines={4}
                value={description}
                onChangeText={text => setDescription(text)}
            />

            <Button title="Tambah Buku" onPress={handleAddBook} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#3498db',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        backgroundColor: '#fff',
        color: '#333',
    },
});

export default AddBook;
