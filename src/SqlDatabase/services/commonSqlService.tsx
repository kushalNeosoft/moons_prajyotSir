import {SQLiteDatabase} from 'react-native-sqlite-storage';

interface INSERTDATA {
  db: Promise<SQLiteDatabase>;
  state: string;
  capital: string;
}

interface FULLTEXTSEARCH {
  db: Promise<SQLiteDatabase>;
  column: string;
  keyword: string;
}

export const createTable = async (db: Promise<SQLiteDatabase>) => {
  (await db).transaction((tx: any) => {
    tx.executeSql(
      'CREATE VIRTUAL TABLE IF NOT EXISTS searchtable USING fts4(state,capital)',
      [],
      (tx: any, res: any) => {
        console.log('Table created successfully');
      },
      (tx: any, err: any) => {
        console.log('Error creating table:', err);
      },
    ),
      console.log('Created');
  });
};

export const insertData = async (props: INSERTDATA) => {
  (await props.db).transaction(tx => {
    tx.executeSql(
      'INSERT INTO searchtable(state, capital) VALUES (?, ?)',
      [`${props.state}`, `Capital of ${props.state} is ${props.capital}`],
      (tx, res) => {
        console.log('Data inserted successfully');
      },
      (tx, err) => {
        console.log('Error inserting data:', err);
      },
    ),
      console.log('Inserted');
  });
};

export const getData = async (db: Promise<SQLiteDatabase>) => {
  (await db).transaction((txn: any) => {
    txn.executeSql('SELECT * FROM searchtable', [], (tx: any, res: any) => {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log(res.rows.item(i));
      }
    });
  });
};

export const fullTextSearch = async (props: FULLTEXTSEARCH) => {
  (await props.db).transaction(txn => {
    txn.executeSql(
      `SELECT * FROM searchtable WHERE ${props.column} LIKE ?`,
      [`%${props.keyword}%`],
      (txn: any, res: any) => {
        for (let i = 0; i < res.rows.length; i++) {
          console.log('Response data', res.rows.item(i));
        }
      },
      error => console.log(error),
    );
  });
};
