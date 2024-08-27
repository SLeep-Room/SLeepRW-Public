
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CMagicLauncher {
	instanceId : number;
	launcherId : number;
	targetId : number;
	power : number;
	direction : number;
}

class CMagicLauncher {
    static DefaultData: CMagicLauncher = {
	instanceId : 0,
	launcherId : 0,
	targetId : 0,
	power : 0,
	direction : 0,
    }

    static Unmarshal(buffer: Buffer): CMagicLauncher { 
	const reader = new BufferReader(buffer)
try{
	CMagicLauncher.DefaultData.instanceId = reader.readInt32()
	CMagicLauncher.DefaultData.launcherId = reader.readInt32()
	CMagicLauncher.DefaultData.targetId = reader.readInt32()
	CMagicLauncher.DefaultData.power = reader.readFloat32()
	CMagicLauncher.DefaultData.direction = reader.readFloat32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CMagicLauncher.DefaultData);
    }

    static Marshal(data: CMagicLauncher): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.instanceId)
	buffer.writeInt32(data.launcherId)
	buffer.writeInt32(data.targetId)
	buffer.writeFloat32(data.power)
	buffer.writeFloat32(data.direction)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CMagicLauncher;