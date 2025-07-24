// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import CountryPicker, { Country } from 'react-native-country-picker-modal';

// export default function PhoneNumberInput() {
//   const [countryCode, setCountryCode] = useState('IN');
//   const [callingCode, setCallingCode] = useState('91');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [showPicker, setShowPicker] = useState(false);

//   const onSelect = (country: Country) => {
//     setCountryCode(country.cca2);
//     setCallingCode(country.callingCode[0]);
//     setShowPicker(false);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Country Flag + Code */}
//       <View style={styles.phoneContainer}>
//         <TouchableOpacity
//           onPress={() => setShowPicker(true)}
//           style={styles.flagContainer}
//         >
//           <CountryPicker
//             withFilter
//             withFlag
//             withCallingCode
//             countryCode={countryCode}
//             visible={showPicker}
//             onClose={() => setShowPicker(false)}
//             onSelect={onSelect}
//             withEmoji
//             withAlphaFilter
//           />
//           <Text style={styles.codeText}>+{callingCode}</Text>
//         </TouchableOpacity>

//         {/* Phone Number Input */}
//         <TextInput
//           placeholder="Enter phone number"
//           keyboardType="phone-pad"
//           style={styles.input}
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     justifyContent: 'center',
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#bbb',
//     borderRadius: 8,
//     // paddingHorizontal: 10,
//     // paddingVertical: 8,
//   },
//   flagContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // marginRight: 10,
//   },
//   codeText: {
//     fontSize: 16,
//     // marginLeft: 5,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
// });
