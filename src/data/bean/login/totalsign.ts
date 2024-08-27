
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awards from '../../bean/login/totalsignaward';

interface TotalSign {
	awards : typeof awards.DefaultData[];
	needReceive : number;
	totalDay : number;
	cumulativeDay : number;
}

class TotalSign {
    static DefaultData: TotalSign = {
	awards : [],
	needReceive : 0,
	totalDay : 0,
	cumulativeDay : 0,
    }

    static Unmarshal(buffer: BufferReader): TotalSign { 
	const reader = buffer
try{
	const awardsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardsLength; i++) {
	    TotalSign.DefaultData.awards.push(awards.Unmarshal(reader));
	}
	TotalSign.DefaultData.needReceive = reader.readInt32()
	TotalSign.DefaultData.totalDay = reader.readInt32()
	TotalSign.DefaultData.cumulativeDay = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TotalSign.DefaultData);
    }

    static Marshal(data: TotalSign): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.awards).length);
	data.awards.forEach((value) => {
		buffer.writeBuffer(awards.Marshal(value))
	});
	buffer.writeInt32(data.needReceive)
	buffer.writeInt32(data.totalDay)
	buffer.writeInt32(data.cumulativeDay)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TotalSign;