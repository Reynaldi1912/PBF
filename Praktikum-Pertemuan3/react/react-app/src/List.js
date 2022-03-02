// import React, { Component } from 'react';
import React, { Component } from 'react';
import Image from './Image';
class List extends Component {
render() {
 return (
 <div>
     <h2>Dibawah adalah halam list gambar</h2>
 <ol>
 <li>
 Satu
 <Image linkGambar='https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rilis-playstation-5-ditunda-akibat-rusuh-di-as-sebelumnya-sony-menjadwalkan-tanggal-4-juni.jpg' />
 </li>
 <li>
 Dua
 <Image linkGambar='https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2021/02/playstation-1.jpg' />
 </li>
 <li>
 Tiga
 <Image linkGambar='https://cf.shopee.co.id/file/2c0bc301c676d197890778f73d2b4eb5' />
 </li>
 <li>
 Empat
 <Image linkGambar='https://cdn-2.tstatic.net/tribunnews/foto/bank/images/playstation-3-465767.jpg' />
 </li>
 </ol>
 </div>
 );
}
}export default List;
