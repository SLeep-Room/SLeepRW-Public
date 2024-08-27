
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDismissParty {
	result : number;
}

class SDismissParty {
    static DefaultData: SDismissParty = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SDismissParty { 
	const reader = new BufferReader(buffer)
try{
	SDismissParty.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDismissParty.DefaultData);
    }

    static Marshal(data: SDismissParty): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDismissParty;