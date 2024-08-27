
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecordWhiteValentineRoleId {
	roleId : number;
}

class CRecordWhiteValentineRoleId {
    static DefaultData: CRecordWhiteValentineRoleId = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CRecordWhiteValentineRoleId { 
	const reader = new BufferReader(buffer)
try{
	CRecordWhiteValentineRoleId.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecordWhiteValentineRoleId.DefaultData);
    }

    static Marshal(data: CRecordWhiteValentineRoleId): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecordWhiteValentineRoleId;