const Workouts = require("../database/Workout");

const getAllWorkouts = () => {
  const allWoorkouts = Workouts.getAllworkouts();
  return allWoorkouts;
};
const getOneWorkout = () => {
  return;
};
const createNewWorkout = () => {
  return;
};
const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
