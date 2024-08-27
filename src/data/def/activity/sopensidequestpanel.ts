
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import dungeons from '../../bean/activity/sidequestdungeoninfo';

interface SOpenSideQuestPanel {
	dungeons : [number,typeof dungeons.DefaultData][];
}

class SOpenSideQuestPanel {
    static DefaultData: SOpenSideQuestPanel = {
	dungeons : [],
    }

    static Unmarshal(buffer: Buffer): SOpenSideQuestPanel { 
	const reader = new BufferReader(buffer)
try{
	const dungeonsLength = reader.readCompactUInt32();

	for (let i = 0; i < dungeonsLength; i++) {
	    SOpenSideQuestPanel.DefaultData.dungeons.push([reader.readInt32(),dungeons.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenSideQuestPanel.DefaultData);
    }

    static Marshal(data: SOpenSideQuestPanel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.dungeons).length);
	data.dungeons.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(dungeons.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenSideQuestPanel;