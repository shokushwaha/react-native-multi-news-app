import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Linking, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import AnimatedLoader from "react-native-animated-loader";
import axios from 'axios'
const url = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=a0b9e39bbcdb4eaaaf6a2274e64d8d5e&q=in"
const General = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const getNews = async () => {
        try {
            setLoading(true);
            const res = await axios.get(url);

            setNews(res.data.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getNews();

    }, []);


    if (loading)
        return (
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#232e30", height: "100%", width: "100%" }} >

                <AnimatedLoader
                    visible={loading}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={styles.lottie}
                    speed={1}>
                    <Text style={{ color: "yellow", marginBottom: 200 }} > Wait! loading....</Text>
                </AnimatedLoader>
            </View>)
    return (
        <View style={styles.mainBox} >


            <Text style={{ textAlign: "center", color: "yellow", padding: 10, fontSize: 20, fontWeight: "bold" }} >General</Text>
            <FlatList data={news}
                renderItem={({ item }) => {
                    return (<View style={styles.newsBox} >

                        <View style={styles.left} >

                            <Image
                                style={{ width: 100, height: 100 }}
                                source={{ uri: item.urlToImage }}
                            />
                            <Text style={styles.title} >{item.title}</Text>
                        </View>
                        <Text style={styles.author} >{item.author}</Text>
                        <Text style={styles.description} >{item.description}</Text>
                        <Text style={{ color: 'blue' }}
                            onPress={() => Linking.openURL(item.url)}>
                            Read More....
                        </Text>

                    </View>)
                }} />
        </View>
    )
}
const styles = StyleSheet.create({
    mainBox: {
        backgroundColor: "#232e30"
    },
    btn: {
        backgroundColor: "azure",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 10,
        borderRadius: 10,
        borderColor: "black",

    },
    left: {
        display: "flex",
        flexDirection: "row"
    },
    newsBox: {
        borderColor: "black",
        borderWidth: 1,
        height: "auto",
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "azure"
    },
    title: {
        backgroundColor: "azure",
        fontSize: 16,
        width: 180,
        padding: 10
    },
    author: {
        fontSize: 13,
        color: "gray"
    },
    description: {
        fontSize: 11
    },
    lottie: {
        width: 100,
        height: 100,
    },
})
export default General