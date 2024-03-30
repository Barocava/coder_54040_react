import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../services/firebase/index.js";

export const casasColeccion = async () => {
    const itemsCollection = collection(db, "casas");
    const snapshot = await getDocs(itemsCollection);
    return snapshot.size === 0 
    ? console.log("No existen registros")
    : snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}