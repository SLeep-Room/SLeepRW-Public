# SLeepRW-Public

## CN documentation

### 简介
这是一个完全免费的复苏的魔女模拟器。服务器仍有很多功能并不正常运行。请注意，此服务端为新手练手项目。

### 使用方法

1. **安装Node.js**：首先安装Node.js。
2. **启动服务器**：输入`npm start`开启服务器。如果下载缓慢，可以考虑使用镜像源。
3. **配置客户端**：
   - 使用[https://github.com/dormant-witch/nekofs](https://github.com/dormant-witch/nekofs)修改游戏客户端的`cfg.nekodata`中的配置文件，转向到服务器。
   - 客户端会请求`http://你的IP:你的端口/ip`，该接口需要返回如下JSON格式的数据：
     ```json
     {
       "ip": "游戏服务端IP",
       "port": 50000,
       "result": 0
     }
     ```
   - 注意：`file.meta`文件需要同时修改CRC32等校验值（具体步骤不再赘述）。

4. **进入游戏**：配置完成后，进入游戏即可。

### 功能列表

- [ ] SDK, IP服务器
- [x] 进入游戏
- [x] 编队
- [ ] 获取角色（可以通过修改来获取角色）
- [ ] 抽卡
- [ ] 获取物品
- [ ] 地下城
- [ ] 剧情修复

### 免责声明
本服务器仅供学习参考，禁止任何商用行为。造成的后果请自行承担，禁止售卖服务端源码。

<br>
<br>
<br>

---
# EN documentation

### Introduction
This is a completely free Revived Witch simulator. The server still has many functions that are not working properly. Please note that this server is a training project.

### Usage

1. **Install Node.js**：First, install Node.js and npm.
2. **Start the server**：Run the command `npm start` to start the server. If the download is slow, you can consider using a mirror source.
3. **Configuring the client**：
   - Use[https://github.com/dormant-witch/nekofs](https://github.com/dormant-witch/nekofs) to modify the configuration file `cfg.nekodata` of the game client to redirect to your server.
   - The client will request `http://yourIP:yourport/ip`, and the interface needs to return data in the following JSON format：
     ```json
     {
       "ip": "GameServerIP",
       "port": 50000,
       "result": 0
     }
     ```
   - Note: The `file.meta` file needs to modify the CRC32 and other checksum values ​​at the same time (the specific steps will not be repeated here).

4. **Enter the game**：After the configuration is complete, enter the game.

### Features List

- [ ] SDK, IP server
- [x] Enter the game
- [x] Formations
- [ ] Get the doll (you can get the doll by modifying it)
- [ ] Gacha
- [ ] Get items
- [ ] Dungeons
- [ ] Fix story

### Disclaimer
The software is provided as learning reference. Commercial use is strictly prohibited. The authors cannot be held accountable to any damages done to you, your data, or your device. Selling or redistributing this software with any profits is prohibited.
