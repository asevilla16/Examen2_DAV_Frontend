import { VaccinationCenter } from './../../vaccination-centers/models/vaccination-center';
import { Vaccine } from './../../vaccines/models/vaccine';
import { Pacient } from './../../pacients/models/pacient';

export interface VaccinationControl{
    id: number;
    vaccinationDate: Date;
    pacientId: number;
    pacient: Pacient;
    vaccineId: number;
    vaccine: Vaccine;
    vaccinationCenterId: number;
    vaccinationCenter: VaccinationCenter;
    dose: number;
}