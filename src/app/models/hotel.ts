import { Address } from "./address";
import { Rooms } from "./rooms";

export interface Hotel {
    hotelId:number;
    hotelName:string;
    phone:number;
    noOfRooms:number;
    ratings:number;
    starRatings:string;
    propertyType:string;
    address:Address;
    rooms:Rooms;
    hotelImg:string;
}
