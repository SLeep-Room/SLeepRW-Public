
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshPopTips {
	activityID : number;
	status : number;
}

class SRefreshPopTips {
    static DefaultData: SRefreshPopTips = {
	activityID : 0,
	status : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshPopTips { 
	const reader = new BufferReader(buffer)
try{
	SRefreshPopTips.DefaultData.activityID = reader.readInt32()
	SRefreshPopTips.DefaultData.status = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshPopTips.DefaultData);
    }

    static Marshal(data: SRefreshPopTips): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeInt32(data.status)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshPopTips;