
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CActiveActivities {
}

class CActiveActivities {
    static DefaultData: CActiveActivities = {
    }

    static Unmarshal(buffer: Buffer): CActiveActivities { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CActiveActivities.DefaultData);
    }

    static Marshal(data: CActiveActivities): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CActiveActivities;