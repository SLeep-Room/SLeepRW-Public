
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import pools from '../../bean/card/cardpool';

interface SRefreshCardUI {
	pools : [number,typeof pools.DefaultData][];
	drawTimes : number;
	curDayTimes : number;
}

class SRefreshCardUI {
    static DefaultData: SRefreshCardUI = {
	pools : [],
	drawTimes : 0,
	curDayTimes : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshCardUI { 
	const reader = new BufferReader(buffer)
try{
	const poolsLength = reader.readCompactUInt32();

	for (let i = 0; i < poolsLength; i++) {
	    SRefreshCardUI.DefaultData.pools.push([reader.readInt32(),pools.Unmarshal(reader)]);
	}
	SRefreshCardUI.DefaultData.drawTimes = reader.readInt32()
	SRefreshCardUI.DefaultData.curDayTimes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshCardUI.DefaultData);
    }

    static Marshal(data: SRefreshCardUI): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.pools).length);
	data.pools.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(pools.Marshal(value))
	});
	buffer.writeInt32(data.drawTimes)
	buffer.writeInt32(data.curDayTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshCardUI;