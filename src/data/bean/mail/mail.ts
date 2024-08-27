
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import attachment from '../../bean/mail/attachment';

interface Mail {
	uniqueId : bigint;
	id : number;
	title : string;
	titleParameter : [string,string][];
	appellation : string;
	content : string;
	contentParameter : [string,string][];
	signature : string;
	attachment : typeof attachment.DefaultData;
	mailType : number;
	receiveTime : bigint;
	deleteTime : bigint;
	status : number;
	questId : number;
}

class Mail {
    static DefaultData: Mail = {
	uniqueId : 0n,
	id : 0,
	title : "",
	titleParameter : [],
	appellation : "",
	content : "",
	contentParameter : [],
	signature : "",
	attachment : attachment.DefaultData,
	mailType : 0,
	receiveTime : 0n,
	deleteTime : 0n,
	status : 0,
	questId : 0,
    }

    static Unmarshal(buffer: BufferReader): Mail { 
	const reader = buffer
try{
	Mail.DefaultData.uniqueId = reader.readInt64()
	Mail.DefaultData.id = reader.readInt32()
	Mail.DefaultData.title = reader.readString()
	const titleParameterLength = reader.readCompactUInt32();

	for (let i = 0; i < titleParameterLength; i++) {
	    Mail.DefaultData.titleParameter.push([reader.readString(),reader.readString()]);
	}
	Mail.DefaultData.appellation = reader.readString()
	Mail.DefaultData.content = reader.readString()
	const contentParameterLength = reader.readCompactUInt32();

	for (let i = 0; i < contentParameterLength; i++) {
	    Mail.DefaultData.contentParameter.push([reader.readString(),reader.readString()]);
	}
	Mail.DefaultData.signature = reader.readString()
	Mail.DefaultData.attachment = attachment.Unmarshal(reader)
	Mail.DefaultData.mailType = reader.readInt32()
	Mail.DefaultData.receiveTime = reader.readInt64()
	Mail.DefaultData.deleteTime = reader.readInt64()
	Mail.DefaultData.status = reader.readInt16()
	Mail.DefaultData.questId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Mail.DefaultData);
    }

    static Marshal(data: Mail): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.uniqueId))
	buffer.writeInt32(data.id)
	buffer.writeString(data.title)
	buffer.writeCompactInt32(Object.keys(data.titleParameter).length);
	data.titleParameter.forEach(([key, value]) => {
		buffer.writeString(key)
		buffer.writeString(value)
	});
	buffer.writeString(data.appellation)
	buffer.writeString(data.content)
	buffer.writeCompactInt32(Object.keys(data.contentParameter).length);
	data.contentParameter.forEach(([key, value]) => {
		buffer.writeString(key)
		buffer.writeString(value)
	});
	buffer.writeString(data.signature)
	buffer.writeBuffer(attachment.Marshal(data.attachment))
	buffer.writeInt32(data.mailType)
	buffer.writeInt64(BigInt(data.receiveTime))
	buffer.writeInt64(BigInt(data.deleteTime))
	buffer.writeInt16(data.status)
	buffer.writeInt32(data.questId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Mail;