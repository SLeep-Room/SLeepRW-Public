
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import mails from '../../bean/mail/mail';

interface SSendNewMail {
	mails : typeof mails.DefaultData[];
}

class SSendNewMail {
    static DefaultData: SSendNewMail = {
	mails : [],
    }

    static Unmarshal(buffer: Buffer): SSendNewMail { 
	const reader = new BufferReader(buffer)
try{
	const mailsLength = reader.readCompactUInt32();

	for (let i = 0; i < mailsLength; i++) {
	    SSendNewMail.DefaultData.mails.push(mails.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendNewMail.DefaultData);
    }

    static Marshal(data: SSendNewMail): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.mails).length);
	data.mails.forEach((value) => {
		buffer.writeBuffer(mails.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendNewMail;