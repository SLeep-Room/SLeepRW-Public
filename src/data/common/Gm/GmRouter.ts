import GoCommand from '../../../commands/go';
import AddRoleAllCommand from '../../../commands/addroleall';
import AddItemCommand from '../../../commands/additem';
import {Retcode} from '../../../http/retcode';

export default async function(socket:any,cmd:string) {
    const COMMANDS = {
      ADD_ROLE_ALL: '//addroleall',
      GO: '//go', 
      ADD_ITEM: '//additem'
    };

    const message = {
      result:Retcode.SUCCESS,
      msg:"Success"
    }

    try {
      switch (true) {
        case cmd.startsWith(COMMANDS.GO):
          await GoCommand(socket, cmd.substring(COMMANDS.GO.length).trimStart());
          break;
        case cmd.startsWith(COMMANDS.ADD_ROLE_ALL):
          await AddRoleAllCommand(socket, cmd.substring(COMMANDS.ADD_ROLE_ALL.length).trimStart());
          break;
        case cmd.startsWith(COMMANDS.ADD_ITEM):
          await AddItemCommand(socket, cmd.substring(COMMANDS.ADD_ITEM.length).trimStart());
          break;
        default:
          message.result=Retcode.UNKNOWN_COMMAND;
          message.msg=`Unknown Command ${cmd}`;
      }
    } catch (error) {
      message.result = Retcode.UNKNOWN_ERROR;
      message.msg=`Unknown Error ${error}`;
    }

    console.log(message)
    return message;
}