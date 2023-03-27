import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
//estilos da tela Contato
import styles from "./style";

export default function Contato(){
    return(
        <ScrollView>
      <View style={ styles.container }>
        <Text style={ styles.texto }>Canais oficiais para comunicação.</Text>
      
        <View style={ styles.contatoLista }>
          <View style={ styles.contatoBox }>
            <FontAwesome name="phone" size={ 50 } color="#0B0E3A" />
            <Text style={ styles.contatoTitulo}>Telefone:</Text>
            <Text style={ styles.contatoInfo}>+55 62 98626-3012</Text>
          </View>
          
          <View style={ styles.contatoBox }>
            <Entypo name="location-pin" size={ 50 } color="#0B0E3A" />
            <Text style={ styles.contatoTitulo}>Endereço:</Text>
            <Text style={ styles.contatoInfo}>Rua das Hortências, 123 - Goiânia - GO</Text>
          </View>

          <View style={ styles.contatoBox }>
            <MaterialIcons name="email" size={ 50 } color="#0B0E3A" />
            <Text style={ styles.contatoTitulo}>Email:</Text>
            <Text style={ styles.contatoInfo}>shows@email.com.br</Text>
          </View>

          <View style={ styles.contatoBox }>
            <FontAwesome name="instagram" size={ 50 } color="#0B0E3A" />
            <Text style={ styles.contatoTitulo}>Instagram:</Text>
            <Text style={ styles.contatoInfo}>@shows</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    );
}