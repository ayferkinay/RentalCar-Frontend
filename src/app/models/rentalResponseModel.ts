
import { Rental } from './rental';
import { responseModel } from './responseModel';

export interface RentalResponseModel extends responseModel {
    data: Rental[];
}