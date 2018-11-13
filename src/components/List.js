// @flow
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// theme
import { Colors, Metrics } from '../themes'

const styles = StyleSheet.create({
  list: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    color: 'blue',
  },
})




type Props = {|
  +onPress: () => void,
  +prezidenti: Array<string>,
|}

export default class List extends React.PureComponent<Props> {
  render() {
    const { prezidenti, onPress } = this.props
    console.log(prezidenti)
    return (
      <View>
        {prezidenti.map(
          (prezident) => {
            return <TouchableOpacity
              onPress = {() => {
                alert(`${prezident.hlaska}`)
              }}
              style={{height:40}}
            >
              <Text style={styles.list}>{prezident.jmeno}</Text>
            </TouchableOpacity>
          
        })
        }
      </View>
        
      
    )
  }
}
