'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Rx = window.Rx;
var KEYCODE = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  var keydown$ = Rx.Observable.fromEvent(document, 'keydown', function (e) {
    switch (e.keyCode) {
      case KEYCODE.left:
        return -1;
      case KEYCODE.right:
        return 1;
      default:
        return 0;
    }
  });

  var keyup$ = Rx.Observable.fromEvent(document, 'keyup', function (e) {
    switch (e.keyCode) {
      case KEYCODE.left:
        return -1;
      case KEYCODE.right:
        return 1;
      default:
    }
  }).withLatestFrom(keydown$).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        keyup = _ref2[0],
        keydown = _ref2[1];

    return keyup === keydown;
  }).map(function (x) {
    return 0;
  });

  var input$ = Rx.Observable.merge(keydown$, keyup$).startWith(0).distinctUntilChanged();

  var ticker$ = Rx.Observable.interval(0, Rx.Scheduler.animationFrame);

  var game$ = ticker$.withLatestFrom(input$).scan(function (prev, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        ticker = _ref4[0],
        input = _ref4[1];

    return prev + input;
  }, width / 2);

  game$.subscribe(render);
}

function render(x) {
  background(255);
  ellipse(x, height / 2, 50, 50);
}