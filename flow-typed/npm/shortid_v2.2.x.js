// flow-typed signature: d9b1a9bb0776aad186f1eaf3423f240c
// flow-typed version: b43dff3e0e/shortid_v2.2.x/flow_>=v0.25.x

type ShortIdModule = {
  (): string,
  generate(): string,
  seed(seed: number): ShortIdModule,
  worker(workerId: number): ShortIdModule,
  characters(characters: string): string,
  decode(id: string): { version: number, worker: number },
  isValid(id: mixed): boolean,
};

declare module 'shortid' {
  declare module.exports: ShortIdModule;
};
