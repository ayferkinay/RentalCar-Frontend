import { Brand } from './brand';
import { responseModel } from './responseModel';

export interface BrandResponseModel extends responseModel{
    data : Brand[];
}