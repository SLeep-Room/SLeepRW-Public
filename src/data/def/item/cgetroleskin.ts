
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetRoleSkin {
	roleId : number;
}

class CGetRoleSkin {
    static DefaultData: CGetRoleSkin = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetRoleSkin { 
	const reader = new BufferReader(buffer)
try{
	CGetRoleSkin.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetRoleSkin.DefaultData);
    }

    static Marshal(data: CGetRoleSkin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetRoleSkin;