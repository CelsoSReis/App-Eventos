import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  texto: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 35,
    textAlign: 'center',
  },
  contatoLista: {
    alignItems: 'center',
  },
  contatoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0B0E3A',
    borderRadius: 10,
    padding: 15,
    margin: 5, 
    height: 150,
    width: 300,
  },
  contatoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B0E3A'
  },
  contatoInfo: {
    fontSize: 18,
    color: '#0B0E3A'
  },
  
});

export default styles;