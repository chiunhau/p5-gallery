const Rx = window.Rx;
const KEYCODE = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	const keydown$ = Rx.Observable
    .fromEvent(document, 'keydown', e => {
      switch (e.keyCode) {
        case KEYCODE.left:
          return  -1
        case KEYCODE.right:
          return 1
        default:
					return 0
      }
    });

  const keyup$ = Rx.Observable
    .fromEvent(document, 'keyup', e => {
      switch (e.keyCode) {
        case KEYCODE.left:
          return  -1
        case KEYCODE.right:
          return 1
        default:
      }
    })
    .withLatestFrom(keydown$)
    .filter(([keyup, keydown]) => {
      return keyup === keydown
    })
    .map(x => 0);

  const input$ = Rx.Observable
    .merge(keydown$, keyup$)
    .startWith(0)
    .distinctUntilChanged();


	const ticker$ = Rx.Observable.interval(0, Rx.Scheduler.animationFrame);

	const game$ = ticker$
		.withLatestFrom(input$)
		.scan((prev, [ticker, input]) => {
			return prev + input
		},width / 2);


	game$.subscribe(render);
}

function render(x) {
	background(255);
	ellipse(x, height / 2, 50, 50);
}
