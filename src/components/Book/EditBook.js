import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDataContext } from './YourDataContext'; // Pastikan path impor ke DataContext sudah benar

const EditBook = ({ route, navigation }) => {
  const { data, editItem } = useDataContext();
  const { id, judul: initialJudulBuku, penulis: initialPenulis, description: initialDeskripsi } = route.params;

  const [judul, setJudul] = useState(initialJudulBuku);
  const [penulis, setPenulis] = useState(initialPenulis);
  const [deskripsi, setDeskripsi] = useState(initialDeskripsi);

  const handleEditBook = () => {
    editItem(id, { judul, penulis, description: deskripsi });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul Buku:</Text>
      <TextInput
        style={styles.input}
        value={judul}
        onChangeText={text => setJudul(text)}
      />

      <Text style={styles.label}>Penulis:</Text>
      <TextInput
        style={styles.input}
        value={penulis}
        onChangeText={text => setPenulis(text)}
      />

      <Text style={styles.label}>Deskripsi:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        value={deskripsi}
        onChangeText={text => setDeskripsi(text)}
      />

      <Button title="Simpan Perubahan" onPress={handleEditBook} />
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

export default EditBook;
