
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import applyMembers from '../../bean/party/memberinfo';

interface SCheckMemberApply {
	applyMembers : typeof applyMembers.DefaultData[];
}

class SCheckMemberApply {
    static DefaultData: SCheckMemberApply = {
	applyMembers : [],
    }

    static Unmarshal(buffer: Buffer): SCheckMemberApply { 
	const reader = new BufferReader(buffer)
try{
	const applyMembersLength = reader.readCompactUInt32();

	for (let i = 0; i < applyMembersLength; i++) {
	    SCheckMemberApply.DefaultData.applyMembers.push(applyMembers.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckMemberApply.DefaultData);
    }

    static Marshal(data: SCheckMemberApply): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.applyMembers).length);
	data.applyMembers.forEach((value) => {
		buffer.writeBuffer(applyMembers.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckMemberApply;