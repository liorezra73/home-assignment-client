import IUser from "../models/common/IUser";
import IUserMapper from "../models/mappers/IUserMapper";

const userMapper: IUserMapper = {
  map(user: any): IUser {
    return user as IUser;
  },

  mapForeign(user: any): IUser {
    return {
      firstName: user.name.first,
      lastName: user.name.last,
      title: user.name.title,
      gender: user.gender,
      thumbnailPicture: user.picture.thumbnail,
      largePicture: user.picture.large,
      username: user.login.username,
      birthDate: user.dob.date,
      age: user.dob.age,
      contactInfo: {
        phone: user.phone,
        email: user.email,
      },
      location: {
        country: user.location.country,
        city: user.location.city,
        state: user.location.state,
        street: user.location.street.name,
        streetNumber: user.location.street.number,
      },
    };
  },
};

export default userMapper;
