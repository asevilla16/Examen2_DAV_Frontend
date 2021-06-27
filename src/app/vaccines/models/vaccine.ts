import { Distributor } from './../../distributors/models/Distributor';

export interface Vaccine {
    id: number;
    name: string;
    idDistributor: number;
    distributor: Distributor;
    doseQuantity: number;
}