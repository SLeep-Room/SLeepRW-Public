
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCollectLightSpot {
	key : number;
}

class CCollectLightSpot {
    static DefaultData: CCollectLightSpot = {
	key : 0,
    }

    static Unmarshal(buffer: Buffer): CCollectLightSpot { 
	const reader = new BufferReader(buffer)
try{
	CCollectLightSpot.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCollectLightSpot.DefaultData);
    }

    static Marshal(data: CCollectLightSpot): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCollectLightSpot;