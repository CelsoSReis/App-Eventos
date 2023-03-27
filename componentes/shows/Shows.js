import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import show1 from '../../assets/show1.png';
import show2 from '../../assets/show2.png';
import show3 from '../../assets/show3.png';
import show4 from '../../assets/show4.png';
import show5 from '../../assets/show5.png';
import styles from './style';

export default function Shows() {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.containerScroll }>
        <Text style={ styles.titulo }>Agenda</Text>
        <Text style={ styles.subtitulo }>Confira nossa agenda completa de shows e fique por dentro da programação.</Text>
        
        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ show1 } />
            <View style={ styles.cardBoxDescricao}>
                <Text style={ styles.data}>26 Março, 2023 </Text>
                <Text style={ styles.cidade}>Goiania - Go</Text>
                <Text style={ styles.local}>Boate Azul</Text>
            </View>
        </View>
        
        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ show2 } />
            <View style={ styles.cardBoxDescricao}>
                <Text style={ styles.data}>26 Março, 2023 </Text>
                <Text style={ styles.cidade}>Goiania - Go</Text>
                <Text style={ styles.local}>Boate Azul</Text>
            </View>
        </View>
        
        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ show3 } />
            <View style={ styles.cardBoxDescricao}>
                <Text style={ styles.data}>26 Março, 2023 </Text>
                <Text style={ styles.cidade}>Goiania - Go</Text>
                <Text style={ styles.local}>Boate Azul</Text>
            </View>
        </View>
        
        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ show4 } />
            <View style={ styles.cardBoxDescricao}>
                <Text style={ styles.data}>26 Março, 2023 </Text>
                <Text style={ styles.cidade}>Goiania - Go</Text>
                <Text style={ styles.local}>Boate Azul</Text>
            </View>
        </View>
        
        <View style={ styles.cardVinho }>
          <Image resizeMode="contain" style={ styles.vinhoImg } source={ show5 } />
            <View style={ styles.cardBoxDescricao}>
                <Text style={ styles.data}>26 Março, 2023 </Text>
                <Text style={ styles.cidade}>Goiania - Go</Text>
                <Text style={ styles.local}>Boate Azul</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}
