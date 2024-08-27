
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CViewEquip {
	key : number;
}

class CViewEquip {
    static DefaultData: CViewEquip = {
	key : 0,
    }

    static Unmarshal(buffer: Buffer): CViewEquip { 
	const reader = new BufferReader(buffer)
try{
	CViewEquip.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CViewEquip.DefaultData);
    }

    static Marshal(data: CViewEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CViewEquip;