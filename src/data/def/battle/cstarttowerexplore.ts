
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartTowerExplore {
	tower : number;
}

class CStartTowerExplore {
    static DefaultData: CStartTowerExplore = {
	tower : 0,
    }

    static Unmarshal(buffer: Buffer): CStartTowerExplore { 
	const reader = new BufferReader(buffer)
try{
	CStartTowerExplore.DefaultData.tower = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartTowerExplore.DefaultData);
    }

    static Marshal(data: CStartTowerExplore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.tower)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartTowerExplore;