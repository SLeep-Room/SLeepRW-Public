
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCommit {
	kind : number;
	value : number;
}

class CCommit {
    static DefaultData: CCommit = {
	kind : 0,
	value : 0,
    }

    static Unmarshal(buffer: Buffer): CCommit { 
	const reader = new BufferReader(buffer)
try{
	CCommit.DefaultData.kind = reader.readInt32()
	CCommit.DefaultData.value = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCommit.DefaultData);
    }

    static Marshal(data: CCommit): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.kind)
	buffer.writeInt32(data.value)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCommit;