import React, { Fragment } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'

//css
import styles from './style'

const QuotatioList = () => {
  return (
    <Fragment>

      <View style={styles.filters}>
        <TouchableOpacity style={styles.buttonQuery} onPress={()=> {} }>
            <Text style={styles.textButton}>7D</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonQuery} onPress={()=> {}}> 
            <Text style={styles.textButton}>15D</Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonQuery} onPress={()=> {} }>
            <Text style={styles.textButton}>1M</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonQuery} onPress={()=> {}}>
            <Text style={styles.textButton}>3M</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonQuery} onPress={()=>{} }>
            <Text style={styles.textButton}>6M</Text>
        </TouchableOpacity>

      </View>

     

    </Fragment>
  )
}

export default QuotatioList