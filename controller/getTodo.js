// import model 
const Todo = require("../models/TodoSchema")

// define routes 

exports.getTodo = async (req, res) => {
        try {
                // fetch all todos 
                const todos = await Todo.find({});

                // response update with a success flag and data 
                res.status(200).json({
                        success: true,
                        data: todos,
                        message: "Entire todos data fetched"
                })
                
        } catch (error) {
                console.log(error);
                res.status(500).json({
                        success: false,
                       error:error.message,
                        message: "Internal server error"      
                })
        }
}



exports.getTodoById = async (req, res) => {
        try {
                // extract todo single item by id 
        const id = req.params.id
        const todo = await Todo.findById({_id:id})

        // given id is not found 
        if(!todo){
                return res.status(404).json({
                        success: false,
                        message: "No data found with given id"
                })
        }
        // data found for given id 
        return res.status(200).json({
                success: true,
                data: todo,
                message: 'Data found successfully'

        })

        } catch (error) {
                console.log(error)
                res.status(500).json({
                        success:false,
                        message: "internal server error",
                        

                })
        }
}