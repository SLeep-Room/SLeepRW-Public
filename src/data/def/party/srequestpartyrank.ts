
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import allParty from '../../bean/party/partyinfo';

interface SRequestPartyRank {
	allParty : typeof allParty.DefaultData[];
}

class SRequestPartyRank {
    static DefaultData: SRequestPartyRank = {
	allParty : [],
    }

    static Unmarshal(buffer: Buffer): SRequestPartyRank { 
	const reader = new BufferReader(buffer)
try{
	const allPartyLength = reader.readCompactUInt32();

	for (let i = 0; i < allPartyLength; i++) {
	    SRequestPartyRank.DefaultData.allParty.push(allParty.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRequestPartyRank.DefaultData);
    }

    static Marshal(data: SRequestPartyRank): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.allParty).length);
	data.allParty.forEach((value) => {
		buffer.writeBuffer(allParty.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRequestPartyRank;