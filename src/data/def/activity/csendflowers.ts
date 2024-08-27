
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSendFlowers {
	rewardType : number;
	num : number;
}

class CSendFlowers {
    static DefaultData: CSendFlowers = {
	rewardType : 0,
	num : 0,
    }

    static Unmarshal(buffer: Buffer): CSendFlowers { 
	const reader = new BufferReader(buffer)
try{
	CSendFlowers.DefaultData.rewardType = reader.readInt32()
	CSendFlowers.DefaultData.num = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSendFlowers.DefaultData);
    }

    static Marshal(data: CSendFlowers): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardType)
	buffer.writeInt32(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSendFlowers;