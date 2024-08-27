
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import firstItems from '../../bean/item/beans/iteminfo';

interface SFirstPassResourceScene {
	passid : number;
	firstItems : typeof firstItems.DefaultData[];
}

class SFirstPassResourceScene {
    static DefaultData: SFirstPassResourceScene = {
	passid : 0,
	firstItems : [],
    }

    static Unmarshal(buffer: Buffer): SFirstPassResourceScene { 
	const reader = new BufferReader(buffer)
try{
	SFirstPassResourceScene.DefaultData.passid = reader.readInt32()
	const firstItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < firstItemsLength; i++) {
	    SFirstPassResourceScene.DefaultData.firstItems.push(firstItems.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SFirstPassResourceScene.DefaultData);
    }

    static Marshal(data: SFirstPassResourceScene): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.passid)
	buffer.writeCompactInt32(Object.keys(data.firstItems).length);
	data.firstItems.forEach((value) => {
		buffer.writeBuffer(firstItems.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SFirstPassResourceScene;