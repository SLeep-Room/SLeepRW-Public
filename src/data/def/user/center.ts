
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CEnter {
	deepLink : number;
}

class CEnter {
    static DefaultData: CEnter = {
	deepLink : 0,
    }

    static Unmarshal(buffer: Buffer): CEnter { 
	const reader = new BufferReader(buffer)
try{
	CEnter.DefaultData.deepLink = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CEnter.DefaultData);
    }

    static Marshal(data: CEnter): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.deepLink)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CEnter;