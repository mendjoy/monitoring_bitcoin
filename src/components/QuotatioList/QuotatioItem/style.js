import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
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
    leftContainer:{
        width: "36%",
        height: "100%",
        alignItems: "flex-start"

    },
    boxImg: {
        flexDirection: "row",
        alignItems: "center"
    },
    img: {
        width: 40, 
        height: 40,
        marginLeft: 2
    },
    dayPrice: {
        fontSize: 16,
        paddingLeft: 2,
        fontWeight: "bold",
        color: "#fff"
    },
    rightContainer:{
        width: "60%",
        alignItems: "flex-end"
    },
    price: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default styles