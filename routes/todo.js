const express = require("express");
const router = express.Router();
// import controllers 
const {createTodo} = require('../controller/createTodo')
const {getTodo, getTodoById} = require('../controller/getTodo')
const {updateTodo} = require("../controller/updateTodo")
const {deleteTodo} = require("../controller/deleteTodo")

// define api router 
router.post("/createTodo", createTodo)
router.get("/getTodo", getTodo)
router.get("/getTodo/:id", getTodoById)
router.put("/updateTodo/:id", updateTodo)
router.delete("/deleteTodo/:id", deleteTodo)
router.get('/', (req, res) => {
        res.json({
                success: true,
                message: "hello ji ki hall"
        });
})
router.get('/car', (req, res) => {
        res.send("My car name is scorpio");
})

module.exports = router;