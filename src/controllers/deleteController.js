import { User } from '../models/UserModel.js';
import bcrypt from 'bcrypt';

export const deleteUser = async (req, res) => {
  try {
    const { password, id, user } = req.body;

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res
        .status(400)
        .send({ mwssage: "Invalid login, user can't be deleted", user: null });
    }
    const userDeleted = await User.findByIdAndDelete(id);
    res.status(200).send({ message: 'User deleted', user: userDeleted });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error to delete user', error });
  }
};
