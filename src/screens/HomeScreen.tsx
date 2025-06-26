import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import Header from '../components/HomeScreen/Header';
import { ScrollView } from 'react-native';
import PostComponent from '../components/HomeScreen/PostComponent';
import { FlatList } from 'react-native';
// import { useVideoPlayer, VideoView } from 'expo-video';


const posts = [
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
    {
        title: "Unlock the Power of AI!",
        content: "Ever wondered how to create content that truly resonates? Let AI analyze your style, refine your words, and help you stand out. 🚀✨",
    },
];

const videoSource =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';


const HomeScreen = () => {
    //       const player = useVideoPlayer(videoSource, player => {
    //     player.loop = true;
    //     player.play();
    //   });

    useEffect(() => {
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
            console.log("BootSplash has been hidden successfully");
        });
    }, []);
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Text style={styles.heading}>What’s new about Post Impact</Text>
            </View>
            <View style={styles.videoContainer}>

            </View>
            <View style={styles.postsHeader}>
                <Text style={styles.postsHeading}>Your most popular posts</Text>
                <Text style={styles.postsParagraph}>Your posts gained 120% more engagement this week!</Text>
            </View>
            <View>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <PostComponent title={item.title} content={item.content} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    videoContainer: {
        width: '100%',
        height: 200,
        backgroundColor: '#000',
        marginVertical: 20,
        // Add styles for the video container
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    heading: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#000000',
        paddingLeft: 30,
        marginTop: 20,
    },
    postsHeader: {
        paddingLeft: 30,
        gap: 10,

    },
    postsHeading: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#000000',
    },
    postsParagraph: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0,
        textAlign: 'justify',
        color: '#0091C8',
    },
});
// postsParagraph
// font-family: Montserrat;
// font-weight: 400;
// font-size: 12px;
// line-height: 100%;
// letter-spacing: 0%;
// text-align: justify;

//postsHeading: {
// font-family: Montserrat;
// font-weight: 600;
// font-size: 14px;
// line-height: 100%;
// letter-spacing: 0%;


// heading: {
// font-family: Montserrat;
// font-weight: 600;
// font-size: 14px;
// line-height: 100%;
// letter-spacing: 0%;


export default HomeScreen;
