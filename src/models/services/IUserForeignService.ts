import IUser from "../common/IUser";

export default interface IUserForeignService {
  get: (count: number) => Promise<IUser[]>;
}
