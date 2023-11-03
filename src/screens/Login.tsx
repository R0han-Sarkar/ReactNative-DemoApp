import React, {useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginScreenProps} from '../navigation/NavigationTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import {Formik} from 'formik';
import {LoginSchema} from '../schemas/LoginSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import {Text, TextInput} from 'react-native-paper';
import MailIcon from 'react-native-vector-icons/Entypo';
import PasswordIcon from 'react-native-vector-icons/Entypo';

const initialLoginUserValues = {
  username: '',
  password: '',
};

const Login: React.FC<LoginScreenProps> = props => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = (e: any) => {
    setLoading(true);
    setTimeout(async () => {
      let userData: any = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          e.username == userData.username &&
          e.password == userData.password
        ) {
          props.navigation.navigate('HomeScreen');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
          setLoading(false);
        } else {
          Alert.alert('Error', 'Invalid User Credentials');
          setLoading(false);
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    }, 3000);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Loader visible={loading} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginHorizontal: 5,
          marginTop: 10,
        }}>
        {/* <Text variant="titleLarge" style={{fontWeight: 'bold'}}>
            Welcome To
          </Text> */}
        <Image
          source={require('../assets/plant1.png')}
          style={{height: 50, width: 50}}
        />
        <Text
          variant="headlineLarge"
          style={{fontWeight: 'bold', color: COLORS.green, marginTop: 15}}>
          Plant Shop
        </Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{marginVertical: 2}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 15,
              lineHeight: 30,
              letterSpacing: -0.3,
              color: COLORS.black,
            }}>
            Hey, Welcome Back!
          </Text>
          {/* <Text
            style={{
              fontSize: 16,
              lineHeight: 30,
              letterSpacing: -0.3,
              color: COLORS.black,
            }}>
            Hello again, you have been missed!
          </Text> */}
        </View>

        <Formik
          initialValues={initialLoginUserValues}
          validationSchema={LoginSchema}
          onSubmit={val => {
            console.log(val), login(val);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldTouched,
            handleSubmit,
          }) => (
            <>
              <View style={{marginBottom: 20}}>
                <View>
                  <TextInput
                    mode="outlined"
                    label="Username"
                    placeholder="Enter your username"
                    placeholderTextColor={COLORS.black}
                    activeOutlineColor={COLORS.primary}
                    keyboardType="email-address"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    onBlur={() => setFieldTouched('username')}
                    autoComplete="off"
                    style={{
                      width: '100%',
                      paddingLeft: 20,
                    }}
                    error={(touched.username && errors.username) as boolean}
                  />
                  <View style={{position: 'absolute', top: 22, left: 8}}>
                    <MailIcon name="mail" size={20} color={COLORS.black} />
                  </View>
                </View>
                {touched.username && errors.username ? (
                  <Text
                    style={{
                      color: COLORS.red,
                      fontSize: 12,
                      marginLeft: 5,
                      marginTop: 5,
                    }}>
                    {errors.username}
                  </Text>
                ) : null}
              </View>

              <View style={{marginBottom: 15}}>
                <View>
                  <TextInput
                    mode="outlined"
                    label="Password"
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.black}
                    activeOutlineColor={COLORS.primary}
                    keyboardType="name-phone-pad"
                    value={values.password}
                    secureTextEntry={isPasswordShown}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    autoComplete="off"
                    style={{
                      width: '100%',
                      paddingLeft: 20,
                    }}
                    error={(touched.password && errors.password) as boolean}
                  />
                  <View style={{position: 'absolute', top: 21, left: 8}}>
                    <PasswordIcon name="lock" size={18} color={COLORS.black} />
                  </View>

                  <TouchableOpacity
                    style={{position: 'absolute', top: 20, right: 12}}
                    onPress={() => setIsPasswordShown(!isPasswordShown)}>
                    {isPasswordShown == true ? (
                      <Icon name="eye-off" size={24} color={COLORS.black} />
                    ) : (
                      <Icon name="eye" size={24} color={COLORS.primary} />
                    )}
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password ? (
                  <Text
                    style={{
                      color: COLORS.red,
                      fontSize: 12,
                      marginLeft: 5,
                      marginTop: 5,
                    }}>
                    {errors.password}
                  </Text>
                ) : null}
              </View>

              <View style={{flexDirection: 'row', marginVertical: 6}}>
                <CheckBox
                  style={{marginRight: 8}}
                  value={isChecked}
                  onValueChange={setIsChecked}
                />
                <Text style={{marginTop: 6}}>Remember me</Text>
              </View>
              <Button
                title="Login"
                filled
                onPress={handleSubmit}
                style={{
                  marginTop: 18,
                  marginBottom: 4,
                }}
              />
            </>
          )}
        </Formik>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
          <Text>Or Login with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => console.log('Pressed!')}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/facebook.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Pressed!')}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/google.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 22,
            marginTop: 40,
          }}>
          <Text style={{fontSize: 16, color: COLORS.black}}>
            Don't have an account?
          </Text>
          <Pressable onPress={() => props.navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: 'bold',
                marginLeft: 6,
              }}>
              Register.
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
