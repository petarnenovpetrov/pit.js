
export interface ScrollConfig{
    position: PIXI.Point
    mask:PIXI.Rectangle
}

export interface ScrollElement<T>{
    setData(data:T):void
    updatePositions():void
}

export class Scroll<T>{
    protected _element:ScrollElement<T> = {} as ScrollElement<T>
    protected _config:ScrollConfig = {} as ScrollConfig
    init(element:ScrollElement<T>,config:ScrollConfig){
        this._element = element
        this._config = config
    }
}