import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  HomeScreen: undefined;
  DetailsScreen: undefined;
  Card: undefined;
};

export type WelcomeScreenProps = StackScreenProps<
  RootStackParamList,
  'Welcome'
>;

export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

export type SignupScreenProps = StackScreenProps<RootStackParamList, 'Signup'>;

export type HomeScreenProps = StackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;

export type DetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'DetailsScreen'
>;
