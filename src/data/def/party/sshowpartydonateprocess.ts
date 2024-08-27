
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShowPartyDonateProcess {
	partyId : bigint;
	process : number;
	receiveAwards : number[];
	partyCoin : number;
}

class SShowPartyDonateProcess {
    static DefaultData: SShowPartyDonateProcess = {
	partyId : 0n,
	process : 0,
	receiveAwards : [],
	partyCoin : 0,
    }

    static Unmarshal(buffer: Buffer): SShowPartyDonateProcess { 
	const reader = new BufferReader(buffer)
try{
	SShowPartyDonateProcess.DefaultData.partyId = reader.readInt64()
	SShowPartyDonateProcess.DefaultData.process = reader.readInt32()
	const receiveAwardsLength = reader.readCompactUInt32();

	for (let i = 0; i < receiveAwardsLength; i++) {
	    SShowPartyDonateProcess.DefaultData.receiveAwards.push(reader.readInt32());
	}
	SShowPartyDonateProcess.DefaultData.partyCoin = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShowPartyDonateProcess.DefaultData);
    }

    static Marshal(data: SShowPartyDonateProcess): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt32(data.process)
	buffer.writeCompactInt32(Object.keys(data.receiveAwards).length);
	data.receiveAwards.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.partyCoin)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShowPartyDonateProcess;