let n = +prompt("bir sayı giriniz:")

let toplam = 0 ;

for(let i = 1 ; i <=n ;i++ ){
    // toplam = toplam + i ;
    toplam += i;
    console.log(toplam ,i)
}
console.log("Sonuç:" , toplam);