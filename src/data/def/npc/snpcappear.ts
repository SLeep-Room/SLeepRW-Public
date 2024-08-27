
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import npcs from '../../bean/battle/dungeonnpc';

interface SNpcAppear {
	sceneId : number;
	npcs : typeof npcs.DefaultData[];
}

class SNpcAppear {
    static DefaultData: SNpcAppear = {
	sceneId : 0,
	npcs : [],
    }

    static Unmarshal(buffer: Buffer): SNpcAppear { 
	const reader = new BufferReader(buffer)
try{
	SNpcAppear.DefaultData.sceneId = reader.readInt32()
	const npcsLength = reader.readCompactUInt32();

	for (let i = 0; i < npcsLength; i++) {
	    SNpcAppear.DefaultData.npcs.push(npcs.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SNpcAppear.DefaultData);
    }

    static Marshal(data: SNpcAppear): Buffer { 
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


export default SNpcAppear;