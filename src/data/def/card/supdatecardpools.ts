
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import pools from '../../bean/card/cardpool';

interface SUpdateCardPools {
	pools : [number,typeof pools.DefaultData][];
}

class SUpdateCardPools {
    static DefaultData: SUpdateCardPools = {
	pools : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateCardPools { 
	const reader = new BufferReader(buffer)
try{
	const poolsLength = reader.readCompactUInt32();

	for (let i = 0; i < poolsLength; i++) {
	    SUpdateCardPools.DefaultData.pools.push([reader.readInt32(),pools.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateCardPools.DefaultData);
    }

    static Marshal(data: SUpdateCardPools): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.pools).length);
	data.pools.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(pools.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateCardPools;