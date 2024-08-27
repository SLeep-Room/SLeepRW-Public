
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUpgradeFoolsDayRole {
	Id : number;
	upgradeType : number;
}

class CUpgradeFoolsDayRole {
    static DefaultData: CUpgradeFoolsDayRole = {
	Id : 0,
	upgradeType : 0,
    }

    static Unmarshal(buffer: Buffer): CUpgradeFoolsDayRole { 
	const reader = new BufferReader(buffer)
try{
	CUpgradeFoolsDayRole.DefaultData.Id = reader.readInt32()
	CUpgradeFoolsDayRole.DefaultData.upgradeType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUpgradeFoolsDayRole.DefaultData);
    }

    static Marshal(data: CUpgradeFoolsDayRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.Id)
	buffer.writeInt32(data.upgradeType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUpgradeFoolsDayRole;