import { StyleSheet } from "react-native";
import { COLORS } from "../../configs/colors.config";

export const Button = StyleSheet.create({
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        borderStyle: "solid",
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlign: "center"
    },
    button2: {
        backgroundColor: COLORS.secondary,
        color: COLORS.white
    },
    btnText2: {
        color: COLORS.white,
        textAlign: "center"
    }
});