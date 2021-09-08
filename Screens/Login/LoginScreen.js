import React, { Component } from "react";
import { Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../../Assets/Styles/Buttons";
import { COLORS } from "../../configs/colors.config";
import { style } from "./style";

export default class LoginScreen extends Component {
    render () {
        return (
            <View>
                <View style={{ backgroundColor: COLORS.primary }}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
                </View>
                <SafeAreaView style={style.LoginScreen}>
                    <View style={style.logo}>
                        <Image source={require("../../Assets/Imgs/logo.png")} style={style.logoImage} />
                    </View>
                    <View
                        contentInsetAdjustmentBehavior="automatic"
                        style={style.wrapper}>
                        <View>
                            <TextInput placeholder="Enter Mobile No." style={style.TextInput} keyboardType="phone-pad" maxLength={10} />
                        </View>
                        <View>
                            <TextInput placeholder="Enter Password" style={style.TextInput} secureTextEntry={true} maxLength={18} />
                        </View>
                        <TouchableOpacity style={[Button.button, Button.button2, { marginTop: 15 }]} onPress={() => this.props.redirect('Dashboard')}>
                            <Text style={Button.btnText2}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}