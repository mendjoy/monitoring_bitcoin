import React, { Fragment } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'

//css
import styles from './styles'

const QuotationList = () => {
  return (
    <Fragment>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonQuery}>
          <Text style={styles.textButton}>7 days</Text>
        </TouchableOpacity>
          
      </View>

      <ScrollView></ScrollView>
    </Fragment>
  )
}

export default QuotationList