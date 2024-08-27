
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import dailyGitfInfo from '../../bean/shop/mixgoodinfo';
import monthCardInfo from '../../bean/shop/mixgoodinfo';

interface SGetShopHomepage {
	dailyGitfInfo : typeof dailyGitfInfo.DefaultData[];
	monthCardInfo : typeof monthCardInfo.DefaultData[];
}

class SGetShopHomepage {
    static DefaultData: SGetShopHomepage = {
	dailyGitfInfo : [],
	monthCardInfo : [],
    }

    static Unmarshal(buffer: Buffer): SGetShopHomepage { 
	const reader = new BufferReader(buffer)
try{
	const dailyGitfInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < dailyGitfInfoLength; i++) {
	    SGetShopHomepage.DefaultData.dailyGitfInfo.push(dailyGitfInfo.Unmarshal(reader));
	}
	const monthCardInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < monthCardInfoLength; i++) {
	    SGetShopHomepage.DefaultData.monthCardInfo.push(monthCardInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetShopHomepage.DefaultData);
    }

    static Marshal(data: SGetShopHomepage): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.dailyGitfInfo).length);
	data.dailyGitfInfo.forEach((value) => {
		buffer.writeBuffer(dailyGitfInfo.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.monthCardInfo).length);
	data.monthCardInfo.forEach((value) => {
		buffer.writeBuffer(monthCardInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetShopHomepage;