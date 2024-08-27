
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChooseBackground {
	roleId : number;
	skin : number;
}

class SChooseBackground {
    static DefaultData: SChooseBackground = {
	roleId : 0,
	skin : 0,
    }

    static Unmarshal(buffer: Buffer): SChooseBackground { 
	const reader = new BufferReader(buffer)
try{
	SChooseBackground.DefaultData.roleId = reader.readInt32()
	SChooseBackground.DefaultData.skin = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChooseBackground.DefaultData);
    }

    static Marshal(data: SChooseBackground): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.skin)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChooseBackground;