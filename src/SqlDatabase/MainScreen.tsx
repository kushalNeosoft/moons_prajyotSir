import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { createTable,insertData,getData,fullTextSearch } from './services/commonSqlService';

// Open a database connection
const db = SQLite.openDatabase({name: 'mydb.db', location: 'default'});

function MainScreen() {
  const [state, setState] = useState<string>('');
  const [capital, setCapital] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [column, setcolumn] = useState<string>('');
  const [tablecreated, setTableCreated] = useState<boolean>(false);

  const tableCreation = () => {
    createTable(db);
    setTableCreated(true);
  };

  const dataInsertion = () => {
    insertData({db, state, capital});
    setState('');
    setCapital('');
  };

  const searchQuery = () => {
    fullTextSearch({db, keyword, column});
    setKeyword('');
    setcolumn('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>SQLite Database</Text>
      </View>
      <Text style={styles.textIpTitle}>Please Enter State</Text>
      <TextInput
        placeholder="Enter State"
        value={state}
        style={styles.textIp}
        onChangeText={text => setState(text)}
      />
      <Text style={styles.textIpTitle}>Please Enter Capital</Text>
      <TextInput
        placeholder="Enter Capital"
        value={capital}
        style={styles.textIp}
        onChangeText={text => setCapital(text)}
      />
      <Text style={styles.textIpTitle}>Please Enter Keyword to search</Text>
      <TextInput
        placeholder="Enter KeyWord"
        value={keyword}
        style={styles.textIp}
        onChangeText={text => setKeyword(text)}
      />
      <Text style={styles.textIpTitle}>Please Enter Column to search</Text>
      <TextInput
        placeholder="Enter Column"
        value={column}
        style={styles.textIp}
        onChangeText={text => setcolumn(text)}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.createTableBtn} onPress={tableCreation}>
          <Text style={styles.createtableTxt}>CreateTable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.createTableBtn,
            {opacity: tablecreated && state !== '' && capital !== '' ? 1 : 0.7},
          ]}
          disabled={!tablecreated}
          onPress={dataInsertion}>
          <Text style={styles.createtableTxt}>InsertData</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.createTableBtn, {opacity: tablecreated ? 1 : 0.7}]}
          disabled={!tablecreated}
          onPress={() => getData(db)}>
          <Text style={styles.createtableTxt}>GetData</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.createTableBtn,
            {
              opacity:
                tablecreated && keyword !== '' && column !== '' ? 1 : 0.7,
            },
          ]}
          disabled={!tablecreated}
          onPress={searchQuery}>
          <Text style={styles.createtableTxt}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: 50,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  textIp: {
    borderWidth: 1,
    marginRight: '10%',
    borderRadius: 15,
    marginTop: '2%',
  },
  textIpTitle: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: '2%',
  },
  createTableBtn: {
    height: 50,
    width: 150,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  createtableTxt: {
    fontSize: 20,
    color: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export default MainScreen;
