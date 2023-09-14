import { StyleSheet } from "react-native";

export default StyleSheet.create({
    titulo: {
        paddingVertical: 16,
        fontWeight: 'bold',
        fontSize: 25,
    },
    descricao: {
        fontSize: 16,
        marginRight: 7,
        paddingVertical: 16,
    },
    categoria: {
        fontWeight: 'bold',
        paddingVertical: 16,
        fontSize: 16,
        marginRight: 7,
    },
    areaTexto: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
});