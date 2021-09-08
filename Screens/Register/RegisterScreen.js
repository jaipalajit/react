import React, { Component } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../../Assets/Styles/Buttons";
import { COLORS } from "../../configs/colors.config";
import { style } from "./style";

export default class RegisterScreen extends Component {
    render () {
        return (
            <View>
                <View style={{ backgroundColor: COLORS.primary }}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
                </View>
                <SafeAreaView style={style.LoginScreen}>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                    >
                        <View style={style.wrapper}>
                            <View style={style.logo}>
                                <Image source={require("../../Assets/Imgs/logo.png")} style={style.logoImage} />
                            </View>
                            <View>
                                <TextInput placeholder="Enter Name" style={style.TextInput} keyboardType="ascii-capable" />
                            </View>
                            <View>
                                <TextInput placeholder="Enter Email" style={style.TextInput} keyboardType="email-address" />
                            </View>
                            <View>
                                <TextInput placeholder="Enter Mobile No." style={style.TextInput} keyboardType="phone-pad" maxLength={10} />
                            </View>
                            <View>
                                <TextInput placeholder="Enter Password" style={style.TextInput} secureTextEntry={true} maxLength={18} />
                            </View>
                            <View>
                                <TextInput placeholder="Enter Password" style={style.TextInput} secureTextEntry={true} maxLength={18} />
                            </View>
                            <TouchableOpacity style={[Button.button, Button.button2, { marginTop: 15 }]}>
                                <Text style={Button.btnText2}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}