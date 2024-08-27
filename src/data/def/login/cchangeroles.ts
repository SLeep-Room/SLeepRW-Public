
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeRoles {
	lineupId : number;
	station : number;
	roleId : number;
}

class CChangeRoles {
    static DefaultData: CChangeRoles = {
	lineupId : 0,
	station : 0,
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeRoles { 
	const reader = new BufferReader(buffer)
try{
	CChangeRoles.DefaultData.lineupId = reader.readInt32()
	CChangeRoles.DefaultData.station = reader.readInt32()
	CChangeRoles.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeRoles.DefaultData);
    }

    static Marshal(data: CChangeRoles): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupId)
	buffer.writeInt32(data.station)
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeRoles;