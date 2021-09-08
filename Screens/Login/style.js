import { StyleSheet } from "react-native";
import { COLORS } from "../../configs/colors.config";

export const style = StyleSheet.create({
    LoginScreen: {
        paddingHorizontal: 15,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    TextInput: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary
    },
    logo: {
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    logoText: {
        fontSize: 48,
        color: COLORS.secondary
    }
});