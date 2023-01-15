import { createCustomError } from '../errors/custom-error.js';
import Task from '../models/tasks.js';

const all = async (req, res, next) => {
  try {
    const tasks = await Task.find({}).exec();
    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};

const save = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id).exec();

    if (!task) {
      return next(
        createCustomError({
          statusCode: 404,
          message: `No task with id ${id} found`,
        })
      );
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ message: `No task with id ${id} found` });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete({ _id: id }).exec();

    if (!task) {
      return res.status(404).json({ message: `No task with id ${id} found` });
    }

    res.status(200).json({ message: 'successfully deleted!' });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { all, save, findById, updateById, deleteById };
