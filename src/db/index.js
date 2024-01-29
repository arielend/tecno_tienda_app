import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('tecnotienda.db')

export const init = () => {

    const promise = new Promise((resolve, reject)=>{
        db.transaction( tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY_KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)',
            [],
            (tx, result)=>resolve(result),
            (tx, error) => reject(error))
        })
    })
    
    return promise
}

export const insertSession = ({userEmail, localId, idToken}) => {
    
    const promise = new Promise((resolve, reject) =>{
        db.transaction( (tx) => {
            tx.executeSql(
                'INSERT INTO sessions (email, localId, token ) VALUES(?, ?, ?)',
                [userEmail, localId, idToken],
                (tx, results)=> {
                    resolve(results)
                },
                (tx, error) => {
                    console.log(error.message)
                    reject(error)
                }
            )
        })
    })

    return promise
}

export const getSession = ({localId}) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction ( (tx) => {
            tx.executeSql(
                'SELECT * FROM sessions WHERE localId = ?',
                [localId],
                (tx, results)=> {
                    resolve(results)
                },
                (tx, error) => {
                    console.log(error.message);
                    reject(error)
                }
            )
        })
    })

    return promise
}

export const getSessions = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction ( (tx) => {
            tx.executeSql(
                'SELECT * FROM sessions',
                [],
                (tx, results)=> {
                    resolve(results)
                },
                (tx, error) => {
                    console.log(error.message);
                    reject(error)
                }
            )
        })
    })

    return promise
}

export const deleteSessions = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'DELETE FROM sessions',
                [],
                (tx, results)=> {
                    resolve(results)
                },
                (tx, error) => {
                    console.log(error.message);
                    reject(error)
                }    
            )
        })
    })
    
    return promise
}

export const deleteUserSessionDB = ({localId}) => {

    const promise =  new Promise((resolve, reject) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                'DELETE FROM sessions WHERE localId = ?',
                [localId],
                (tx, results) =>{
                    console.log("Delete user session results: ", results);
                    resolve(results)
                },
                (tx, error)=>{
                    console.log("Error al eliminar  la session: ", error);
                    reject(error)
                }
            )
        })
    })

    return promise
}