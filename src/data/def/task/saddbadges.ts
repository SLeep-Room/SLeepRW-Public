
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAddBadges {
	badges : number[];
}

class SAddBadges {
    static DefaultData: SAddBadges = {
	badges : [],
    }

    static Unmarshal(buffer: Buffer): SAddBadges { 
	const reader = new BufferReader(buffer)
try{
	const badgesLength = reader.readCompactUInt32();

	for (let i = 0; i < badgesLength; i++) {
	    SAddBadges.DefaultData.badges.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddBadges.DefaultData);
    }

    static Marshal(data: SAddBadges): Buffer { 
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


export default SAddBadges;