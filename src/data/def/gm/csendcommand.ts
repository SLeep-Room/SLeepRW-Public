
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSendCommand {
	cmd : string;
}

class CSendCommand {
    static DefaultData: CSendCommand = {
	cmd : "",
    }

    static Unmarshal(buffer: Buffer): CSendCommand { 
	const reader = new BufferReader(buffer)
try{
	CSendCommand.DefaultData.cmd = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSendCommand.DefaultData);
    }

    static Marshal(data: CSendCommand): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.cmd)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSendCommand;