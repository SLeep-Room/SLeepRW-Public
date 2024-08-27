
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeLineupName {
	lineupId : number;
	name : string;
}

class SChangeLineupName {
    static DefaultData: SChangeLineupName = {
	lineupId : 0,
	name : "",
    }

    static Unmarshal(buffer: Buffer): SChangeLineupName { 
	const reader = new BufferReader(buffer)
try{
	SChangeLineupName.DefaultData.lineupId = reader.readInt32()
	SChangeLineupName.DefaultData.name = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeLineupName.DefaultData);
    }

    static Marshal(data: SChangeLineupName): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupId)
	buffer.writeString(data.name)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeLineupName;