
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import foresightGoodInfo from '../../bean/shop/foresightgoodinfo';

interface SGeneralForesightAct {
	activityId : number;
	curLeftTime : bigint;
	actLeftTime : bigint;
	unlockedTimes : number;
	receiveAward : number[];
	foresightGoodInfo : typeof foresightGoodInfo.DefaultData;
}

class SGeneralForesightAct {
    static DefaultData: SGeneralForesightAct = {
	activityId : 0,
	curLeftTime : 0n,
	actLeftTime : 0n,
	unlockedTimes : 0,
	receiveAward : [],
	foresightGoodInfo : foresightGoodInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SGeneralForesightAct { 
	const reader = new BufferReader(buffer)
try{
	SGeneralForesightAct.DefaultData.activityId = reader.readInt32()
	SGeneralForesightAct.DefaultData.curLeftTime = reader.readInt64()
	SGeneralForesightAct.DefaultData.actLeftTime = reader.readInt64()
	SGeneralForesightAct.DefaultData.unlockedTimes = reader.readInt32()
	const receiveAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < receiveAwardLength; i++) {
	    SGeneralForesightAct.DefaultData.receiveAward.push(reader.readInt32());
	}
	SGeneralForesightAct.DefaultData.foresightGoodInfo = foresightGoodInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGeneralForesightAct.DefaultData);
    }

    static Marshal(data: SGeneralForesightAct): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt64(BigInt(data.curLeftTime))
	buffer.writeInt64(BigInt(data.actLeftTime))
	buffer.writeInt32(data.unlockedTimes)
	buffer.writeCompactInt32(Object.keys(data.receiveAward).length);
	data.receiveAward.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeBuffer(foresightGoodInfo.Marshal(data.foresightGoodInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGeneralForesightAct;