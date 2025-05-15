import { View, Text,} from "react-native";

import { styles } from "./styles";

export default function index () {
return (
<View style={styles.container}>
    <Text style={{ color: "red", fontSize: 22, fontFamily: "", fontWeight: "700", }}>MEU CADASTRO</Text>
    <Text style={styles.title2}>Robson Monteiro</Text>
    <Text style={styles.title3}>Nascimento: 12/08</Text>
    <Text style={styles.title4}>Endereço: Rua tal</Text>
    <Text style={styles.title5}>Cidade: Boca do Acre</Text>
    <Text style={styles.title6}>Bairro: Macaxeiral</Text>
    <Text style={styles.title7}>Telefone: 97999000999</Text>
    <Text style={styles.title8}>Email: email.com</Text>
    <Text style={styles.title9}>Nacionalidade: Nepal</Text>
    <Text style={styles.title10}>Altura: três metro</Text>
    <Text style={styles.title11}>Idade: 500 anos</Text>
    <Text style={styles.title12}>Sou Nelpazense, tenho 500 anos e meu papel no mundo é pescar peixe boi, 
    viajo comendo farinha puba com peixe boi. Minha incrivel experiencia foi pescar um  peixe boi de tarrafa</Text>

    <Text style={styles.title13}>Tô em busca do dinheiro do pescador aqui no brasil</Text>

    <Text style={styles.title14}>Eu sou o Novo Tempo, juntos vamos transformar Nepal</Text>

    

</View>
);
}

