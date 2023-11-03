import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SignupScreenProps} from '../navigation/NavigationTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/Entypo';
import MailIcon from 'react-native-vector-icons/Entypo';
import PhoneIcon from 'react-native-vector-icons/Entypo';
import PasswordIcon from 'react-native-vector-icons/Entypo';
import Button from '../components/Button';
import {Formik} from 'formik';
import {SignupSchema} from '../schemas/SignUpSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import Loader from '../components/Loader';
import {TextInput, Text} from 'react-native-paper';

const initialSignupUserValues = {
  fullName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  phone: '',
};

const Signup: React.FC<SignupScreenProps> = (props): JSX.Element => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = React.useState(false);

  const register = (e: any) => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem(
          'userData',
          JSON.stringify({
            fullName: e.fullName,
            email: e.email,
            username: e.username,
            phone: e.phone,
            password: e.password,
            confirmPassword: e.passwaord,
          }),
        );
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'User Successfully Created!',
          button: 'Close',
          onHide: () => {
            props.navigation.navigate('Login');
          },
        });
      } catch (err) {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'ERROR',
          textBody: 'Error Message!',
          button: 'close',
        });
      }
    }, 1000);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Loader visible={loading} />
      <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={{flex: 1, marginHorizontal: 22}}>
          <View style={{marginVertical: 20}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 5,
                color: COLORS.black,
              }}>
              Create Account
            </Text>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 30,
                letterSpacing: -0.3,
                color: COLORS.dark,
              }}>
              Connect with your friend today!
            </Text>
          </View>

          <Formik
            initialValues={initialSignupUserValues}
            validationSchema={SignupSchema}
            onSubmit={val => {
              console.log(val);
              register(val);
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
                      label="Full Name"
                      placeholder="Enter your full name"
                      placeholderTextColor={COLORS.black}
                      keyboardType="name-phone-pad"
                      value={values.fullName}
                      activeOutlineColor={COLORS.primary}
                      onChangeText={handleChange('fullName')}
                      onBlur={() => setFieldTouched('fullName')}
                      autoComplete="off"
                      style={{
                        width: '100%',
                        paddingLeft: 20,
                      }}
                      error={(touched.fullName && errors.fullName) as boolean}
                    />
                    <View style={{position: 'absolute', top: 21, left: 8}}>
                      <UserIcon name="user" size={18} color={COLORS.black} />
                    </View>
                  </View>
                  {touched.fullName && errors.fullName ? (
                    <Text
                      style={{
                        color: COLORS.red,
                        fontSize: 12,
                        marginLeft: 5,
                        marginTop: 5,
                      }}>
                      {errors.fullName}
                    </Text>
                  ) : null}
                </View>

                <View style={{marginBottom: 20}}>
                  <View>
                    <TextInput
                      mode="outlined"
                      label="Email"
                      placeholder="Enter your email"
                      placeholderTextColor={COLORS.black}
                      activeOutlineColor={COLORS.primary}
                      keyboardType="email-address"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      autoComplete="off"
                      style={{
                        width: '100%',
                        paddingLeft: 20,
                      }}
                      error={(touched.email && errors.email) as boolean}
                    />
                    <View style={{position: 'absolute', top: 21, left: 8}}>
                      <MailIcon name="mail" size={20} color={COLORS.black} />
                    </View>
                  </View>
                  {touched.email && errors.email ? (
                    <Text
                      style={{
                        color: COLORS.red,
                        fontSize: 12,
                        marginLeft: 5,
                        marginTop: 5,
                      }}>
                      {errors.email}
                    </Text>
                  ) : null}
                </View>

                <View style={{marginBottom: 20}}>
                  <View>
                    <TextInput
                      mode="outlined"
                      label="Username"
                      placeholder="Enter your Username"
                      placeholderTextColor={COLORS.black}
                      keyboardType="name-phone-pad"
                      value={values.username}
                      activeOutlineColor={COLORS.primary}
                      onChangeText={handleChange('username')}
                      onBlur={() => setFieldTouched('username')}
                      autoComplete="off"
                      style={{
                        width: '100%',
                        paddingLeft: 20,
                      }}
                      error={(touched.username && errors.username) as boolean}
                    />
                    <View style={{position: 'absolute', top: 21, left: 8}}>
                      <UserIcon name="user" size={18} color={COLORS.black} />
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

                <View style={{marginBottom: 20}}>
                  <View>
                    {/* <TextInput
                      placeholder="+91"
                      placeholderTextColor={COLORS.black}
                      keyboardType="numeric"
                      style={{
                        width: '12%',
                        borderRightWidth: 0.3,
                        borderLeftColor: COLORS.grey,
                        height: '100%',
                      }}
                    /> */}

                    <TextInput
                      mode="outlined"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      placeholderTextColor={COLORS.black}
                      activeOutlineColor={COLORS.primary}
                      keyboardType="number-pad"
                      value={values.phone}
                      onChangeText={handleChange('phone')}
                      onBlur={() => setFieldTouched('phone')}
                      autoComplete="off"
                      style={{
                        width: '100%',
                        paddingLeft: 20,
                      }}
                      error={(touched.phone && errors.phone) as boolean}
                    />
                    <View style={{position: 'absolute', top: 21, left: 8}}>
                      <PhoneIcon name="phone" size={18} color={COLORS.black} />
                    </View>
                  </View>
                  {touched.phone && errors.phone ? (
                    <Text
                      style={{
                        color: COLORS.red,
                        fontSize: 12,
                        marginLeft: 5,
                        marginTop: 5,
                      }}>
                      {errors.phone}
                    </Text>
                  ) : null}
                </View>

                <View style={{marginBottom: 20}}>
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
                      <PasswordIcon
                        name="lock"
                        size={18}
                        color={COLORS.black}
                      />
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

                <View style={{marginBottom: 20}}>
                  <View>
                    <>
                      <TextInput
                        mode="outlined"
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        placeholderTextColor={COLORS.black}
                        activeOutlineColor={COLORS.primary}
                        keyboardType="name-phone-pad"
                        value={values.confirmPassword}
                        secureTextEntry={isConfirmPasswordShown}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={() => setFieldTouched('confirmPassword')}
                        autoComplete="off"
                        style={{
                          width: '100%',
                          paddingLeft: 20,
                        }}
                        error={
                          (touched.confirmPassword &&
                            errors.confirmPassword) as boolean
                        }
                      />
                      <View style={{position: 'absolute', top: 21, left: 8}}>
                        <PasswordIcon
                          name="lock"
                          size={18}
                          color={COLORS.black}
                        />
                      </View>
                    </>

                    <TouchableOpacity
                      style={{position: 'absolute', top: 20, right: 12}}
                      onPress={() =>
                        setIsConfirmPasswordShown(!isConfirmPasswordShown)
                      }>
                      {isConfirmPasswordShown == true ? (
                        <Icon name="eye-off" size={24} color={COLORS.black} />
                      ) : (
                        <Icon name="eye" size={24} color={COLORS.primary} />
                      )}
                    </TouchableOpacity>
                  </View>
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <Text
                      style={{
                        color: COLORS.red,
                        fontSize: 12,
                        marginLeft: 5,
                        marginTop: 5,
                      }}>
                      {errors.confirmPassword}
                    </Text>
                  ) : null}
                </View>

                <View style={{flexDirection: 'row', marginVertical: 6}}>
                  <CheckBox
                    style={{marginRight: 8}}
                    value={isChecked}
                    onValueChange={setIsChecked}
                  />
                  <Text style={{marginTop: 6}}>
                    I agree to the terms & conditions
                  </Text>
                </View>
                <Button
                  title="Sign Up"
                  filled
                  onPress={() => {
                    handleSubmit();
                  }}
                  style={{
                    marginTop: 10,
                    marginBottom: 4,
                  }}
                />
              </>
            )}
          </Formik>
          {/* </Formik> */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 18,
            }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10,
              }}
            />
            <Text>Or Sign up with</Text>
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
              marginTop: 25,
            }}>
            <Text style={{fontSize: 16, color: COLORS.black}}>
              Already have an account?
            </Text>
            <Pressable onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: 'bold',
                  marginLeft: 6,
                }}>
                Login.
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
