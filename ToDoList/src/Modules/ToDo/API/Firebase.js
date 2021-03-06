import database from '@react-native-firebase/database';
import { getCurrentUser } from "../../Auth";
import { convertRawData } from './Converter';


export const subscribeToNoteData = (onDataRetrieved) => {
    const userId = getCurrentUser().uid;
    database()
        .ref(`/noteThumbnailList/${userId}`)
        .on("value", snapshot => {
            const rawData = snapshot.val();
            const convertedList = convertRawData(rawData);
            onDataRetrieved(convertedList);
            console.log(rawData);
        });

    return () => {
        database()
            .ref(`/noteThumbnailList/${userId}`)
            .off("value");
    }


}


export const addNote = async (item, onComplate) => {
    try {
        const noteThumbnail = {
            taskname: item.taskname,
            isComplated: false,
        };
        const userId = getCurrentUser().uid;

        const newNoteThumbnailRef = database()
            .ref(`/noteThumbnailList/${userId}`)
            .push();

        await newNoteThumbnailRef.set(noteThumbnail);

        const itemKey = newNoteThumbnailRef.key;
        database()
            .ref(`/noteList/${itemKey}`)
            .set(item);
        onComplate();
    }
    catch (error) {

    }
}
export const getNoteDetail = (itemKey, onRetrieved) =>{
    database()
        .ref(`/noteList/${itemKey}`)
        .once(`value`)
        .then( snapshot=>{
            onRetrieved(snapshot.val())
        })
}

export const updateNote = async (item, onComplate) => {
    try {
        await database()
            .ref(`/noteList/${item.key}`)
            .update(item);

        const noteThumbnail = { 
            taskname: item.taskname,
            isComplated: item.isComplated
        };

        const userId = getCurrentUser().uid;
        await database()
            .ref(`/noteThumbnailList/${userId}/${item.key}`)
            .update(noteThumbnail);

        onComplate();

    } catch (error) {
        console.log(error);

    }
    
}

export const deleteItem = itemKey => {
    const userId = getCurrentUser().uid;
    database()
        .ref(`/noteThumbnailList/${userId}/${itemKey}`)
        .remove();

    database()
        .ref(`/noteList/${itemKey}`)
        .remove();
}
