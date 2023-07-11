// Vergi oranlarını gösteren tüm butonları seç.
const buttons = document.querySelectorAll('.btn-outline-warning');

// Vergi oranının girildiği inputu seç.
const taxRateInput = document.querySelector('#taxRate');

// Tutarın girildiği inputu seç.
const priceInput = document.querySelector('#price');

// Hesaplama işlemini yapan butonu seç.
const calculateBtn = document.querySelector('.calculate');

// Genel toplamın yazıldığı span elementini seç.
const generalSumInfo = document.querySelector('.generalSum');

// Vergi değerinin yazıldığı span elementini seç.
const taxInfo = document.querySelector('.tax');

// Ara toplamın yazıldığı span elementini seç.
const subtotalInfo = document.querySelector('.subtotal');

// Vergi oranını tutan değişken:
let taxRate;

// Ara toplamı tutan değişken:
let araToplam;

// Vergi değerini tutan değişken:
let vergi;

// Tutar değerini tutan değişken:
let price;

// Vergi oranları butonlarına tıklandığında:
buttons.forEach(button => button.addEventListener('click', function(){
    // Vergi oranının başındaki '%' işaretini çıkar ve değeri sayıya dönüştürerek taxRate değişkenine ata.
    taxRate = parseInt(this.innerHTML.replace('%', ''));
    // Vergi oranını  gerekli inputun içine yaz.
    taxRateInput.value = taxRate;
}));

// Vergi oranının girildiği inputun değeri her değiştiğinde input değerini değiştir.
taxRateInput.addEventListener('change', function(e){
    taxRate = parseInt(e.target.value);
});

// Tutar oranının girildiği inputun değeri her değiştiğinde input değerini değiştir.
priceInput.addEventListener('change', function(e){
    price = parseInt(e.target.value);
});

// Hesaplama butonuna basıldığında vergi, genel toplam ve ara toplam değerlerini hesaplayarak gerekli yerlere yaz.
calculateBtn.addEventListener('click', function(){
    let genelToplam = parseInt(((price * taxRate) / 100) + price);
    generalSumInfo.innerHTML = `₺${genelToplam}`;
    taxInfo.innerHTML = `₺${genelToplam - price}`;
    subtotalInfo.innerHTML = `₺${price}`;
});