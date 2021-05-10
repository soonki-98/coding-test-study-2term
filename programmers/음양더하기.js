function solution(absolutes, signs) {
    
    let sum = 0;

    for (let i in signs) {
        if (!signs[i]) absolutes[i] *= -1;
        sum += absolutes[i]
    }
    return sum;
}

// function solution(absolutes, signs) {
    
//     const sum = absolutes.reduce((acc, val, i) => 
//                                  {if(!signs[i]) val *= -1;
//                                   return val + acc;} ,0);
//     return sum;
// }