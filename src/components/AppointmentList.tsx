import React from "react";
import { Appointment } from "../interfaces/Appointment";

interface Props {
appointments: Appointment[];
deleteAppointment: (id: number) => void;
}

const AppointmentList: React.FC<Props> = ({ appointments, deleteAppointment }) => {
const handleDelete = (id: number) => {
deleteAppointment(id);
};

return (
<table className="table">
<thead>
<tr>
<th>ID</th>
<th>Customer</th>
<th>Treatment</th>
<th>Date</th>
<th>Time</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{appointments.map((appointment) => (
<tr key={appointment.id}>
<td>{appointment.id}</td>
<td>
{appointment.customer.firstName} {appointment.customer.lastName}
</td>
<td>{appointment.treatment}</td>
<td>{appointment.date}</td>
<td>{appointment.time}</td>
<td>
<button className="btn btn-danger" onClick={() => handleDelete(appointment.id)}>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>
);
};

export default AppointmentList;