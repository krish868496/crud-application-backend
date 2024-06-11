const Todo = require("../models/TodoSchema");

exports.deleteTodo = async (req, res) => {
        try {
                const {id}  = req.params;
                await Todo.findByIdAndDelete(id);
                res.json({
                        success: true,
                        message: "deleted Successfully"
                })
                
        } catch (error) {
                console.log(error);
                res.status(500).json({
                        success:false,
                        error:err.message,
                        message: "internal server error"
                })
        }
        
}