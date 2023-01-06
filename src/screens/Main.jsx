import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Linking, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

import axios from 'axios'
const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a0b9e39bbcdb4eaaaf6a2274e64d8d5e&q=in"
const Main = () => {
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
    if (loading)
        return (
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#232e30", height: "100%", width: "100%" }} >

                <ActivityIndicator size="large" color="yellow" />
            </View>)
    return (
        <View style={styles.mainBox} >


            <TouchableOpacity onPress={getNews} style={styles.btn} >
                <Text>Get News</Text>
            </TouchableOpacity>
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
        backgroundColor: "#232e30",
        marginTop: 40
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
    }
})
export default Main