
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBreakLineup {
	lineupId : number;
}

class CBreakLineup {
    static DefaultData: CBreakLineup = {
	lineupId : 0,
    }

    static Unmarshal(buffer: Buffer): CBreakLineup { 
	const reader = new BufferReader(buffer)
try{
	CBreakLineup.DefaultData.lineupId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBreakLineup.DefaultData);
    }

    static Marshal(data: CBreakLineup): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBreakLineup;