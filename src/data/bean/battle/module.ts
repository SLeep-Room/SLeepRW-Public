
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Module {
	id : number;
	statue : number;
}

class Module {
    static DefaultData: Module = {
	id : 0,
	statue : 0,
    }

    static Unmarshal(buffer: BufferReader): Module { 
	const reader = buffer
try{
	Module.DefaultData.id = reader.readInt32()
	Module.DefaultData.statue = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Module.DefaultData);
    }

    static Marshal(data: Module): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.statue)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Module;