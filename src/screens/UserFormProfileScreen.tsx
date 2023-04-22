import { useLocation } from 'react-router-dom';
import IUser from '../models/common/IUser';
import UserForm from '../components/UserForm';
import userService from '../services/userService';
import { useNavigate } from 'react-router-dom';


export default function UserFormProfile() {
    const {state} = useLocation();
    const user = state as IUser;
    const navigate = useNavigate();

    const saveUser = async (u:IUser)=>{
      try {
        await userService.create(u);
      } catch (error) {
        console.log(error);
      }
    }

    const updateUser =async (u:IUser)=>{
      try {
        await userService.update(u);
      } catch (error) {
        console.log(error);
      }
    }

    const deleteUser =async (u:IUser)=>{
      try {
        await userService.delete(u.username);
      } catch (error) {
        console.log(error);
      }
    }

    const onGoBack = ()=>{
      navigate(-1);
    }
    
    return (
        <div>
          <UserForm user={user} onSubmit={(u)=>saveUser(u)} onUpdate={(u)=>updateUser(u)} onDelete={(u)=>deleteUser(u)}></UserForm>
          <button onClick={()=>onGoBack()}>Back</button>
        </div>
      );
}