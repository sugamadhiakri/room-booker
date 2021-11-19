import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'bookings';
enablePromise(true);


export const getDBconnection = async () => {
    return openDatabase({ name: 'booking-records.db', location: 'default' });
}

export const createTable = async (db: SQLiteDatabase) => {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(id INTEGER PRIMARY KEY AUTOINCREMENT, room TEXT, time TEXT, date TEXT, purpose TEXT, booker TEXT)`
    await db.executeSql(query);
}
