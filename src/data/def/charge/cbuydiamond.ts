
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyDiamond {
	goodId : number;
}

class CBuyDiamond {
    static DefaultData: CBuyDiamond = {
	goodId : 0,
    }

    static Unmarshal(buffer: Buffer): CBuyDiamond { 
	const reader = new BufferReader(buffer)
try{
	CBuyDiamond.DefaultData.goodId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyDiamond.DefaultData);
    }

    static Marshal(data: CBuyDiamond): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyDiamond;