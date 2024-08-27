
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SideQuestDungeonInfo {
	DungeonID : number;
	questInfo : [number,number][];
	hasPassed : number;
}

class SideQuestDungeonInfo {
    static DefaultData: SideQuestDungeonInfo = {
	DungeonID : 0,
	questInfo : [],
	hasPassed : 0,
    }

    static Unmarshal(buffer: BufferReader): SideQuestDungeonInfo { 
	const reader = buffer
try{
	SideQuestDungeonInfo.DefaultData.DungeonID = reader.readInt32()
	const questInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < questInfoLength; i++) {
	    SideQuestDungeonInfo.DefaultData.questInfo.push([reader.readInt32(),reader.readInt32()]);
	}
	SideQuestDungeonInfo.DefaultData.hasPassed = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SideQuestDungeonInfo.DefaultData);
    }

    static Marshal(data: SideQuestDungeonInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.DungeonID)
	buffer.writeCompactInt32(Object.keys(data.questInfo).length);
	data.questInfo.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.hasPassed)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SideQuestDungeonInfo;