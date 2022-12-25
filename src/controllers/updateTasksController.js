import { User } from '../models/UserModel.js';

export const updateTasks = async (req, res) => {
  try {
    const { id, tasks } = req.body;

    if (!tasks || !Array.isArray(tasks) || tasks?.length === 0) {
      return res
        .status(400)
        .send({ message: 'Task must have some value', tasks: null });
    }

    const updateTasks = await User.findOneAndUpdate(
      { _id: id },
      { tasks },
      { rawResult: true }
    );
    if (!updateTasks) {
      return res.status(400).send({ message: 'Tasks not update', tasks });
    }

    res.status(200).send({ message: 'Tasks updated', tasks });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ message: 'Error to update Tasks', error, tasks: null });
  }
};
