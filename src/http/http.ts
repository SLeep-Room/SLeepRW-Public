import express, { Request, Response } from 'express';
import { router } from './router';
import { server_router } from './server_router';

const app = express();
app.use('/api',router);
app.use('/server',server_router);

app.all('/ip', (_req, res) => { //游戏所需API
    enum IPServerResponseResultType {
        RESULT_SUCCESS = 0, //返回结果：选服成功
        RESULT_FAIL_1 = 1,  //选服失败：不存在的服务器id
        RESULT_FAIL_3 = 3,  //选服失败：所有服务器的注册人数已满
        RESULT_FAIL_4 = 4,  //选服失败：所选服务器未注册link地址信息
        RESULT_FAIL_5 = 5,  //选服失败：所选服务器注册的link地址不可用
        RESULT_FAIL_7 = 7,  //选服失败：白名单拦截
        RESULT_FAIL_8 = 8,  //选服失败：停止新用户注册
    }
    const data = {
      ip: '72.18.215.247',
      port: 50000,
      result: IPServerResponseResultType.RESULT_SUCCESS,
    };
    res.json(data);
});

export default app;
