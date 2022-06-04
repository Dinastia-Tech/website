import { Company } from "../components/Company";
import React, {useEffect, useState} from 'react';
import { getCompanys } from "../services/CompanyService";
import { View, Text, FlatList, StyleSheet } from 'react-native';

export function ShowCompanys  ({navigation}) {
   function renderProduct({item: product}) {
    return (
      <Company {...product} 
      onPress={() => {
        navigation.navigate('Conheça as empresas', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getCompanys());
  });
  
  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: '#3b3961',
    },
    productsListContainer: {
      backgroundColor: '#3b3961',
      paddingVertical: 18,
      marginHorizontal: 8,
    },
  });
export default ShowCompanys
