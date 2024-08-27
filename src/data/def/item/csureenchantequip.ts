
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSureEnchantEquip {
	equipKey : number;
	kind : number;
}

class CSureEnchantEquip {
    static DefaultData: CSureEnchantEquip = {
	equipKey : 0,
	kind : 0,
    }

    static Unmarshal(buffer: Buffer): CSureEnchantEquip { 
	const reader = new BufferReader(buffer)
try{
	CSureEnchantEquip.DefaultData.equipKey = reader.readInt32()
	CSureEnchantEquip.DefaultData.kind = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSureEnchantEquip.DefaultData);
    }

    static Marshal(data: CSureEnchantEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeInt32(data.kind)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSureEnchantEquip;