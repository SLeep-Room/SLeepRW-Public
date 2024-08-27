
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartSweep {
	battleType : number;
	id : number;
	lineupId : number;
	sweepNum : number;
}

class CStartSweep {
    static DefaultData: CStartSweep = {
	battleType : 0,
	id : 0,
	lineupId : 0,
	sweepNum : 0,
    }

    static Unmarshal(buffer: Buffer): CStartSweep { 
	const reader = new BufferReader(buffer)
try{
	CStartSweep.DefaultData.battleType = reader.readInt32()
	CStartSweep.DefaultData.id = reader.readInt32()
	CStartSweep.DefaultData.lineupId = reader.readInt32()
	CStartSweep.DefaultData.sweepNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartSweep.DefaultData);
    }

    static Marshal(data: CStartSweep): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.lineupId)
	buffer.writeInt32(data.sweepNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartSweep;