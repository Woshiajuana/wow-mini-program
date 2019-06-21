'use strict';

const { Controller } = require('egg');

module.exports = class CaptchaController extends Controller {
    async sendToEmail() {
        const { ctx, service, app } = this;
        try {
            let {
                email,
            } = await ctx.validateBody({
                email: [ 'nonempty', 'isEmail' ],
                email1: [ 'nonempty', 'isEmail' ],
                email2: [ 'nonempty', 'isEmail' ],
            });
            console.log(email);
            // await service.captcha.sendToEmail(email);
            ctx.body = '发送成功';
        } catch (err) {
            console.log('错误', err);
            ctx.body = err;
        }
    }
};
