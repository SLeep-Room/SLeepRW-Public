
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CModule {
	id : number;
}

class CModule {
    static DefaultData: CModule = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CModule { 
	const reader = new BufferReader(buffer)
try{
	CModule.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CModule.DefaultData);
    }

    static Marshal(data: CModule): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CModule;