import { Observable } from "rxjs";
import { Country } from "./country";

export interface City{
    id:number;
    name:string;
    countryName:any;
    countryRefId:number;
    //countryName:string;
   
}