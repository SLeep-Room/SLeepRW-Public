
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SActivityShopRedDot {
	activityId : number;
}

class SActivityShopRedDot {
    static DefaultData: SActivityShopRedDot = {
	activityId : 0,
    }

    static Unmarshal(buffer: Buffer): SActivityShopRedDot { 
	const reader = new BufferReader(buffer)
try{
	SActivityShopRedDot.DefaultData.activityId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SActivityShopRedDot.DefaultData);
    }

    static Marshal(data: SActivityShopRedDot): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SActivityShopRedDot;