export interface Member {
  name: string;
  id: string;
  gender: string;
  role: string | null;
  hometown: string | null;
  email: string | null;
  facebook_url: string | null;
  whatsapp: string | null;
  photo_url: string | null;
  blood_group?: string | null;
}

export const members: Member[] = [
  { name: 'Md. Jihan Sharkar Jim', id: '2302024', gender: 'male', role: null, hometown: 'Pirganj, Rangpur', email: 'jihansharkarjim@gmail.com', facebook_url: 'https://www.facebook.com/jsjim4349', whatsapp: '01794547085', photo_url: 'https://drive.usercontent.google.com/download?id=1_vgM3sBMZOc6TQ_NVFGyEOtSuqSphZC6', blood_group: 'AB+' },
  { name: 'Tazber Razzak', id: '2302014', gender: 'female', role: null, hometown: 'Tangail', email: '2302014@uftb.ac.bd', facebook_url: 'https://www.facebook.com/tazber.razzak', whatsapp: null, photo_url: null, blood_group: null },
  { name: 'Khadiza Islam', id: '2302036', gender: 'female', role: null, hometown: 'Gazipur', email: '2302036@uftb.ac.bd', facebook_url: 'https://www.facebook.com/share/18jqXYyNJg/', whatsapp: '01799020717', photo_url: 'https://drive.usercontent.google.com/download?id=1FpgSoOXmM5Lk6vnT6w4cBCjjmx0fhRCy', blood_group: null },
  { name: 'Asim Ahmed', id: '2302001', gender: 'male', role: null, hometown: 'Gazipur', email: 'jonayetahmmed4545@gmail.com', facebook_url: 'https://www.facebook.com/share/1GfWaPT37h/', whatsapp: '01730821603', photo_url: 'https://drive.usercontent.google.com/download?id=1Wi_lvZcZHpWP0odLE9I53V99FApgfNig', blood_group: null },
  { name: 'Md. Masud Rana', id: '2302020', gender: 'male', role: null, hometown: 'Pirganj, Rangpur', email: '2302020@uftb.ac.bd', facebook_url: 'https://www.facebook.com/share/1PrcEXXh6w/', whatsapp: '01611290722', photo_url: 'https://drive.usercontent.google.com/download?id=1hDryerJyxRCKYi_1AFV68E_pasaMevV8', blood_group: null },
  { name: 'Pobithro Kumar Singha', id: '2302018', gender: 'male', role: null, hometown: 'Thakurgaon', email: 'pobithrokumarsingha@gmail.com', facebook_url: 'https://www.facebook.com/pobithrokumarsingha', whatsapp: '01303161528', photo_url: 'https://drive.usercontent.google.com/download?id=1P4rz5VK45PIsyfno1JwCjnyhp02xalrW', blood_group: null },
  { name: 'Syed Ladidul Islam Ladid', id: '2302029', gender: 'male', role: null, hometown: 'Rangpur Sadar', email: 'ladid.syed@gmail.com', facebook_url: 'https://www.facebook.com/share/1CnMge431W/', whatsapp: '01521726367', photo_url: 'https://drive.usercontent.google.com/download?id=1E3sF8TLw3hJuprXZwCSkaPghN9G3-2e0', blood_group: 'O+' },
  { name: 'IFTEKAR HOSSAIN', id: '2302033', gender: 'male', role: null, hometown: 'BRAHMANBARIA', email: 'iftekharuli207@gmail.com', facebook_url: 'https://www.facebook.com/share/1ECND5tiAy/', whatsapp: '01983584699', photo_url: 'https://drive.usercontent.google.com/download?id=1W233N-uLpYyGzlA9UEheULce9nlhAYvK', blood_group: 'O+' },
  { name: 'Habibur Rahman', id: '2302002', gender: 'male', role: null, hometown: 'Tangail', email: '2302002@uftb.ac.bdl', facebook_url: 'https://www.facebook.com/share/1E7d4pkapQ/', whatsapp: '01609827370', photo_url: 'https://drive.usercontent.google.com/download?id=1wGdzlRsg3--qjBjq7hqu9U7Yk79ClkIZ', blood_group: 'A+' },
  { name: 'ISRAT SADIA', id: '2302003', gender: 'female', role: null, hometown: 'Cumilla', email: 'isratsadia475@gmail.com', facebook_url: 'https://www.facebook.com/share/1EMWUCZLpU/', whatsapp: '01303747743', photo_url: 'https://drive.usercontent.google.com/download?id=1YR47GdB54WUAIX_VA7P4-eulvcLeM19C', blood_group: 'O+' },
  { name: 'MD. KAMRUL HASSAN', id: '2302004', gender: 'male', role: null, hometown: 'Chattrogram', email: 'kh252070@gmail.com', facebook_url: 'https://www.facebook.com/kamrul.hasan.527491/', whatsapp: '01813053050', photo_url: 'https://drive.usercontent.google.com/download?id=1RtYbPnr5BNQu2u0A-o9LCSdxdMNovmQl', blood_group: 'A+' },
  { name: 'Usha Intan', id: '2302006', gender: 'female', role: null, hometown: 'Gazipur', email: 'ushaintan7@gmail.com', facebook_url: 'https://www.facebook.com/i.usa.inatana.srabanti', whatsapp: null, photo_url: 'https://drive.usercontent.google.com/download?id=11z9fJ_EOTt8RClhmqLHN_330Ep9Nfjbr', blood_group: 'O+' },
  { name: 'SUMAIYA SIMU SUNAY', id: '2302008', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null, blood_group: null },
  { name: 'MD. LABIB HASAN', id: '2302009', gender: 'male', role: null, hometown: 'Kurigram', email: '2302009@uftb.ac.bd', facebook_url: 'https://facebook.com/myselflabib', whatsapp: null, photo_url: null, blood_group: null },
  { name: 'MST. KANIZ NAHER KEYA', id: '2302010', gender: 'female', role: null, hometown: 'Panchagarh', email: 'kwayttkeya@gmail.com', facebook_url: 'https://www.facebook.com/keya.islam.676762', whatsapp: '01313220059', photo_url: null, blood_group: 'O+' },
  { name: 'SADIA RAFAT ONTORA', id: '2302011', gender: 'female', role: 'cr', hometown: 'Dhaka', email: 'sadiarafat0453@gmail.com', facebook_url: 'https://facebook.com/sadia.ontora.2024', whatsapp: '01929540453', photo_url: 'https://drive.usercontent.google.com/download?id=1YA4fO3gqVipR54vtoVqQoyEj1P3IfgXS', blood_group: 'O+' },
  { name: 'Mst. Naznin Akter Nahida', id: '2302012', gender: 'female', role: null, hometown: 'Jamalpur', email: 'nazninakternahida2004@gmail.com', facebook_url: 'https://www.facebook.com/share/1CehVdFhGU/', whatsapp: null, photo_url: null, blood_group: 'O+' },
  { name: 'MD. TAHSAN ISLAM', id: '2302013', gender: 'male', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null, blood_group: null },
  { name: 'MD. YOUNUS ALI', id: '2302016', gender: 'male', role: 'cr', hometown: 'Kurigram', email: 'younusaliaj@gmail.com', facebook_url: 'https://www.facebook.com/share/1LHtimCQXx/', whatsapp: '01820938889', photo_url: 'https://drive.usercontent.google.com/download?id=1YX8w1LbWZevoqejz9Ok9tQ1HB6AoQ2Cq', blood_group: 'O+' },
  { name: 'AHMADUR RAHMAN', id: '2302017', gender: 'male', role: null, hometown: 'Brahmanbaria', email: 'ahmadurr04@gmail.com', facebook_url: 'https://facebook.com/ahmadurr04', whatsapp: '01705255731', photo_url: 'https://drive.usercontent.google.com/download?id=13nvnr_JLw0K2-OntonRvajPNw7OOZ6B8', blood_group: 'O+' },
  { name: 'Md. Abu Hena', id: '2302019', gender: 'male', role: null, hometown: 'Bogura', email: 'md.abuhena001@gmail.com', facebook_url: 'https://www.facebook.com/share/14c3ASm1z45/', whatsapp: '01771289996', photo_url: 'https://drive.usercontent.google.com/download?id=1pxI-jAgaguG0vBv50f4q9cvXHuy7mKAC', blood_group: 'A+' },
  { name: 'Md. Ahnaf Islam Rahat', id: '2302021', gender: 'male', role: null, hometown: 'Gazipur', email: '2302021@gmail.com', facebook_url: 'https://www.facebook.com/share/1Li9xzcqKX/', whatsapp: '01891789854', photo_url: 'https://drive.usercontent.google.com/download?id=1SjcwsdAeOhExoMt_JxCS3TU9DbkDVVyX', blood_group: 'B+' },
  { name: 'Fatema Tabassum', id: '2302022', gender: 'female', role: null, hometown: 'Gazipur', email: 'fatematabassum935@gmail.com', facebook_url: 'https://www.facebook.com/fatema.tabassum.92754397', whatsapp: '01940553195', photo_url: 'https://drive.usercontent.google.com/download?id=1BVxWOC8-SwjC5LfeChqSd8dGUra9rltX', blood_group: null },
  { name: 'FATEMA AKTER MEGLA', id: '2302025', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null, blood_group: null },
  { name: 'Anika Ibnat Suborna', id: '2302026', gender: 'female', role: null, hometown: 'Saidpur, Nilphamari', email: 'anikasdpr86@gmail.com', facebook_url: 'https://www.facebook.com/share/1FJvZgeeuV/', whatsapp: null, photo_url: null, blood_group: 'A+' },
  { name: 'MST. RAZIA SULTANA RAKHI', id: '2302027', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null, blood_group: null },
  { name: 'SHADIYA ZAMAN TANHA', id: '2302031', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null, blood_group: null },
  { name: 'Ankan Chandra Dey', id: '2302034', gender: 'male', role: null, hometown: 'Bhola', email: 'ankan.chandra.dey@gmail.com', facebook_url: 'https://www.facebook.com/ankan.chandra.dey', whatsapp: '01778227150', photo_url: 'https://drive.usercontent.google.com/download?id=1GBJFMQuo0oFo6FlIx0kj7s_F1paznf80', blood_group: 'B+' },
  { name: 'Mst. Swarna Khatun', id: '2302039', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null, blood_group: null },
  { name: 'Abid Hasan', id: '2302041', gender: 'male', role: null, hometown: 'Mymensingh', email: 'abid.edte@gmail.com', facebook_url: 'https://www.facebook.com/abidedte', whatsapp: "01626227911", photo_url: 'https://drive.usercontent.google.com/download?id=1aLrZ72JLEh7PAZiBVJRF_NInOTglPben', blood_group: 'A+' },
  { name: 'Nusrat Jahan', id: '2202020', gender: 'female', role: null, hometown: 'Cumilla', email: 'ij088142@gmail.com', facebook_url: 'https://www.facebook.com/profile.php?id=61553557357093', whatsapp: null, photo_url: 'https://drive.usercontent.google.com/download?id=1DC1TAPRO9MJ6tG4v-UNaLDAN7f054Rg9', blood_group: 'O+' }
];

