
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import commonCollection from '../../bean/activity/collection';
import highCollection from '../../bean/activity/collection';

interface SReturnPass {
	actId : number;
	deadline : bigint;
	highUnlocked : number;
	commonCollection : typeof commonCollection.DefaultData[];
	highCollection : typeof highCollection.DefaultData[];
	chargePrice : number;
	levelPrice : number;
	level : number;
	chipNum : number;
	needChipNum : number;
	canReceiveMaxAward : number;
	leftTime : bigint;
	goodId : number;
}

class SReturnPass {
    static DefaultData: SReturnPass = {
	actId : 0,
	deadline : 0n,
	highUnlocked : 0,
	commonCollection : [],
	highCollection : [],
	chargePrice : 0,
	levelPrice : 0,
	level : 0,
	chipNum : 0,
	needChipNum : 0,
	canReceiveMaxAward : 0,
	leftTime : 0n,
	goodId : 0,
    }

    static Unmarshal(buffer: Buffer): SReturnPass { 
	const reader = new BufferReader(buffer)
try{
	SReturnPass.DefaultData.actId = reader.readInt32()
	SReturnPass.DefaultData.deadline = reader.readInt64()
	SReturnPass.DefaultData.highUnlocked = reader.readInt32()
	const commonCollectionLength = reader.readCompactUInt32();

	for (let i = 0; i < commonCollectionLength; i++) {
	    SReturnPass.DefaultData.commonCollection.push(commonCollection.Unmarshal(reader));
	}
	const highCollectionLength = reader.readCompactUInt32();

	for (let i = 0; i < highCollectionLength; i++) {
	    SReturnPass.DefaultData.highCollection.push(highCollection.Unmarshal(reader));
	}
	SReturnPass.DefaultData.chargePrice = reader.readInt32()
	SReturnPass.DefaultData.levelPrice = reader.readInt32()
	SReturnPass.DefaultData.level = reader.readInt32()
	SReturnPass.DefaultData.chipNum = reader.readInt32()
	SReturnPass.DefaultData.needChipNum = reader.readInt32()
	SReturnPass.DefaultData.canReceiveMaxAward = reader.readInt32()
	SReturnPass.DefaultData.leftTime = reader.readInt64()
	SReturnPass.DefaultData.goodId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReturnPass.DefaultData);
    }

    static Marshal(data: SReturnPass): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.actId)
	buffer.writeInt64(BigInt(data.deadline))
	buffer.writeInt32(data.highUnlocked)
	buffer.writeCompactInt32(Object.keys(data.commonCollection).length);
	data.commonCollection.forEach((value) => {
		buffer.writeBuffer(commonCollection.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.highCollection).length);
	data.highCollection.forEach((value) => {
		buffer.writeBuffer(highCollection.Marshal(value))
	});
	buffer.writeInt32(data.chargePrice)
	buffer.writeInt32(data.levelPrice)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.chipNum)
	buffer.writeInt32(data.needChipNum)
	buffer.writeInt32(data.canReceiveMaxAward)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt32(data.goodId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReturnPass;