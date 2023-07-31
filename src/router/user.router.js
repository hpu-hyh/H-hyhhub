const KoaRouter = require("@koa/router")
const userController = require("../controller/user.controller")
const { verifyUser, handlePassword } = require("../middleware/user.middleware")

// 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" })

// 定义路由映射
// 用户注册接口
userRouter.post("/", verifyUser, handlePassword, userController.create)

module.exports = userRouter

//
//
//

// // 1.创建路由对象
//

// // 2.定义路由中映射
// // 2.1.用户注册接口
//

// // 3.导出路由
//
