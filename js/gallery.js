const image_gallery = document.querySelector(".image--gallery")
const loading = '<h1 class="loader">Loading...</h1>'

const showImages = () => {
    baseUrl = 'https://waltersantosfilho.com.br/content/images/'
    images = [];
    images.push(baseUrl + '2022/06/20200712_1107_Koffee_Station03.jpg');
    images.push(baseUrl + '2022/06/20200717_1112_LeCafeGanmac01.jpg');
    images.push(baseUrl + '2022/06/20200717_1658_SteepStreetCoffeeHouse01.jpg');
    images.push(baseUrl + '2022/06/20200718_0959_GrindNBake05.jpg');
    images.push(baseUrl + '2022/06/20200719_0957SteepStreetCoffeHouse01-1.jpg');
    images.push(baseUrl + '2022/06/20200721_0959_DiamondCafe01.jpg');
    images.push(baseUrl + '2022/06/20200729_1143_BrownsSalon03.jpg');
    images.push(baseUrl + '2022/06/2020_01_03_1018_Supernova_Coffee_Roasters_01-1.jpg');
    images.push(baseUrl + '2022/06/2020_01_03_1214_Casa_Bauducco_Shop_Palladium_02-1.jpg');
    images.push(baseUrl + '2022/06/2020_01_04_0847_Kave_Khanes_02-1.jpg');
    images.push(baseUrl + '2022/06/2020_01_04_0922_Cafe_do_Mercado_03-1.jpg');
    images.push(baseUrl + '2022/06/2020_01_10_1259_Manifesto_Cafe_02-1.jpg');
    images.push(baseUrl + '2022/06/2020_01_13_1308_Inked_Shop_Metropolitan_03-1.jpg');
    images.push(baseUrl + '2022/06/2020_01_16_1315_Chocolateria_Brasileira_Shop_Estacao_03.jpg');
    images.push(baseUrl + '2022/06/2020_02_02_1750_Cafe_do_Viajante_02.jpg');
    images.push(baseUrl + '2022/06/Black_Anchor_Coffee_Co_20201026_125338090.jpg');
    images.push(baseUrl + '2022/06/Caf_Do_Mercado_20201101_101836229.jpg');
    images.push(baseUrl + '2022/06/Caf_do_TOP_20201105_145845088.jpg');
    images.push(baseUrl + '2022/06/Comedoria_CantoGrande_Bombinhas_20210102_093844189.jpg');
    images.push(baseUrl + '2022/06/Fingen0.jpg');
    images.push(baseUrl + '2022/06/GoCoffee_20201209_083223302.jpg');
    images.push(baseUrl + '2022/06/IMG_20200527_155415815_Kauf_01.jpg');
    images.push(baseUrl + '2022/06/IMG_20200919_120102386_Gourmeteria_01.jpg');
    images.push(baseUrl + '2022/06/IMG_20200923_192827955_Liquori_Estacao_01.jpg');
    images.push(baseUrl + '2022/06/IMG_20200926_105052423_Degusto_01.jpg');
    images.push(baseUrl + '2022/06/IMG_20200930_125306694_Kopenhagen_01.jpg');
    images.push(baseUrl + '2022/06/IMG_20201010_102721725_Lucca_Cafe_01.jpg');
    images.push(baseUrl + '2022/06/IMG_20210926_1828_CafeSweetRosa_01.jpg');
    images.push(baseUrl + '2022/06/IMG_20220416_124114206_HDR_Poa-CheeseCake-BubbleTea.jpg');
    images.push(baseUrl + '2022/06/IMG_20220421_110248755_HDR_CoffeeLab.jpg');
    images.push(baseUrl + '2022/06/IMG_20220423_182845915_HDR_1_AREAP_03.jpg');
    images.push(baseUrl + '2022/06/IMG_20220507_085759651_Lins_01.jpg');
    images.push(baseUrl + '2022/06/IMG_20220507_152311880_HDR_MokkaCafe-.jpg');
    images.push(baseUrl + '2022/06/IMG_20220508_095338528_HDR_ParqueDaLuz.jpg');
    images.push(baseUrl + '2022/06/IMG_20220606_091511531_HDR.jpg');
    images.push(baseUrl + '2022/06/IMG_20220606_150310200_HDR.jpg');
    images.push(baseUrl + '2022/06/IMG_20220609_143646251.jpg');
    images.push(baseUrl + '2022/06/IMG_20220619_104709678.jpg');
    images.push(baseUrl + '2022/06/IMG_20220620_142131387.jpg');
    images.push(baseUrl + '2022/06/Jauense_20201017_092759017.jpg');
    images.push(baseUrl + '2022/06/JoyJoyCafe_20210912_165617937_HDR.jpg');
    images.push(baseUrl + '2022/06/Liquori_Comendador_20201017_132634601.jpg');
    images.push(baseUrl + '2022/06/O_Padeiro_20210925_123848436_HDR-1.jpg');
    images.push(baseUrl + '2022/06/PraticFit_20201212_133703536.jpg');
    images.push(baseUrl + '2022/06/Season_Coffee_20210714_165114211_HDR.jpg');
    images.push(baseUrl + '2022/07/IMG_20220705_123343404.jpg');
    images.push(baseUrl + '2022/07/IMG_20220705_173307045.jpg');
    shuffle(images);
    createImageGallery(images);
}

const createImageGallery = images => {
    let output = ""
    images.forEach(element => {
        output += `<img src="${element}" alt="${element}" class="image__item" />`
    })
    image_gallery.innerHTML = output
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

// Event listeners
document.addEventListener("DOMContentLoaded", showImages)