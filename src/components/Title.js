// @flow
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// theme
import { Colors, Metrics } from '../themes'

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    marginBottom: 10,
    color: 'blue',
  },
})

type Props = {
  +children: string,
}

export default class Title extends React.PureComponent<Props> {
  render() {
    const { children, color} = this.props
    return (
      <Text style={[styles.title, {color: color}]} > { children } </Text>
    )
  }
}
