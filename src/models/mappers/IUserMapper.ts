import IUser from "../common/IUser";

export default interface IUserMapper {
  map: (user: any) => IUser;
  mapForeign: (user: any) => IUser;
}
