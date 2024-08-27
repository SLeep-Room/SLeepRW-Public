import CSendCommand from '../../../data/def/gm/csendcommand';
import GmRouter from '../../../data/common/Gm/GmRouter';

export default async function (socket: any, rawData: Buffer) {
  const client_message = CSendCommand.Unmarshal(rawData);
  const cmd = client_message.cmd;

  await GmRouter(socket,cmd)
}


