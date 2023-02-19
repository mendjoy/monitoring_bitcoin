import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
    buttonContainer:{
        width: "100%",
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "space-evenly"
    },
    buttonQuery:{
        width: 50,
        height: 30,
        backgroundColor: "#008000",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,

    }

})

export default styles