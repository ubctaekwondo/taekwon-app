import { collection, addDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "./firebaseDb";

// Function to write data to Firestore
const writeDataToFirestore = async (collect, data) => {
	try {
		await addDoc(collection(FIRESTORE_DB, collect), data);
		console.log("Document successfully added!");
	} catch (error) {
		console.error("Error adding document: ", error);
	}
};

export default writeDataToFirestore;
