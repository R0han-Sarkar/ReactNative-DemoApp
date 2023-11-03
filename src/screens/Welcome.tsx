import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import {WelcomeScreenProps} from '../navigation/NavigationTypes';

const Welcome: React.FC<WelcomeScreenProps> = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        style={{flex: 1}}
        colors={[COLORS.secondary, COLORS.primary]}>
        <View style={{flex: 1}}>
          <View>
            {/* <Image
              source={require('../assets/plant6.png')}
              style={{
                height: 200,
                width: 200,
                borderRadius: 20,
                position: 'absolute',

                transform: [
                  {translateX: 20},
                  {translateY: 50},
                  {rotate: '-15deg'},
                ],
              }}
            /> */}
            <Image
              source={require('../assets/plant1.png')}
              style={{
                height: 200,
                width: 200,
                borderRadius: 20,
                position: 'absolute',
                top: -50,
                left: 30,
                transform: [
                  {translateX: 50},
                  {translateY: 50},
                  {rotate: '0deg'},
                ],
              }}
            />
            <Image
              source={require('../assets/plant2.png')}
              style={{
                height: 180,
                width: 180,
                borderRadius: 20,
                position: 'absolute',
                top: 120,
                left: -45,
                transform: [
                  {translateX: 50},
                  {translateY: 50},
                  {rotate: '-15deg'},
                ],
              }}
            />
            <Image
              source={require('../assets/plant3.png')}
              style={{
                height: 200,
                width: 200,
                borderRadius: 20,
                position: 'absolute',
                top: 95,
                left: 140,
                transform: [
                  {translateX: 50},
                  {translateY: 50},
                  {rotate: '15deg'},
                ],
              }}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 22,
              position: 'absolute',
              top: 370,
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
                fontWeight: '800',
                color: COLORS.white,
              }}>
              Let's Get
            </Text>
            <Text
              style={{
                fontSize: 46,
                fontWeight: '800',
                color: COLORS.white,
              }}>
              Started
            </Text>
            <View style={{marginVertical: 18}}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  marginVertical: 4,
                }}>
                Welcome to India's first plant shopping app.
              </Text>
              <Text style={{fontSize: 16, color: COLORS.white}}>
                Register, Login and Enjoy the App.
              </Text>
            </View>
            <Button
              title="Join Now"
              onPress={() => props.navigation.navigate('Signup')}
              style={{width: '100%', marginTop: 12}}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 12,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, color: COLORS.white}}>
                Already have an account?
              </Text>
              <Pressable onPress={() => props.navigation.navigate('Login')}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.white,
                    fontWeight: 'bold',
                    marginLeft: 4,
                  }}>
                  Login.
                </Text>
              </Pressable>
            </View>
          </View>
          {/* </>
          )} */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
