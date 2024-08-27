import express from 'express';
import clientPool from '../index';
import AccountData from '../data/common/User/AccountData';
import { MuipKey } from '../../config.json';
import CMessageTip from '../data/excel/message/cmessagetip.json';
import CTopMessage from '../data/excel/message/ctopmessage.json';
import {Retcode} from './retcode';
import SSendMsgNotify from '../data/def/notify/ssendmsgnotify';
import SSendTopMessage from '../data/def/notify/ssendtopmessage';
import { CmdID } from '../data/CmdID';

const server_router = express.Router();

server_router.use((_req, _res, next) => {
    express.json();
    next();
});

server_router.all('/sendtopmessage', (req, res) => {
    const data = {
        result: Retcode.PARAMS_ERROR,
        message: null,
    };
    
    try{
        const { message , passwd } = req.query;
        if (passwd !== MuipKey) {
            data.result = Retcode.AUTH_ERROR;
        }else{
            clientPool.getList().forEach(data=>{
                console.log(data.clientSocket)
                data.clientSocket.send(CmdID.notify.ssendtopmessage,SSendTopMessage.Marshal({
                    messageId: 200033,//100106 100140 100322
                    parameters: [message.toString()]
                }))  
            });
            data.result = Retcode.SUCCESS;
        }
    }catch(error){
        data.message=error;
    }
    res.json(data);
});

server_router.all('/sendmessage', (req, res) => {
    const data = {
        result: Retcode.PARAMS_ERROR,
        message: null,
    };
    
    try{
        const { message , passwd } = req.query
        if (passwd !== MuipKey) {
            data.result = Retcode.AUTH_ERROR;
        }else{
            clientPool.getList().forEach(data=>{
                console.log(data.clientSocket)
                data.clientSocket.send(CmdID.notify.ssendmsgnotify,SSendMsgNotify.Marshal({
                    msgId: 100106,//100106 100140 100322
                    parameters: [message.toString()]
                }))
            });
            data.result = Retcode.SUCCESS;
        }
    }catch(error){
        data.message=error;
    }
    res.json(data);
});
  

export { server_router }