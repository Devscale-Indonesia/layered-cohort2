export interface INote {
  getAll: () => Promise<any[]>;
  getOne: (id: string) => Promise<any>;
  create: (data: any) => Promise<any>;
  update: (id: string, data: any) => Promise<any>;
  delete: (id: string) => Promise<string>;
}

export interface ILogger {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
}
