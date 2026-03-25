export interface CommunityPost {
  id: number;
  author: string;
  handle: string;
  avatar: string;
  content: string;
  date: string;
  tags: string[];
  likes: number;
  platform: "discord" | "reddit" | "facebook" | "whatsapp";
  thumbnail?: string;
}

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    author: "Ahmet Yılmaz",
    handle: "ta2xyz",
    avatar: "AY",
    content:
      "Ankara'da ilk Meshtastic node'umuzu kurdum! Şehir merkezinden yaklaşık 4 km range alıyoruz. Hacker2 anteniyle oldukça iyi sonuçlar. TA Mesh ağı büyüyor! 📡",
    date: "2026-03-20",
    tags: ["meshtastic", "ta-mesh", "ankara"],
    likes: 24,
    platform: "discord",
    thumbnail:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFm8paMEWUsLNFIQydmJnhlaGCUv-cbUcslC27J85ZQalSMDBtrpVXNClprNGhjQrUbzLmMl0IAez3eJcEGSrcCV2nO1huHC16y5KsPaGfgL1BD0NfwVPrQnMzf3YAopzjaVHTMNFiUDFnHUGujEWNVn4NCmmftUnTAw-O2nNlR9S-YA9H2Ls2gNREHtA/w640-h360/ta_mesh_cevrim.png",
  },
  {
    id: 2,
    author: "Selin Kaya",
    handle: "ta3sk",
    avatar: "SK",
    content:
      "AREDN node kurulum rehberini blogumuza ekledim. Mikrotik hAP ac² üzerine AREDN yüklemek düşündüğünüzden çok daha kolay. Sorularınız olursa Discord'da buluşalım.",
    date: "2026-03-18",
    tags: ["aredn", "rehber", "mikrotik"],
    likes: 31,
    platform: "reddit",
    thumbnail:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwRLqjiy-295ltnCXyTtAMzdT0SwA-X92zzXw2g1brey3qurZANvq7sax_jMYsPr9PIliVGvmiEPScZhRKNGWB5aFVB-PhuWyiWTM74peG83r4IbmLFeEdrEx4EXsw86kIj-3BSp6i46sBDegnxSUuHvQj5IbQBURjrc_is5laz_4d4X7PJw-zMveQ5lw/w640-h360/AREDN_D%C3%BC%C4%9F%C3%BCm_Konfig%C3%BCrasyonu.png",
  },
  {
    id: 3,
    author: "Mehmet Demir",
    handle: "ta4md",
    avatar: "MD",
    content:
      "Bu hafta sonu İstanbul'dan Bursa'ya Meshtastic ile başarılı mesaj aktarımı yaptık! İki röle node'u üzerinden toplam 180 km. Beklentilerimin çok üzerinde.",
    date: "2026-03-15",
    tags: ["meshtastic", "mesafe-rekoru", "istanbul"],
    likes: 57,
    platform: "discord",
    thumbnail:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUjIFiKUEi-887YCjHJSfWkLHMfnVEViZKqFJ6Q7EH9EgQhSz7xQyRel1N22JL84opRgZhFclYA5km_RN6kBTwYgVfgUA2CcHV3UGasl-Y_vTojWSp2HgiAbDr5MCxUpLPXMO0sfIyaa71SbQMgZIhDzwtqJNcw875f_WjnCFApx0GwAWhU-_DMmPFL8c/w640-h360/aredn_standart.png",
  },
  {
    id: 4,
    author: "Fatma Arslan",
    handle: "ta6fa",
    avatar: "FA",
    content:
      "Afet tatbikatında TA Mesh ağını test ettik. 3G/4G tamamen kesiliyken Meshtastic node'ları üzerinden koordinasyon sağlamayı başardık. Gerçekten kritik bir altyapı.",
    date: "2026-03-12",
    tags: ["afet", "tatbikat", "mesh"],
    likes: 43,
    platform: "facebook",
    thumbnail:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQDl5OJt_4qrz_-PfiE0pFUzgXKoNUEhELOJnMU1mSH58A7mdw3G9LApNIF6jVuylqEiib2NINp-lwkVg6TREXhVmfWpcQu7HatoynQICi5HtWQjwcLrclvG0H2nFzCgK3vgd7FA86PXktzxGjrXFWJxM-U5wEaR1zYHeyTWZdcuMHiawAcxc1TTfj9AE/w640-h360/Purgatoria_AREDN_WireGuard_VPN_Sunucusu.png",
  },
  {
    id: 5,
    author: "Ömer Çelik",
    handle: "ta5oc",
    avatar: "ÖC",
    content:
      "RAK Wireless WisBlock tabanlı güneş enerjili outdoor node projemi tamamladım. 18650 batarya + 5W panel ile süresiz çalışıyor. Tüm şema ve kodlar GitHub'da açık kaynak olarak paylaşıldı.",
    date: "2026-03-10",
    tags: ["diy", "gunes-enerjisi", "outdoor"],
    likes: 68,
    platform: "reddit",
    thumbnail:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5ctiJFTSgeCP8eFt0u-_7e8xTnMfxoCJDT2v8P1aPNIBB5s6-ZhnUTC0M1Yb6905rL9FVIfrLaxzy9ufNF4qEjsMNgj1wMLSVbhrYhmx8-oNxDfnHgfETNt1Vx-Q77g5pRHrsS7glH-IOBx4kMWG8oORidbYyjbD7t_QcfX7mS8Kg7LuZNHYF-pBY6s8/w640-h360/herkes_i%C3%A7in_aredn%20(2).png",
  },
  {
    id: 6,
    author: "Zeynep Özkan",
    handle: "tb1zo",
    avatar: "ZÖ",
    content:
      "Amatör radyo lisansımı aldım geçen hafta! TA3 bölgesinden katılıyorum topluluğa. Meshtastic ile başlamak istiyorum, hangi cihazı önerirsiniz?",
    date: "2026-03-08",
    tags: ["yeni-üye", "lisans", "ta3"],
    likes: 19,
    platform: "discord",
    thumbnail:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC593K5UuxZR_uUCnXwMt37H8-l2XWSp3lxu-hLiVIojG0H9OKxCQMdrkoP-_6x_aO8uWsYmQQEdvhmnXBVeLqUhgOZz9_Cl6H9fmKeucXA_BL4bEUoyQuaYvzEX59jhEjsiWl3gdCWfM2Bw65LILabFPZHTqebGf3eH4KBbRHwtUhXqxngH6Ou_Q1gZU/w640-h360/AREDN_Destekli_Cihazlar_Listesi.png",
  },
];
