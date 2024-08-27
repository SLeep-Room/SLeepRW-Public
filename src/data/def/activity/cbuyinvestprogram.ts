
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyInvestProgram {
	channelId : number;
}

class CBuyInvestProgram {
    static DefaultData: CBuyInvestProgram = {
	channelId : 0,
    }

    static Unmarshal(buffer: Buffer): CBuyInvestProgram { 
	const reader = new BufferReader(buffer)
try{
	CBuyInvestProgram.DefaultData.channelId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyInvestProgram.DefaultData);
    }

    static Marshal(data: CBuyInvestProgram): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.channelId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyInvestProgram;