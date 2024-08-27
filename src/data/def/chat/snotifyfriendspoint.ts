
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SNotifyFriendsPoint {
}

class SNotifyFriendsPoint {
    static DefaultData: SNotifyFriendsPoint = {
    }

    static Unmarshal(buffer: Buffer): SNotifyFriendsPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SNotifyFriendsPoint.DefaultData);
    }

    static Marshal(data: SNotifyFriendsPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SNotifyFriendsPoint;