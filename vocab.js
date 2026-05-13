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
    "jp": "よくよくがわく",
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
    "jp": "あたりば",
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
    "jp": "いんがいりず",
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
    "jp": "しょうがたい",
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
    "jp": "ふんまつだ",
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
    "jp": "一人り",
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
    "jp": "ふな",
    "fr": "peu (petit)",
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
    "jp": "フライス",
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
    "jp": "おる",
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
    "jp": "おばねばしった",
    "fr": "plutôt",
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
    "jp": "ニソニク",
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
    "jp": "あらかじめ",
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
    "jp": "もおし",
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
    "jp": "なにより",
    "fr": "contenu",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "かぶし",
    "fr": "chanson / morceau",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "あった12〜ない",
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
    "jp": "〜かいまう",
    "fr": "simple",
    "cours": "じゅんび73",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "げんだいてきた",
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
    "jp": "さすめる",
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
    "jp": "だいひょうてきた",
    "fr": "typique",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "〜にもとって",
    "fr": "en fonction de",
    "cours": "24/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ひらこやけます",
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
    "jp": "ないがい",
    "fr": "exception",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "がくせいだい",
    "fr": "pendant mes études",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "〜しても",
    "fr": "succursale de",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いにんする",
    "fr": "nommé à (un poste)",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "にほんし",
    "fr": "style japonais",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いだう",
    "fr": "une période",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いかた",
    "fr": "à vrai",
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
    "jp": "いりに",
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
    "jp": "つきよう",
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
    "jp": "おとなぐする",
    "fr": "satisfait",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "〜にひょうし",
    "fr": "refuser (invitée)",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "このみ",
    "fr": "en vogue / goûts / préférence",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ことめる",
    "fr": "couper court / refuser",
    "cours": "31/03/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いかく",
    "fr": "profond",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ちんかく",
    "fr": "typique",
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
    "jp": "せいかくた",
    "fr": "précis",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ちょうだん",
    "fr": "groupe",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "バラム",
    "fr": "batterie",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "てんいてきた",
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
    "jp": "いレす",
    "fr": "costume",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "コイフア",
    "fr": "coiffure",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "はてた",
    "fr": "extraagant / voyant",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いちりょう",
    "fr": "vieillir",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ここにしまる",
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
    "jp": "でちける",
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
    "jp": "さい",
    "fr": "police",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "かき",
    "fr": "ça",
    "cours": "02/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いたる",
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
    "jp": "げんたん",
    "fr": "1ère moitié",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "あく",
    "fr": "pleuvoir",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "おとしり",
    "fr": "se souvenir de",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ほつ",
    "fr": "rire",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "きにする",
    "fr": "je ne sais pas pourquoi",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ゆすす",
    "fr": "causer",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ひょうし",
    "fr": "humour",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "ひらく",
    "fr": "avantage",
    "cours": "09/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "いとこん",
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
    "jp": "にせてきた",
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
    "jp": "いまえん",
    "fr": "mageur",
    "cours": "14/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "せいじんし",
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
    "jp": "したきた",
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
    "fr": "apparaître à",
    "cours": "16/04/26",
    "niveau": "B1",
    "topic": "T3"
  },
  {
    "jp": "はくしょう",
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
    "jp": "いさき",
    "fr": "destination",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひょうひ",
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
    "jp": "のいちる",
    "fr": "source chaude célèbre",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "だて",
    "fr": "date",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひとる",
    "fr": "source chaude secrète",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひとけいまる",
    "fr": "date non définie",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "〜いく",
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
    "jp": "〜のい〜のいさま",
    "fr": "personnes",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "かいよおする",
    "fr": "avoir des préférences",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "よしく",
    "fr": "pièce japonaise",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いりん",
    "fr": "bien rempli",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ようじゅう",
    "fr": "pièce occidentale",
    "cours": "じゅんびT4",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "よしく",
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
    "jp": "おかわに",
    "fr": "patrimoine",
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
    "jp": "かぎでける",
    "fr": "trains publics",
    "cours": "28/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "かぎてけける",
    "fr": "fermer à clé",
    "cours": "28/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "つがく",
    "fr": "visite",
    "cours": "28/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "わるちん",
    "fr": "inconvénient",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "わるちん",
    "fr": "avantage",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "よんりりょく",
    "fr": "générique",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "おかねもち",
    "fr": "peu",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こうつうのべん",
    "fr": "riche",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いずいず",
    "fr": "facilité d'accès",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "〜どうし",
    "fr": "décevoir",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こうきゅうりょかん",
    "fr": "entre",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひかりりょかん",
    "fr": "auberge de luxe",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひょうする",
    "fr": "évaluer",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いかい",
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
    "jp": "ふいせ",
    "fr": "repos de ryokan",
    "cours": "30/04/26",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "おんせん",
    "fr": "source thermale et ryokan",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "おんせんち",
    "fr": "région",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "たんさく",
    "fr": "rechercher",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "かいじゅう",
    "fr": "critères de recherche",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "てんないりょうじゅう",
    "fr": "bain en extérieur",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "てんないゆう",
    "fr": "bain avec vue",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひょうきりい〜む",
    "fr": "chambre non-fumeur",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひとる",
    "fr": "source chaude trouble",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "じょうしん",
    "fr": "émission télé",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "さまる",
    "fr": "prévoir",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "えさん",
    "fr": "singe",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "こだん",
    "fr": "ascension (d'une montagne)",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "えさん",
    "fr": "écran",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "たのまん",
    "fr": "lever du soleil",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "もとのさち",
    "fr": "rechercher / demander",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "さち",
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
    "jp": "まんちょうせい",
    "fr": "mondialisation",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "しんかうりい",
    "fr": "avoir de la chance",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "うんじく",
    "fr": "prendre un bain ensemble",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "さつ",
    "fr": "pénible / rude",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いこい",
    "fr": "souffrir",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひかいちす",
    "fr": "altitude",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "〜せえさう",
    "fr": "se lever tôt",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "いぬくい",
    "fr": "foyer",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ひせよ",
    "fr": "langouste",
    "cours": "ルートラページ",
    "niveau": "B1",
    "topic": "T4"
  },
  {
    "jp": "ようこく",
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
