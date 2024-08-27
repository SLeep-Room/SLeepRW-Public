
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import traps from '../../bean/battle/exploreinstance';
import switches from '../../bean/battle/switchesinstance';

interface SUpdateExploreState {
	traps : typeof traps.DefaultData[];
	switches : typeof switches.DefaultData[];
}

class SUpdateExploreState {
    static DefaultData: SUpdateExploreState = {
	traps : [],
	switches : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateExploreState { 
	const reader = new BufferReader(buffer)
try{
	const trapsLength = reader.readCompactUInt32();

	for (let i = 0; i < trapsLength; i++) {
	    SUpdateExploreState.DefaultData.traps.push(traps.Unmarshal(reader));
	}
	const switchesLength = reader.readCompactUInt32();

	for (let i = 0; i < switchesLength; i++) {
	    SUpdateExploreState.DefaultData.switches.push(switches.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateExploreState.DefaultData);
    }

    static Marshal(data: SUpdateExploreState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.traps).length);
	data.traps.forEach((value) => {
		buffer.writeBuffer(traps.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.switches).length);
	data.switches.forEach((value) => {
		buffer.writeBuffer(switches.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateExploreState;