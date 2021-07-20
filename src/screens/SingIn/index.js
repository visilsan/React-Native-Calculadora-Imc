import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";

import imageSing from "../../../assets/women.png";

import { Botao } from "../../components/Botao";
import {Title} from "../../components/Title";

export default function SingIn() {
  return (
    <View style={styles.container}>     
      
      <Title />

      <Text style={styles.subtitle}>
        Não ha maior força, do que {"\n"}
        uma mulher determinada a {"\n"}
        crescer.
      </Text>     
      
        <Botao
         title= "FAZER PARTE" 
         activeOpacity={0.7} />

        <Image source={imageSing} style={styles.image} />
      
    </View>
  );
}


