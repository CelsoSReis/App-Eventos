import React from "react";
import { Text, ImageBackground } from "react-native";

import fundo from '../../assets/capa.jpg';
import styles from './style';

export default function Home() {
  return (
    <ImageBackground 
      blurRadius={ 5 } 
      style={ styles.container } 
      source={ fundo }
    >
      <Text style={ styles.titulo }>Agenda de Shows</Text>  
      <Text style={ styles.descricao }>Aqui você encontra todas as nossas programações.</Text>
    </ImageBackground>
  )
}
