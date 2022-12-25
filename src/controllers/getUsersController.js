export const getUser = (req, res) => {
  const { user } = req.body;
  if (!user) {
    return res.status(400).send({ message: 'User not found', user: null });
  }
  res.status(200).send({ message: 'User found', user });
};
