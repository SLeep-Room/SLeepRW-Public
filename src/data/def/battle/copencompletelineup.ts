
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenCompleteLineup {
	zoneId : number;
	playType : number;
}

class COpenCompleteLineup {
    static DefaultData: COpenCompleteLineup = {
	zoneId : 0,
	playType : 0,
    }

    static Unmarshal(buffer: Buffer): COpenCompleteLineup { 
	const reader = new BufferReader(buffer)
try{
	COpenCompleteLineup.DefaultData.zoneId = reader.readInt32()
	COpenCompleteLineup.DefaultData.playType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenCompleteLineup.DefaultData);
    }

    static Marshal(data: COpenCompleteLineup): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.zoneId)
	buffer.writeInt32(data.playType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenCompleteLineup;