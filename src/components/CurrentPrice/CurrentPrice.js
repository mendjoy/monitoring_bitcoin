import React from 'react'
import { View, Text } from 'react-native'
import styles from "./style"

const CurrentPrice = () => {
    
  return (
    <View style={styles.headerPrice}>
        <Text style={styles.currentPrice}>42223.5566</Text>
        <Text style={styles.textPrice}>Ultima cotação</Text>
    </View>
  )
}

export default CurrentPrice