
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddBadges {
	badges : number[];
}

class CAddBadges {
    static DefaultData: CAddBadges = {
	badges : [],
    }

    static Unmarshal(buffer: Buffer): CAddBadges { 
	const reader = new BufferReader(buffer)
try{
	const badgesLength = reader.readCompactUInt32();

	for (let i = 0; i < badgesLength; i++) {
	    CAddBadges.DefaultData.badges.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddBadges.DefaultData);
    }

    static Marshal(data: CAddBadges): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.badges).length);
	data.badges.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAddBadges;