import { StyleSheet } from "react-native";
import { COLORS } from "../../configs/colors.config";

export const style = StyleSheet.create({
    wrapper: {
        paddingTop: 4
    },
    dashBlock: {
        backgroundColor: COLORS.white,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    },
    dashBlockText: {
        marginTop: 10,
        textTransform: 'uppercase'
    }
});