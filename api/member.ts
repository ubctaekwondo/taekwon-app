import { collection, addDoc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../config/firebaseConfig";
import { Member } from "@/types/member";

const collectionName = "members";

// Read member from Firestor
export const readMember = async (docId: String) => {
	const docRef = doc(FIRESTORE_DB, collectionName, docId);
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

// Write member to Firestore
export const addMember = async (data: Member) => {
	try {
		await addDoc(collection(FIRESTORE_DB, collectionName), data);
		console.log("Document successfully added!");
	} catch (error) {
		console.error("Error adding document: ", error);
	}
};
