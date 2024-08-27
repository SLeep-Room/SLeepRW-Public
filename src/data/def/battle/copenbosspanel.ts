
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenBossPanel {
}

class COpenBossPanel {
    static DefaultData: COpenBossPanel = {
    }

    static Unmarshal(buffer: Buffer): COpenBossPanel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenBossPanel.DefaultData);
    }

    static Marshal(data: COpenBossPanel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenBossPanel;