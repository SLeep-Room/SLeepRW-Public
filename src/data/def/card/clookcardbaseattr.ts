
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLookCardBaseAttr {
	roleId : number;
	cfgId : number;
}

class CLookCardBaseAttr {
    static DefaultData: CLookCardBaseAttr = {
	roleId : 0,
	cfgId : 0,
    }

    static Unmarshal(buffer: Buffer): CLookCardBaseAttr { 
	const reader = new BufferReader(buffer)
try{
	CLookCardBaseAttr.DefaultData.roleId = reader.readInt32()
	CLookCardBaseAttr.DefaultData.cfgId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLookCardBaseAttr.DefaultData);
    }

    static Marshal(data: CLookCardBaseAttr): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.cfgId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLookCardBaseAttr;