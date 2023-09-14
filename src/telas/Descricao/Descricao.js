import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import estilos from './estilos';

export function Descricao() {
  
  const route = useRoute();

  // https://reactnavigation.org/docs/params/

  return (
    <View style={estilos.areaTexto}>
      <Text style={estilos.titulo}>{route.params.titulo}</Text>
      <Text style={estilos.descricao}>{route.params.descricao}</Text>
      <Text style={estilos.categoria}>{route.params.categoria}</Text>
    </View>
  );
}
