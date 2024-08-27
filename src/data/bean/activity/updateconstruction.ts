
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface updateConstruction {
	construction : number;
	canlvup : number;
	unlockEvent : number;
}

class updateConstruction {
    static DefaultData: updateConstruction = {
	construction : 0,
	canlvup : 0,
	unlockEvent : 0,
    }

    static Unmarshal(buffer: BufferReader): updateConstruction { 
	const reader = buffer
try{
	updateConstruction.DefaultData.construction = reader.readInt32()
	updateConstruction.DefaultData.canlvup = reader.readInt32()
	updateConstruction.DefaultData.unlockEvent = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},updateConstruction.DefaultData);
    }

    static Marshal(data: updateConstruction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.construction)
	buffer.writeInt32(data.canlvup)
	buffer.writeInt32(data.unlockEvent)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default updateConstruction;