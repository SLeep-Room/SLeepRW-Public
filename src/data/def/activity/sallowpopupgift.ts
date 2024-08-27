
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAllowPopUpGift {
	activityID : number;
}

class SAllowPopUpGift {
    static DefaultData: SAllowPopUpGift = {
	activityID : 0,
    }

    static Unmarshal(buffer: Buffer): SAllowPopUpGift { 
	const reader = new BufferReader(buffer)
try{
	SAllowPopUpGift.DefaultData.activityID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAllowPopUpGift.DefaultData);
    }

    static Marshal(data: SAllowPopUpGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAllowPopUpGift;