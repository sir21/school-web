import { Address } from './address';

export interface School {
    id: string;
    name: string;
    address: Address;
    numberOfStudents: number;
}
