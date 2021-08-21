const express = require('express')
const cors = require('cors')
const pool = require("./db")
const app = express()

//Middlewares
app.use(cors())
app.use(express.json())

//ROUTES//

//Create a question
app.post('/questions', async (req,res) => {
    try {
        const {questions} = req.body
        const newTodo = await pool.query("INSERT INTO questionbank(questions) VALUES($1) RETURNING *",[questions])
        res.json(newTodo.rows)
    } catch (err) {
        console.log(err.message)
    }
})

//get all queations
app.get("/questions", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM questionbank")
        res.json(allTodos.rows)
    } catch (err) {
        console.log(err.message)
    }
})

//get a question
app.get("/questions/:id", async (req,res) => {
    try {
        const {id} = req.params
        const todo = await pool.query("SELECT * FROM questionbank WHERE question_id = $1",[id])
        res.json(todo.rows)
    } catch (err) {
        console.log(err.message)
    }
})

//update a question
app.put("/questions/:id",async (req,res) => {
    try {
        const {id} = req.params
        const {questions} = req.body
        const updateTodo = await pool.query("UPDATE questionbank SET questions = $1 WHERE question_id = $2",[questions,id])
        res.json("Todo was updated")
    } catch (error) {
        console.log(error.message)
    }
})

//delete a question
app.delete("/questions/:id", async (req,res) => {
    try {
        const {id} = req.params
        const deleteTodo = await pool.query("DELETE FROM questionbank WHERE question_id = $1",[id])
        res.json("Todo got deleted")
    } catch (err) {
        console.log(err.message)
    }
})

//Post Multiple options
app.post('/options', async (req,res) => {
    try {
        const {option_1,option_2,option_3,option_4} = req.body
        const newTodo = await pool.query("INSERT INTO multipleoptions(option_1,option_2,option_3,option_4) VALUES($1,$2,$3,$4) RETURNING *",[option_1,option_2,option_3,option_4])
        res.json(newTodo.rows)
    } catch (err) {
        console.log(err.message)
    }
})


//get all options
app.get("/options", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM multipleoptions INNER JOIN questionbank ON questionbank.question_id = multipleoptions.option_id")
        res.json(allTodos.rows)
    } catch (err) {
        console.log(err.message)
    }
})


app.listen(5000, () => {
    console.log("Server has Started on port 5000")
})