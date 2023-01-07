import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
    const goToHeadlines = () => {
        navigation.navigate('Headlines')
    }
    const goToGeneral = () => {
        navigation.navigate('General')
    }
    const goToSports = () => {
        navigation.navigate('Sports')
    }
    const goToTechnology = () => {
        navigation.navigate('Technology')
    }
    const goToScience = () => {
        navigation.navigate('Science')
    }
    const goToHealth = () => {
        navigation.navigate('Health')
    }
    const goToBusiness = () => {
        navigation.navigate('Business')
    }
    return (
        <View style={styles.mainBox} >
            <TouchableOpacity onPress={goToHeadlines} style={styles.btn}  >
                <Text style={styles.heading} >Headlines</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToGeneral} style={styles.btn} >
                <Text style={styles.heading} >General</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToSports} style={styles.btn} >
                <Text style={styles.heading} >Sports</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToTechnology} style={styles.btn}  >
                <Text style={styles.heading} >Technology</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToScience} style={styles.btn} >
                <Text style={styles.heading} >Science</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToHealth} style={styles.btn} >
                <Text style={styles.heading} >Health</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToBusiness} style={styles.btn} >
                <Text style={styles.heading} >Business</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        padding: 8,
        textAlign: "center",
        color: "azure"
    },
    mainBox: {
        backgroundColor: "#232e30",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    btn: {
        borderWidth: 1,
        borderColor: "azure",
        width: 120,
        marginVertical: 10,
        backgroundColor: "#1a1818",
        borderRadius: 4,
        padding: 4
    }
})