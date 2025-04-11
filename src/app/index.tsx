import { View, Text, StyleSheet} from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/Colors";

export default function index () {
return (
<View style={style.container}>
    <Text style={{ color: "red", fontSize: 22, fontFamily: "", fontWeight: "700", }}>MEU CADASTRO</Text>
    <Text style={style.title2}>Robson Monteiro</Text>
    <Text style={style.title3}>Nascimento: 12/08</Text>
    <Text style={style.title4}>Endereço: Rua tal</Text>
    <Text style={style.title5}>Cidade: Boca do Acre</Text>
    <Text style={style.title6}>Bairro: Macaxeiral</Text>
    <Text style={style.title7}>Telefone: 97999000999</Text>
    <Text style={style.title8}>Email: email.com</Text>
    <Text style={style.title9}>Nacionalidade: Nepal</Text>
    <Text style={style.title10}>Altura: três metro</Text>
    <Text style={style.title11}>Idade: 500 anos</Text>
    <Text style={style.title12}>Sou Nelpazense, tenho 500 anos e meu papel no mundo é pescar peixe boi, 
    viajo comendo farinha puba com peixe boi. Minha incrivel experiencia foi pescar um  peixe boi de tarrafa</Text>

    <Text style={style.title13}>Tô em busca do dinheiro do pescador aqui no brasil</Text>

    <Text style={style.title14}>Eu sou o Novo Tempo, juntos vamos transformar Nepal</Text>

    

</View>
);
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },


    title: {
        color:"red",
        fontSize: 22
    },
    title2: {
        color: "blue",
        fontSize: 26,

    },
    title3: {
        color: "green",
        fontSize: 34

    },
    title4: {
        color: "blue",
        fontSize: 20
    },

    title5: {
        color: "yellow",
        fontSize: 30
    },

    title6: {
        color: "black",
        fontSize: 40
    },
    title7: {
        color: "purple",
        fontSize: 25
    },

    title8: {
        color: "black",
        fontSize: 20

    },

    title9: {
        color: "blue",
        fontSize: 20

    },

    title10: {
        color: "black",
        fontSize: 25
    },
    title11:{
        color: "blue",
        fontSize: 25

    },
    title12:{
        color: "black",
        fontSize: 20
    },
    title13:{
        color: "blue",
        fontSize: 40
    },
    title14: {
        color: "black",
        fontSize: 20
    }

})
