
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import words from '../../bean/battle/resourceword';

interface SResourcePanel {
	words : [number,typeof words.DefaultData][];
}

class SResourcePanel {
    static DefaultData: SResourcePanel = {
	words : [],
    }

    static Unmarshal(buffer: Buffer): SResourcePanel { 
	const reader = new BufferReader(buffer)
try{
	const wordsLength = reader.readCompactUInt32();

	for (let i = 0; i < wordsLength; i++) {
	    SResourcePanel.DefaultData.words.push([reader.readInt32(),words.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SResourcePanel.DefaultData);
    }

    static Marshal(data: SResourcePanel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.words).length);
	data.words.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(words.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SResourcePanel;