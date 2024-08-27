
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenWeekBossPanel {
}

class COpenWeekBossPanel {
    static DefaultData: COpenWeekBossPanel = {
    }

    static Unmarshal(buffer: Buffer): COpenWeekBossPanel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenWeekBossPanel.DefaultData);
    }

    static Marshal(data: COpenWeekBossPanel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenWeekBossPanel;