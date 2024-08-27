
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import uniqueIds from '../../bean/mail/operateresult';

interface SDeleteMails {
	uniqueIds : typeof uniqueIds.DefaultData[];
}

class SDeleteMails {
    static DefaultData: SDeleteMails = {
	uniqueIds : [],
    }

    static Unmarshal(buffer: Buffer): SDeleteMails { 
	const reader = new BufferReader(buffer)
try{
	const uniqueIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < uniqueIdsLength; i++) {
	    SDeleteMails.DefaultData.uniqueIds.push(uniqueIds.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDeleteMails.DefaultData);
    }

    static Marshal(data: SDeleteMails): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.uniqueIds).length);
	data.uniqueIds.forEach((value) => {
		buffer.writeBuffer(uniqueIds.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDeleteMails;