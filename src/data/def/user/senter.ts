
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import userInfo from '../../bean/user/userinfo';
import bags from '../../bean/item/beans/bag';

interface SEnter {
	userInfo : typeof userInfo.DefaultData;
	bags : [number,typeof bags.DefaultData][];
}

class SEnter {
    static DefaultData: SEnter = {
	userInfo : userInfo.DefaultData,
	bags : [],
    }

    static Unmarshal(buffer: Buffer): SEnter { 
	const reader = new BufferReader(buffer)
try{
	SEnter.DefaultData.userInfo = userInfo.Unmarshal(reader)
	const bagsLength = reader.readCompactUInt32();

	for (let i = 0; i < bagsLength; i++) {
	    SEnter.DefaultData.bags.push([reader.readInt32(),bags.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEnter.DefaultData);
    }

    static Marshal(data: SEnter): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(userInfo.Marshal(data.userInfo))
	buffer.writeCompactInt32(Object.keys(data.bags).length);
	data.bags.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(bags.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEnter;