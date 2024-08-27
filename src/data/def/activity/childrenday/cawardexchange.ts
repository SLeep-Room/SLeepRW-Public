
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface CAwardExchange {
	node : number;
}

class CAwardExchange {
    static DefaultData: CAwardExchange = {
	node : 0,
    }

    static Unmarshal(buffer: Buffer): CAwardExchange { 
	const reader = new BufferReader(buffer)
try{
	CAwardExchange.DefaultData.node = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAwardExchange.DefaultData);
    }

    static Marshal(data: CAwardExchange): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.node)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAwardExchange;