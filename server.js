// server.js

// Config
const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const rewriteRules = jsonServer.rewriter({
	"/messages/:userId": "/messages?userId=:userId",
})
const middlewares = jsonServer.defaults()

server.use(rewriteRules)
server.use(middlewares)
server.use(router)

// Port
server.listen(5000, () => {
	console.log("JSON Server is running")
})
