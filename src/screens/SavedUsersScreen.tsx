import { useState, useEffect } from 'react';
import IUser from '../models/common/IUser';
import userService from '../services/userService';
import UsersTable from '../components/UsersTable';
import { useNavigate } from 'react-router-dom';


export default function SavedUsersScreen() {
    const [data, setData] = useState<IUser[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await userService.get();
            setData(response);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      const onClickRow = (u:IUser)=>{
        navigate(`/${u.username}`, { state: {...u } });
      }

      return (
        <div>
          <h1>Welcome to the Saved Users Screen</h1>
          <UsersTable users={data} onClickRow={(u)=>onClickRow(u)}></UsersTable>
        </div>
      );

}