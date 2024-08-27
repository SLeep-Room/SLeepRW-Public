
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDialogueBuy {
	id : number;
}

class CDialogueBuy {
    static DefaultData: CDialogueBuy = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CDialogueBuy { 
	const reader = new BufferReader(buffer)
try{
	CDialogueBuy.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDialogueBuy.DefaultData);
    }

    static Marshal(data: CDialogueBuy): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDialogueBuy;