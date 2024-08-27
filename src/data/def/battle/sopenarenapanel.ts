
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenArenaPanel {
	waiting : number;
	seasonId : number;
	arenaId : number;
	camp : number;
	firstEnter : number;
	apAddTimes : number;
	leftTime : number;
}

class SOpenArenaPanel {
    static DefaultData: SOpenArenaPanel = {
	waiting : 0,
	seasonId : 0,
	arenaId : 0,
	camp : 0,
	firstEnter : 0,
	apAddTimes : 0,
	leftTime : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenArenaPanel { 
	const reader = new BufferReader(buffer)
try{
	SOpenArenaPanel.DefaultData.waiting = reader.readInt32()
	SOpenArenaPanel.DefaultData.seasonId = reader.readInt32()
	SOpenArenaPanel.DefaultData.arenaId = reader.readInt32()
	SOpenArenaPanel.DefaultData.camp = reader.readInt32()
	SOpenArenaPanel.DefaultData.firstEnter = reader.readInt32()
	SOpenArenaPanel.DefaultData.apAddTimes = reader.readInt32()
	SOpenArenaPanel.DefaultData.leftTime = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenArenaPanel.DefaultData);
    }

    static Marshal(data: SOpenArenaPanel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.waiting)
	buffer.writeInt32(data.seasonId)
	buffer.writeInt32(data.arenaId)
	buffer.writeInt32(data.camp)
	buffer.writeInt32(data.firstEnter)
	buffer.writeInt32(data.apAddTimes)
	buffer.writeInt32(data.leftTime)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenArenaPanel;