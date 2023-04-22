import React, { FormEvent, useState } from 'react';
import IUser from '../models/common/IUser';

interface UserFormProps {
    user?: IUser;
    onSubmit:(user:IUser)=>void;
    onDelete:(user:IUser)=>void;
    onUpdate:(user:IUser)=>void;
  }

  const UserForm = (props: UserFormProps) => {
    const defaultUser:IUser = {
      firstName: "kobi",
      lastName: "marimi",
      title: "Mr",
      gender: "Male",
      thumbnailPicture:"https://i.ytimg.com/vi/0bd03s8Oo9U/maxresdefault.jpg",
      largePicture: "https://i.ytimg.com/vi/0bd03s8Oo9U/maxresdefault.jpg",
      username: "kobi",
      birthDate: new Date(),
      age: 35,
      contactInfo: {
        phone: "0585596832",
        email: "kobi@gmail.com",
      },
      location: {
        country: "Israel",
        city: "Arad",
        state: "kobi",
        street: "Herzel",
        streetNumber: 88,
      },
    }
    const { user,onSubmit,onDelete,onUpdate } = props;

    const [userTmp, setUser] = useState(user || defaultUser);

    const onLocalSubmit = (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      onSubmit(userTmp);
    }

    const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) :void => {
      const u = {...userTmp};
      u.firstName = event.target.value;
      setUser({...u});
    };
    const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
      const u = {...userTmp};
      u.lastName = event.target.value;
      setUser({...u});
    };

      return (
      <div>
         <div>
        <img src={userTmp.largePicture} alt={`${userTmp.username}`} />
        </div>
        <div>
        <span>{`Gender: ${userTmp.gender}`}</span>
        </div>
        <div>
        <span>{`Age: ${userTmp.age}`}</span>
        </div>
        <div>
        <span>{`Birth Date: ${userTmp.birthDate}`}</span>
        </div>
        <div>
        <span>{`Address: ${userTmp.location?.country} , ${userTmp.location?.city} , ${userTmp.location?.street} ${userTmp.location?.streetNumber} , ${userTmp.location?.state}`}</span>
        </div>
        <div>
        <span>{`Email: ${userTmp.contactInfo?.email}`}</span>
        </div>
        <div>
        <span>{`Phone: ${userTmp.contactInfo?.phone}`}</span>
        </div>
        <form onSubmit={(e)=>onLocalSubmit(e)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={userTmp.firstName} onChange={(e)=>onFirstNameChange(e)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={userTmp.lastName} onChange={(e)=>onLastNameChange(e)} />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={()=> onUpdate(userTmp)}>Update</button>
        <button type="button" onClick={()=> onDelete(userTmp)}>Delete</button>
      </form>
      
      </div>
    );

  }
  
  export default UserForm;