import userMapper from "../mappers/userMapper";
import IUser from "../models/common/IUser";
import IUserForeignService from "../models/services/IUserForeignService";

const baseUrl: string = "https://randomuser.me/api/";

const userForeignService: IUserForeignService = {
  get: async (count: number): Promise<IUser[]> => {
    try{
    const fetchResult = await fetch(`${baseUrl}?results=${count}`);
    const response = await fetchResult.json();
    return response.results.map((u: any) => {
      const user: IUser = userMapper.mapForeign(u);
      return user;
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
  },
};

export default userForeignService;
