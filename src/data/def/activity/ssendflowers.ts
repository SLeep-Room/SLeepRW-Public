
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendFlowers {
	rewardType : number;
	flowerScore : bigint;
}

class SSendFlowers {
    static DefaultData: SSendFlowers = {
	rewardType : 0,
	flowerScore : 0n,
    }

    static Unmarshal(buffer: Buffer): SSendFlowers { 
	const reader = new BufferReader(buffer)
try{
	SSendFlowers.DefaultData.rewardType = reader.readInt32()
	SSendFlowers.DefaultData.flowerScore = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendFlowers.DefaultData);
    }

    static Marshal(data: SSendFlowers): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardType)
	buffer.writeInt64(BigInt(data.flowerScore))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendFlowers;