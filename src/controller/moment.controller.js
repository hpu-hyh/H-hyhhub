const momentService = require("../service/moment.service")

class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body

    const { id } = ctx.user

    const result = await momentService.create(content, id)
    ctx.body = {
      code: 0,
      message: "发表动态成功",
      data: result,
    }
  }

  async list(ctx, next) {
    const { offset, size } = ctx.query
    const result = await momentService.queryList(offset, size)
    ctx.body = {
      code: 0,
      data: result,
    }
  }

  async detail(ctx, next) {
    const { momentId } = ctx.params
    const result = await momentService.queryById(momentId)
    ctx.body = {
      code: 0,
      data: result,
    }
  }
  async remove(ctx, next) {
    // 1.获取删除动态的id
    const { momentId } = ctx.params

    // 2.执行数据库操作
    const result = await momentService.remove(momentId)
    ctx.body = {
      code: 0,
      message: "删除动态成功~",
      data: result,
    }
  }

  async update(ctx, next) {
    // 1.获取要修改的动态的id
    const { momentId } = ctx.params
    // 2.修改的内容
    const { content } = ctx.request.body
    // 3.执行数据库操作
    const result = await momentService.update(content, momentId)
    ctx.body = {
      code: 0,
      message: "修改动态成功~",
      data: result,
    }
  }
}

module.exports = new MomentController()
