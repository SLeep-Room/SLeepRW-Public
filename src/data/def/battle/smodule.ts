
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SModule {
	id : number;
	statue : number;
}

class SModule {
    static DefaultData: SModule = {
	id : 0,
	statue : 0,
    }

    static Unmarshal(buffer: Buffer): SModule { 
	const reader = new BufferReader(buffer)
try{
	SModule.DefaultData.id = reader.readInt32()
	SModule.DefaultData.statue = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SModule.DefaultData);
    }

    static Marshal(data: SModule): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.statue)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SModule;