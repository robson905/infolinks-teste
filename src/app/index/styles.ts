import { StyleSheet} from "react-native"
import { colors } from "@/styles/colors"


export const styles = StyleSheet.create({
    container:{
        flex: 1, //considera toda a area da tela para os componentes
        justifyContent: "center", //justificar todos os elementos
        alignItems: "center", //alinha todos elementos no centro da
        flexDirection: "column", //organizar todos os elementos dentro
        //codigo para indetificar as axtremidades do container
        borderColor: "red",
        borderWidth: 5,
    },


    title: {
        color: colors.green[900],
        fontSize: 22,
        
    },
    title2: {
        color: colors.green[900],
        fontSize: 22,

    },
    title3: {
        color: colors.green[900],
        fontSize: 22

    },
    title4: {
        color: colors.green[900],
        fontSize: 22
    },

    title5: {
        color: colors.green[900],
        fontSize: 22
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

