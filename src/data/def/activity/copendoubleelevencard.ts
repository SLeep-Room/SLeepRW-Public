
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenDoubleElevenCard {
	poolId : number;
	position : number;
}

class COpenDoubleElevenCard {
    static DefaultData: COpenDoubleElevenCard = {
	poolId : 0,
	position : 0,
    }

    static Unmarshal(buffer: Buffer): COpenDoubleElevenCard { 
	const reader = new BufferReader(buffer)
try{
	COpenDoubleElevenCard.DefaultData.poolId = reader.readInt32()
	COpenDoubleElevenCard.DefaultData.position = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenDoubleElevenCard.DefaultData);
    }

    static Marshal(data: COpenDoubleElevenCard): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.poolId)
	buffer.writeInt32(data.position)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenDoubleElevenCard;