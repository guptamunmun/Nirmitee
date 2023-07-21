const express=require("express")
const router = express.Router();

const userController= require("../controllers/userController")
const middleware =require("../middleware/authMiddleware")
const taskController=require("../controllers/taskControllers")

router.post('/register', userController.createuser)
router.post('/login', userController.userLogin)
///api/login
router.post("/tasks",middleware.authMiddleware,taskController.createTask)

router.put("/tasks/:taskId/assign",taskController.assignTask)

router.put("/tasks/:taskId/status",taskController.updateStatus)

router.post("/tasks/:taskId/comments",middleware.authMiddleware,taskController.addComments)