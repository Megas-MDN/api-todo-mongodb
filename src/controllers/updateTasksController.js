import { User } from '../models/UserModel.js';

export const updateTasks = async (req, res) => {
  try {
    const { id, tasks } = req.body;

    if (!tasks || !Array.isArray(tasks) || tasks?.length === 0) {
      return res
        .status(400)
        .send({ message: 'Task must have some value', tasks: null });
    }

    if (tasks?.length > 10) {
      return res
        .status(400)
        .send({ message: 'Tasks must have 10 max values', tasks: null });
    }

    const newArr = tasks.map(({ task, isDone }, i) => ({
      id: i,
      task: task.slice(0, 40),
      isDone: !!isDone,
    }));

    const updateTasks = await User.findOneAndUpdate(
      { _id: id },
      { tasks: newArr },
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
