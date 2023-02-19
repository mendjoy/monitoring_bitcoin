import React from 'react'
import { View, Text,  Image } from 'react-native'

//css
import styles from './style'

const QuotationItem = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerLeft}>

        <View style={styles.logoContainer}>
          <Image
          source={require("../../../img/bitcoin.png")}
          style={styles.image}/>
          <Text style={styles.dayPrice}>07/05/2021</Text>
        </View>
      </View>

        <View style={styles.containerRigth}>
          <Text style={styles.price}>53.3333333</Text>
        </View>
     

    </View>
  )
}

export default QuotationItem