
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SResponseBuyDiamond {
	gameorderid : string;
	goodid : string;
	goodname : string;
	platType : number;
	gearid : number;
	extraparam : string;
	price : number;
	url : string;
}

class SResponseBuyDiamond {
    static DefaultData: SResponseBuyDiamond = {
	gameorderid : "",
	goodid : "",
	goodname : "",
	platType : 0,
	gearid : 0,
	extraparam : "",
	price : 0,
	url : "",
    }

    static Unmarshal(buffer: Buffer): SResponseBuyDiamond { 
	const reader = new BufferReader(buffer)
try{
	SResponseBuyDiamond.DefaultData.gameorderid = reader.readString()
	SResponseBuyDiamond.DefaultData.goodid = reader.readString()
	SResponseBuyDiamond.DefaultData.goodname = reader.readString()
	SResponseBuyDiamond.DefaultData.platType = reader.readInt32()
	SResponseBuyDiamond.DefaultData.gearid = reader.readInt32()
	SResponseBuyDiamond.DefaultData.extraparam = reader.readString()
	SResponseBuyDiamond.DefaultData.price = reader.readInt32()
	SResponseBuyDiamond.DefaultData.url = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SResponseBuyDiamond.DefaultData);
    }

    static Marshal(data: SResponseBuyDiamond): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.gameorderid)
	buffer.writeString(data.goodid)
	buffer.writeString(data.goodname)
	buffer.writeInt32(data.platType)
	buffer.writeInt32(data.gearid)
	buffer.writeString(data.extraparam)
	buffer.writeInt32(data.price)
	buffer.writeString(data.url)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SResponseBuyDiamond;