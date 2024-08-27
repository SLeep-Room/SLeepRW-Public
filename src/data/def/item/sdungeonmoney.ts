
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDungeonMoney {
	gold : number;
}

class SDungeonMoney {
    static DefaultData: SDungeonMoney = {
	gold : 0,
    }

    static Unmarshal(buffer: Buffer): SDungeonMoney { 
	const reader = new BufferReader(buffer)
try{
	SDungeonMoney.DefaultData.gold = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDungeonMoney.DefaultData);
    }

    static Marshal(data: SDungeonMoney): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.gold)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDungeonMoney;