const VOCAB = [
  {
    "jp": "やまごや",
    "fr": "chalet",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "やけい",
    "fr": "vue panorama nocturne",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ひょうか",
    "fr": "évaluation",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "じもとのひとがいくみせ",
    "fr": "restaurant où vont les locaux",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "こどもをつものりょうしんにまずける",
    "fr": "envoyer les enfants chez les grands-parents",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "たべしょうだい",
    "fr": "manger à volonté",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かぞくてきな",
    "fr": "familial",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "りょうてい",
    "fr": "resto gastro japonais",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "おもてなし",
    "fr": "hospitalité / accueil",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "いっぴん",
    "fr": "un plat",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "うまい",
    "fr": "délicieux",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "なんといっても",
    "fr": "au bout du compte",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "しょくよくがわく",
    "fr": "ça aiguise l'appétit",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "みため",
    "fr": "l'apparence",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "しんせんだ",
    "fr": "frais / fraîche",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ゆでる",
    "fr": "faire bouillir",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "あげる",
    "fr": "faire frire",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "むす",
    "fr": "cuire à la vapeur",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "にる",
    "fr": "faire mijoter",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "いためる",
    "fr": "faire sauter",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かける",
    "fr": "mettre sur (du riz)",
    "cours": "03/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "おだんご",
    "fr": "boulette de pâte de riz",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "まけたい",
    "fr": "ne rien servir à envier",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "とくちょう",
    "fr": "particularité",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "りょうりにん",
    "fr": "cuisinier",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ほんもの",
    "fr": "authentique",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ほうしき",
    "fr": "buffet à volonté",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "とにかく",
    "fr": "en tout cas",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "こんでいる",
    "fr": "plein / complet",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "あなば",
    "fr": "une bonne adresse",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "はやっている",
    "fr": "à la mode",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ぎょうれつ",
    "fr": "file d'attente",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "けってん",
    "fr": "défaut",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "いがいに",
    "fr": "étonnamment",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "にほんせい",
    "fr": "à la japonaise",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "たかめ",
    "fr": "plutôt cher",
    "cours": "05/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "きみ",
    "fr": "jaune d'œuf",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かい",
    "fr": "coquillage",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "しろみ",
    "fr": "blanc d'œuf",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "おこのみやきこ",
    "fr": "farine pour okonomiyaki",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "〜ぎゅうじゅう",
    "fr": "habitant de〜",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "しょうがない",
    "fr": "tant pis",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "こむぎこ",
    "fr": "farine de blé",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ふんまつだし",
    "fr": "poudre",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "まぜる",
    "fr": "mélanger",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ちゃいろい",
    "fr": "brun",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かつおぶし",
    "fr": "bonite séchée",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "にほんせい",
    "fr": "fabriqué au Japon",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "むりだ",
    "fr": "impossible",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "コンセント",
    "fr": "prise électrique",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かんじます",
    "fr": "ressentir",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "たりる",
    "fr": "suffire",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ながねぎ",
    "fr": "oignon vert",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "たまねぎ",
    "fr": "oignon",
    "cours": "10/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "一いり",
    "fr": "plat à〜 personne(s)",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "一にんぶん",
    "fr": "pour〜 personnes",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "うすぎりにく",
    "fr": "viande coupée finement",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かわ",
    "fr": "pequ (plat)",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "むく",
    "fr": "peler",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "さます",
    "fr": "laisser refroidir",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "つぶす",
    "fr": "écraser / refroidir",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "まぜる",
    "fr": "mélanger",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "てっぱん",
    "fr": "plaque chauffante",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "うすい",
    "fr": "mince",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "のせる",
    "fr": "mettre dessus",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ねる",
    "fr": "étaler",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "できあがり",
    "fr": "c'est prêt",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "コツ",
    "fr": "truc / astuce",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ひきにく",
    "fr": "viande hachée",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ねぎ",
    "fr": "poireau",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "てにはいる",
    "fr": "trouver / se procurer",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "おいたち",
    "fr": "les origines",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "さめる",
    "fr": "refroidir",
    "cours": "12/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ゴミばこ",
    "fr": "poubelle",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ねばねばした",
    "fr": "gluant",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "くさい",
    "fr": "malodorant",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "しかく",
    "fr": "carré",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "うすい",
    "fr": "fade",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "しょっぱい",
    "fr": "salé",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "からい",
    "fr": "épicé",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かたち",
    "fr": "forme",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ニリニク",
    "fr": "ail",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "おわせる",
    "fr": "s'occuper de",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "うらがえす",
    "fr": "retourner (galette)",
    "cours": "17/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "たく",
    "fr": "cuire (riz)",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "ひ",
    "fr": "feu",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "うらめん",
    "fr": "face arrière",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "おもてめん",
    "fr": "face avant",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "めらかじめ",
    "fr": "à l'avance",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かわりに",
    "fr": "à la place de",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "かためる",
    "fr": "durcir",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "たどうし",
    "fr": "transitif",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "じどうし",
    "fr": "intransitif",
    "cours": "19/03/26",
    "niveau": "B1",
    "topic": "T2"
  },
  {
    "jp": "がっき",
    "fr": "instrument de musique",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "もよおし",
    "fr": "événement / spectacle",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "もっぱら",
    "fr": "principalement",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "たまに",
    "fr": "de temps en temps",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "一ちゅうしん",
    "fr": "surtout / principalement",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ないよう",
    "fr": "contenu",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "きょく",
    "fr": "chanson / morceau",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "めったに〜ない",
    "fr": "rarement〜 nb de fois",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "わりあい",
    "fr": "proportion",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "たんじゅうんな",
    "fr": "simple",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "げんだいてきな",
    "fr": "contemporain",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "こてんてきた",
    "fr": "classique",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "なつかしい",
    "fr": "nostalgique",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "〜かんじがする",
    "fr": "avoir l'impression que〜",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "すすめる",
    "fr": "recommander",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "めん",
    "fr": "nouilles",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "パセリ",
    "fr": "persil",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "つける",
    "fr": "verser sur",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "すっぱい",
    "fr": "acide",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "だいひょうてきな",
    "fr": "typique",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "〜にもよって",
    "fr": "en fonction de",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ひにやけます",
    "fr": "bronzer",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "じょうし",
    "fr": "chef",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "れいがい",
    "fr": "exception",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "がくせいじだい",
    "fr": "pendant mes études",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "〜してん",
    "fr": "succursale de",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ふにんする",
    "fr": "nommé à (un poste)",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "にほんしき",
    "fr": "style japonais",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "じだう",
    "fr": "une période",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "よう",
    "fr": "etre ivre",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "まよう",
    "fr": "hésiter",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "むりに",
    "fr": "de force",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "へた",
    "fr": "bizarre / étrange",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "つきおう",
    "fr": "accompagner / fréquenter",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "しんぱいする",
    "fr": "s'inquiéter",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "かなし",
    "fr": "petit ami",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "バンド",
    "fr": "groupe",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "まんぞくする",
    "fr": "satisfait",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ことわる",
    "fr": "refuser (invitation)",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "このみ",
    "fr": "goûts / préférence",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ふかい",
    "fr": "profond",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ジャンル",
    "fr": "genre",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "せいかくな",
    "fr": "précis",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "しょうだん",
    "fr": "groupe",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ドラム",
    "fr": "batterie",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "てんかいてきた",
    "fr": "typique",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "かんどうさる",
    "fr": "être ému",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いしょう",
    "fr": "costume",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "かみがた",
    "fr": "coiffure",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "はてな",
    "fr": "extravagant / voyant",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "どしをとる",
    "fr": "vieillir",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "こころにしみる",
    "fr": "émouvant",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "よりと",
    "fr": "plutôt / assez",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "まがえる",
    "fr": "faire une erreur",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "でかける",
    "fr": "sortir",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "みつける",
    "fr": "trouver",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "けいさつ",
    "fr": "police",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "かぎ",
    "fr": "clé",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "さいふ",
    "fr": "porte-feuille",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "へた",
    "fr": "maladroit / mal (chant)",
    "cours": "07/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "はくりょくがある",
    "fr": "être puissant",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "かんそう",
    "fr": "réflexions personnelles",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ごくさい",
    "fr": "international",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "かいじょう",
    "fr": "lieu (de l'événement)",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "おきゃくさん",
    "fr": "spectateur",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "うぇんはん",
    "fr": "1ère moitié",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "なく",
    "fr": "pleurer",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "きにする",
    "fr": "se soucier de",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "わらう",
    "fr": "rire",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "なぜか",
    "fr": "je ne sais pas pourquoi",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ゆるす",
    "fr": "excuser",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "きぶん",
    "fr": "humeur",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ちょうしゃ",
    "fr": "avantage",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "けってん",
    "fr": "inconvénient",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "さっきょくか",
    "fr": "compositeur",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "えんそうか",
    "fr": "interprète",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "みりょく",
    "fr": "charme / attrait",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "こせてきた",
    "fr": "original",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "まるで",
    "fr": "exactement (comme si)",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "しゃかい",
    "fr": "social",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いんしょう",
    "fr": "impression",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "せいじん",
    "fr": "majeur",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "せいじんしき",
    "fr": "fête de la majorité",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "せんきょう",
    "fr": "élection",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "してきな",
    "fr": "poétique",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "まにあう",
    "fr": "arriver à temps",
    "cours": "16/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "せわになる",
    "fr": "recevoir l'aide / le soutien",
    "cours": "16/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "せだい",
    "fr": "génération",
    "cours": "16/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "つきます",
    "fr": "qrriver à",
    "cours": "16/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "はくしゅ",
    "fr": "applaudissement",
    "cours": "16/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "てんし",
    "fr": "ange",
    "cours": "16/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "すごす",
    "fr": "passer du temps",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "とまる",
    "fr": "descendre à l'hôtel",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いきさき",
    "fr": "destination",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひょうが",
    "fr": "glacier",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いせき",
    "fr": "ruines",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "かんこうち",
    "fr": "site touristique",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "めいと",
    "fr": "source chaude célèbre",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひずけい",
    "fr": "date",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひとう",
    "fr": "source chaude secrète",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひずけいみてい",
    "fr": "date non définie",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "〜はく",
    "fr": "nuit",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "りょうきん",
    "fr": "tarif",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "〜めい〜めいさま",
    "fr": "personnes",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こだわる",
    "fr": "avoir des préférences",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "よしつ",
    "fr": "pièce japonaise",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "じゅじつした",
    "fr": "bien rempli",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ようじつ",
    "fr": "pièce occidentale",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "だいよくじょう",
    "fr": "bain public",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "しらべる",
    "fr": "vérifier",
    "cours": "28/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "おかみ",
    "fr": "patrone",
    "cours": "28/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "かわりに",
    "fr": "à la place de",
    "cours": "28/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "かぎをかける",
    "fr": "fermer à clé",
    "cours": "28/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "らいかん",
    "fr": "visite",
    "cours": "28/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "わるてん",
    "fr": "inconvénient",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "りてん",
    "fr": "avantage",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "はだ",
    "fr": "peau",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "おかねもち",
    "fr": "riche",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こうつうのべん",
    "fr": "facilité d'accès",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "〜どうし",
    "fr": "entre〜",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こうきゅうりょかん",
    "fr": "auberge de luxe",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひょうかする",
    "fr": "évaluer",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ふかい",
    "fr": "déplaisant",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "おわびもうしあげます",
    "fr": "nous vous prions de nous excuser",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "かいせき",
    "fr": "repas de ryokan",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "せっかく",
    "fr": "service",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "すべすべ",
    "fr": "douce",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "きにある",
    "fr": "se préoccuper",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "まことに",
    "fr": "sincérement",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "しかながら",
    "fr": "cependant",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こころより",
    "fr": "du fond du coeur",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "かいぜんする",
    "fr": "améliorer",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "しんけんい",
    "fr": "sérieusement",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "おんせんち",
    "fr": "source thermale et ryokan",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ちいき",
    "fr": "région",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "けんさく",
    "fr": "rechercher",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こだわりじょうけん",
    "fr": "critères de recherche",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ろてんぶろ",
    "fr": "bain en extérieur",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "てんほうぶろ",
    "fr": "bain avec vue",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "きんえんルーム",
    "fr": "chambre non-fumeur",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "にごりゅ",
    "fr": "source chaude trouble",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ばんぐみ",
    "fr": "émission télé",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "おそうする",
    "fr": "prévoir",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "さる",
    "fr": "singe",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "とだん",
    "fr": "ascension (d'une montagne)",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "がめん",
    "fr": "écran",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ごらいこ",
    "fr": "lever du soleil",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "もとめる",
    "fr": "rechercher / demander",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ながめ",
    "fr": "vue",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "うんのさち",
    "fr": "produits de la mer",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "せいかいてきに",
    "fr": "mondialisation",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "うんがいい",
    "fr": "avoir de la chance",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こんよくする",
    "fr": "prendre un bain ensemble",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "さつい",
    "fr": "pénible / rude",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "くろうする",
    "fr": "souffrir",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひょうこう",
    "fr": "altitude",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "はやおきする",
    "fr": "se lever tôt",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いろり",
    "fr": "foyer",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いせえび",
    "fr": "langouste",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "さっそく",
    "fr": "immédiatement",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "さつてく",
    "fr": "fondre / se dissoudre",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  }
];
