
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyEquipChest {
	chestID : number;
}

class CBuyEquipChest {
    static DefaultData: CBuyEquipChest = {
	chestID : 0,
    }

    static Unmarshal(buffer: Buffer): CBuyEquipChest { 
	const reader = new BufferReader(buffer)
try{
	CBuyEquipChest.DefaultData.chestID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyEquipChest.DefaultData);
    }

    static Marshal(data: CBuyEquipChest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.chestID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyEquipChest;