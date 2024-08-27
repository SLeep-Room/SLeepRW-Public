
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import light from '../../bean/yard/light';

interface SCollectLightSpot {
	light : typeof light.DefaultData;
}

class SCollectLightSpot {
    static DefaultData: SCollectLightSpot = {
	light : light.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SCollectLightSpot { 
	const reader = new BufferReader(buffer)
try{
	SCollectLightSpot.DefaultData.light = light.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCollectLightSpot.DefaultData);
    }

    static Marshal(data: SCollectLightSpot): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(light.Marshal(data.light))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCollectLightSpot;