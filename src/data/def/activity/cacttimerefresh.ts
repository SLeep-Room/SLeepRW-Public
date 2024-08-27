
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CActTimeRefresh {
	activityId : number;
}

class CActTimeRefresh {
    static DefaultData: CActTimeRefresh = {
	activityId : 0,
    }

    static Unmarshal(buffer: Buffer): CActTimeRefresh { 
	const reader = new BufferReader(buffer)
try{
	CActTimeRefresh.DefaultData.activityId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CActTimeRefresh.DefaultData);
    }

    static Marshal(data: CActTimeRefresh): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CActTimeRefresh;