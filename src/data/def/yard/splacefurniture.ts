
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import floor from '../../bean/yard/witchfloor';

interface SPlaceFurniture {
	floor : typeof floor.DefaultData;
}

class SPlaceFurniture {
    static DefaultData: SPlaceFurniture = {
	floor : floor.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SPlaceFurniture { 
	const reader = new BufferReader(buffer)
try{
	SPlaceFurniture.DefaultData.floor = floor.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SPlaceFurniture.DefaultData);
    }

    static Marshal(data: SPlaceFurniture): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(floor.Marshal(data.floor))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SPlaceFurniture;