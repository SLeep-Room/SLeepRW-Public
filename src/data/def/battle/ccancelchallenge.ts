
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCancelChallenge {
	cancelTower : number;
}

class CCancelChallenge {
    static DefaultData: CCancelChallenge = {
	cancelTower : 0,
    }

    static Unmarshal(buffer: Buffer): CCancelChallenge { 
	const reader = new BufferReader(buffer)
try{
	CCancelChallenge.DefaultData.cancelTower = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCancelChallenge.DefaultData);
    }

    static Marshal(data: CCancelChallenge): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.cancelTower)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCancelChallenge;