import fs from 'fs';
import path from 'path';

// 定义 Handler 类型，假设每个处理器是一个函数
type Handler = (socket:any,data:any) => void;

// 定义 readHandlersSync 函数，确保正确类型注解
function readHandlersSync(dir: string): Record<string, Handler> {
  let handlers: Record<string, Handler> = {};
  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const absolutePath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      const directoryHandlers = readHandlersSync(absolutePath);
      handlers = { ...handlers, ...directoryHandlers };
    } else if (dirent.isFile() && dirent.name.endsWith('.ts')) {
      delete require.cache[require.resolve(absolutePath)];
      const handlerName = path.basename(dirent.name, '.ts');
      // 假设每个模块默认导出一个函数
      handlers[handlerName] = require(absolutePath).default;
    }
  }

  return handlers;
}

// 定义 loadHandlersSync 函数，确保正确类型注解
function loadHandlersSync(): Record<string, Handler> {
  const handlersDir = path.join(__dirname, 'packet');
  const loadedHandlers = readHandlersSync(handlersDir);
  //console.log('[Handler] Loaded:', Object.keys(loadedHandlers));
  return loadedHandlers;
}

// 同步加载处理程序
const handlers = loadHandlersSync();

// 导出 getHandler 函数，确保正确类型注解
export const getHandler = (name: string): Handler | any => {
  return handlers[name];
};

// 如果你想要导出 handlersModule 对象，可以这样写：
export const handlersModule = {
  getHandler,
};