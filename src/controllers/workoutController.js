const WorkoutServices = require("../services/workoutService");

const getAllworkouts = (req, res) => {
  const allWorkouts = WorkoutServices.getAllWorkouts();
  res.send({ status: "ok", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = WorkoutServices.getOneWorkout();
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
  const createdWorkout = WorkoutServices.createNewWorkout();
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = WorkoutServices.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  WorkoutServices.deleteOneWorkout();
  res.send("Delete an existing workout");
};
module.exports = {
  getAllworkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
