// @flow
import React from 'react'
import { 
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

// components
import { RoundedButton, Title, List } from '../components'
import { Colors } from '../themes'


const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  strong: {
    fontWeight: "bold",
    color: Colors.primary,
  },
  image: {
    width: "100%",
    height: 100,
  },

})

const seznam = [
  {jmeno: "Havel", hlaska: "asfdss"}, 
  {jmeno:"Klaus", hlaska: "aajndas"}, 
  {jmeno:"Zeman", hlaska: "asdnsaijnda"}, 
  {jmeno:"Gottwald", hlaska:"asdasfgre"}
]


export default class RootContainer extends React.PureComponent<null> {

  render() {
    return (
      <View>
        <Image source={require("../../assets/zeman.jpg")}
          style={styles.image}
        />
        <ScrollView style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.4}
          >
            <Title color="red">
            Vyber nejlepšího prezidenta všech dob
            </Title>
            <Text>
              Všichni tušíme, kdo je nejlepší prezident ever. Dokážeš ho ale vybrat
              z našeho listu? Zkus se zamyslet. Ehm Ehm{" "}
              <Text style={styles.strong}>...Zeman... </Text>{" "}
              Kdybys nevěděl, tak se zamysli. Kdybys ani potom nevěděl, scrolluj dolů.
            </Text>
          </TouchableOpacity>
            <List prezidenti= {seznam} />
        </ScrollView>
      </View>
    )
  }
}
/*
render(){
  const nejakyList = [“pepa”, “venca”, “karel"]
  return (
    nejakyList.map((jmeno) => <MojeKomponenta data={jmeno} />)
  )
}*/
