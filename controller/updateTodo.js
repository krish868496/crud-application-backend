const Todo = require("../models/TodoSchema")

exports.updateTodo = async (req, res) => {
        try {
                const { id } = req.params;
                const { title, description } = req.body;

                const todo = await Todo.findByIdAndUpdate(
                        { _id: id },
                        { title, description, updatedAt: Date.now() },
                        {new: true} // for newest entry
                        
                )
                res.status(200).json({
                        success: true,
                        data: todo,
                        message: "data updated successfully"
                })
        } catch (error) {
                console.log(error);
                res.status(500).json({
                        message:"internal server error", 
                        data: null,
                        success: false
                })
        }

}