import { StyleSheet, ScrollView, View } from 'react-native';
import CardItem from './CardItem';

export default function CardList({ data }) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ height: 100, width: '100%', paddingHorizontal: 20 }}
      contentContainerStyle={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '100%',
      }}>
      {data.length > 0 &&
        data.map((item) => (
          <CardItem key={item.id} title={item.title} subtitle={item.subtitle} icon={item.icon} />
        ))}
    </ScrollView>
  );
}
