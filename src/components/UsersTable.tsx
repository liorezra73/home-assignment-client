import IUser from "../models/common/IUser";
import UserRow from "./UserRow";

interface UsersTableProps {
    users: IUser[];
    onClickRow:(user:IUser)=>void;
  }

  export default function UsersTable(props:UsersTableProps) {
    const {users,onClickRow} = props;
    return (
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserRow key={user.contactInfo?.email} user={user} onClickRow={(u)=>onClickRow(u)}/>
            ))}
          </tbody>
        </table>
      );
  }