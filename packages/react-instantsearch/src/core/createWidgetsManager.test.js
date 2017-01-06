/* eslint-env jest, jasmine */
/* eslint-disable no-console */

import createWidgetsManager from './createWidgetsManager';

describe('createWidgetsManager', () => {
  describe('registerWidget', () => {
    it('adds the widget to the widgets list', () => {
      const wm = createWidgetsManager(() => null);
      const widget = {};
      wm.registerWidget(widget);
      expect(wm.getWidgets()[0]).toBe(widget);
    });

    it('returns an unregister method', () => {
      const wm = createWidgetsManager(() => null);
      const unregister = wm.registerWidget({});
      unregister();
      expect(wm.getWidgets().length).toBe(0);
    });

    it('schedules an update', done => {
      const onUpdate = jest.fn();
      const wm = createWidgetsManager(onUpdate);
      wm.registerWidget({});
      Promise.resolve().then(() => {
        try {
          expect(onUpdate.mock.calls.length).toBe(1);
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });
  });

  describe('update', () => {
    it('schedules an update', done => {
      const onUpdate = jest.fn();
      const wm = createWidgetsManager(onUpdate);
      wm.update();
      Promise.resolve().then(() => {
        try {
          expect(onUpdate.mock.calls.length).toBe(1);
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });
  });
});
