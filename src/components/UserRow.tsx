import IUser from "../models/common/IUser";

interface UserRowProps {
    user: IUser;
    onClickRow:(user:IUser)=>void;
  }

  export default function UserRow(props:UserRowProps) {
    const {user,onClickRow} = props;

    return (
        <tr onClick={()=>onClickRow(user)}>
        <td>
          <img src={user.thumbnailPicture} alt={`${user.firstName} ${user.lastName}`} />
        </td>
        <td>{`${user.title} ${user.firstName} ${user.lastName}`}</td>
        <td>{user.gender}</td>
        <td>{user.location?.country}</td>
        <td>{user.contactInfo?.email}</td>
        <td>{user.contactInfo?.phone}</td>
      </tr>
      );
  }