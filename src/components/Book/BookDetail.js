// BookDetail.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookDetail = ({ route }) => {
    const { title, author, description } = route.params; // Mendapatkan data buku dari route params

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Judul Buku:</Text>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.label}>Penulis:</Text>
            <Text style={styles.author}>{author}</Text>

            <Text style={styles.label}>Deskripsi:</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    author: {
        fontSize: 18,
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
    },
});

export default BookDetail;