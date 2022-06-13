//grabbed the collection function from the firestore library 
import {
    collection, addDoc, //for creating a database and saving to server
    query, getDocs, // reading into the database
    doc, updateDoc, //updating the database
    deleteDoc,
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Task } from '../models/task';

class TaskService {

    constructor() { //in the constructor sets the collection name to 'tasks' which makes it easier to change later if needed and code easier to manage
        this.collection = 'tasks';
    }
    //CREATE
    //use collection to parse in firestore which is linked to application on firestore. instance Tell which collection to reference to 'tasks', creates collectionRef
    //
    async createTask(task) {
        const collectionRef = collection(db, this.collection);

        const docRef = await addDoc(collectionRef, {
            name: task.name,
            complete: task.complete,
        }); //says what to be saving

        task.id = docRef.id;
        return task;

    }

    //READ
    //Allows us to read tasks in our database

    async fetchTasks() { //fetchTasks has no parameters because we want to fetch all tasks in the collection
        const q = query(collection(db, this.collection)); //query the tasks collection, get a value back 'q'. 'q' is just an instance of the query

        const querySnapshot = await getDocs(q); //use 'q' to parse into the getDocs function. Wait to get back from server for query to happen, gives snapshot
        const tasks = []; //create an empty array of tasks before looping through document

        //querySnapshot is an array and can be looped though with .forEach
        querySnapshot.forEach((doc) => { //.forEach is a higher order function that loops through all the elements in an array
            const data = doc.data(); //.data function will return all of the data for that element (for this case name and complete) as a JavaScript Object
            
            // while looping through docs, push to the tasks array to create a new task
            tasks.push(new Task( //pushes to tasks array that we initialized above
                doc.id, //document has an id which is the id of the document that was stored
                data.name,
                data.complete,
            ));

        });
        return tasks; //return populated array at the end

    }

    //UPDATE

    async updateTask(task) {
        const docRef = doc(db, this.collection, task.id); //parse in firebase instance, collection name and id
        await updateDoc(docRef, { // tell which doc to update by passing in reference then parse in what you want to be updated
            name: task.name,
            complete: task.complete
        });

        return task;
    }

    //DELETE

    async deleteTask(taskId) {
        const docRef = doc(db, this.collection, taskId); //gets reference to document
        await deleteDoc(docRef); //deletes the doc
    }

}

//create a new instance of the TaskService class
const service = new TaskService();

//export that newly created instance
export default service;