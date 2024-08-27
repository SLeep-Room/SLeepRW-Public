
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import npcs from '../../bean/battle/dungeonnpc';

interface SNpcDisappear {
	sceneId : number;
	npcs : typeof npcs.DefaultData[];
}

class SNpcDisappear {
    static DefaultData: SNpcDisappear = {
	sceneId : 0,
	npcs : [],
    }

    static Unmarshal(buffer: Buffer): SNpcDisappear { 
	const reader = new BufferReader(buffer)
try{
	SNpcDisappear.DefaultData.sceneId = reader.readInt32()
	const npcsLength = reader.readCompactUInt32();

	for (let i = 0; i < npcsLength; i++) {
	    SNpcDisappear.DefaultData.npcs.push(npcs.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SNpcDisappear.DefaultData);
    }

    static Marshal(data: SNpcDisappear): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)
	buffer.writeCompactInt32(Object.keys(data.npcs).length);
	data.npcs.forEach((value) => {
		buffer.writeBuffer(npcs.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SNpcDisappear;