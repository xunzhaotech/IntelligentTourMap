'use strict';

const Controller = require('./base');
/**
 * @controller user 用户接口
 */
class UserController extends Controller {
    /**
     * @summary 获取用户
     * @description 分页获取用户信息
     * @router get /user/query
     * @request query integer pageIndex 页码 默认 1
     * @request query integer pageSize 单页数量 默认 10
     * @response 200 userResponse 请求成功
     */
    async query() {
        const { ctx, service } = this;
        let pageIndex = Number(ctx.query.pageIndex || 1);
        let pageSize = Number(ctx.query.pageSize || 10);
        this.success(await service.user.list(pageIndex, pageSize))
    }
    /**
     * @summary 更新/创建
     * @description 更新传 _id 创建不传 _id
     * @router post /user/update
     * @request body user *body
     * @response 200 response 更新成功
     */
    async update() {
        this.success(await this.ctx.service.user.update(this.ctx.request.body))
    }
    /**
     * @summary 删除
     * @description 删除
     * @router delete /user/destroy/{id}
     * @request path string *id
     * @response 200 response 删除成功
     */
    async destroy() {
        this.success(await this.ctx.service.user.destroy(this.ctx.params.id))
    }
}

module.exports = UserController;
