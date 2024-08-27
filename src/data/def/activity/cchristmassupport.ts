
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChristmasSupport {
	num : number;
}

class CChristmasSupport {
    static DefaultData: CChristmasSupport = {
	num : 0,
    }

    static Unmarshal(buffer: Buffer): CChristmasSupport { 
	const reader = new BufferReader(buffer)
try{
	CChristmasSupport.DefaultData.num = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChristmasSupport.DefaultData);
    }

    static Marshal(data: CChristmasSupport): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChristmasSupport;