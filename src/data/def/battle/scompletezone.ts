
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import firstPassAward from '../../bean/item/beans/iteminfo';
import exploreAwards from '../../bean/item/beans/iteminfo';
import topMessage from '../../bean/notify/sendtopmessage';

interface SCompleteZone {
	zoneId : number;
	currentZone : number;
	money : [number,bigint][];
	firstPassAward : typeof firstPassAward.DefaultData[];
	exploreAwards : typeof exploreAwards.DefaultData[];
	topMessage : typeof topMessage.DefaultData;
}

class SCompleteZone {
    static DefaultData: SCompleteZone = {
	zoneId : 0,
	currentZone : 0,
	money : [],
	firstPassAward : [],
	exploreAwards : [],
	topMessage : topMessage.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SCompleteZone { 
	const reader = new BufferReader(buffer)
try{
	SCompleteZone.DefaultData.zoneId = reader.readInt32()
	SCompleteZone.DefaultData.currentZone = reader.readInt32()
	const moneyLength = reader.readCompactUInt32();

	for (let i = 0; i < moneyLength; i++) {
	    SCompleteZone.DefaultData.money.push([reader.readInt32(),reader.readInt64()]);
	}
	const firstPassAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < firstPassAwardLength; i++) {
	    SCompleteZone.DefaultData.firstPassAward.push(firstPassAward.Unmarshal(reader));
	}
	const exploreAwardsLength = reader.readCompactUInt32();

	for (let i = 0; i < exploreAwardsLength; i++) {
	    SCompleteZone.DefaultData.exploreAwards.push(exploreAwards.Unmarshal(reader));
	}
	SCompleteZone.DefaultData.topMessage = topMessage.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCompleteZone.DefaultData);
    }

    static Marshal(data: SCompleteZone): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.zoneId)
	buffer.writeInt32(data.currentZone)
	buffer.writeCompactInt32(Object.keys(data.money).length);
	data.money.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeCompactInt32(Object.keys(data.firstPassAward).length);
	data.firstPassAward.forEach((value) => {
		buffer.writeBuffer(firstPassAward.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.exploreAwards).length);
	data.exploreAwards.forEach((value) => {
		buffer.writeBuffer(exploreAwards.Marshal(value))
	});
	buffer.writeBuffer(topMessage.Marshal(data.topMessage))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCompleteZone;