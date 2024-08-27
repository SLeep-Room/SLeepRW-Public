
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChooseBattleEvent {
	eventId : number;
}

class SChooseBattleEvent {
    static DefaultData: SChooseBattleEvent = {
	eventId : 0,
    }

    static Unmarshal(buffer: Buffer): SChooseBattleEvent { 
	const reader = new BufferReader(buffer)
try{
	SChooseBattleEvent.DefaultData.eventId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChooseBattleEvent.DefaultData);
    }

    static Marshal(data: SChooseBattleEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.eventId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChooseBattleEvent;