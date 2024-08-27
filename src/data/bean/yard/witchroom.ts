
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import floors from '../../bean/yard/witchfloor';
import defaultTheme from '../../bean/yard/theme';

interface WitchRoom {
	name : string;
	id : number;
	level : number;
	floors : [number,typeof floors.DefaultData][];
	defaultTheme : typeof defaultTheme.DefaultData[];
}

class WitchRoom {
    static DefaultData: WitchRoom = {
	name : "",
	id : 0,
	level : 0,
	floors : [],
	defaultTheme : [],
    }

    static Unmarshal(buffer: BufferReader): WitchRoom { 
	const reader = buffer
try{
	WitchRoom.DefaultData.name = reader.readString()
	WitchRoom.DefaultData.id = reader.readInt32()
	WitchRoom.DefaultData.level = reader.readInt32()
	const floorsLength = reader.readCompactUInt32();

	for (let i = 0; i < floorsLength; i++) {
	    WitchRoom.DefaultData.floors.push([reader.readInt32(),floors.Unmarshal(reader)]);
	}
	const defaultThemeLength = reader.readCompactUInt32();

	for (let i = 0; i < defaultThemeLength; i++) {
	    WitchRoom.DefaultData.defaultTheme.push(defaultTheme.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},WitchRoom.DefaultData);
    }

    static Marshal(data: WitchRoom): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.level)
	buffer.writeCompactInt32(Object.keys(data.floors).length);
	data.floors.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(floors.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.defaultTheme).length);
	data.defaultTheme.forEach((value) => {
		buffer.writeBuffer(defaultTheme.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default WitchRoom;