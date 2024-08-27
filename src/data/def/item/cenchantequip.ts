
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CEnchantEquip {
	equipKey : number;
	stuff : number;
}

class CEnchantEquip {
    static DefaultData: CEnchantEquip = {
	equipKey : 0,
	stuff : 0,
    }

    static Unmarshal(buffer: Buffer): CEnchantEquip { 
	const reader = new BufferReader(buffer)
try{
	CEnchantEquip.DefaultData.equipKey = reader.readInt32()
	CEnchantEquip.DefaultData.stuff = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CEnchantEquip.DefaultData);
    }

    static Marshal(data: CEnchantEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeInt32(data.stuff)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CEnchantEquip;