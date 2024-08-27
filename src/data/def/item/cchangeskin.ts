
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeSkin {
	roleId : number;
	skin2Change : number;
}

class CChangeSkin {
    static DefaultData: CChangeSkin = {
	roleId : 0,
	skin2Change : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeSkin { 
	const reader = new BufferReader(buffer)
try{
	CChangeSkin.DefaultData.roleId = reader.readInt32()
	CChangeSkin.DefaultData.skin2Change = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeSkin.DefaultData);
    }

    static Marshal(data: CChangeSkin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.skin2Change)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeSkin;