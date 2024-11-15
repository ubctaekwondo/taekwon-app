// src/types/City.ts
export interface Member {
	uid: string;
	createdAt: Date;
	email: string;
	firstname: string;
	lastname: string;
	membership: boolean;
	roles: [];
	streak: number;
}
