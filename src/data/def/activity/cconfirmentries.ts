
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CConfirmEntries {
	battleType : number;
	battleId : number;
	entries : number[];
}

class CConfirmEntries {
    static DefaultData: CConfirmEntries = {
	battleType : 0,
	battleId : 0,
	entries : [],
    }

    static Unmarshal(buffer: Buffer): CConfirmEntries { 
	const reader = new BufferReader(buffer)
try{
	CConfirmEntries.DefaultData.battleType = reader.readInt32()
	CConfirmEntries.DefaultData.battleId = reader.readInt32()
	const entriesLength = reader.readCompactUInt32();

	for (let i = 0; i < entriesLength; i++) {
	    CConfirmEntries.DefaultData.entries.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CConfirmEntries.DefaultData);
    }

    static Marshal(data: CConfirmEntries): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.battleId)
	buffer.writeCompactInt32(Object.keys(data.entries).length);
	data.entries.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CConfirmEntries;