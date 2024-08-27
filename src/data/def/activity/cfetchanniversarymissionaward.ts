
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchAnniversaryMissionAward {
	awardId : number;
}

class CFetchAnniversaryMissionAward {
    static DefaultData: CFetchAnniversaryMissionAward = {
	awardId : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchAnniversaryMissionAward { 
	const reader = new BufferReader(buffer)
try{
	CFetchAnniversaryMissionAward.DefaultData.awardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchAnniversaryMissionAward.DefaultData);
    }

    static Marshal(data: CFetchAnniversaryMissionAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.awardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchAnniversaryMissionAward;