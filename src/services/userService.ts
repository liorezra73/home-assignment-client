import userMapper from "../mappers/userMapper";
import IUser from "../models/common/IUser";
import IUserService from "../models/services/IUserService";

const baseUrl: string = "http://localhost:4000/api/users/";


const userService: IUserService = {
  get: async function (): Promise<IUser[]> {
    try {
      const fetchResult = await fetch(baseUrl);
      const response = await fetchResult.json();
      return response.map((u: any) => {
        const user: IUser = userMapper.map(u);
        return user;
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
   
  },
  create: async function (user: IUser): Promise<void> {
    try {
      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  update: async function (user: IUser): Promise<void> {
    try {
      await fetch(`${baseUrl}${user.username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  delete: async function (username: string): Promise<void> {
    try {
      await fetch(`${baseUrl}${username}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default userService;
