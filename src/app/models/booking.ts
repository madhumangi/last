import { Customer } from "./customer";
import { Hotel } from "./hotel";
import { Room } from "./room";

export interface Booking {
    bookingId:number;
    checkInDate:Date;
    checkOutDate:Date;
    noOfPersons:number;
    hotel:Hotel;
    bookingDate:Date;
    totalCost:number;
    billingNo:number;
    paymentMode:string;
    customer:Customer;
    room:Room;
}
