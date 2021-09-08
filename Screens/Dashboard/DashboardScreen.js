import React, { Component } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Grid } from "../../Assets/Styles/Grid";
import { style } from "./style";

export default class DashboardScreen extends Component {
    render () {
        return (
            <SafeAreaView style={style.wrapper}>
                <ScrollView>
                    <View style={Grid.row}>
                        <TouchableOpacity style={[Grid.col, Grid.col2, style.dashBlock]}>
                            <Image source={require("../../Assets/Imgs/wedding.png")} />
                            <Text style={style.dashBlockText}>Wedding Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Grid.col, Grid.col2, style.dashBlock]}>
                            <Image source={require("../../Assets/Imgs/quotes.png")} />
                            <Text style={style.dashBlockText}>Quotes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[Grid.col, Grid.col2, style.dashBlock]}>
                            <Image source={require("../../Assets/Imgs/bride.png")} />
                            <Text style={style.dashBlockText}>About Bride</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Grid.col, Grid.col2, style.dashBlock]}>
                            <Image source={require("../../Assets/Imgs/groom.png")} />
                            <Text style={style.dashBlockText}>About Groom</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={[Grid.col, Grid.col2, style.dashBlock]}>
                            <Image source={require("../../Assets/Imgs/events.png")} />
                            <Text style={style.dashBlockText}>Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Grid.col, Grid.col2, style.dashBlock]}>
                            <Image source={require("../../Assets/Imgs/moments.png")} />
                            <Text style={style.dashBlockText}>Moments</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[Grid.col, Grid.col2, style.dashBlock]}>
                            <Image source={require("../../Assets/Imgs/contact.png")} />
                            <Text style={style.dashBlockText}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}