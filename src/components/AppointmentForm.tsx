import React, { useState } from "react";
import { Appointment } from "../interfaces/Appointment";
import { Customer } from "../interfaces/Customer";

interface Props {
  addAppointment: (appointment: Appointment) => void;
}

const AppointmentForm: React.FC<Props> = ({ addAppointment }) => {
  const [customer, setCustomer] = useState<Customer>({
    id: 0,
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    email: "",
    dateOfBirth: "",
  });

  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!customer.firstName.trim() || !customer.lastName.trim() || !customer.phone.trim() || !customer.email.trim() || !customer.dateOfBirth.trim() || !treatment.trim() || !date.trim() || !time.trim()) return;
    const appointment: Appointment = {
      id: new Date().getTime(),
      customer,
      treatment,
      date,
      time,
    };
    addAppointment(appointment);
    setCustomer({
      id: 0,
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",
      dateOfBirth: "",
    });
    setTreatment("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="ID"
          value={customer.id}
          onChange={(event) =>
            setCustomer({ ...customer, id: parseInt(event.target.value) })
          }
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          value={customer.firstName}
          onChange={(event) =>
            setCustomer({ ...customer, firstName: event.target.value })
          }
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          value={customer.lastName}
          onChange={(event) =>
            setCustomer({ ...customer, lastName: event.target.value })
          }
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Gender"
          value={customer.gender}
          onChange={(event) =>
            setCustomer({ ...customer, gender: event.target.value })
          }
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Phone"
         
          value={customer.phone}
          onChange={(event) =>
            setCustomer({ ...customer, phone: event.target.value })
          }
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={customer.email}
          onChange={(event) =>
            setCustomer({ ...customer, email: event.target.value })
          }
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          placeholder="Date of Birth"
          value={customer.dateOfBirth}
          onChange={(event) =>
            setCustomer({ ...customer, dateOfBirth: event.target.value })
          }
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={treatment}
          onChange={(event) => setTreatment(event.target.value)}
        >
          <option value="">Select a treatment</option>
          <option value="Massage">Massage</option>
          <option value="Facial">Facial</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
        </select>
      </div>
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          placeholder="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="time"
          className="form-control"
          placeholder="Time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
);
};

export default AppointmentForm;    