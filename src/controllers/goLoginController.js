import { createToken } from '../jwt/createToken.js';
import { User } from '../models/UserModel.js';
import bcrypt from 'bcrypt';

export const goLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        message: 'Email and password requireds',
        user: null,
        token: null,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      const newUser = await User.create({ email, password });
      const token = createToken(newUser._id, 10000);
      return res
        .status(201)
        .send({ message: 'User created', user: newUser, token });
    }
    const auth = bcrypt.compare(password, user.password);
    if (!auth) {
      return res
        .status(400)
        .send({ message: 'Invalid login', user: null, token: null });
    }
    const token = createToken(user._id, 10000);
    res.status(200).send({ message: 'Login Ok', user, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: 'Error to login', error, user: null, token: null });
  }
};
