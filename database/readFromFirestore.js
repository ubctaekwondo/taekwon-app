import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "./firebaseDb";

// Function to read data from Firestore
const readDataFromFirestore = async (collect, docId) => {
	const docRef = doc(FIRESTORE_DB, collect, docId);
	try {
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data());
		} else {
			// docSnap.data() will be undefined in this case
			console.log("No such document!");
		}
	} catch (error) {
		console.error("Error adding document: ", error);
	}
};

export default readDataFromFirestore;
