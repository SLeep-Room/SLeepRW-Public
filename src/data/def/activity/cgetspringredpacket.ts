
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetSpringRedPacket {
	redPacketType : number;
}

class CGetSpringRedPacket {
    static DefaultData: CGetSpringRedPacket = {
	redPacketType : 0,
    }

    static Unmarshal(buffer: Buffer): CGetSpringRedPacket { 
	const reader = new BufferReader(buffer)
try{
	CGetSpringRedPacket.DefaultData.redPacketType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetSpringRedPacket.DefaultData);
    }

    static Marshal(data: CGetSpringRedPacket): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.redPacketType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetSpringRedPacket;