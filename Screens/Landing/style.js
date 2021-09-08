import { StyleSheet } from "react-native";
import { COLORS } from "../../configs/colors.config";

export const style = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundColor: COLORS.white,
        padding: 10,
        flexDirection: "column",
        justifyContent: "center"
    },
    logo: {
        marginBottom: 120,
        justifyContent: "center",
        alignItems: "center",
    },
    logoText: {
        fontSize: 48,
        color: COLORS.secondary
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        borderStyle: "solid",
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    button2: {
        backgroundColor: COLORS.secondary,
        color: COLORS.white
    }
});