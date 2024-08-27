
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetActiveAward {
	value : number;
}

class CGetActiveAward {
    static DefaultData: CGetActiveAward = {
	value : 0,
    }

    static Unmarshal(buffer: Buffer): CGetActiveAward { 
	const reader = new BufferReader(buffer)
try{
	CGetActiveAward.DefaultData.value = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetActiveAward.DefaultData);
    }

    static Marshal(data: CGetActiveAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.value)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetActiveAward;