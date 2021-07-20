import { Scroll, ScrollConfig, ScrollElement } from '../src';
import * as PIXI from 'pixi.js';

type ScrollElementData = {
  gameNumber: string;
  id: string;
};

type TestData = {
  data: ScrollElementData;
  config: ScrollConfig;
  element: ScrollElement<ScrollElementData>;
};

let testData: TestData;

describe('Scroll class test', () => {
  beforeEach(() => {
    testData = {
      data: {
        id: '1234567890',
        gameNumber: '#ffaa221133ff0011',
      },
      config: {
        position: new PIXI.Point(0, 0),
        mask: new PIXI.Rectangle(0, 0, 100, 50),
      },
      element: {
        setData(data) {
          console.log(`call setData(${data})`);
        },
        updatePositions() {
          console.log(`call updatePositions()`);
        },
      },
    };
  });

  // Simple test ...
  it('Should instantiate Scroll', () => {
    const scroll = new Scroll<ScrollElement<ScrollElementData>>();
    expect(scroll).toBeInstanceOf(Scroll);
    scroll.init(testData.element, testData.config);
    scroll.element.setData(testData.data);
    expect(scroll.element).toStrictEqual(testData.element);
  });
});
