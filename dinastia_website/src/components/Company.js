import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Company({name, price, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R$ {price}/watts hora</Text>
        <Text style={styles.price}>O que vai aqui? Comprar? Saiba mais? Entre em contato ?</Text>

        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
    width:400
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '90%',
  },
  infoContainer: {
    padding: 16,
    width: 120, 
    color:'black'

  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    width:200
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    width:200
  },
});
