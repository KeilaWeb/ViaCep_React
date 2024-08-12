import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export const buscarEnderecoPorCep = async (cep) => {
  try {
    const resposta = await api.get(`${cep}/json`);
    return resposta.data;
  } catch (erro) {
    console.error('Erro ao buscar o endereço:', erro);
    throw erro;
  }
};
