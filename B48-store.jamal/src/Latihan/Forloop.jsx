
const Forloop = () => {

    // let jumlahangkot = 10
    // let angkotBeroprasi = 4
    // let nomorAngkot = 1


    // for(let angkot = nomorAngkot; angkot <= jumlahangkot; angkot++) {
    //     if(angkot < angkotBeroprasi) {
    //         console.log(`angkot ${angkot} beroperasi`)
    //     }else{
    //          console.log(`angkot ${angkot} tidak beroprasi`)
    //     }
    // }

    // for(let angkot = nomorAngkot; angkot <= jumlahangkot; angkot++) {
    //     if(angkot < angkotBeroprasi) {
    //         console.table(`angkot ${angkot} beroperasi`)
    //     }else if(angkot > 8){
    //         console.table(`angkot ${angkot} beroprasi`)
    //     }else{
    //         console.table(`angkot ${angkot} tidak beroprasi`)
    //     }
    // }

    // let primas = []
    // for (let i = 2; i < 12; i++) {
    //     let isPrime = true
    //     for (let j = 2; j < i; j++) {
    //         if (i % j === 0) {
    //             isPrime = false
    //             break
    //         }
    //     }
    //     if (isPrime) {
    //         primas.push(i)
    //     }
    // }
    // console.log(primas)

    // let prima = []
    // for(let i = 2; i < 12; i++){
    //     // console.log("i",i)
    //     let pr = true
    //     for(let q = 2; q < i; q++) {
    //         if(i % q === 0) {
    //             console.log("q",q)
    //             pr = false
    //         }
    //     }
    //     if(pr){
    //         prima.push(i)
    //     }
    // }
    // console.log(prima)

    // let arr = ['pisang', 'mangga', 'jeruk', 'jambu']


    // for(let buah = 0; buah < arr.length;buah++){
    //     console.log(arr[buah])
    // }



    const names = (name) => {
        const arr = ["a", "i", "u", "e", "o"]
        const pecah = name.split("")
        const filt = pecah.filter((item) => !arr.includes(item))
        const filt2 = pecah.filter((item) => arr.includes(item))
        const aa = filt.join("")


        console.log(aa.toLowerCase().replace(/\s/g, ''))
        const bb = filt2.join("").replace(/\s/g, '');
        console.log(bb.toLowerCase())
    }
    names("Saya Sedang Belajar JavaScript")

















    return (
        <div>

        </div>
    )
}

export default Forloop
