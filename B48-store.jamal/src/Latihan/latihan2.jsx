import { Text } from "@chakra-ui/react"

const Latihan2 = () => {
    const buah = [
        {
            id: 1,
            name: 'mangga asem manis',
            price: 1
        },
        {
            id: 2,
            name: 'pisang',
            price: 2
        },
        {
            id: 3,
            name: 'jeruk bali',
            price: 3
        }
    ]
    const minuman = [
        {
            id: 1,
            name: 'teh',
            price: 1
        },
        {
            id: 2,
            name: 'kopi',
            price: 2
        },
        {
            id: 3,
            name: 'susu',
            price: 3
        }
    ]
    const makanan = [
        {
            id: 1,
            name: 'teh',
            price: 1
        }]

    console.log('namaminuman', minuman)
    console.log("namaBuah", buah)
    console.log("makanan", makanan)


    // const gabung = namaminuman.push(makanan)
    //push daalah fungsi untuk menambahkan data kedalam array dan merubah data aslinya. bahkan bisa membuat array bersarang
    // console.log(gabung)
    // const gabungan = namaminuman.concat(makanan, namaBuah)
    // concat adalah fungsi untuk menggabungakn array terpisah menjadi satu 
    //ada dua cara 1 menggunakan concat 2 menggunakan spread oprator
    // const gabungan2 = [...minuman, ...makanan, ...buah]
    // console.log(gabungan2)
    // console.log(gabungan)

    // const entriess = Object.entries(minuman)
    // entries adalah fungsi untuk menambahkan key dan value kesebuah nilai array
    // console.log("entriess",entriess.length);
    // let id = 3
    // let harga = 1
    // find adalah fungsi untuk mencari data bedasarkan yang sesuai atau mendekati yang di cari
    // const idid = buah.find((item) => item.id === id)
    // console.log("harga id =>", idid.price)

    // const hitungTotalHarga = minuman.reduce((total, item) => (
    //     console.log("item", item.price),
    //     total + item.price
    // ), harga)
    //reduce adalah fungsi untuk menjumlahkan data data yayng ada di array dan menjumlahkan dengan angka luar misal dari variabel yang kita deklarasikan
    // console.log("hitungTotalHarga", hitungTotalHarga) //hargaminuman
    // const id = 1
    // const temukanMinuman = minuman.find((item) => item.id > id)
    // console.log("temukanMinuman", temukanMinuman)
    // const hapusPop = minuman.pop() 
    //pop adalah fungsi untuk menghapus data terakhir dari array
    // console.log("hapusPop", hapusPop)
    // console.log("minuman", minuman)

    // const apaituclice = minuman.slice(id)
    //slice adalah mengambil data dari tedepan berdasarkan parameter dan mengembalikan data selin dari parameter tetapi tidak merubah data sebelumnya
    // console.log("apaituclice", apaituclice)
    // console.log("minuman", minuman)

    // minuman.forEach((item) => {
    //     console.log(`ID: ${item.id}, Nama: ${item.name}, Harga: ${item.price}`);
    // });

    // minuman.forEach((item) => {
    //     console.log(`ID: ${item.id}, Nama: ${item.name}, Harga: ${item.price}`);
    //     // Output: ID: 1, Nama: teh, Harga: 40000
    // });
    // console.log("minuman", minuman)
    // const angka = [1, 2, 3, 4, 5]
    // const aa = angka.sort((a, b) => a - b)
    // console.log("aa", aa)
    // console.log("angka", angka)

    // buah.sort((a, b) => a.name.length - b.name.length) 
    //     console.log("sortbuah", buah)
    // //short adalah fungdi untuk mengurutkan elemen atau nilai dalam sebuah array miasl dari yang terkecil hingga terbesar dan masih banyak lagi

    // const slices = minuman.slice(1)
    // console.log("slices", slices)
    // console.log("minuman", minuman)
    // membua salinan dari barisan yang di pilih , misalkan kita punya 3 elemen dalam array
    // lalu kita slice di nomor ke 2 maka yang akan di salin adalah elemen ke 1 dan ke 3
    return (
        <>
            <Text>push, concat, reduce, find, pop, forEach,short,slice</Text>
            <Text>hmmm</Text>
        </>
    )
}

export default Latihan2
