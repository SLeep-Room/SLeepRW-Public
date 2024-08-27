
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeSysConfig {
	configs : [number,number][];
}

class CChangeSysConfig {
    static DefaultData: CChangeSysConfig = {
	configs : [],
    }

    static Unmarshal(buffer: Buffer): CChangeSysConfig { 
	const reader = new BufferReader(buffer)
try{
	const configsLength = reader.readCompactUInt32();

	for (let i = 0; i < configsLength; i++) {
	    CChangeSysConfig.DefaultData.configs.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeSysConfig.DefaultData);
    }

    static Marshal(data: CChangeSysConfig): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.configs).length);
	data.configs.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeSysConfig;