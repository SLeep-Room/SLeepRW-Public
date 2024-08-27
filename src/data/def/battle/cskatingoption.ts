
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSkatingOption {
	option : number;
	instanceId : number;
	switchId : number;
}

class CSkatingOption {
    static DefaultData: CSkatingOption = {
	option : 0,
	instanceId : 0,
	switchId : 0,
    }

    static Unmarshal(buffer: Buffer): CSkatingOption { 
	const reader = new BufferReader(buffer)
try{
	CSkatingOption.DefaultData.option = reader.readByte()
	CSkatingOption.DefaultData.instanceId = reader.readInt32()
	CSkatingOption.DefaultData.switchId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSkatingOption.DefaultData);
    }

    static Marshal(data: CSkatingOption): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeByte(data.option)
	buffer.writeInt32(data.instanceId)
	buffer.writeInt32(data.switchId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSkatingOption;