const productsData = {
    "1": {
        title: "Bogolan Tissu Artisanal",
        origin: "Mali · Textiles",
        rating: "★★★★★",
        ratingCount: "(24 avis)",
        price: "45 900 FCFA",
        desc: "Tissu traditionnel malien teint à la boue fermentée selon des méthodes ancestrales. Chaque motif raconte une histoire de la culture bambara.",
        detailOrigin: "Mali",
        artisanName: "Sekou Coulibaly",
        artisanImage: "../images/seller-malian.jpg",
        category: "Textiles",
        image: "../images/product-bogolan.jpg",
        gallery: [
            "../images/product-bogolan.jpg",
            "../images/product-tapis-africain.jpg",
            "../images/product-panier-bolga.jpg",
            "../images/product-suspension-raphia.jpg"
        ]
    },
    "2": {
        title: "Vase Berbere en Terre Cuite",
        origin: "Maroc · Ceramique",
        rating: "★★★★★",
        ratingCount: "(24 avis)",
        price: "64 900 FCFA",
        desc: "Vase berbere faconne a la main a partir d'argile locale, avec un motif traditionnel et une finition premium.",
        detailOrigin: "Maroc",
        artisanName: "Hassan El Fassi",
        artisanImage: "../images/seller-moroccan-potter.jpg",
        category: "Ceramique",
        image: "../images/product-vase-berbere.jpg",
        gallery: [
            "../images/product-vase-berbere.jpg",
            "../images/product-theiere-martelee.jpg",
            "../images/product-boite-bijoux.jpg",
            "../images/product-suspension-raphia.jpg"
        ]
    },
    "3": {
        title: "Boucles d'Oreilles Maasai",
        origin: "Kenya · Bijoux",
        rating: "★★★★☆",
        ratingCount: "(18 avis)",
        price: "22 900 FCFA",
        desc: "Boucles d'oreilles colorees en perles, fabriquees a la main par des artisanes Maasai.",
        detailOrigin: "Kenya",
        artisanName: "Nia Moyo",
        artisanImage: "../images/seller-woman-jewelry.jpg",
        category: "Bijoux",
        image: "../images/product-boucles-maasai.jpg",
        gallery: [
            "../images/product-boucles-maasai.jpg",
            "../images/product-boite-bijoux.jpg",
            "../images/product-vase-berbere.jpg",
            "../images/product-suspension-raphia.jpg"
        ]
    },
    "4": {
        title: "Panier Bolga Naturel",
        origin: "Ghana · Accessoires",
        rating: "★★★★★",
        ratingCount: "(31 avis)",
        price: "29 900 FCFA",
        desc: "Panier tresse a la main en fibres naturelles, ideal pour le marche et la decoration interieure.",
        detailOrigin: "Ghana",
        artisanName: "Abena Mensah",
        artisanImage: "../images/seller-ghanaian.jpg",
        category: "Accessoires",
        image: "../images/product-panier-bolga.jpg",
        gallery: [
            "../images/product-panier-bolga.jpg",
            "../images/product-bogolan.jpg",
            "../images/product-suspension-raphia.jpg",
            "../images/product-tapis-africain.jpg"
        ]
    },
    "5": {
        title: "Masque Dan Traditionnel",
        origin: "Cote d'Ivoire · Decoration",
        rating: "★★★★★",
        ratingCount: "(12 avis)",
        price: "74 900 FCFA",
        desc: "Masque rituel Dan finement sculpte dans le bois, avec une patine authentique et une presence forte.",
        detailOrigin: "Cote d'Ivoire",
        artisanName: "Koffi Yao",
        artisanImage: "../images/seller-young-man.jpg",
        category: "Decoration",
        image: "../images/product-masque-dan.jpg",
        gallery: [
            "../images/product-masque-dan.jpg",
            "../images/product-boite-bijoux.jpg",
            "../images/product-tapis-africain.jpg",
            "../images/product-theiere-martelee.jpg"
        ]
    },
    "6": {
        title: "Savons au Beurre de Karite",
        origin: "Burkina Faso · Accessoires",
        rating: "★★★★☆",
        ratingCount: "(45 avis)",
        price: "9 900 FCFA",
        desc: "Savons naturels artisanaux au pur beurre de karite pour hydrater et nourrir la peau en douceur.",
        detailOrigin: "Burkina Faso",
        artisanName: "Fatoumata Kabore",
        artisanImage: "../images/seller-woman-ceramics.jpg",
        category: "Accessoires",
        image: "../images/product-savon-karite.jpg",
        gallery: [
            "../images/product-savon-karite.jpg",
            "../images/product-suspension-raphia.jpg",
            "../images/product-bogolan.jpg",
            "../images/product-theiere-martelee.jpg"
        ]
    },
    "7": {
        title: "Tapis Artisanal Africain",
        origin: "Senegal · Decoration",
        rating: "★★★★☆",
        ratingCount: "(14 avis)",
        price: "42 900 FCFA",
        desc: "Tapis artisanal tisse main, aux motifs elegants et a la texture dense pour un interieur chaleureux.",
        detailOrigin: "Senegal",
        artisanName: "Amina Diallo",
        artisanImage: "../images/seller-woman-ceramics.jpg",
        category: "Decoration",
        image: "../images/product-tapis-africain.jpg",
        gallery: [
            "../images/product-tapis-africain.jpg",
            "../images/product-bogolan.jpg",
            "../images/product-panier-bolga.jpg",
            "../images/product-suspension-raphia.jpg"
        ]
    },
    "8": {
        title: "Theiere Artisanale Martelee",
        origin: "Maroc · Cuisine",
        rating: "★★★★★",
        ratingCount: "(19 avis)",
        price: "37 900 FCFA",
        desc: "Theiere artisanale martelee a la main avec une finition brillante, ideale pour le service du the.",
        detailOrigin: "Maroc",
        artisanName: "Youssef Bennis",
        artisanImage: "../images/seller-moroccan-potter.jpg",
        category: "Cuisine",
        image: "../images/product-theiere-martelee.jpg",
        gallery: [
            "../images/product-theiere-martelee.jpg",
            "../images/product-vase-berbere.jpg",
            "../images/product-boite-bijoux.jpg",
            "../images/product-savon-karite.jpg"
        ]
    },
    "9": {
        title: "Suspension Tressee en Raphia",
        origin: "Madagascar · Decoration",
        rating: "★★★★★",
        ratingCount: "(11 avis)",
        price: "31 900 FCFA",
        desc: "Suspension en raphia tressee a la main, parfaite pour creer une ambiance naturelle et contemporaine.",
        detailOrigin: "Madagascar",
        artisanName: "Lina Raharisoa",
        artisanImage: "../images/seller-woman-jewelry.jpg",
        category: "Decoration",
        image: "../images/product-suspension-raphia.jpg",
        gallery: [
            "../images/product-suspension-raphia.jpg",
            "../images/product-panier-bolga.jpg",
            "../images/product-tapis-africain.jpg",
            "../images/product-vase-berbere.jpg"
        ]
    },
    "10": {
        title: "Boite a Bijoux Sculptee",
        origin: "Cote d'Ivoire · Bijoux",
        rating: "★★★★☆",
        ratingCount: "(9 avis)",
        price: "27 900 FCFA",
        desc: "Boite a bijoux en bois sculpte avec finitions minutieuses, ideale pour ranger vos pieces precieuses.",
        detailOrigin: "Cote d'Ivoire",
        artisanName: "Kouadio N'Dri",
        artisanImage: "../images/seller-ghanaian.jpg",
        category: "Bijoux",
        image: "../images/product-boite-bijoux.jpg",
        gallery: [
            "../images/product-boite-bijoux.jpg",
            "../images/product-boucles-maasai.jpg",
            "../images/product-masque-dan.jpg",
            "../images/product-vase-berbere.jpg"
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "1";

    if (!productsData[productId]) {
        return;
    }

    const product = productsData[productId];

    const bcCategory = document.getElementById("bc-category");
    if (bcCategory) bcCategory.textContent = product.category;

    const bcTitle = document.getElementById("bc-title");
    if (bcTitle) bcTitle.textContent = product.title;

    const mainImg = document.getElementById("main-product-image");
    const gallery = Array.isArray(product.gallery) && product.gallery.length > 0 ? product.gallery : [product.image];

    if (mainImg) {
        mainImg.src = gallery[0];
        mainImg.alt = product.title;
    }

    const originCat = document.getElementById("prod-origin-cat");
    if (originCat) originCat.textContent = product.origin;

    const prodTitle = document.getElementById("prod-title");
    if (prodTitle) prodTitle.textContent = product.title;

    const prodStars = document.getElementById("prod-rating-stars");
    if (prodStars) prodStars.textContent = product.rating;

    const prodCount = document.getElementById("prod-rating-count");
    if (prodCount) prodCount.textContent = product.ratingCount;

    const prodPrice = document.getElementById("prod-price");
    if (prodPrice) prodPrice.textContent = product.price;

    const prodDesc = document.getElementById("prod-desc");
    if (prodDesc) prodDesc.textContent = product.desc;

    const metaOrigin = document.getElementById("meta-origin");
    if (metaOrigin) metaOrigin.textContent = product.detailOrigin;

    const metaArtisan = document.getElementById("meta-artisan");
    if (metaArtisan) metaArtisan.textContent = product.artisanName;

    const metaCategory = document.getElementById("meta-category");
    if (metaCategory) metaCategory.textContent = product.category;

    const artisanImgEl = document.getElementById("meta-artisan-img");
    if (artisanImgEl) {
        artisanImgEl.src = product.artisanImage;
        artisanImgEl.alt = product.artisanName;
    }

    const thumbs = Array.from(document.querySelectorAll(".thumb"));
    if (thumbs.length > 0) {
        thumbs.forEach((thumb, index) => {
            const src = gallery[index % gallery.length];
            const thumbImg = thumb.querySelector("img");

            thumb.setAttribute("data-gallery-thumb", src);
            thumb.classList.toggle("active", index === 0);

            if (thumbImg) {
                thumbImg.src = src;
                thumbImg.alt = `${product.title} - vue ${index + 1}`;
            }
        });
    }
});
