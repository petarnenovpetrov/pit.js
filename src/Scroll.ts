export interface ScrollConfig {
  position: PIXI.Point;
  mask: PIXI.Rectangle;
}

export interface ScrollElement<T> {
  setData(data: T): void;
  updatePositions(): void;
}

export class Scroll<T> {
  protected _element: T = {} as T;
  protected _config: ScrollConfig = {} as ScrollConfig;
  init(element: T, config: ScrollConfig) {
    this._element = element;
    this._config = config;
  }
  get element() {
    return this._element;
  }
}
