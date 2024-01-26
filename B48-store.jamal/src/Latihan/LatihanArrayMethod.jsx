import { Text } from '@chakra-ui/react'

const LatihanArrayMethod = () => {

  const namaBuah = [
    {
      id: 1,
      name: 'mangga',
      price: 20000
    },
    {
      id: 2,
      name: 'pisang',
      price: 30000
    },
    {
      id: 3,
      name: 'jeruk',
      price: 50000
    }
  ]
  const namaminuman = [
    {
      id: 1,
      name: 'teh',
      price: 40000
    },
    {
      id: 2,
      name: 'kopi',
      price: 30000
    },
    {
      id: 3,
      name: 'susu',
      price: 50000
    }
  ]
  // length = panjang sebuah array
  const buah = ['mangga', 'pisang', 'jeruk']
  console.log("buah.length", buah.length, buah)

  // Object.keys(buah) = menghitung jumlah tertinggi dari angka array
  // misal 1 2 5 9 maka di hitung ada 9 buah array
  buah[7] = "anggur" // menambahkan buah
  console.log('Object.keys(buah)', Object.keys(buah));

  buah.length = 2 // menghapus buah dari belakang
  console.log(' buah.length = 2  ', Object.keys(buah), buah);



  //   Array.prototipe.concat()
  // Metode concat()instance Arraydigunakan untuk menggabungkan dua atau lebih array. Metode ini tidak mengubah array yang ada, melainkan mengembalikan array baru.

  const array1 = ['a', 'b', 'c']
  const array2 = ['d', 'e', 'f']
  const array3 = array1.concat(array2) //mengabungkan isi array menjadi satu array
  console.log('array1.concat(array2)', array1, array2, array3);
  //   Keterangan
  // Metode ini concatmembuat array baru. Array pertama-tama akan diisi oleh elemen-elemen dalam objek yang dipanggil. Kemudian, untuk setiap argumen, nilainya akan digabungkan ke dalam array — untuk objek normal atau primitif, argumen itu sendiri akan menjadi elemen dari array terakhir; untuk array atau objek mirip array dengan properti Symbol.isConcatSpreadableyang disetel ke nilai kebenaran, setiap elemen argumen akan ditambahkan secara independen ke array akhir. Metode ini concattidak berulang menjadi argumen array bersarang.
  // Metodenya concat()adalah metode penyalinan . Itu tidak mengubah thisatau salah satu array yang disediakan sebagai argumen melainkan mengembalikan salinan dangkal yang berisi elemen yang sama dengan yang dari array asli.


  //menggabungkan 3 array atau lebih dengan metode concat bahkan bisa mengabungkan array bersarang

  const arrayA = ['a', 'b', 'c']
  const arrayB = ['d', 'e', 'f']
  const arrayC = [1, 2, 3, 4, 5]
  const arrayD = ["mangga", "jeruk", "pisang"]
  //cara 1
  const gabungSemuaArrayMenggunakanspredOprator = [...arrayA, ...arrayB, ...arrayC, ...arrayD]
  console.log('gabungSemuaArrayMenggunakanspredOprator', gabungSemuaArrayMenggunakanspredOprator, arrayA, arrayB, arrayC, arrayD)
  // cara 2
  const gabungSemuaArray = arrayA.concat(arrayB, arrayC, arrayD,)
  console.log('gabungSemuaArray', gabungSemuaArray, arrayA, arrayB, arrayC, arrayD)

  const letters = ["a", "b", "c"];

  const alphaNumeric = letters.concat(1, [2, 3]);

  console.log("const alphaNumeric = letters.concat(1, [2, 3]);", alphaNumeric);
  // results in ['a', 'b', 'c', 1, 2, 3]

  console.log("///////////////////////////////////////////////////////////////////////////")


  // Array.prototipe.copyWithin()
  // Menyalin elemen dari indeks 0 hingga 2 ke indeks 2
  // array.copyWithin(2, 0, 3);
  // Metode ini akan menyalin elemen dari indeks start hingga end - 1 ke indeks target. Ini dapat digunakan untuk mengganti atau menggeser elemen dalam array tanpa memodifikasi panjangnya. Contoh penggunaannya adalah sebagai berikut:

  const arrayCopyWriten = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  console.log("arrayCopyWriten", arrayCopyWriten);
  console.log("arrayCopyWriten", arrayCopyWriten, arrayCopyWriten.copyWithin(1, 2, 5));

  console.log("///////////////////////////////////////////////////////////////////////////")
  // Array.prototipe.entri()
  const prototipeentri = ["a", "b", "c"];
  console.log("prototipeentri", prototipeentri);
  console.log("prototipeentri", prototipeentri, prototipeentri.entries());

  const entries = prototipeentri.entries()
  console.log("entries ", entries.next().value);
  console.log("entries ", entries.next().value);
  console.log("entries ", entries.next().value);
  console.log("entries ", entries.next().value);

  //Jadi, entries() adalah cara kita mengetahui nomor dan jenis nilai array dalam array kita, atau indeks dan elemen dalam array JavaScript. 
  // Kemudian, metode next() digunakan untuk mendapatkan pasangan nilai indeks dan elemen dari iterator. Dalam setiap panggilan next(), metode tersebut mengembalikan objek dengan properti value yang berisi pasangan nilai indeks dan elemen dari array. 
  //
  let array = ['a', 'b', 'c'];

  let iterator = array.entries();

  console.log(iterator.next().value); // Output: [0, 'a']
  //              [0,   next()        'a']
  console.log(iterator.next().value); // Output: [1, 'b']
  console.log(iterator.next().value); // Output: [2, 'c']

  console.log("///////////////////////////////////////////////////////////////////////////")
  // Array.prototype.every() artinya setiap() dan Ini mengembalikan nilai Boolean.
  // const apakah = (nilaisaatini) => nilaisaatini < 40

  // vevry sangat cocok digunakan untuk angka untuk menghitung apakah jumlah array palingtingi atau tidak
  const apakah = (nilaisaatini) => nilaisaatini < 8;
  const nilai = [1, 2, 3, 4, 7]

  function isBigEnough(element) {
    return element >= 10;
  }

  [12, 5, 8, 130, 44].every(isBigEnough); // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true

  console.log("apakah.every(nilai)", nilai.every(apakah))

  console.log("///////////////////////////////////////////////////////////////////////////")
  // Array.prototype.fill()
  const filll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("filll", filll.fill(0, 3, 9));
  // hasilnya Array(10) [ 1, 2, 3, 0, 0, 0, 0, 0, 0, 10 ]
  console.log("filll", filll.fill(3, 9));
  //hasilnya  Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 3 ]

//   fill(value)
// fill(value, start)
// fill(value, start, end)


console.log("///////////////////////////////////////////////////////////////////////////")

// Array.prototipe.filter()
const filterr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// mencari array yang kurang dari 5
const filtered = filterr.filter((element) => element < 5);
console.log("filterr", filtered); // [1, 2, 3, 4]



const filterr2 = ['badriana', 'bayu','bahrudin', 'babay', 'madropi']

// mencari array yang panjangnya kurang dari 6
const filtered2 = filterr2.filter((element) => element.length < 6);
console.log("filterr2", filtered2);   // ['bayu', 'babay']


console.log("///////////////////////////////////////////////////////////////////////////")
// Array.prototipe.find() artinya temukan. hanya 1 saja

const findd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultindd = findd.find((element) => element > 5);
console.log("findd", resultindd); // 6

const findd2 = ['badriana', 'bayu','bahrudin', 'babay', 'madropi']
const resultindd2 = findd2.find((element) => element === 'badriana');
console.log("findd2", resultindd2); // 'bayu'


console.log("///////////////////////////////////////////////////////////////////////////")

// Array.prototipe.findIndex()
const array111 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isLargeNumber = (element) => element > 11;

console.log(array111.findIndex(isLargeNumber));
// Expected output: -1

console.log("///////////////////////////////////////////////////////////////////////////")

// Array.prototipe.flat() artinya datar() meratakan atau menggabungkan array bersarang 
const flatt = ["a","b",["c","d","e",["f","g",[1,2,3,4]]]]; 
console.log("flatt", flatt.flat(2))
console.log("flatt", flatt.flat(Infinity))

console.log("///////////////////////////////////////////////////////////////////////////")
const hargabuah = namaBuah.map(i => i.price)
console.log("hargabuah", hargabuah)
const hargaminuman = namaminuman.map(i => i.price)
console.log("hargaminuman", hargaminuman)

const total = hargabuah.reduce((a, b) => (
  a + b
),hargaminuman)

console.log("total", total)








































// Metode: concat()
const semuaItem = namaBuah.concat(namaminuman);
console.log(semuaItem);
// Output: [ { id: 1, name: 'mangga', price: 20000 }, { id: 1, name: 'teh', price: 40000 } ]

// Metode: entries()
const buahEntries = Object.entries(namaBuah[0]);
console.log(buahEntries);
// Output: [ [ 'id', 1 ], [ 'name', 'mangga' ], [ 'price', 20000 ] ]

// Metode: every()
const semuaHargaDiBawah50000 = semuaItem.every(item => item.price < 50000);
console.log(semuaHargaDiBawah50000);
// Output: true (karena semua item memiliki harga di bawah 50000)

// Metode: fill()
const arrayKosong = new Array(3);
arrayKosong.fill('isi');
console.log(arrayKosong);
// Output: [ 'isi', 'isi', 'isi' ]

// Metode: filter()
const itemDenganHargaDiatas30000 = semuaItem.filter(item => item.price > 30000);
console.log(itemDenganHargaDiatas30000);
// Output: [ { id: 1, name: 'teh', price: 40000 } ]

// Metode: find()
const buahDitemukan = semuaItem.find(item => item.name === 'mangga');
console.log(buahDitemukan);
// Output: { id: 1, name: 'mangga', price: 20000 }

// Metode: flat()
const arrayNested = [1, [2, 3], [4, [5]]];
const arrayFlat = arrayNested.flat(2);
console.log(arrayFlat);
// Output: [ 1, 2, 3, 4, 5 ]

// Metode: forEach()
semuaItem.forEach(item => {
  console.log(`Nama: ${item.name}, Harga: ${item.price}`);
});
// Output: Nama: mangga, Harga: 20000
//         Nama: teh, Harga: 40000

// Metode: from()
const arrayDariNama = Array.from('JavaScript');
console.log(arrayDariNama);
// Output: [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]

// Metode: includes()
const apakahTehAda = semuaItem.some(item => item.name === 'teh');
console.log(apakahTehAda);
// Output: true (karena 'teh' ada dalam array)

// Metode: indexOf()
const indexMangga = semuaItem.findIndex(item => item.name === 'mangga');
console.log(indexMangga);
// Output: 0 (karena 'mangga' ada di indeks 0 dalam array)

// Metode: isArray()
console.log(Array.isArray(semuaItem));
// Output: true (karena semuaItem adalah array)

// Metode: join()
const namaBuahString = namaBuah.map(item => item.name).join(', ');
console.log(namaBuahString);
// Output: 'mangga' (menggabungkan nama buah menjadi string terpisah oleh koma)

// Metode: keys()
const keysBuah = Object.keys(namaBuah[0]);
console.log(keysBuah);
// Output: [ 'id', 'name', 'price' ] (mengambil kunci-kunci properti objek)

// Metode: map()
const hargaDikaliDua = semuaItem.map(item => ({ ...item, price: item.price * 2 }));
console.log(hargaDikaliDua);
// Output: [ { id: 1, name: 'mangga', price: 40000 }, { id: 1, name: 'teh', price: 80000 } ]

// Metode: of()
const arrayBaru = Array.of(1, 2, 3, 4, 5);
console.log(arrayBaru);
// Output: [ 1, 2, 3, 4, 5 ] (membuat array baru dengan elemen-elemen yang diberikan)

// Metode: pop()
const buahTerakhir = semuaItem.pop();
console.log(buahTerakhir);
// Output: { id: 1, name: 'teh', price: 40000 } (elemen terakhir dihapus dari array)

// Metode: push()
semuaItem.push({ id: 2, name: 'jeruk', price: 30000 });
console.log(semuaItem);
// Output: [ { id: 1, name: 'mangga', price: 20000 }, { id: 2, name: 'teh', price: 40000 }, { id: 2, name: 'jeruk', price: 30000 } ] (menambahkan elemen baru ke array)

// Metode: reduce()
const totalHarga = semuaItem.reduce((acc, item) => acc + item.price, 0);
console.log(totalHarga);
// Output: 90000 (menghitung total harga dari semua item)

// Metode: reverse()
const reversedItem = [...semuaItem].reverse();
console.log(reversedItem);
// Output: [ { id: 2, name: 'jeruk', price: 30000 }, { id: 2, name: 'teh', price


////////////////////////////
const itemPertama = semuaItem.shift();
console.log(itemPertama);
// Output: { id: 1, name: 'mangga', price: 20000 } (elemen pertama dihapus dari array)


const sliceItem = semuaItem.slice(1, 2);
console.log(sliceItem);
// Output: [ { id: 2, name: 'teh', price: 40000 } ] (membuat salinan elemen dari indeks 1 hingga 1, indeks 2 tidak termasuk)

const adaItemDenganHargaDiatas25000 = semuaItem.some(item => item.price > 25000);
console.log(adaItemDenganHargaDiatas25000);
// Output: true (karena ada item dengan harga di atas 25000 dalam array)

const itemDenganUrutanAlfabet = [...semuaItem].sort((a, b) => a.name.localeCompare(b.name));
console.log(itemDenganUrutanAlfabet);
// Output: [ { id: 2, name: 'jeruk', price: 30000 }, { id: 1, name: 'mangga', price: 20000 }, { id: 2, name: 'teh', price: 40000 } ] (mengurutkan item berdasarkan nama secara alfabetis)

const indexItemTeh = semuaItem.findIndex(item => item.name === 'teh');
semuaItem.splice(indexItemTeh, 1, { id: 2, name: 'susu', price: 35000 });
console.log(semuaItem);
// Output: [ { id: 1, name: 'mangga', price: 20000 }, { id: 2, name: 'susu', price: 35000 }, { id: 2, name: 'jeruk', price: 30000 } ] (mengganti item 'teh' dengan 'susu' dalam array)

const arrayToString = semuaItem.toString();
console.log(arrayToString);
// Output: " [object Object],[object Object],[object Object] " (mengubah array menjadi string)

const nilaiItem = Object.values(semuaItem[0]);
console.log(nilaiItem);
// Output: [ 1, 'mangga', 20000 ] (mengambil nilai-nilai properti objek dalam array pertama)




















  return (
    <>
      <Text>
        Array Latihan Array Method
      </Text>

    </>
  )
}

export default LatihanArrayMethod
