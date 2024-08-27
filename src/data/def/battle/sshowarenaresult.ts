
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import reward from '../../bean/item/beans/iteminfo';

interface SShowArenaResult {
	victory : number;
	arenaId : number;
	camp : number;
	campsResult : [number,bigint][];
	totalNum : number;
	victoryNum : number;
	pithy : bigint;
	totalPithy : bigint;
	reward : typeof reward.DefaultData[];
	open : number;
}

class SShowArenaResult {
    static DefaultData: SShowArenaResult = {
	victory : 0,
	arenaId : 0,
	camp : 0,
	campsResult : [],
	totalNum : 0,
	victoryNum : 0,
	pithy : 0n,
	totalPithy : 0n,
	reward : [],
	open : 0,
    }

    static Unmarshal(buffer: Buffer): SShowArenaResult { 
	const reader = new BufferReader(buffer)
try{
	SShowArenaResult.DefaultData.victory = reader.readInt32()
	SShowArenaResult.DefaultData.arenaId = reader.readInt32()
	SShowArenaResult.DefaultData.camp = reader.readInt32()
	const campsResultLength = reader.readCompactUInt32();

	for (let i = 0; i < campsResultLength; i++) {
	    SShowArenaResult.DefaultData.campsResult.push([reader.readInt32(),reader.readInt64()]);
	}
	SShowArenaResult.DefaultData.totalNum = reader.readInt32()
	SShowArenaResult.DefaultData.victoryNum = reader.readInt32()
	SShowArenaResult.DefaultData.pithy = reader.readInt64()
	SShowArenaResult.DefaultData.totalPithy = reader.readInt64()
	const rewardLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardLength; i++) {
	    SShowArenaResult.DefaultData.reward.push(reward.Unmarshal(reader));
	}
	SShowArenaResult.DefaultData.open = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShowArenaResult.DefaultData);
    }

    static Marshal(data: SShowArenaResult): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.victory)
	buffer.writeInt32(data.arenaId)
	buffer.writeInt32(data.camp)
	buffer.writeCompactInt32(Object.keys(data.campsResult).length);
	data.campsResult.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeInt32(data.totalNum)
	buffer.writeInt32(data.victoryNum)
	buffer.writeInt64(BigInt(data.pithy))
	buffer.writeInt64(BigInt(data.totalPithy))
	buffer.writeCompactInt32(Object.keys(data.reward).length);
	data.reward.forEach((value) => {
		buffer.writeBuffer(reward.Marshal(value))
	});
	buffer.writeInt32(data.open)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShowArenaResult;