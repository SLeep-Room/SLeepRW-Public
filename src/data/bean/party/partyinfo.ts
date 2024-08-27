
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface PartyInfo {
	partyId : bigint;
	enterNum : number;
	totalNum : number;
	avatarId : number;
	partyName : string;
	partyLv : number;
	partyExp : number;
	autoAcceptApply : number;
}

class PartyInfo {
    static DefaultData: PartyInfo = {
	partyId : 0n,
	enterNum : 0,
	totalNum : 0,
	avatarId : 0,
	partyName : "",
	partyLv : 0,
	partyExp : 0,
	autoAcceptApply : 0,
    }

    static Unmarshal(buffer: BufferReader): PartyInfo { 
	const reader = buffer
try{
	PartyInfo.DefaultData.partyId = reader.readInt64()
	PartyInfo.DefaultData.enterNum = reader.readInt32()
	PartyInfo.DefaultData.totalNum = reader.readInt32()
	PartyInfo.DefaultData.avatarId = reader.readInt32()
	PartyInfo.DefaultData.partyName = reader.readString()
	PartyInfo.DefaultData.partyLv = reader.readInt32()
	PartyInfo.DefaultData.partyExp = reader.readInt32()
	PartyInfo.DefaultData.autoAcceptApply = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},PartyInfo.DefaultData);
    }

    static Marshal(data: PartyInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt32(data.enterNum)
	buffer.writeInt32(data.totalNum)
	buffer.writeInt32(data.avatarId)
	buffer.writeString(data.partyName)
	buffer.writeInt32(data.partyLv)
	buffer.writeInt32(data.partyExp)
	buffer.writeInt32(data.autoAcceptApply)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default PartyInfo;