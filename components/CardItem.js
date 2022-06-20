import { StyleSheet, View, Image, Text } from 'react-native';

export default function CardItem({ id, title, subtitle, icon }) {
  return (
    <View style={styles.cardContainer}>
      {icon ? <Image style={styles.img} source={icon} /> : <View style={styles.iconStyle}></View>}
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    marginBottom: 20,
  },
  iconStyle: {
    height: 75,
    width: 75,
    borderRadius: '50%',
    backgroundColor: '#E6E6E6',
    marginBottom: 20,
  },
});
