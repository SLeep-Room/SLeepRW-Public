
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CResetPositionTrap {
	trapGroupId : number;
	status : number;
}

class CResetPositionTrap {
    static DefaultData: CResetPositionTrap = {
	trapGroupId : 0,
	status : 0,
    }

    static Unmarshal(buffer: Buffer): CResetPositionTrap { 
	const reader = new BufferReader(buffer)
try{
	CResetPositionTrap.DefaultData.trapGroupId = reader.readInt32()
	CResetPositionTrap.DefaultData.status = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CResetPositionTrap.DefaultData);
    }

    static Marshal(data: CResetPositionTrap): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.trapGroupId)
	buffer.writeInt32(data.status)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CResetPositionTrap;