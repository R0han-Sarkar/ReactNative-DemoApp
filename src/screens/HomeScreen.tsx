import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeScreenProps} from '../navigation/NavigationTypes';
import COLORS from '../constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextInput} from 'react-native-paper';
import SortIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryList from '../components/CategoryList';
import {FlatList} from 'react-native-gesture-handler';
import plants from '../constants/plants';
import FavoriteIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserIcon from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen: React.FC<HomeScreenProps> = (props): JSX.Element => {
  const [userDetails, setUserDetails] = useState<any>();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  // const logout = () => {
  //   AsyncStorage.setItem(
  //     'loginData',
  //     JSON.stringify({...userDetails, loggedIn: false}),
  //   );
  //   props.navigation.navigate('Login');
  // };

  // const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

  const Card: React.FC = ({plant}: any): JSX.Element => {
    return (
      <View style={styles.card}>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: plant.like
                ? 'rgba(252, 42, 42, 0.2)'
                : 'rgba(0,0,0,0.2)',
            }}>
            <FavoriteIcon
              name="favorite"
              size={18}
              color={plant.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
        <View style={{height: 100, alignItems: 'center'}}>
          <Image style={{flex: 1, resizeMode: 'contain'}} source={plant.img} />
        </View>
        <Text
          variant="labelLarge"
          style={{fontWeight: 'bold', marginTop: 10, marginLeft: 18}}>
          {plant.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text variant="labelLarge" style={{marginTop: 3}}>
            ₹{plant.price}
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('DetailsScreen', plant)}
            style={{
              height: 30,
              width: 55,
              backgroundColor: COLORS.green,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              variant="bodySmall"
              style={{
                color: COLORS.white,
                fontWeight: 'bold',
                // marginBottom: ,
              }}>
              Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View>
          <Text variant="bodyLarge" style={{fontWeight: 'bold'}}>
            Welcome To
          </Text>
          <Text
            variant="headlineMedium"
            style={{fontWeight: 'bold', color: COLORS.green}}>
            Plant Shop
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 10,
          }}>
          {/* <Icon name="shoppingcart" size={28} /> */}
          <UserIcon
            name="user"
            size={15}
            color={COLORS.primary}
            style={{marginRight: 5, marginTop: 1}}
          />
          <Text
            style={{
              // marginTop: 3,

              fontStyle: 'italic',
              textDecorationLine: 'underline',
            }}>
            {userDetails?.username}
          </Text>
        </View>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={styles.searchContainer}>
          {/* <Icon name="search1" size={20} style={{marginLeft: 20}} /> */}
          <TextInput
            mode="outlined"
            label="Search"
            placeholder="Search for plants..."
            outlineColor={COLORS.green}
            activeOutlineColor={COLORS.green}
            // left={<TextInput.Icon icon="eye" />}
            style={styles.input}
          />
        </View>
        <TouchableHighlight style={styles.sortBtn}>
          <SortIcon name="sort" size={30} color={COLORS.white} />
        </TouchableHighlight>
      </View>
      <CategoryList />

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    width: '82%',
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  input: {
    backgroundColor: COLORS.light,
    fontSize: 15,
    color: COLORS.dark,
  },
  sortBtn: {
    height: 50,
    width: 50,
    marginLeft: 8,
    marginTop: 6,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default HomeScreen;
