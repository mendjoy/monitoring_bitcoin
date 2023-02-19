import React from 'react'
import {  View, ScrollView, Text } from 'react-native'
import { requestsApi } from '../../services/Api'
import Home from '../Home/Home';

const Form = () => {

    const { availableCoins } = requestsApi();
  return (
    <View>
        <ScrollView>
            {availableCoins.length != 0  ? availableCoins.map((coin) => {<Home key={coin.indexOf(coin)} coin={coin} />}) : <Text>Carregando...</Text> }
        </ScrollView>

    </View>
  )
}

export default Form