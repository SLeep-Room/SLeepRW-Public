
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLogin {
	account : string;
	token : string;
	plat : string;
	deviceId : string;
	channelId : string;
	imei : string;
	system : number;
	model : string;
	resolution : string;
	systemVersion : string;
	networkMode : string;
	operatorField : string;
	clientVersion : string;
	isRelogin : number;
	oaid : string;
	media : string;
}

class CLogin {
    static DefaultData: CLogin = {
	account : "",
	token : "",
	plat : "",
	deviceId : "",
	channelId : "",
	imei : "",
	system : 0,
	model : "",
	resolution : "",
	systemVersion : "",
	networkMode : "",
	operatorField : "",
	clientVersion : "",
	isRelogin : 0,
	oaid : "",
	media : "",
    }

    static Unmarshal(buffer: Buffer): CLogin { 
	const reader = new BufferReader(buffer)
try{
	CLogin.DefaultData.account = reader.readString()
	CLogin.DefaultData.token = reader.readString()
	CLogin.DefaultData.plat = reader.readString()
	CLogin.DefaultData.deviceId = reader.readString()
	CLogin.DefaultData.channelId = reader.readString()
	CLogin.DefaultData.imei = reader.readString()
	CLogin.DefaultData.system = reader.readInt32()
	CLogin.DefaultData.model = reader.readString()
	CLogin.DefaultData.resolution = reader.readString()
	CLogin.DefaultData.systemVersion = reader.readString()
	CLogin.DefaultData.networkMode = reader.readString()
	CLogin.DefaultData.operatorField = reader.readString()
	CLogin.DefaultData.clientVersion = reader.readString()
	CLogin.DefaultData.isRelogin = reader.readByte()
	CLogin.DefaultData.oaid = reader.readString()
	CLogin.DefaultData.media = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLogin.DefaultData);
    }

    static Marshal(data: CLogin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.account)
	buffer.writeString(data.token)
	buffer.writeString(data.plat)
	buffer.writeString(data.deviceId)
	buffer.writeString(data.channelId)
	buffer.writeString(data.imei)
	buffer.writeInt32(data.system)
	buffer.writeString(data.model)
	buffer.writeString(data.resolution)
	buffer.writeString(data.systemVersion)
	buffer.writeString(data.networkMode)
	buffer.writeString(data.operatorField)
	buffer.writeString(data.clientVersion)
	buffer.writeByte(data.isRelogin)
	buffer.writeString(data.oaid)
	buffer.writeString(data.media)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLogin;