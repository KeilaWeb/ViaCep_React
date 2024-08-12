import React, { useState } from 'react';
import { Pressable, TextInput, View, Text, StyleSheet } from 'react-native';
import { buscarEnderecoPorCep } from '../services/cepServico';

const FormularioCep = ({ aoBuscarEndereco }) => {
  const [cep, setCep] = useState('');
  const [erro, setErro] = useState('');

  const handleBuscarEndereco = async () => {
    if (cep.length !== 8) {
      setErro('CEP deve ter 8 dígitos.');
      return;
    }

    setErro('');
    try {
      const endereco = await buscarEnderecoPorCep(cep);
      aoBuscarEndereco(endereco);
    } catch (err) {
      setErro('Erro ao buscar o endereço.');
    }
  };

  const handleLimpar = () => {
    setCep('');
    setErro('');
    aoBuscarEndereco(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        placeholderTextColor="#ffffff"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <View style={styles.botoesContainer}>
        <Pressable style={styles.botao} onPress={handleBuscarEndereco}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={handleLimpar}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </Pressable>
      </View>
      {erro ? <Text style={styles.textoErro}>{erro}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10,
    color: '#072E58',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botao: {
    flex: 1,
    backgroundColor: '#072E58',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
  },
  textoErro: {
    color: 'red',
    marginTop: 10,
  },
});

export default FormularioCep;
