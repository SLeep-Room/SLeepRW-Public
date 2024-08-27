
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import theme from '../../bean/yard/theme';

interface SAddTheme {
	theme : typeof theme.DefaultData;
}

class SAddTheme {
    static DefaultData: SAddTheme = {
	theme : theme.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SAddTheme { 
	const reader = new BufferReader(buffer)
try{
	SAddTheme.DefaultData.theme = theme.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddTheme.DefaultData);
    }

    static Marshal(data: SAddTheme): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(theme.Marshal(data.theme))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddTheme;