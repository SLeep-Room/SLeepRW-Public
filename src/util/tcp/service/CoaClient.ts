import { _ } from 'coa-helper'
import { Socket } from 'net'

export class CoaClient {
  socket: any
  clientId: string
  deviceId: string
  type: string
  isOnline: boolean
  live: number

  account: string
  token: string
  clientVersion: string
  userData:object


  constructor(socket: Socket, clientId: string, type: string) {
    this.socket = socket
    this.type = type
    this.clientId = clientId
    
    this.live = 0

    //login after
    this.isOnline = false
    this.account = ''
    this.deviceId = ''
    this.token = ''
    this.clientVersion = ''
    this.userData = {}
  }

  // 连接
  async onConnect() {
    // on connect
  }

  // 连接关闭
  async onClose() {
    // on close
  }

  // 设备上线
  async onOnline(deviceId: string) {
    // on online
  }

  // 设备下线
  async onOffline(deviceId: string) {
    // on offline
  }

  // 接收到数据
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onData(raw: Buffer) {
    // on data
  }

  // 设置设备状态
  async setDevice({ clientId }: { clientId: string }) {
    // 记录上次的设备ID
    this.deviceId = clientId
    this.isOnline = false
    this.live = _.now()

    // 判断设备ID是否改变，触发上线下线操作

    return this.live
  }
}
