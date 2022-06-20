import { Address } from "./address";

export interface Hotel {
    hotelId:number;
    hotelName:string;
    phone:number;
    noOfRooms:number;
    ratings:number;
    starRatings:string;
    propertyType:string;
    address:Address;
}
