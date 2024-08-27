
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenArenaPanel {
}

class COpenArenaPanel {
    static DefaultData: COpenArenaPanel = {
    }

    static Unmarshal(buffer: Buffer): COpenArenaPanel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenArenaPanel.DefaultData);
    }

    static Marshal(data: COpenArenaPanel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenArenaPanel;