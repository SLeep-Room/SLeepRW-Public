import { CoaApplication } from './CoaApplication'
import { CoaClient } from './CoaClient'
import { CoaClientPool } from './CoaClientPool'

export class CoaTcp<T extends CoaClient> {
  private readonly application: CoaApplication<T>

  constructor(clientPool: CoaClientPool<T>, listenPort: number) {
    // 初始化一个application实例
    this.application = new CoaApplication(clientPool, listenPort)
  }

  // 开始监听
  start() {
    this.application.start()
  }
}
