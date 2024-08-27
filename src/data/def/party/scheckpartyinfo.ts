
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import partyInfo from '../../bean/party/partyinfo';
import allMember from '../../bean/party/memberinfo';

interface SCheckPartyInfo {
	partyInfo : typeof partyInfo.DefaultData;
	partyDeclaration : string;
	allMember : typeof allMember.DefaultData[];
}

class SCheckPartyInfo {
    static DefaultData: SCheckPartyInfo = {
	partyInfo : partyInfo.DefaultData,
	partyDeclaration : "",
	allMember : [],
    }

    static Unmarshal(buffer: Buffer): SCheckPartyInfo { 
	const reader = new BufferReader(buffer)
try{
	SCheckPartyInfo.DefaultData.partyInfo = partyInfo.Unmarshal(reader)
	SCheckPartyInfo.DefaultData.partyDeclaration = reader.readString()
	const allMemberLength = reader.readCompactUInt32();

	for (let i = 0; i < allMemberLength; i++) {
	    SCheckPartyInfo.DefaultData.allMember.push(allMember.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckPartyInfo.DefaultData);
    }

    static Marshal(data: SCheckPartyInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(partyInfo.Marshal(data.partyInfo))
	buffer.writeString(data.partyDeclaration)
	buffer.writeCompactInt32(Object.keys(data.allMember).length);
	data.allMember.forEach((value) => {
		buffer.writeBuffer(allMember.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckPartyInfo;