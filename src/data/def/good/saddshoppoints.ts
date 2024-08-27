
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAddShopPoints {
	addScore : number;
}

class SAddShopPoints {
    static DefaultData: SAddShopPoints = {
	addScore : 0,
    }

    static Unmarshal(buffer: Buffer): SAddShopPoints { 
	const reader = new BufferReader(buffer)
try{
	SAddShopPoints.DefaultData.addScore = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddShopPoints.DefaultData);
    }

    static Marshal(data: SAddShopPoints): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.addScore)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddShopPoints;