//1. import json server
const jsonServer = require ('json-server')

//2.Create an app using json server
const habitServer = jsonServer.create()

//3. creating a router for your JSON server
const router = jsonServer.router('db.json')

//4. creating a middleware used foe parsing json - js
const middleware = jsonServer.defaults()

//5.define port
const PORT = 3000

//6. This means  that any incoming HTTP request to your server will go through these middlewares and be handeled by the router
habitServer.use(middleware)
habitServer.use(router)

//7. server is up and running, it logs a message to the console indicating that the  JSON server is listen
habitServer.listen(PORT,()=>{
    console.log("Habit Tracker server running on the port", PORT);
})