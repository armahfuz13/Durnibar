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
}

export const members: Member[] = [
  { name: 'Md. Jihan Sharkar Jim', id: '2302024', gender: 'male', role: null, hometown: 'Pirganj, Rangpur', email: 'jihansharkarjim@gmail.com', facebook_url: 'https://www.facebook.com/jsjim4349', whatsapp: '01794547085', photo_url: 'https://drive.usercontent.google.com/download?id=1_vgM3sBMZOc6TQ_NVFGyEOtSuqSphZC6' },
  { name: 'Tazber Razzak', id: '2302014', gender: 'female', role: null, hometown: 'Tangail', email: '2302014@uftb.ac.bd', facebook_url: 'https://www.facebook.com/tazber.razzak', whatsapp: null, photo_url: 'https://drive.usercontent.google.com/download?id=1yk08o4q1a3LoXMao4uC-vkAfQ0hIIXyI' },
  { name: 'Khadiza Islam', id: '2302036', gender: 'female', role: null, hometown: 'Gazipur', email: '2302036@uftb.ac.bd', facebook_url: 'https://www.facebook.com/share/18jqXYyNJg/', whatsapp: '01799020717', photo_url: 'https://drive.usercontent.google.com/download?id=1FpgSoOXmM5Lk6vnT6w4cBCjjmx0fhRCy' },
  { name: 'Asim Ahmed', id: '2302001', gender: 'male', role: null, hometown: 'Gazipur', email: 'jonayetahmmed4545@gmail.com', facebook_url: 'https://www.facebook.com/share/1GfWaPT37h/', whatsapp: '01730821603', photo_url: 'https://drive.usercontent.google.com/download?id=1Wi_lvZcZHpWP0odLE9I53V99FApgfNig' },
  { name: 'Md. Masud Rana', id: '2302020', gender: 'male', role: null, hometown: 'Pirganj, Rangpur', email: '2302020@uftb.ac.bd', facebook_url: 'https://www.facebook.com/share/1PrcEXXh6w/', whatsapp: '01611290722', photo_url: 'https://drive.usercontent.google.com/download?id=1hDryerJyxRCKYi_1AFV68E_pasaMevV8' },
  { name: 'Pobithro Kumar Singha', id: '2302018', gender: 'male', role: null, hometown: 'Thakurgaon', email: 'pobithrokumarsingha@gmail.com', facebook_url: 'https://www.facebook.com/pobithrokumarsingha', whatsapp: '01303161528', photo_url: 'https://drive.usercontent.google.com/download?id=1P4rz5VK45PIsyfno1JwCjnyhp02xalrW' },
  { name: 'Syed Ladidul Islam Ladid', id: '2302029', gender: 'male', role: null, hometown: 'Rangpur Sadar', email: 'ladid.syed@gmail.com', facebook_url: 'https://www.facebook.com/share/1CnMge431W/', whatsapp: '01521726367', photo_url: 'https://drive.usercontent.google.com/download?id=1E3sF8TLw3hJuprXZwCSkaPghN9G3-2e0' },
  { name: 'Iftekar Hossain', id: '2302033', gender: 'male', role: null, hometown: 'Brahmanbaria', email: 'iftekharuli207@gmail.com', facebook_url: 'https://www.facebook.com/share/1ECND5tiAy/', whatsapp: '01983584699', photo_url: 'https://drive.usercontent.google.com/download?id=1W233N-uLpYyGzlA9UEheULce9nlhAYvK' },
  { name: 'Habibur Rahman', id: '2302002', gender: 'male', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Israt Sadia', id: '2302003', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Md. Kamrul Hassan', id: '2302004', gender: 'male', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Usha Intan', id: '2302006', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Sumaiya Simu Sunay', id: '2302008', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Md. Labib Hasan', id: '2302009', gender: 'male', role: null, hometown: 'Kurigram', email: '2302009@uftb.ac.bd', facebook_url: 'https://www.facebook.com/myselflabib', whatsapp: null, photo_url: 'https://drive.usercontent.google.com/download?id=1TEQVZGzsH28-piCVtpsSz9rp-buQ20ju' },
  { name: 'Mst. Kaniz Naher Keya', id: '2302010', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Sadia Rafat Ontora', id: '2302011', gender: 'female', role: 'cr', hometown: 'Pabna', email: '2302011@uftb.ac.bd', facebook_url: 'https://facebook.com/sadia.ontora.2024', whatsapp: null, photo_url: null },
  { name: 'Mst. Nazin Akter Nahida', id: '2302012', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Md. Tahsan Islam', id: '2302013', gender: 'male', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Md. Younus Ali', id: '2302016', gender: 'male', role: 'cr', hometown: 'Kurigram', email: '2302016@uftb.ac.bd', facebook_url: 'https://facebook.com/md.younus.ali.945464', whatsapp: '01820938889', photo_url: 'https://drive.usercontent.google.com/download?id=1YX8w1LbWZevoqejz9Ok9tQ1HB6AoQ2Cq' },
  { name: 'Ahmadur Rahman', id: '2302017', gender: 'male', role: null, hometown: 'Brahmanbaria', email: 'ahmadurr04@gmail.com', facebook_url: 'https://facebook.com/ahmadurr04', whatsapp: '01705255731', photo_url: 'https://drive.usercontent.google.com/download?id=13nvnr_JLw0K2-OntonRvajPNw7OOZ6B8' },
  { name: 'Md. Abu Hena', id: '2302019', gender: 'male', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Md. Ahnaf Islam Rahat', id: '2302021', gender: 'male', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Fatema Tabassum', id: '2302022', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Fatema Akter Megla', id: '2302025', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Anika Ibnat Suborna', id: '2302026', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Mst. Razia Sultana Rakhi', id: '2302027', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Shadiya Zaman Tanha', id: '2302031', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Ankan Chandra Dey', id: '2302034', gender: 'male', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: 'https://drive.usercontent.google.com/download?id=1GBJFMQuo0oFo6FlIx0kj7s_F1paznf80' },
  { name: 'Mst. Swarna Khatun', id: '2302039', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Abid Hasan', id: '2302041', gender: 'male', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null },
  { name: 'Nusrat Jahan', id: '2202020', gender: 'female', role: null, hometown: null, email: null, facebook_url: null, whatsapp: null, photo_url: null }
];
