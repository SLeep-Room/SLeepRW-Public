
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import floor from '../../bean/yard/witchfloor';

interface SRefreshFloor {
	floor : typeof floor.DefaultData;
}

class SRefreshFloor {
    static DefaultData: SRefreshFloor = {
	floor : floor.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshFloor { 
	const reader = new BufferReader(buffer)
try{
	SRefreshFloor.DefaultData.floor = floor.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshFloor.DefaultData);
    }

    static Marshal(data: SRefreshFloor): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(floor.Marshal(data.floor))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshFloor;