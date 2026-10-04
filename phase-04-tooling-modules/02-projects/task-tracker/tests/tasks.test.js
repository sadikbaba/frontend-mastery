import { test, expect, beforeEach } from "vitest";
import {
  addTask,
  getTasks,
  toggleTask,
  deleteTask,
  setTasks,
} from "../src/data/tasks.js";

beforeEach(() => {
  setTasks([]);
});

test("add task", () => {
  addTask("Study");

  const tasks = getTasks();
  expect(tasks.length).toBe(1);
  expect(tasks[0].text).toBe("Study");
  expect(tasks[0].completed).toBe(false);
});

test("toggle task", () => {
  const task = addTask("Study");
  toggleTask(task.id);

  expect(getTasks()[0].completed).toBe(true);
});

test("delete task", () => {
  const task = addTask("Study");
  deleteTask(task.id);

  expect(getTasks().length).toBe(0);
});