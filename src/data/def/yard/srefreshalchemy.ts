
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import alchemy from '../../bean/yard/alchemy';
import mainResult from '../../bean/item/beans/iteminfo';
import secondResult from '../../bean/item/beans/iteminfo';

interface SRefreshAlchemy {
	alchemy : typeof alchemy.DefaultData;
	mainResult : typeof mainResult.DefaultData[];
	secondResult : typeof secondResult.DefaultData[];
	effect : number;
}

class SRefreshAlchemy {
    static DefaultData: SRefreshAlchemy = {
	alchemy : alchemy.DefaultData,
	mainResult : [],
	secondResult : [],
	effect : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshAlchemy { 
	const reader = new BufferReader(buffer)
try{
	SRefreshAlchemy.DefaultData.alchemy = alchemy.Unmarshal(reader)
	const mainResultLength = reader.readCompactUInt32();

	for (let i = 0; i < mainResultLength; i++) {
	    SRefreshAlchemy.DefaultData.mainResult.push(mainResult.Unmarshal(reader));
	}
	const secondResultLength = reader.readCompactUInt32();

	for (let i = 0; i < secondResultLength; i++) {
	    SRefreshAlchemy.DefaultData.secondResult.push(secondResult.Unmarshal(reader));
	}
	SRefreshAlchemy.DefaultData.effect = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshAlchemy.DefaultData);
    }

    static Marshal(data: SRefreshAlchemy): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(alchemy.Marshal(data.alchemy))
	buffer.writeCompactInt32(Object.keys(data.mainResult).length);
	data.mainResult.forEach((value) => {
		buffer.writeBuffer(mainResult.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.secondResult).length);
	data.secondResult.forEach((value) => {
		buffer.writeBuffer(secondResult.Marshal(value))
	});
	buffer.writeInt32(data.effect)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshAlchemy;