import IUser from "../common/IUser";

export default interface IUserService {
  get: () => Promise<IUser[]>;
  create: (user: IUser) => Promise<void>;
  update: (user: IUser) => Promise<void>;
  delete: (username: string) => Promise<void>;
}
