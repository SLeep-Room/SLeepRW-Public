
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLightTowerPanelRedpoint {
	light : number;
}

class SLightTowerPanelRedpoint {
    static DefaultData: SLightTowerPanelRedpoint = {
	light : 0,
    }

    static Unmarshal(buffer: Buffer): SLightTowerPanelRedpoint { 
	const reader = new BufferReader(buffer)
try{
	SLightTowerPanelRedpoint.DefaultData.light = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLightTowerPanelRedpoint.DefaultData);
    }

    static Marshal(data: SLightTowerPanelRedpoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.light)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLightTowerPanelRedpoint;