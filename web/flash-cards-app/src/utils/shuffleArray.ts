export function shuffle(arr: any[]) {
    let aux = 0;
    let temp = 0;
    for(let i=arr.length-1; i > 0;i--) {
        aux = Math.floor(i * Math.random());
        temp = arr[i];
        arr[i] = arr[aux];
        arr[aux] = temp;
    }

    return arr;
}