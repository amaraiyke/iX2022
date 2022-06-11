import {
    collection, addDoc,
} from 'firebase/firestore';

import { db } from '../firebase/firebase';

class TaskService {

    //CREATE
    //grab collection function from firestore library. Tell which collection to reference to 'tasks', creates collectionRef
    async createTask(task) {
        const collectionRef = collection(db, 'tasks');

        const docRef = await addDoc(collectionRef, {
            name: task.name,
            complete: task.complete,
        }); //says what to be saving

        task.id = docRef.id;
        return task;

    }
    //READ

    //UPDATE

    //DELETE

}

//create an instance of the TaskService class
const service = new TaskService();

//export that newly created instance
export default service;