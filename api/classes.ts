import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { FIRESTORE_DB } from "@/config/firebaseConfig";
import {
  ClassEvent,
  CreateClassEventInput,
  FirestoreClassEvent,
} from "@/types/classEvent";
import { buildClassSeedData } from "@/api/classesSeed";

const collectionName = "classes";

const mapClassEvent = (
  docId: string,
  data: FirestoreClassEvent
): ClassEvent => ({
  id: docId,
  title: data.title,
  classType: data.classType,
  location: data.location,
  startAt: data.startAt.toDate(),
  endAt: data.endAt.toDate(),
  visibility: data.visibility,
  createdAt: data.createdAt.toDate(),
  updatedAt: data.updatedAt.toDate(),
  seedTag: data.seedTag,
});

export const getClassesForMonth = async (
  year: number,
  month: number
): Promise<ClassEvent[]> => {
  try {
    const monthStart = new Date(year, month - 1, 1, 0, 0, 0, 0);
    const monthEnd = new Date(year, month, 1, 0, 0, 0, 0);

    const classesQuery = query(
      collection(FIRESTORE_DB, collectionName),
      where("startAt", ">=", Timestamp.fromDate(monthStart)),
      where("startAt", "<", Timestamp.fromDate(monthEnd)),
      orderBy("startAt", "asc")
    );

    const snapshot = await getDocs(classesQuery);

    return snapshot.docs.map((doc) =>
      mapClassEvent(doc.id, doc.data() as FirestoreClassEvent)
    );
  } catch (error) {
    console.error("Error fetching classes for month:", error);
    return [];
  }
};

export const getUpcomingClasses = async (
  maxResults = 10
): Promise<ClassEvent[]> => {
  try {
    const now = new Date();

    const classesQuery = query(
      collection(FIRESTORE_DB, collectionName),
      where("startAt", ">=", Timestamp.fromDate(now)),
      orderBy("startAt", "asc"),
      limit(maxResults)
    );

    const snapshot = await getDocs(classesQuery);

    return snapshot.docs.map((doc) =>
      mapClassEvent(doc.id, doc.data() as FirestoreClassEvent)
    );
  } catch (error) {
    console.error("Error fetching upcoming classes:", error);
    return [];
  }
};

export const getNextClass = async (): Promise<ClassEvent | null> => {
  const classes = await getUpcomingClasses(1);
  return classes[0] ?? null;
};

export const createClassEvent = async (
  input: CreateClassEventInput,
  seedTag?: string
): Promise<string | null> => {
  try {
    const now = Timestamp.fromDate(new Date());
    const payload: FirestoreClassEvent = {
      title: input.title,
      classType: input.classType,
      location: input.location,
      startAt: Timestamp.fromDate(input.startAt),
      endAt: Timestamp.fromDate(input.endAt),
      visibility: input.visibility ?? "both",
      createdAt: now,
      updatedAt: now,
      ...(seedTag ? { seedTag } : {}),
    };

    const documentRef = await addDoc(collection(FIRESTORE_DB, collectionName), payload);
    return documentRef.id;
  } catch (error) {
    console.error("Error creating class event:", error);
    return null;
  }
};

export const seedClassTestData = async (seedTag = "calendar-seed-v1"): Promise<number> => {
  const seedData = buildClassSeedData(new Date());
  let created = 0;

  for (const classItem of seedData) {
    const createdId = await createClassEvent(classItem, seedTag);
    if (createdId) created += 1;
  }

  return created;
};

export const clearClassSeedData = async (seedTag = "calendar-seed-v1"): Promise<number> => {
  try {
    const seedQuery = query(
      collection(FIRESTORE_DB, collectionName),
      where("seedTag", "==", seedTag)
    );
    const snapshot = await getDocs(seedQuery);

    await Promise.all(snapshot.docs.map((seedDoc) => deleteDoc(doc(FIRESTORE_DB, collectionName, seedDoc.id))));
    return snapshot.size;
  } catch (error) {
    console.error("Error clearing class seed data:", error);
    return 0;
  }
};
