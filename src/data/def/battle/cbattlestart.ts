
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBattleStart {
	battleType : number;
	id : number;
	battleSceneId : number;
	lineupID : number;
	lineup : [number,number][];
}

class CBattleStart {
    static DefaultData: CBattleStart = {
	battleType : 0,
	id : 0,
	battleSceneId : 0,
	lineupID : 0,
	lineup : [],
    }

    static Unmarshal(buffer: Buffer): CBattleStart { 
	const reader = new BufferReader(buffer)
try{
	CBattleStart.DefaultData.battleType = reader.readInt32()
	CBattleStart.DefaultData.id = reader.readInt32()
	CBattleStart.DefaultData.battleSceneId = reader.readInt32()
	CBattleStart.DefaultData.lineupID = reader.readInt32()
	const lineupLength = reader.readCompactUInt32();

	for (let i = 0; i < lineupLength; i++) {
	    CBattleStart.DefaultData.lineup.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBattleStart.DefaultData);
    }

    static Marshal(data: CBattleStart): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.battleSceneId)
	buffer.writeInt32(data.lineupID)
	buffer.writeCompactInt32(Object.keys(data.lineup).length);
	data.lineup.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBattleStart;