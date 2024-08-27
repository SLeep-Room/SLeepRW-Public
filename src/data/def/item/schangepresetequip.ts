
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangePreSetEquip {
	roleId : number;
	equipType : number;
	equipKey : number;
}

class SChangePreSetEquip {
    static DefaultData: SChangePreSetEquip = {
	roleId : 0,
	equipType : 0,
	equipKey : 0,
    }

    static Unmarshal(buffer: Buffer): SChangePreSetEquip { 
	const reader = new BufferReader(buffer)
try{
	SChangePreSetEquip.DefaultData.roleId = reader.readInt32()
	SChangePreSetEquip.DefaultData.equipType = reader.readInt32()
	SChangePreSetEquip.DefaultData.equipKey = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangePreSetEquip.DefaultData);
    }

    static Marshal(data: SChangePreSetEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.equipType)
	buffer.writeInt32(data.equipKey)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangePreSetEquip;