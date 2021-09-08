import React, { Component } from "react";
import { Button, Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../configs/colors.config";
import { style } from "./style";

export default class LandingScreen extends Component {
    render () {
        return (
            <View>
                <View style={{ backgroundColor: COLORS.primary }}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
                </View>
                <SafeAreaView >
                    <View
                        contentInsetAdjustmentBehavior="automatic"
                        style={style.wrapper}>
                        <View style={style.logo}>
                            <Image source={require("../../Assets/Imgs/logo.png")} style={style.logoImage} />
                        </View>

                        <View style={style.buttonGroup}>
                            <TouchableOpacity style={style.button} onPress={() => this.props.redirect('SignUp')}>
                                <Text>Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[style.button, style.button2]} onPress={() => this.props.redirect('SignIn')}>
                                <Text style={{ color: COLORS.white }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}