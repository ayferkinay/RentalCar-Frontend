import { responseModel } from './responseModel';
import { Car } from "./car";

export interface CarResponseModel extends responseModel{ //bir interface diğer interface i extend ediyor onun özelliklerini kullanır
    data :Car[]

}