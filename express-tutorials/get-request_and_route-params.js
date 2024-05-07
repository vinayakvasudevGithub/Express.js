import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

const mockusers = [
  { id: 1, user: "vinayak", displayname: "vinayak" },
  { id: 2, user: "jack", displayname: "anson" },
  { id: 3, user: "adam", displayname: "adam" },
];

app.get("/", (request, response) => {
  response.send("hii");
});

app.get("/api/users", (request, response) => {
  response.send(mockusers);
});

app.get("/api/products", (request, response) => {
  response.send([{ id: 1, productname: "chicken", price: 12.99 }]);
});

app.get("/api/users/:id", (request, response) => {
  console.log(request.params);

  const parsedId = parseInt(request.params.id);

  if (isNaN(parsedId))
    return response.status(400).send({ msg: "bad request.invalid ID" });
  const finduser = mockusers.find((user) => user.id === parsedId);
  if (!finduser) return response.sendStatus(404);
  return response.send(finduser);
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
