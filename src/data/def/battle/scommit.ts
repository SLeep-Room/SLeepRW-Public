
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCommit {
	kind : number;
	kindValue : number;
}

class SCommit {
    static DefaultData: SCommit = {
	kind : 0,
	kindValue : 0,
    }

    static Unmarshal(buffer: Buffer): SCommit { 
	const reader = new BufferReader(buffer)
try{
	SCommit.DefaultData.kind = reader.readInt32()
	SCommit.DefaultData.kindValue = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCommit.DefaultData);
    }

    static Marshal(data: SCommit): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.kind)
	buffer.writeInt32(data.kindValue)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCommit;