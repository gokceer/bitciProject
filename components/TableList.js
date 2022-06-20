import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function TableList() {
  const [data, setData] = useState(null);
  let timer;

  function delay(delayInms) {
    return new Promise((resolve) => {
      timer = setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  async function streamService(callBackFunc) {
    while (true) {
      let delayres = await delay(25);
      setData({
        Buy: [
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },

          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },

          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
        ],
        Sell: [
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },

          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },

          {
            Price: Math.random(),
            Amount: Math.random(),
            Total: Math.random(),
          },
        ],
      });
      if (callBackFunc) {
        callBackFunc(data);
      }
    }
  }

  useEffect(() => {
    streamService();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Fiyat(TRY)</DataTable.Title>
        <DataTable.Title>Miktar(BTC)</DataTable.Title>
        <DataTable.Title>Toplam</DataTable.Title>
      </DataTable.Header>
      {data &&
        data?.Buy.map((buyItem) => (
          <DataTable.Row key={buyItem.Total}>
            <DataTable.Cell>
              <Text style={styles.buy}>{buyItem.Price}</Text>
            </DataTable.Cell>
            <DataTable.Cell>{buyItem.Amount}</DataTable.Cell>
            <DataTable.Cell>{buyItem.Total}</DataTable.Cell>
          </DataTable.Row>
        ))}
      {data &&
        data?.Sell.map((sellItem) => (
          <DataTable.Row key={sellItem.Total}>
            <DataTable.Cell>
              <Text style={styles.sell}>{sellItem.Price}</Text>
            </DataTable.Cell>
            <DataTable.Cell>{sellItem.Amount}</DataTable.Cell>
            <DataTable.Cell>{sellItem.Total}</DataTable.Cell>
          </DataTable.Row>
        ))}
    </DataTable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  buy: {
    color: 'green',
  },
  sell: {
    color: 'red',
  },
});
