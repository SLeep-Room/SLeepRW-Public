
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import trainsInfo from '../../bean/activity/battleinfo';

interface SOpenTrain {
	trainsInfo : typeof trainsInfo.DefaultData[];
}

class SOpenTrain {
    static DefaultData: SOpenTrain = {
	trainsInfo : [],
    }

    static Unmarshal(buffer: Buffer): SOpenTrain { 
	const reader = new BufferReader(buffer)
try{
	const trainsInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < trainsInfoLength; i++) {
	    SOpenTrain.DefaultData.trainsInfo.push(trainsInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenTrain.DefaultData);
    }

    static Marshal(data: SOpenTrain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.trainsInfo).length);
	data.trainsInfo.forEach((value) => {
		buffer.writeBuffer(trainsInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenTrain;