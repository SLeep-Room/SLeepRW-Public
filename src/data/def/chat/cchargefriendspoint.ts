
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChargeFriendsPoint {
}

class CChargeFriendsPoint {
    static DefaultData: CChargeFriendsPoint = {
    }

    static Unmarshal(buffer: Buffer): CChargeFriendsPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChargeFriendsPoint.DefaultData);
    }

    static Marshal(data: CChargeFriendsPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChargeFriendsPoint;