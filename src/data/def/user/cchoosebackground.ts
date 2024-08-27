
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChooseBackground {
	roleId : number;
	skin : number;
}

class CChooseBackground {
    static DefaultData: CChooseBackground = {
	roleId : 0,
	skin : 0,
    }

    static Unmarshal(buffer: Buffer): CChooseBackground { 
	const reader = new BufferReader(buffer)
try{
	CChooseBackground.DefaultData.roleId = reader.readInt32()
	CChooseBackground.DefaultData.skin = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChooseBackground.DefaultData);
    }

    static Marshal(data: CChooseBackground): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.skin)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChooseBackground;