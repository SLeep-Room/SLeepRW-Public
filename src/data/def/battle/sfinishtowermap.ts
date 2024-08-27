
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SFinishTowerMap {
	result : number;
}

class SFinishTowerMap {
    static DefaultData: SFinishTowerMap = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SFinishTowerMap { 
	const reader = new BufferReader(buffer)
try{
	SFinishTowerMap.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SFinishTowerMap.DefaultData);
    }

    static Marshal(data: SFinishTowerMap): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SFinishTowerMap;