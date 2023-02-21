import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from "./style"

const CurrentPrice = () => {

  const [currentPrice, setCurrentPrice] = useState()
  const url = "https://economia.awesomeapi.com.br/json/last/usd"
 

  const getCurrentPriceUsd = async (url) => {

    const res = await fetch(url);
    const data = await res.json();
    
     setCurrentPrice(data.USDBRL);
  };

  useEffect(() => {
    const url = "https://economia.awesomeapi.com.br/json/last/usd" 
    getCurrentPriceUsd(url); 

  }, [setCurrentPrice])

  
  return (
    <View style={styles.headerPrice}>
        <Text style={styles.currentPrice}>
          <Text style={styles.coin}>R$ </Text>
          {currentPrice === undefined  && <Text>Carregando...</Text>}
          {currentPrice != undefined  && <Text>{currentPrice.high}</Text>}
          
        </Text>
        <Text style={styles.textPrice}>Última cotação do Dólar</Text>
    </View>
  )
}

export default CurrentPrice