//setup simble web server using express

//importing express
import express from "express";

//wecall express
const app = express();

//process.env.PORT is same as like amazone.com instead we use 3000 its a local host
const PORT = process.env.PORT || 3000;

//creating users details in a variable for easy use
const mockusers = [
  { id: 1, username: "vinayak", displayname: "vinayak" },
  { id: 2, username: "jack", displayname: "anson" },
  { id: 3, username: "adam", displayname: "adam" },
];

//Get requists
//request contains everything related to imconing http requests (eg:if u pass http request from client side to server side the headers property in the requests object ,to acces data from clint )
//resopnse use to modify the response and send it back to user(we can send html,json,texts we can send anything)
app.get("/", (request, response) => {
  response.send("hii");
});

//creating a simple api for example purpose
app.get("/api/users", (request, response) => {
  response.send(mockusers);
});

//example toooo
app.get("/api/products", (request, response) => {
  response.send([{ id: 1, productname: "chicken", price: 12.99 }]);
});

//ROUTE PARAMS(parametre).
//to be able to dynamically pass data to server
//and this can recieve dynamic data based the value of that params

//finding based on id
app.get("/api/users/:id", (request, response) => {
  console.log(request.params);

  //after passing the id in terminal it shows as string {id:"1"}
  //to change that into numeric
  const parsedId = parseInt(request.params.id);
  //console.log(parsedId);
  //after this terminal shows NaN if u pass anything otherthan numbers
  //or show the id only if its a number

  //commened the above console.log(parsedId); becouse the code below is to make it on better way

  //if its not a number then return pehaps a status code that indicates that this is a invavid request
  if (isNaN(parsedId))
    return response.status(400).send({ msg: "bad request.invalid ID" });
});
//then goto localhost:3000/api/users/(given id eg:1)
//then check terminal can see {id:1(the id no. passed)}

// allows to listen to a port for imconing req(hhtp)
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
