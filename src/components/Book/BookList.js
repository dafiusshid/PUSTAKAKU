import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const BookList = ({ navigation }) => {
    const [books, setBooks] = useState([]);

    const handleAddBook = newBook => {
        setBooks([...books, newBook]);
    };

    const handleDeleteBook = bookId => {
        // Konfirmasi penghapusan buku
        Alert.alert(
            'Konfirmasi',
            'Apakah Anda yakin ingin menghapus buku ini?',
            [
                {
                    text: 'Batal',
                    style: 'cancel',
                },
                {
                    text: 'Hapus',
                    onPress: () => {
                        // Menghapus buku dari daftar
                        const updatedBooks = books.filter(book => book.id !== bookId);
                        setBooks(updatedBooks);
                    },
                },
            ],
            { cancelable: true }
        );
    };

    useEffect(() => {
        setBooks([
            { id: '1', title: 'KAPAL VAN DER WIJK', author: 'ABDUL MALIK' },
            { id: '2', title: 'SEPATU DAHLAN', author: 'KHRISNA PABICHARA' },
            { id: '3', title: 'DEAR NATHAN', author: 'ERISCA FEBRIANTI' },
            { id: '4', title: 'SANG PEMIMPI', author: 'ANDREA HIRATA' },
            { id: '5', title: 'CINTA BRONTOSAURUS', author: 'RADITYA DIKA' },
        ]);
    }, []);

    const handleBookPress = item => {
        navigation.navigate('BookDetail', {
            title: item.title,
            author: item.author,
        });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleBookPress(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteBook(item.id)}
            >
                <Text style={styles.deleteButtonText}>Hapus</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddBook', { onAddBook: handleAddBook })}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 14,
        marginTop: 8,
        color: '#555',
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        padding: 8,
        borderRadius: 4,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    addButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#3498db',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    addButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default BookList;
