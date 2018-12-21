
import { AsyncStorage } from "react-native"

export const setListFilmInDataBase = async (data) => {
    try {
        console.log('set data in database')
        await AsyncStorage.setItem('listfilm', JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
} 

export const getListFilmFromDatabase = async (callback) => {
    try {
        console.log('get data in database')
        const value = await AsyncStorage.getItem('listfilm');
        if (value !== null) {
            console.log('return data from database')
            callback(JSON.parse(value));
        }
        else {
            callback([])
        } 
     } catch (error) {
       // Error retrieving data
     }
  }

  