import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
    mainContainer:{
        width: "95%",
        height: "auto",
        backgroundColor: "#000",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    containerLeft:{
        width: "36%",
        height: "100%",
        alignItems: "flex-start",
    },
    logoContainer:{
        flexDirection: "row",
        alignItems: "center",
    },
    image:{
        width: 40,
        height:40,
        marginLeft: 2,
    },
    containerRigth:{
        width: "60%",
        alignItems: "flex-end",
    },
    dayPrice:{
        fontSize: 16,
        paddingLeft: 2,
        color: "#fff",
        fontWeight: "bold"
    },
    price:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"

    }
})

export default styles