import { echo } from 'coa-echo'
import { _ } from 'coa-helper'
import { Socket } from 'net'
import { CoaClient } from './CoaClient'



export class CoaClientPool<T extends CoaClient> {
  protected className: string
  protected clients: { [id: string]: T } = {}
  protected increment = 10000

  AccountData:any;

  constructor(className = 'RwServer') {
    this.className = className
  }

  // 生成新的客户端
  newClient(socket: Socket): T {
    return new CoaClient(
      socket,
      `client-${++this.increment}`,
      this.className
    ) as T
  }

  // 连接
  async connect(socket: Socket) {
    const client = this.newClient(socket)
    this.clients[client.clientId] = client
    await client.onConnect()
    //echo.log('%s已连接: %s', this.className, client.clientId)
    return client
  }

  // 关闭连接
  async close(client: T) {
    await client.setDevice({ clientId: '' })
    delete this.clients[client.clientId]
    await client.onClose();
  }

  // 通过account获得Client对象
  getByAccount(account: string) {
    return _.find(this.clients, (v) => v.account === account)
  }

  // 通过clintId获得Client对象
  getByClientId(clientId: string) {
    return this.clients[clientId] || undefined
  }

  // 通过deviceId获得Client对象
  getByDeviceId(deviceId: string) {
    return _.find(this.clients, (v) => v.deviceId === deviceId)
  }

  // 获取Client列表
  getList() {
    return _.map(this.clients, (v) => {
      const clientId = v.clientId
      const isOnline = v.socket.isOnline
      const account = v.socket.account 
      const deviceId = v.socket.deviceId
      const token = v.socket.token
      const clientVersion = v.socket.clientVersion
      const userData = v.socket.userData
      const clientSocket = v.socket
      
      return { clientId , isOnline , account , deviceId , token , clientVersion , userData, clientSocket}
    })
  }
}
