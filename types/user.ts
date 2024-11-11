// src/types/City.ts
export interface User {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	membership: boolean;
	roles: [string];
	streak: number;
}
