// src/types/City.ts
export interface Member {
	uid: string;
	createdAt: Date;
	firstname: string;
	lastname: string;
	membership: boolean;
	roles: [];
	streak: number;
}
