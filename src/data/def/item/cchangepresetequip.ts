
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangePreSetEquip {
	roleId : number;
	equipType : number;
	equipKey : number;
}

class CChangePreSetEquip {
    static DefaultData: CChangePreSetEquip = {
	roleId : 0,
	equipType : 0,
	equipKey : 0,
    }

    static Unmarshal(buffer: Buffer): CChangePreSetEquip { 
	const reader = new BufferReader(buffer)
try{
	CChangePreSetEquip.DefaultData.roleId = reader.readInt32()
	CChangePreSetEquip.DefaultData.equipType = reader.readInt32()
	CChangePreSetEquip.DefaultData.equipKey = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangePreSetEquip.DefaultData);
    }

    static Marshal(data: CChangePreSetEquip): Buffer { 
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


export default CChangePreSetEquip;