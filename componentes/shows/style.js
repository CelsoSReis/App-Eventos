import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerScroll: {
    padding: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitulo: {
    marginBottom: 15,
    fontSize: 18,
  },
  cardVinho: {
    flexDirection: 'row',
    backgroundColor: '#0B0E3A',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  vinhoImg: {
    width: 130,
    height: 150
  },
  cardBoxDescricao: {
    flex: 1,
    padding: 10
  },
  data: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  cidade: {
    fontSize: 19,
    color: '#fff',
    marginBottom: 3
  },
  local: {
    color: '#fff',
  },
});

export default styles;