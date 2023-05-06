import { Customer } from "./Customer";

export interface Appointment {
    id: number;
    customer: Customer;
    treatment: string;
    date: string;
    time: string;
  }