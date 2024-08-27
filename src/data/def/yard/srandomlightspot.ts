
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import light from '../../bean/yard/light';

interface SRandomLightSpot {
	light : typeof light.DefaultData;
	leftNextRandomLightSpotTime : bigint;
}

class SRandomLightSpot {
    static DefaultData: SRandomLightSpot = {
	light : light.DefaultData,
	leftNextRandomLightSpotTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SRandomLightSpot { 
	const reader = new BufferReader(buffer)
try{
	SRandomLightSpot.DefaultData.light = light.Unmarshal(reader)
	SRandomLightSpot.DefaultData.leftNextRandomLightSpotTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRandomLightSpot.DefaultData);
    }

    static Marshal(data: SRandomLightSpot): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(light.Marshal(data.light))
	buffer.writeInt64(BigInt(data.leftNextRandomLightSpotTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRandomLightSpot;