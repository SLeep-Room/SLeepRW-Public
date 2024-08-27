
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import mails from '../../bean/mail/mail';

interface SSendMailList {
	mails : typeof mails.DefaultData[];
	maxNum : number;
}

class SSendMailList {
    static DefaultData: SSendMailList = {
	mails : [],
	maxNum : 0,
    }

    static Unmarshal(buffer: Buffer): SSendMailList { 
	const reader = new BufferReader(buffer)
try{
	const mailsLength = reader.readCompactUInt32();

	for (let i = 0; i < mailsLength; i++) {
	    SSendMailList.DefaultData.mails.push(mails.Unmarshal(reader));
	}
	SSendMailList.DefaultData.maxNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendMailList.DefaultData);
    }

    static Marshal(data: SSendMailList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.mails).length);
	data.mails.forEach((value) => {
		buffer.writeBuffer(mails.Marshal(value))
	});
	buffer.writeInt32(data.maxNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendMailList;