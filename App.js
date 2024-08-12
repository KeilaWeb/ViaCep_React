import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FormularioCep from './components/FormularioCep';
import ExibicaoEndereco from './components/ExibicaoEndereco';
import logoCorreio from './assets/logo_correio.png';

const App = () => {
  const [endereco, setEndereco] = useState(null);

  const handleBuscarEndereco = (enderecoBuscado) => {
    setEndereco(enderecoBuscado);
  };

  return (
    <View style={styles.container}>
      <Image source={logoCorreio} style={styles.logo} />
      <FormularioCep aoBuscarEndereco={handleBuscarEndereco} />
      <ExibicaoEndereco endereco={endereco} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFD752',
  },
  logo: {
    width: 200,
    height: 136,
    marginBottom: 20,
  }
});

export default App;
