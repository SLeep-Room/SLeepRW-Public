
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SpringBoss {
	bossId : number;
	bloodVolume : number;
	state : number;
}

class SpringBoss {
    static DefaultData: SpringBoss = {
	bossId : 0,
	bloodVolume : 0,
	state : 0,
    }

    static Unmarshal(buffer: BufferReader): SpringBoss { 
	const reader = buffer
try{
	SpringBoss.DefaultData.bossId = reader.readInt32()
	SpringBoss.DefaultData.bloodVolume = reader.readInt32()
	SpringBoss.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SpringBoss.DefaultData);
    }

    static Marshal(data: SpringBoss): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bossId)
	buffer.writeInt32(data.bloodVolume)
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SpringBoss;