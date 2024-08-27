
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import partyInfo from '../../bean/party/partyinfo';

interface SOpenParty {
	partyInfo : typeof partyInfo.DefaultData;
	partyDeclaration : string;
	position : number;
	hesitationPeriod : number;
	firstEnter : number;
	crossdayInterval : bigint;
}

class SOpenParty {
    static DefaultData: SOpenParty = {
	partyInfo : partyInfo.DefaultData,
	partyDeclaration : "",
	position : 0,
	hesitationPeriod : 0,
	firstEnter : 0,
	crossdayInterval : 0n,
    }

    static Unmarshal(buffer: Buffer): SOpenParty { 
	const reader = new BufferReader(buffer)
try{
	SOpenParty.DefaultData.partyInfo = partyInfo.Unmarshal(reader)
	SOpenParty.DefaultData.partyDeclaration = reader.readString()
	SOpenParty.DefaultData.position = reader.readInt32()
	SOpenParty.DefaultData.hesitationPeriod = reader.readInt32()
	SOpenParty.DefaultData.firstEnter = reader.readInt32()
	SOpenParty.DefaultData.crossdayInterval = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenParty.DefaultData);
    }

    static Marshal(data: SOpenParty): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(partyInfo.Marshal(data.partyInfo))
	buffer.writeString(data.partyDeclaration)
	buffer.writeInt32(data.position)
	buffer.writeInt32(data.hesitationPeriod)
	buffer.writeInt32(data.firstEnter)
	buffer.writeInt64(BigInt(data.crossdayInterval))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenParty;