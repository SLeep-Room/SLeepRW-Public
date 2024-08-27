
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshMailRedPoint {
	redPoint : number;
}

class SRefreshMailRedPoint {
    static DefaultData: SRefreshMailRedPoint = {
	redPoint : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshMailRedPoint { 
	const reader = new BufferReader(buffer)
try{
	SRefreshMailRedPoint.DefaultData.redPoint = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshMailRedPoint.DefaultData);
    }

    static Marshal(data: SRefreshMailRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.redPoint)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshMailRedPoint;