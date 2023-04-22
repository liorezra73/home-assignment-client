import { useState, useEffect } from 'react';
import IUser from '../models/common/IUser';
import userForeignService from '../services/userForeignService';
import UsersTable from '../components/UsersTable';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {  setUsers } from '../reducers/userReducers';


export default function UsersScreen() {
    const [data, setData] = useState<IUser[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await userForeignService.get(10);
            dispatch(
              setUsers(response)
            );
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
          <h1>Welcome to the Users Screen</h1>
          <UsersTable users={data} onClickRow={(u)=>onClickRow(u)}></UsersTable>
        </div>
      );

}