
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDrawCard {
	poolId : number;
	drawType : number;
	costType : number;
}

class CDrawCard {
    static DefaultData: CDrawCard = {
	poolId : 0,
	drawType : 0,
	costType : 0,
    }

    static Unmarshal(buffer: Buffer): CDrawCard { 
	const reader = new BufferReader(buffer)
try{
	CDrawCard.DefaultData.poolId = reader.readInt32()
	CDrawCard.DefaultData.drawType = reader.readInt32()
	CDrawCard.DefaultData.costType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDrawCard.DefaultData);
    }

    static Marshal(data: CDrawCard): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.poolId)
	buffer.writeInt32(data.drawType)
	buffer.writeInt32(data.costType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDrawCard;