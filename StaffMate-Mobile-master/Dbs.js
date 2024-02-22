import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { collection, doc, onSnapshot } from "firebase/firestore"
import { db } from "./src/config/firebase"
import CreateUser from "./src/components/CreateUser"
import DeleteUser from "./src/components/DeleteUser"

export default function Dbs() {
  const [person, setPerson] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const userRef = doc(db, "en97569", "feedback")
    onSnapshot(userRef, (doc) => {
      setPerson(doc.data())
      setLoading(false)
    })
  }, [])

  const renderItem = () => (
    <View style={{ marginTop: 250 }}>
      <Text>First Name of the Employee   : {person.FirstName}</Text>
      <Text>Last Name of the Employee   : {person.LastName}</Text>
      <Text>Employee ID                             : {person.reaction}</Text>
      <Text>Superior Feedback                  : {person.empID}</Text>
    </View>
  )

  console.log(person)

  return (
    <View style={styles.container}>
      <Text>Firebase Output</Text>
      <View>{renderItem()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
})