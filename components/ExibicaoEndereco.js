import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExibicaoEndereco = ({ endereco }) => {
  if (!endereco) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Rua: {endereco.logradouro}</Text>
      <Text style={styles.texto}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.texto}>Cidade: {endereco.localidade}</Text>
      <Text style={styles.texto}>Estado: {endereco.uf}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ExibicaoEndereco;
