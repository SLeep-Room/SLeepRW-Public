
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CQuickDecompose2Petal {
}

class CQuickDecompose2Petal {
    static DefaultData: CQuickDecompose2Petal = {
    }

    static Unmarshal(buffer: Buffer): CQuickDecompose2Petal { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CQuickDecompose2Petal.DefaultData);
    }

    static Marshal(data: CQuickDecompose2Petal): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CQuickDecompose2Petal;