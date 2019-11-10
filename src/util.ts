export function min<T>(list: T[], fn: (T) => number) {
  let minV = Number.MAX_VALUE
  let minI = -1
  for(let i =0; i<list.length;i++){
    let v = fn(list[i])
    if(minV > v){
      minV = v;
      minI = i;
    }
  }
  if (minI >= 0)
    return { ind: minI, item: list[minI], val: minV };
}

export function canvasCache(
  size: [number, number],
  draw: (ctx: CanvasRenderingContext2D) => void
) {
  const canvas = document.createElement("canvas");
  canvas.width = size[0];
  canvas.height = size[1];
  const ctx = canvas.getContext("2d");
  draw(ctx);
  return canvas;
}

export function randomElement<T>(list:T[], rni:() => number){
  return list[rni() % list.length]
}

export function weightedRandom(a: number[], rni: () => number) {
  let r = rni() % 1e9 / 1e9;
  let roll = (r * a.reduce((x, y) => x + y)) - a[0];
  let i = 0;
  while (roll >= 0) roll -= a[++i];
  return i;
}

export function random(seed) {
  seed = seed % 2147483647;
  if (seed <= 0) 
    seed += 2147483646;
  return () =>{
    return seed = seed * 16807 % 2147483647;
  };  
}

export function eachFrame(fun: (time: number) => void) {
  requestAnimationFrame(time => {
    fun(time);
    eachFrame(fun);
  });
}

export function shuffle<T>(a: T[], rni: () => number) {
  let buf: T;
  let j: number;
  for (let i = 0; i < a.length; i++) {
    j = rni() % a.length;
    buf = a[i];
    a[i] = a[j];
    a[j] = buf;
  }
  return a;
}

export function capitalise(s:string){
  return s[0].toUpperCase() + s.substr(1)
}
