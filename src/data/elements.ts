interface ElementsType {
  [key: string]: {
    el_num: number;
    num_atom?: number;
    simb_atom?: string;
    name: string;
    atom_weight?: string;
    color?: string;
  }[];
}

export const elements: ElementsType = {
  line_1: [
    {
      el_num: 1,
      num_atom: 1,
      simb_atom: "H",
      name: "Hidrogênio",
      atom_weight: "1.008",
      color: "naoMetais",
    },
    {
      el_num: 1,
      name: "blank",
    },
    {
      el_num: 2,
      num_atom: 2,
      simb_atom: "He",
      name: "Hélio",
      atom_weight: "4.0026",
      color: "gasesNobres",
    },
  ],
  line_2: [
    {
      el_num: 1,
      num_atom: 3,
      simb_atom: "Li",
      name: "Lítio",
      atom_weight: "6.94",
      color: "metaisAlcalinos",
    },
    {
      el_num: 2,
      num_atom: 4,
      simb_atom: "Be",
      name: "Berílio",
      atom_weight: "9.9122",
      color: "metaisAlcalinosTerrosos",
    },
    {
      el_num: 2,
      name: "blank",
    },
    {
      el_num: 3,
      num_atom: 5,
      simb_atom: "B",
      name: "Boro",
      atom_weight: "10.81",
      color: "semimetais",
    },
    {
      el_num: 4,
      num_atom: 6,
      simb_atom: "C",
      name: "Carbono",
      atom_weight: "12.011",
      color: "naoMetais",
    },
    {
      el_num: 5,
      num_atom: 7,
      simb_atom: "N",
      name: "Nitrogênio",
      atom_weight: "14.007",
      color: "naoMetais",
    },
    {
      el_num: 6,
      num_atom: 8,
      simb_atom: "O",
      name: "Oxigênio",
      atom_weight: "15.999",
      color: "naoMetais",
    },
    {
      el_num: 7,
      num_atom: 9,
      simb_atom: "F",
      name: "Flúor",
      atom_weight: "18.998",
      color: "naoMetais",
    },
    {
      el_num: 8,
      num_atom: 10,
      simb_atom: "Ne",
      name: "Neônio",
      atom_weight: "20.18",
      color: "gasesNobres",
    },
  ],
  line_3: [
    {
      el_num: 1,
      num_atom: 11,
      simb_atom: "Na",
      name: "Sódio",
      atom_weight: "22.99",
      color: "metaisAlcalinos",
    },
    {
      el_num: 2,
      num_atom: 12,
      simb_atom: "Mg",
      name: "Magnésio",
      atom_weight: "24.305",
      color: "metaisAlcalinosTerrosos",
    },
    {
      el_num: 2,
      name: "blank",
    },
    {
      el_num: 3,
      num_atom: 13,
      simb_atom: "Al",
      name: "Alumínio",
      atom_weight: "26.982",
      color: "posTransicao",
    },
    {
      el_num: 4,
      num_atom: 14,
      simb_atom: "Si",
      name: "Silício",
      atom_weight: "28.085",
      color: "semimetais",
    },
    {
      el_num: 5,
      num_atom: 15,
      simb_atom: "P",
      name: "Fósforo",
      atom_weight: "30.974",
      color: "naoMetais",
    },
    {
      el_num: 6,
      num_atom: 16,
      simb_atom: "S",
      name: "Enxofre",
      atom_weight: "32.06",
      color: "naoMetais",
    },
    {
      el_num: 7,
      num_atom: 17,
      simb_atom: "Cl",
      name: "Cloro",
      atom_weight: "35.45",
      color: "naoMetais",
    },
    {
      el_num: 8,
      num_atom: 18,
      simb_atom: "Ar",
      name: "Argônio",
      atom_weight: "39.948",
      color: "gasesNobres",
    },
  ],
  line_4: [
    {
      el_num: 1,
      num_atom: 19,
      simb_atom: "K",
      name: "Potássio",
      atom_weight: "39.098",
      color: "metaisAlcalinos",
    },
    {
      el_num: 2,
      num_atom: 20,
      simb_atom: "Ca",
      name: "Cálcio",
      atom_weight: "40.078(4)",
      color: "metaisAlcalinosTerrosos",
    },
    {
      el_num: 3,
      num_atom: 21,
      simb_atom: "Sc",
      name: "Escândio",
      atom_weight: "44.956",
      color: "metaisDeTransicao",
    },
    {
      el_num: 4,
      num_atom: 22,
      simb_atom: "Ti",
      name: "Titânio",
      atom_weight: "47.867",
      color: "metaisDeTransicao",
    },
    {
      el_num: 5,
      num_atom: 23,
      simb_atom: "V",
      name: "Vanádio",
      atom_weight: "50.942",
      color: "metaisDeTransicao",
    },
    {
      el_num: 6,
      num_atom: 24,
      simb_atom: "Cr",
      name: "Crômio",
      atom_weight: "51.996",
      color: "metaisDeTransicao",
    },
    {
      el_num: 7,
      num_atom: 25,
      simb_atom: "Mn",
      name: "Manganês",
      atom_weight: "54.938",
      color: "metaisDeTransicao",
    },
    {
      el_num: 8,
      num_atom: 26,
      simb_atom: "Fe",
      name: "Ferro",
      atom_weight: "55.845(2)",
      color: "metaisDeTransicao",
    },
    {
      el_num: 9,
      num_atom: 27,
      simb_atom: "Co",
      name: "Cobalto",
      atom_weight: "58.933",
      color: "metaisDeTransicao",
    },
    {
      el_num: 10,
      num_atom: 28,
      simb_atom: "Ni",
      name: "Níquel",
      atom_weight: "58.693",
      color: "metaisDeTransicao",
    },
    {
      el_num: 11,
      num_atom: 29,
      simb_atom: "Cu",
      name: "Cobre",
      atom_weight: "63.546(3)",
      color: "metaisDeTransicao",
    },
    {
      el_num: 12,
      num_atom: 30,
      simb_atom: "Zn",
      name: "Zinco",
      atom_weight: "65,38(2)",
      color: "metaisDeTransicao",
    },
    {
      el_num: 13,
      num_atom: 31,
      simb_atom: "Ga",
      name: "Gálio",
      atom_weight: "69.723",
      color: "posTransicao",
    },
    {
      el_num: 14,
      num_atom: 32,
      simb_atom: "Ge",
      name: "Germânio",
      atom_weight: "72.630(8)",
      color: "semimetais",
    },
    {
      el_num: 15,
      num_atom: 33,
      simb_atom: "As",
      name: "Arsênio",
      atom_weight: "74.922",
      color: "semimetais",
    },
    {
      el_num: 16,
      num_atom: 34,
      simb_atom: "Se",
      name: "Selênio",
      atom_weight: "78.971(8)",
      color: "naoMetais",
    },
    {
      el_num: 17,
      num_atom: 35,
      simb_atom: "Br",
      name: "Bromo",
      atom_weight: "79.904",
      color: "naoMetais",
    },
    {
      el_num: 18,
      num_atom: 36,
      simb_atom: "Kr",
      name: "Criptônio",
      atom_weight: "83.798(2)",
      color: "gasesNobres",
    },
  ],
  line_5: [
    {
      el_num: 1,
      num_atom: 37,
      simb_atom: "Rb",
      name: "Rubídio",
      atom_weight: "85.468",
      color: "metaisAlcalinos",
    },
    {
      el_num: 2,
      num_atom: 38,
      simb_atom: "Sr",
      name: "Estrôncio",
      atom_weight: "87.62",
      color: "metaisAlcalinosTerrosos",
    },
    {
      el_num: 3,
      num_atom: 39,
      simb_atom: "Y",
      name: "Ítrio",
      atom_weight: "88.906",
      color: "metaisDeTransicao",
    },
    {
      el_num: 4,
      num_atom: 40,
      simb_atom: "Zr",
      name: "Zircônio",
      atom_weight: "91.224(2)",
      color: "metaisDeTransicao",
    },
    {
      el_num: 5,
      num_atom: 41,
      simb_atom: "Nb",
      name: "Nióbio",
      atom_weight: "92.906",
      color: "metaisDeTransicao",
    },
    {
      el_num: 6,
      num_atom: 42,
      simb_atom: "Mo",
      name: "Molibdênio",
      atom_weight: "95.95",
      color: "metaisDeTransicao",
    },
    {
      el_num: 7,
      num_atom: 43,
      simb_atom: "Tc",
      name: "Tecnécio",
      atom_weight: "[93]",
      color: "metaisDeTransicao",
    },
    {
      el_num: 8,
      num_atom: 44,
      simb_atom: "Ru",
      name: "Rutênio",
      atom_weight: "101.072(2)",
      color: "metaisDeTransicao",
    },
    {
      el_num: 9,
      num_atom: 45,
      simb_atom: "Rh",
      name: "Ródio",
      atom_weight: "106.42",
      color: "metaisDeTransicao",
    },
    {
      el_num: 10,
      num_atom: 46,
      simb_atom: "Pd",
      name: "Paládio",
      atom_weight: "106.42",
      color: "metaisDeTransicao",
    },
    {
      el_num: 11,
      num_atom: 47,
      simb_atom: "Ag",
      name: "Prata",
      atom_weight: "107.87",
      color: "metaisDeTransicao",
    },
    {
      el_num: 12,
      num_atom: 48,
      simb_atom: "Cd",
      name: "Cádmio",
      atom_weight: "112.41",
      color: "metaisDeTransicao",
    },
    {
      el_num: 13,
      num_atom: 49,
      simb_atom: "In",
      name: "Índio",
      atom_weight: "114.82",
      color: "posTransicao",
    },
    {
      el_num: 14,
      num_atom: 50,
      simb_atom: "Sn",
      name: "Estanho",
      atom_weight: "118.71",
      color: "posTransicao",
    },
    {
      el_num: 15,
      num_atom: 51,
      simb_atom: "Sb",
      name: "Antimônio",
      atom_weight: "121.76",
      color: "semimetais",
    },
    {
      el_num: 16,
      num_atom: 52,
      simb_atom: "Te",
      name: "Telúrio",
      atom_weight: "127.60(3)",
      color: "semimetais",
    },
    {
      el_num: 17,
      num_atom: 53,
      simb_atom: "I",
      name: "Iodo",
      atom_weight: "126.9",
      color: "naoMetais",
    },
    {
      el_num: 18,
      num_atom: 54,
      simb_atom: "Xe",
      name: "Xenônio",
      atom_weight: "131.29",
      color: "gasesNobres",
    },
  ],
  line_6: [
    {
      el_num: 1,
      num_atom: 55,
      simb_atom: "Cs",
      name: "Césio",
      atom_weight: "132.91",
      color: "metaisAlcalinos",
    },
    {
      el_num: 2,
      num_atom: 56,
      simb_atom: "Ba",
      name: "Bário",
      atom_weight: "137.33",
      color: "metaisAlcalinosTerrosos",
    },
    {
      el_num: 3,
      num_atom: 57,
      simb_atom: "La",
      name: "Lantânio",
      atom_weight: "138.91",
      color: "lantanideos",
    },
    {
      el_num: 4,
      num_atom: 72,
      simb_atom: "Hf",
      name: "Háfnio",
      atom_weight: "178.49(2)",
      color: "metaisDeTransicao",
    },
    {
      el_num: 5,
      num_atom: 73,
      simb_atom: "Ta",
      name: "Tântalo",
      atom_weight: "180.95",
      color: "metaisDeTransicao",
    },
    {
      el_num: 6,
      num_atom: 74,
      simb_atom: "W",
      name: "Tungstênio",
      atom_weight: "183.84",
      color: "metaisDeTransicao",
    },
    {
      el_num: 7,
      num_atom: 75,
      simb_atom: "Re",
      name: "Rênio",
      atom_weight: "186.21",
      color: "metaisDeTransicao",
    },
    {
      el_num: 8,
      num_atom: 76,
      simb_atom: "Os",
      name: "Ósmio",
      atom_weight: "190.23(3)",
      color: "metaisDeTransicao",
    },
    {
      el_num: 9,
      num_atom: 77,
      simb_atom: "Ir",
      name: "Irídio",
      atom_weight: "192.22",
      color: "metaisDeTransicao",
    },
    {
      el_num: 10,
      num_atom: 78,
      simb_atom: "Pt",
      name: "Platina",
      atom_weight: "195.08",
      color: "metaisDeTransicao",
    },
    {
      el_num: 11,
      num_atom: 79,
      simb_atom: "Au",
      name: "Ouro",
      atom_weight: "196.97",
      color: "metaisDeTransicao",
    },
    {
      el_num: 12,
      num_atom: 80,
      simb_atom: "Hg",
      name: "Mercúrio",
      atom_weight: "200.59",
      color: "metaisDeTransicao",
    },
    {
      el_num: 13,
      num_atom: 81,
      simb_atom: "Tl",
      name: "Tálio",
      atom_weight: "204.38",
      color: "posTransicao",
    },
    {
      el_num: 14,
      num_atom: 82,
      simb_atom: "Pb",
      name: "Chumbo",
      atom_weight: "207.2",
      color: "posTransicao",
    },
    {
      el_num: 15,
      num_atom: 83,
      simb_atom: "Bi",
      name: "Bismuto",
      atom_weight: "208.98",
      color: "posTransicao",
    },
    {
      el_num: 16,
      num_atom: 84,
      simb_atom: "Po",
      name: "Polônio",
      atom_weight: "[209]",
      color: "posTransicao",
    },
    {
      el_num: 17,
      num_atom: 85,
      simb_atom: "At",
      name: "Astato",
      atom_weight: "[210]",
      color: "posTransicao",
    },
    {
      el_num: 18,
      num_atom: 86,
      simb_atom: "Rn",
      name: "Radônio",
      atom_weight: "[222]",
      color: "gasesNobres",
    },
  ],
  line_7: [
    {
      el_num: 1,
      num_atom: 87,
      simb_atom: "Fr",
      name: "Frâncio",
      atom_weight: "[223]",
      color: "metaisAlcalinos",
    },
    {
      el_num: 2,
      num_atom: 88,
      simb_atom: "Ra",
      name: "Rádio",
      atom_weight: "[226]",
      color: "metaisAlcalinosTerrosos",
    },
    {
      el_num: 3,
      num_atom: 89,
      simb_atom: "Ac",
      name: "Actínio",
      atom_weight: "[227]",
      color: "actinidios",
    },
    {
      el_num: 4,
      num_atom: 104,
      simb_atom: "Rf",
      name: "Rutherfórdio",
      atom_weight: "[267]",
      color: "metaisDeTransicao",
    },
    {
      el_num: 5,
      num_atom: 105,
      simb_atom: "Db",
      name: "Dúbnio",
      atom_weight: "[268]",
      color: "metaisDeTransicao",
    },
    {
      el_num: 6,
      num_atom: 106,
      simb_atom: "Sg",
      name: "Seabórgio",
      atom_weight: "[269]",
      color: "metaisDeTransicao",
    },
    {
      el_num: 7,
      num_atom: 107,
      simb_atom: "Bh",
      name: "Bóhrio",
      atom_weight: "[270]",
      color: "metaisDeTransicao",
    },
    {
      el_num: 8,
      num_atom: 108,
      simb_atom: "Hs",
      name: "Hássio",
      atom_weight: "[269]",
      color: "metaisDeTransicao",
    },
    {
      el_num: 9,
      num_atom: 109,
      simb_atom: "Mt",
      name: "Meitnério",
      atom_weight: "[278]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 10,
      num_atom: 110,
      simb_atom: "Ds",
      name: "Darmstádio",
      atom_weight: "[281]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 11,
      num_atom: 111,
      simb_atom: "Rg",
      name: "Roentgênio",
      atom_weight: "[281]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 12,
      num_atom: 112,
      simb_atom: "Cn",
      name: "Copernício",
      atom_weight: "[285]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 13,
      num_atom: 113,
      simb_atom: "Nh",
      name: "Nihônio",
      atom_weight: "[286]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 14,
      num_atom: 114,
      simb_atom: "Fl",
      name: "Fleróvio",
      atom_weight: "[289]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 15,
      num_atom: 115,
      simb_atom: "Mc",
      name: "Moscóvio",
      atom_weight: "[288]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 16,
      num_atom: 116,
      simb_atom: "Lv",
      name: "Livermório",
      atom_weight: "[293]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 17,
      num_atom: 117,
      simb_atom: "Ts",
      name: "Tenessino",
      atom_weight: "[294]",
      color: "propriedadesDesconhecidas",
    },
    {
      el_num: 18,
      num_atom: 118,
      simb_atom: "Og",
      name: "Oganesônio",
      atom_weight: "[294]",
      color: "propriedadesDesconhecidas",
    },
  ],
  line_8: [
    {
      el_num: 4,
      name: "blank",
    },
    {
      el_num: 1,
      num_atom: 58,
      simb_atom: "Ce",
      name: "Cério",
      atom_weight: "140.12",
      color: "lantanideos",
    },
    {
      el_num: 2,
      num_atom: 59,
      simb_atom: "Pr",
      name: "Praseodímio",
      atom_weight: "140.91",
      color: "lantanideos",
    },
    {
      el_num: 3,
      num_atom: 60,
      simb_atom: "Nd",
      name: "Neodímio",
      atom_weight: "144.24",
      color: "lantanideos",
    },
    {
      el_num: 4,
      num_atom: 61,
      simb_atom: "Pm",
      name: "Promécio",
      atom_weight: "[145]",
      color: "lantanideos",
    },
    {
      el_num: 5,
      num_atom: 62,
      simb_atom: "Sm",
      name: "Samário",
      atom_weight: "150.36(2)",
      color: "lantanideos",
    },
    {
      el_num: 6,
      num_atom: 63,
      simb_atom: "Eu",
      name: "Európio",
      atom_weight: "151.96",
      color: "lantanideos",
    },
    {
      el_num: 7,
      num_atom: 64,
      simb_atom: "Gd",
      name: "Gadolínio",
      atom_weight: "157.25(3)",
      color: "lantanideos",
    },
    {
      el_num: 8,
      num_atom: 65,
      simb_atom: "Tb",
      name: "Térbio",
      atom_weight: "158.93",
      color: "lantanideos",
    },
    {
      el_num: 9,
      num_atom: 66,
      simb_atom: "Dy",
      name: "Disprósio",
      atom_weight: "162.50",
      color: "lantanideos",
    },
    {
      el_num: 10,
      num_atom: 67,
      simb_atom: "Ho",
      name: "Hólmio",
      atom_weight: "164.93",
      color: "lantanideos",
    },
    {
      el_num: 11,
      num_atom: 68,
      simb_atom: "Er",
      name: "Érbio",
      atom_weight: "167.26",
      color: "lantanideos",
    },
    {
      el_num: 12,
      num_atom: 69,
      simb_atom: "Tm",
      name: "Túlio",
      atom_weight: "168.93",
      color: "lantanideos",
    },
    {
      el_num: 13,
      num_atom: 70,
      simb_atom: "Tb",
      name: "Itérbio",
      atom_weight: "173.05",
      color: "lantanideos",
    },
    {
      el_num: 14,
      num_atom: 71,
      simb_atom: "Lu",
      name: "Lutécio",
      atom_weight: "174.97",
      color: "lantanideos",
    },
  ],
  line_9: [
    {
      el_num: 5,
      name: "blank",
    },
    {
      el_num: 1,
      num_atom: 90,
      simb_atom: "Th",
      name: "Tório",
      atom_weight: "232.03",
      color: "actinidios",
    },
    {
      el_num: 2,
      num_atom: 91,
      simb_atom: "Pa",
      name: "Protactínio",
      atom_weight: "231.03",
      color: "actinidios",
    },
    {
      el_num: 3,
      num_atom: 92,
      simb_atom: "U",
      name: "Urânio",
      atom_weight: "238.02",
      color: "actinidios",
    },
    {
      el_num: 4,
      num_atom: 93,
      simb_atom: "Np",
      name: "Netúnio",
      atom_weight: "[237]",
      color: "actinidios",
    },
    {
      el_num: 5,
      num_atom: 94,
      simb_atom: "Pu",
      name: "Plutônio",
      atom_weight: "[244]",
      color: "actinidios",
    },
    {
      el_num: 6,
      num_atom: 95,
      simb_atom: "Am",
      name: "Amerício",
      atom_weight: "[243]",
      color: "actinidios",
    },
    {
      el_num: 7,
      num_atom: 96,
      simb_atom: "Cm",
      name: "Cúrio",
      atom_weight: "[247]",
      color: "actinidios",
    },
    {
      el_num: 8,
      num_atom: 97,
      simb_atom: "Bk",
      name: "Berquélio",
      atom_weight: "[247]",
      color: "actinidios",
    },
    {
      el_num: 9,
      num_atom: 98,
      simb_atom: "Cf",
      name: "Califórnio",
      atom_weight: "[251]",
      color: "actinidios",
    },
    {
      el_num: 10,
      num_atom: 99,
      simb_atom: "Es",
      name: "Einsténio",
      atom_weight: "[252]",
      color: "actinidios",
    },
    {
      el_num: 11,
      num_atom: 100,
      simb_atom: "Fm",
      name: "Férmio",
      atom_weight: "[257]",
      color: "actinidios",
    },
    {
      el_num: 12,
      num_atom: 101,
      simb_atom: "Md",
      name: "Mendelévio",
      atom_weight: "[258]",
      color: "actinidios",
    },
    {
      el_num: 13,
      num_atom: 102,
      simb_atom: "No",
      name: "Nobélio",
      atom_weight: "[259]",
      color: "actinidios",
    },
    {
      el_num: 14,
      num_atom: 103,
      simb_atom: "Lr",
      name: "Laurêncio",
      atom_weight: "[262]",
      color: "actinidios",
    },
  ],
};
