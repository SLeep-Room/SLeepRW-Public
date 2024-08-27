
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import baseUserData from '../../bean/chat/baseuserdata';
import support from '../../bean/chat/roleinfo';
import display from '../../bean/ranking/role';

interface SLookOtherInfo {
	baseUserData : typeof baseUserData.DefaultData;
	title : string;
	introduce : string;
	support : typeof support.DefaultData;
	display : typeof display.DefaultData[];
	likedNum : number;
}

class SLookOtherInfo {
    static DefaultData: SLookOtherInfo = {
	baseUserData : baseUserData.DefaultData,
	title : "",
	introduce : "",
	support : support.DefaultData,
	display : [],
	likedNum : 0,
    }

    static Unmarshal(buffer: Buffer): SLookOtherInfo { 
	const reader = new BufferReader(buffer)
try{
	SLookOtherInfo.DefaultData.baseUserData = baseUserData.Unmarshal(reader)
	SLookOtherInfo.DefaultData.title = reader.readString()
	SLookOtherInfo.DefaultData.introduce = reader.readString()
	SLookOtherInfo.DefaultData.support = support.Unmarshal(reader)
	const displayLength = reader.readCompactUInt32();

	for (let i = 0; i < displayLength; i++) {
	    SLookOtherInfo.DefaultData.display.push(display.Unmarshal(reader));
	}
	SLookOtherInfo.DefaultData.likedNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLookOtherInfo.DefaultData);
    }

    static Marshal(data: SLookOtherInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))
	buffer.writeString(data.title)
	buffer.writeString(data.introduce)
	buffer.writeBuffer(support.Marshal(data.support))
	buffer.writeCompactInt32(Object.keys(data.display).length);
	data.display.forEach((value) => {
		buffer.writeBuffer(display.Marshal(value))
	});
	buffer.writeInt32(data.likedNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLookOtherInfo;