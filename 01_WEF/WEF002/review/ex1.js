const data = [
    {
        name: "Hong Kong",
        topLevelDomain: [".hk"],
        alpha2Code: "HK",
        alpha3Code: "HKG",
        callingCodes: ["852"],
        capital: "City of Victoria",
        altSpellings: ["HK", "香港"],
        region: "Asia",
        subregion: "Eastern Asia",
        population: 7324300,
        latlng: [22.25, 114.16666666],
        demonym: "Chinese",
        area: 1104.0,
        gini: 53.3,
        timezones: ["UTC+08:00"],
        borders: ["CHN"],
        nativeName: "香港",
        numericCode: "344",
        currencies: [
            {
                code: "HKD",
                name: "Hong Kong dollar",
                symbol: "$",
            },
        ],
        languages: [
            {
                iso639_1: "en",
                iso639_2: "eng",
                name: "English",
                nativeName: "English",
            },
            {
                iso639_1: "zh",
                iso639_2: "zho",
                name: "Chinese",
                nativeName: "中文 (Zhōngwén)",
            },
        ],
        translations: {
            de: "Hong Kong",
            es: "Hong Kong",
            fr: "Hong Kong",
            ja: "香港",
            it: "Hong Kong",
            br: "Hong Kong",
            pt: "Hong Kong",
            nl: "Hongkong",
            hr: "Hong Kong",
            fa: "هنگ‌کنگ",
        },
        flag: "https://flagcdn.com/hk.svg",
        regionalBlocs: [],
        cioc: "HKG",
    },
];

function capitalizeFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const hk = data[0];

for (let key in hk) {
    if (hk[key] instanceof Object) {
        // hk[key] is object or array
        if (Array.isArray(hk[key])) {
            // hk[key] is array

            // iterate through array
            for (let element of hk[key]) {
                // check if element is object
                if (element instanceof Object) {
                    // element is object
                    for (let subElementKey in element) {
                        // subElementKey is key
                        // iterate through object
                        console.log(capitalizeFirstChar(key) + "_" + subElementKey + ":" + element[subElementKey])
                    }
                }
                else {
                    console.log(capitalizeFirstChar(key) + ":" + element)
                }
            }
            if (hk[key].length == 0) {
                console.log(capitalizeFirstChar(key) + ":null")
            }

        } else {
            // hk[key] is object
            for (let key2 in hk[key]) {
                console.log(capitalizeFirstChar(key) + "_" + key2 + ":" + hk[key][key2])
            }
        }
    } else {
        console.log(capitalizeFirstChar(key) + ": " + hk[key]);
    }
} 