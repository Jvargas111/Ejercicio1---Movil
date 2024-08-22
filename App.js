import { StyleSheet, View, Text } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}>
        A
      </View>
      <View style={styles.containerBCD}>
        <View style={styles.containerB}>
          B
        </View>
        <View style={styles.containerC}>
          C
        </View>
        <View style={styles.containerD}>
          D
        </View>
      </View>
      <View style={styles.containerEFG}>
        <View style={styles.containerE}>
          E
        </View>
        <View style={styles.containerF}>
          F
        </View>
        <View style={styles.containerG}>
          G
        </View>
      </View>
      <View style={styles.containerH}>
        H
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
  },

  containerA: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
  },

  containerBCD: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },

  containerB: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "gray",
    marginRight: 5,
  },

  containerC: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "gray",
    marginRight: 5,
  },

  containerD: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "gray",
  },

  containerEFG: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },

  containerE: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "gray",
    marginRight: 5,
  },

  containerF: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "gray",
    marginRight: 5,
  },

  containerG: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "gray",
  },

  containerH: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10,
  },
})
