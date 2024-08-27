import express from 'express'
import clientPool from '../index';
import {stringify} from 'json-bigint';
import AccountData from '../data/common/User/AccountData';
import GmRouter from '../data/common/Gm/GmRouter';
import {MuipKey} from '../../config.json'
import {Retcode} from './retcode';

const router = express.Router();

router.use((_req, _res, next) => {
    express.json();
    next();
});

router.get('/onlinedata', (req, res) => {
    const data = {
        result: Retcode.PARAMS_ERROR,
        message: null,
    };
    const { passwd } = req.query

    if (passwd !== MuipKey) {
        data.result = Retcode.AUTH_ERROR;
    }else{
        data.result = Retcode.SUCCESS;
        data.message = stringify(clientPool.getList());
    }
    
    res.json(data);
});
  
router.get('/data', (req, res) => {
    const data = {
        result: Retcode.PARAMS_ERROR,
        message: null
    };
    const { passwd } = req.query

    if (passwd !== MuipKey) {
        data.result = Retcode.AUTH_ERROR;
    }else{
        data.result = Retcode.SUCCESS;
        data.message = stringify(clientPool.AccountData);
    }
    
    res.json(data);
});
  
router.get('/online', (_req, res) => {
    const data = {
        result:Retcode.SUCCESS,
        message:null
    };
    
    data.message=clientPool.getList().length;
    res.json(data);
});

router.get('/find/:uid', (req, res) => {
    const data = {
        result: Retcode.PARAMS_ERROR,
        message: null
    };

    const { passwd } = req.query
    const uid: bigint = BigInt(req.params.uid);

    if (passwd !== MuipKey) {
        data.result = Retcode.AUTH_ERROR;
    } else if (uid > 10000) {
        const response = Object.values(clientPool.AccountData).find(
            (data: AccountData) => BigInt(data.userid) === uid
        ) as AccountData | undefined;

        if (response) {
            data.result = Retcode.SUCCESS;
            data.message = stringify(response);
        } else {
            data.result = Retcode.NOT_FOUND;
        }
    } else {
        data.result = Retcode.PARAMS_ERROR;
    }
    res.json(data);
});

router.all('/command', async (req, res) => {
    const data = {
        result: Retcode.PARAMS_ERROR,
        message: null
    };

    try{
        const { cmd , uid } = req.query;
        if(cmd !=undefined || uid !=undefined){
            const userid:bigint = BigInt(uid.toString())
            const client_socket=clientPool.getList().find(data=>BigInt(data.userData.userid)===userid);
            if(client_socket){
                const {result,msg} = await GmRouter(client_socket.clientSocket,cmd.toString())
                data.result = result;
                data.message = msg
            }else{
                data.result = Retcode.NOT_ONLINE;
            }
        }
        
    }catch(error){
        data.message=error;
    }

    res.json(data);
});

export { router }