import { test, expect } from "vitest";
import {
  filterAllTasks,
  filterCompletedTasks,
  filterActiveTasks,
} from "../src/utils/filters.js";

const tasks = [
  { id: 1, text: "Study", completed: false },
  { id: 2, text: "Code", completed: true },
  { id: 3, text: "Read", completed: false },
];

test("filter all Tasks", () => {
  const filteredTasks = filterAllTasks(tasks);
  expect(filteredTasks).toEqual([...tasks]);
});

test("filter completed Tasks", () => {
  const filteredTasks = filterCompletedTasks(tasks);
  expect(filteredTasks).toEqual([tasks[1]]);
});


test("filter active Tasks", () => {
  const filteredTasks = filterActiveTasks(tasks);
  expect(filteredTasks).toEqual([tasks[0], tasks[2]]);
});

