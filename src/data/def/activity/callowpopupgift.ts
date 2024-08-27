
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAllowPopUpGift {
	activityID : number;
}

class CAllowPopUpGift {
    static DefaultData: CAllowPopUpGift = {
	activityID : 0,
    }

    static Unmarshal(buffer: Buffer): CAllowPopUpGift { 
	const reader = new BufferReader(buffer)
try{
	CAllowPopUpGift.DefaultData.activityID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAllowPopUpGift.DefaultData);
    }

    static Marshal(data: CAllowPopUpGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAllowPopUpGift;