
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetSpringRedPacket {
	redPacketType : number;
}

class SGetSpringRedPacket {
    static DefaultData: SGetSpringRedPacket = {
	redPacketType : 0,
    }

    static Unmarshal(buffer: Buffer): SGetSpringRedPacket { 
	const reader = new BufferReader(buffer)
try{
	SGetSpringRedPacket.DefaultData.redPacketType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetSpringRedPacket.DefaultData);
    }

    static Marshal(data: SGetSpringRedPacket): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.redPacketType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetSpringRedPacket;