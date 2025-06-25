import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type PostComponentProps = {
  title: string;
  content: string;
};

const PostComponent: React.FC<PostComponentProps> = ({title, content}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

export default PostComponent

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        borderColor:"#0070C0",
        borderWidth: 1,
        borderRadius: 10,


    },
    title: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#0B4870',

    },
    content: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#00000040',
        textAlign: 'justify',
        marginTop: 10,
    }
});

// title
// font-family: Montserrat;
// font-weight: 600;
// font-size: 14px;
// line-height: 100%;
// letter-spacing: 0%;

// content
// font-family: Montserrat;
// font-weight: 400;
// font-size: 14px;
// line-height: 100%;
// letter-spacing: 0%;
// text-align: justify;

