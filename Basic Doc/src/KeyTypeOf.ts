type a = { [n: number]: undefined };
type A = keyof a;
 
type b = { [k: string]: boolean };
type B = keyof b;

type c = {[k:string]:object};
type C = keyof c;


export {}