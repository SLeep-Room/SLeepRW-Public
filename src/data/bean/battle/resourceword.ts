
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import zones from '../../bean/battle/resourcezone';

interface ResourceWord {
	status : number;
	zones : [number,typeof zones.DefaultData][];
}

class ResourceWord {
    static DefaultData: ResourceWord = {
	status : 0,
	zones : [],
    }

    static Unmarshal(buffer: BufferReader): ResourceWord { 
	const reader = buffer
try{
	ResourceWord.DefaultData.status = reader.readInt32()
	const zonesLength = reader.readCompactUInt32();

	for (let i = 0; i < zonesLength; i++) {
	    ResourceWord.DefaultData.zones.push([reader.readInt32(),zones.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ResourceWord.DefaultData);
    }

    static Marshal(data: ResourceWord): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.status)
	buffer.writeCompactInt32(Object.keys(data.zones).length);
	data.zones.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(zones.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ResourceWord;