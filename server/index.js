const express = require("express"),
  cors = require("cors"),
  { json } = require("body-parser"),
  port = 3001,
  app = express();

let todos = [
  { id: 1, isComplete: false, title: "Buy Eggs" },
  { id: 2, isComplete: false, title: "Buy Bread" },
  { id: 3, isComplete: true, title: "Buy Paper Towels" },
  { id: 4, isComplete: false, title: "Buy Ham" }
];
app.use(cors());
app.use(json());

app.get("/api/stuff", (req, res) => {
  res.status(200).json(todos);
});

app.get("/api/todos", (req, res) => res.status(200).json(todos));
app.post("/api/todos", (req, res) => {
  todos.push({
    ...req.body,
    ...{ id: todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 0 }
  });
  return res.status(200).json(todos);
});
app.put("/api/todos/:id", (req, res) => {
  todos = todos.map(c => (c.id === +req.params.id ? { ...c, ...req.body } : c));
  return res.status(200).json(todos);
});
app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter(c => c.id !== +req.params.id);
  return res.status(200).json(todos);
});
app.listen(port, () => {
  console.log("Server listening on port", port);
});
