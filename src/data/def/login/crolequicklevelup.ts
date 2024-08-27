
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRoleQuickLevelUP {
	roleId : number;
	level : number;
}

class CRoleQuickLevelUP {
    static DefaultData: CRoleQuickLevelUP = {
	roleId : 0,
	level : 0,
    }

    static Unmarshal(buffer: Buffer): CRoleQuickLevelUP { 
	const reader = new BufferReader(buffer)
try{
	CRoleQuickLevelUP.DefaultData.roleId = reader.readInt32()
	CRoleQuickLevelUP.DefaultData.level = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRoleQuickLevelUP.DefaultData);
    }

    static Marshal(data: CRoleQuickLevelUP): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.level)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRoleQuickLevelUP;