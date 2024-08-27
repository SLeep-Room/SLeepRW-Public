
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChooseBattleEvent {
	eventId : number;
}

class CChooseBattleEvent {
    static DefaultData: CChooseBattleEvent = {
	eventId : 0,
    }

    static Unmarshal(buffer: Buffer): CChooseBattleEvent { 
	const reader = new BufferReader(buffer)
try{
	CChooseBattleEvent.DefaultData.eventId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChooseBattleEvent.DefaultData);
    }

    static Marshal(data: CChooseBattleEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.eventId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChooseBattleEvent;