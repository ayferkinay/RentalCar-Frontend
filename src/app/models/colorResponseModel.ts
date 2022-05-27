import { Color } from './color';
import { responseModel } from './responseModel';

export interface ColorResponseModel extends responseModel{
    data : Color[];
}