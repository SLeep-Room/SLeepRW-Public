
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import allMember from '../../bean/party/memberinfo';

interface SCheckPartyMemberInfo {
	allMember : typeof allMember.DefaultData[];
}

class SCheckPartyMemberInfo {
    static DefaultData: SCheckPartyMemberInfo = {
	allMember : [],
    }

    static Unmarshal(buffer: Buffer): SCheckPartyMemberInfo { 
	const reader = new BufferReader(buffer)
try{
	const allMemberLength = reader.readCompactUInt32();

	for (let i = 0; i < allMemberLength; i++) {
	    SCheckPartyMemberInfo.DefaultData.allMember.push(allMember.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckPartyMemberInfo.DefaultData);
    }

    static Marshal(data: SCheckPartyMemberInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.allMember).length);
	data.allMember.forEach((value) => {
		buffer.writeBuffer(allMember.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckPartyMemberInfo;