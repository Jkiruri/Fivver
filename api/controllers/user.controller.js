export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
};
