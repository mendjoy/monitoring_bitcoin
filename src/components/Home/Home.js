import React from 'react'
import { View } from 'react-native'
import CurrentPrice from '../CurrentPrice/CurrentPrice';

//api
import { requestsApi } from '../../services/Api';

const Home = ({coin}) => {

    
  return (
    <View>
           <Text>{coin}</Text>
  
    </View>
  )
}

export default Home