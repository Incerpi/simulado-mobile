import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// navegar pra tela2 usando navigation.navigate
// usando Pressable
// https://reactnative.dev/docs/pressable
// https://reactnavigation.org/docs/5.x/navigating

// https://reactnavigation.org/docs/5.x/use-navigation

// https://reactnavigation.org/docs/5.x/params

// consumir api https://fakestoreapi.com/products usando fetch e colocando no state do react

// usar fetch para consumo da API https://programmingwithmosh.com/react-native/make-api-calls-in-react-native-using-fetch/
// const [lista, setLista] = useState([]);

export function Produtos() {
  const [lista, setLista] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // criar funcao getLista()
    // chamar getLista()

    const getLista = () => {
      try {
        fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((resultado) => {
            setLista(resultado);
          });
      } catch (error) {
        console.log('error: ', error);
      }
    };

    getLista();
  }, []);

  const navegar = (item) => {
    navigation.navigate('Descrição', {
      titulo: item.title,
      descricao: item.description,
      categoria: item.category,
    });
  };

  const Item = (props) => {
    return (
      <Pressable style={styles.itemContainer} onPress={props.onPressNavigate}>
        <Image
          source={{
            uri: props.imagem,
          }}
          style={styles.imagem}
        />
        <View style={{width: '100%'}}>
          <Text style={{width: '80%', paddingLeft: 8}} numberOfLines={1}>{props.titulo}</Text>
          <Text style={{width: '80%', padding: 8, fontSize: 10}}>{props.descricao}</Text>
        </View>
      </Pressable>
    );
  };

  //https://reactnative.dev/docs/flatlist

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <Item
            titulo={item.title}
            imagem={item.image}
            descricao={item.description}
            onPressNavigate={() => navegar(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    margin: 6,
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
  },
  imagem: {
    width: 60,
    height: 60,
  },
});