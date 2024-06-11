const Todo = require("../models/TodoSchema")

exports.createTodo = async (req, res) => {
        try {
                // extract title and description from schema 
                const { title, description } = req.body;
                // create a new todo and insert in db 
                const response = await Todo.create({ title, description }); 
                // send json data with success flag 
                res.status(200).json(
                        {
                                success: true,
                                data: response,
                                message: "Entry created successfully"
                        }
                )
        } catch (error) {
                console.error(error);
                console.log(error);
                res.status(500).json({
                        success: false,
                        data: "internal server error",
                        message: error.message
                })
        }


}