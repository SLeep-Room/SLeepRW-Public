
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import exploreawards from '../../bean/item/beans/iteminfo';

interface SFinishAutoExploreWithoutBack {
	money : [number,bigint][];
	exploreawards : typeof exploreawards.DefaultData[];
}

class SFinishAutoExploreWithoutBack {
    static DefaultData: SFinishAutoExploreWithoutBack = {
	money : [],
	exploreawards : [],
    }

    static Unmarshal(buffer: Buffer): SFinishAutoExploreWithoutBack { 
	const reader = new BufferReader(buffer)
try{
	const moneyLength = reader.readCompactUInt32();

	for (let i = 0; i < moneyLength; i++) {
	    SFinishAutoExploreWithoutBack.DefaultData.money.push([reader.readInt32(),reader.readInt64()]);
	}
	const exploreawardsLength = reader.readCompactUInt32();

	for (let i = 0; i < exploreawardsLength; i++) {
	    SFinishAutoExploreWithoutBack.DefaultData.exploreawards.push(exploreawards.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SFinishAutoExploreWithoutBack.DefaultData);
    }

    static Marshal(data: SFinishAutoExploreWithoutBack): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.money).length);
	data.money.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeCompactInt32(Object.keys(data.exploreawards).length);
	data.exploreawards.forEach((value) => {
		buffer.writeBuffer(exploreawards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SFinishAutoExploreWithoutBack;