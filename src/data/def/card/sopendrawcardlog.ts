
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import log from '../../bean/card/drawcardinfo';

interface SOpenDrawCardLog {
	log : typeof log.DefaultData[];
}

class SOpenDrawCardLog {
    static DefaultData: SOpenDrawCardLog = {
	log : [],
    }

    static Unmarshal(buffer: Buffer): SOpenDrawCardLog { 
	const reader = new BufferReader(buffer)
try{
	const logLength = reader.readCompactUInt32();

	for (let i = 0; i < logLength; i++) {
	    SOpenDrawCardLog.DefaultData.log.push(log.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenDrawCardLog.DefaultData);
    }

    static Marshal(data: SOpenDrawCardLog): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.log).length);
	data.log.forEach((value) => {
		buffer.writeBuffer(log.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenDrawCardLog;