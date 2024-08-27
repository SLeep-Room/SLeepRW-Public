
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CResourcePanel {
}

class CResourcePanel {
    static DefaultData: CResourcePanel = {
    }

    static Unmarshal(buffer: Buffer): CResourcePanel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CResourcePanel.DefaultData);
    }

    static Marshal(data: CResourcePanel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CResourcePanel;