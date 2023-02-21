import React from 'react'
import { View, Image, Text } from 'react-native'

//css
import styles from './style'

const QuotationItem = () => {
  return (
    <View style={styles.mainContent}>

      <View style={styles.leftContainer}>

          <View style={styles.boxImg}>
            <Image  
              style={styles.img}
              source={require("../../../img/coin.png")}/>

            <Text style={styles.dayPrice}>12/05/1998</Text>
          </View>

      </View>

        <View style={styles.rightContainer}>
          <Text style={styles.price}>53.331.0</Text>
        </View>
     
      
    </View>
  )
}

export default QuotationItem