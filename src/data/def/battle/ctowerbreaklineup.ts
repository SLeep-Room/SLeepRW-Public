
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CTowerBreakLineup {
	lineupId : number;
}

class CTowerBreakLineup {
    static DefaultData: CTowerBreakLineup = {
	lineupId : 0,
    }

    static Unmarshal(buffer: Buffer): CTowerBreakLineup { 
	const reader = new BufferReader(buffer)
try{
	CTowerBreakLineup.DefaultData.lineupId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CTowerBreakLineup.DefaultData);
    }

    static Marshal(data: CTowerBreakLineup): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CTowerBreakLineup;