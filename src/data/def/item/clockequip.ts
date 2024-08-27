
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLockEquip {
	key : number;
}

class CLockEquip {
    static DefaultData: CLockEquip = {
	key : 0,
    }

    static Unmarshal(buffer: Buffer): CLockEquip { 
	const reader = new BufferReader(buffer)
try{
	CLockEquip.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLockEquip.DefaultData);
    }

    static Marshal(data: CLockEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLockEquip;