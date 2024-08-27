
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenWatermelonBossPanel {
}

class COpenWatermelonBossPanel {
    static DefaultData: COpenWatermelonBossPanel = {
    }

    static Unmarshal(buffer: Buffer): COpenWatermelonBossPanel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenWatermelonBossPanel.DefaultData);
    }

    static Marshal(data: COpenWatermelonBossPanel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenWatermelonBossPanel;