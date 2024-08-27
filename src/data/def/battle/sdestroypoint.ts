
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import specialPoint from '../../bean/battle/point';

interface SDestroyPoint {
	specialPoint : typeof specialPoint.DefaultData;
}

class SDestroyPoint {
    static DefaultData: SDestroyPoint = {
	specialPoint : specialPoint.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SDestroyPoint { 
	const reader = new BufferReader(buffer)
try{
	SDestroyPoint.DefaultData.specialPoint = specialPoint.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDestroyPoint.DefaultData);
    }

    static Marshal(data: SDestroyPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(specialPoint.Marshal(data.specialPoint))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDestroyPoint;