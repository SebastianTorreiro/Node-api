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
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
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
