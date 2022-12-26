import { User } from '../models/UserModel.js';

export const limitUsers = async () => {
  try {
    const num = await User.countDocuments();
    if (num >= 10) {
      const users = await User.find().limit(2);
      const deletedUser = await User.findByIdAndDelete(users[1]._id);
      return deletedUser;
    }
    return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};
