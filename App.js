import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CardList from './components/CardList';
import CustomButton from './components/CustomButton';
import TableList from './components/TableList';

export default function App() {
  const mockData = [
    {
      id: 0,
      title: 'Bitcoin',
      subtitle: 'BTC',
      icon: require('./assets/bitcoin.png'),
    },
    {
      id: 1,
      title: 'Ethereum',
      subtitle: 'ETH',
      icon: require('./assets/ethereum.png'),
    },
    {
      id: 2,
      title: 'Bitcoin',
      subtitle: 'BTC',
      icon: require('./assets/bitcoin.png'),
    },
    {
      id: 3,
      title: 'Ethereum',
      subtitle: 'ETH',
      icon: require('./assets/ethereum.png'),
    },
    {
      id: 4,
      title: 'Bitcoin',
      subtitle: 'BTC',
      icon: require('./assets/bitcoin.png'),
    },
    {
      id: 5,
      title: 'Dogecoin',
      subtitle: 'DOGE',
      icon: '',
    },
  ];
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', marginTop: 50 }}>
      <CardList data={mockData} />
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <CustomButton type="validate" title="VALIDATE" />
        <CustomButton type="login" title="LOGIN" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
        <CustomButton type="validate" title="VALIDATE" disabled={true} />
        <CustomButton type="login" title="LOGIN" disabled={true} />
      </View>
      <View style={{ height: 200, width: '100%', marginTop: 40 }}>
        <ScrollView style={{ width: '100%' }}>
          <TableList />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
