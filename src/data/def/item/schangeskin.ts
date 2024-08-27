
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeSkin {
	roleId : number;
	skin2Change : number;
}

class SChangeSkin {
    static DefaultData: SChangeSkin = {
	roleId : 0,
	skin2Change : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeSkin { 
	const reader = new BufferReader(buffer)
try{
	SChangeSkin.DefaultData.roleId = reader.readInt32()
	SChangeSkin.DefaultData.skin2Change = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeSkin.DefaultData);
    }

    static Marshal(data: SChangeSkin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.skin2Change)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeSkin;