import { StyleSheet } from "react-native";

export const Grid = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    col: {
        padding: 15,
        marginHorizontal: 5
    },
    col2: {
        width: '47%'
    },
    col3: {
        width: '33.33%'
    }
});