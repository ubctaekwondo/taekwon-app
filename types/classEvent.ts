import { Timestamp } from "firebase/firestore";

export type ClassType = "poomsae" | "sparring" | "demo" | "other";

export type ClassVisibility = "member" | "admin" | "both";

// Canonical Firestore document shape stored under the `classes` collection.
export interface FirestoreClassEvent {
  title: string;
  classType: ClassType;
  location: string;
  startAt: Timestamp;
  endAt: Timestamp;
  visibility: ClassVisibility;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  seedTag?: string;
}

// App-facing shape for UI and view logic.
// We convert Firestore Timestamp values to JS Date at the API boundary.
export interface ClassEvent {
  id: string;
  title: string;
  classType: ClassType;
  location: string;
  startAt: Date;
  endAt: Date;
  visibility: ClassVisibility;
  createdAt: Date;
  updatedAt: Date;
  seedTag?: string;
}

// Write payload used when creating a class document.
// Timestamps are server-side concerns and are set in the data layer.
export interface CreateClassEventInput {
  title: string;
  classType: ClassType;
  location: string;
  startAt: Date;
  endAt: Date;
  visibility?: ClassVisibility;
}
