
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CMoveSummerConstruction {
	construction : number;
	vertical : number;
	abscissa : number;
}

class CMoveSummerConstruction {
    static DefaultData: CMoveSummerConstruction = {
	construction : 0,
	vertical : 0,
	abscissa : 0,
    }

    static Unmarshal(buffer: Buffer): CMoveSummerConstruction { 
	const reader = new BufferReader(buffer)
try{
	CMoveSummerConstruction.DefaultData.construction = reader.readInt32()
	CMoveSummerConstruction.DefaultData.vertical = reader.readInt32()
	CMoveSummerConstruction.DefaultData.abscissa = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CMoveSummerConstruction.DefaultData);
    }

    static Marshal(data: CMoveSummerConstruction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.construction)
	buffer.writeInt32(data.vertical)
	buffer.writeInt32(data.abscissa)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CMoveSummerConstruction;