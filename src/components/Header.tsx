import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './Logo'

type HeaderProps = {
  heading: string;
  paragraph: string;
};

const Header: React.FC<HeaderProps> = ({ heading, paragraph }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <Text style={styles.text}>{heading}</Text>
      </View>
      <View>
        <Text style={styles.paragraph}>
          {paragraph}
        </Text>
      </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    margin: 20,
  },
  paragraph: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: 'center',
    marginHorizontal: 40,
  },
});
// paragraph
// font-family: Montserrat;
// font-weight: 400;
// font-size: 14px;
// line-height: 100%;
// letter-spacing: 0%;
// text-align: center;

// text
// font-family: Montserrat;
// font-weight: 700;
// font-size: 24px;
// line-height: 100%;
// letter-spacing: 0%;
// text-align: center;
