import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DetailsScreenProps} from '../navigation/NavigationTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';

const DetailsScreen: React.FC<DetailsScreenProps> = (props): JSX.Element => {
  const plant: any = props.route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          size={28}
          color="#000"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Icon name="shoppingcart" size={28} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.dark}}>
            Best Choice
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: COLORS.green}}>
            {plant.name}
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                color: '#fff',
                marginLeft: 25,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              ₹{plant.price}
            </Text>
          </View>
        </View>
        <Divider style={{marginTop: 10}} />
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          {/* <Text style={{fontSize: 18, fontWeight: 'bold'}}>About</Text> */}
          <Text
            style={{
              color: 'grey',
              fontSize: 12,
              fontWeight: 'bold',
              lineHeight: 22,
              marginTop: 5,
            }}>
            {plant.about}
          </Text>
          <Divider style={{marginTop: 10}} />
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: COLORS.dark,
                }}>
                1
              </Text>
              <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 100,
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
