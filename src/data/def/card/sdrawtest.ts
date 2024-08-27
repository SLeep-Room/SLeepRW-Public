
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDrawTest {
	libResult : [number,string][];
	libNums : [number,number][];
	roleResult : [number,string][];
	roleNums : [number,number][];
}

class SDrawTest {
    static DefaultData: SDrawTest = {
	libResult : [],
	libNums : [],
	roleResult : [],
	roleNums : [],
    }

    static Unmarshal(buffer: Buffer): SDrawTest { 
	const reader = new BufferReader(buffer)
try{
	const libResultLength = reader.readCompactUInt32();

	for (let i = 0; i < libResultLength; i++) {
	    SDrawTest.DefaultData.libResult.push([reader.readInt32(),reader.readString()]);
	}
	const libNumsLength = reader.readCompactUInt32();

	for (let i = 0; i < libNumsLength; i++) {
	    SDrawTest.DefaultData.libNums.push([reader.readInt32(),reader.readInt32()]);
	}
	const roleResultLength = reader.readCompactUInt32();

	for (let i = 0; i < roleResultLength; i++) {
	    SDrawTest.DefaultData.roleResult.push([reader.readInt32(),reader.readString()]);
	}
	const roleNumsLength = reader.readCompactUInt32();

	for (let i = 0; i < roleNumsLength; i++) {
	    SDrawTest.DefaultData.roleNums.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDrawTest.DefaultData);
    }

    static Marshal(data: SDrawTest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.libResult).length);
	data.libResult.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeString(value)
	});
	buffer.writeCompactInt32(Object.keys(data.libNums).length);
	data.libNums.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roleResult).length);
	data.roleResult.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeString(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roleNums).length);
	data.roleNums.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDrawTest;