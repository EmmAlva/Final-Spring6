'use strict';

const Header = (data, update)=>{
  console.log(data);

  const header = $('<header></header>');
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col-lg-6"></div>');
  const section =$('<img src="assets/img/menu.png" alt=""> SECTION');
  const search = $('<img src="assets/img/search.png" alt=""> SEARCH');

  const col2 = $('<div class="col-lg-6 text-right"></div>');
  const iconfb =$('<img  src="assets/img/fb.png" alt="">');
  const icontw = $('<img  src="assets/img/tw.png" alt="">');
  const iconin = $('<img  src="assets/img/in.png" alt="">');

  const row2 = $('<div class="row"></div>');
  const col2_1 =$('<div class="col-xs-12 text-center"></div>');
  const logo = $('<img src="assets/img/logoicon.png" alt="">');
  const div = $(' <div><span>Lunes, Junio 12 de 2017  |  </span><img src="assets/img/cloud.png" alt="">22°</div>');

  const row3 = $('<div class="row"></div>');
  const nav = $(' <nav class="navbar "></nav>');
  const cont_fluid =$(' <div class="container-fluid "></div>');
  const nav_header = $('<div class="navbar-header"></div>');
  const btn = $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>');
  const span1 = $('<span class="icon-bar"></span>');
  const span2 = $('<span class="icon-bar"></span>');
  const span3 = $('<span class="icon-bar"></span>');
  const brand = $('<img class="navbar-brand" href="assets/img/logoicon.png">');

  const collap = $('<div class="collapse navbar-collapse bg-orange" id="bs-example-navbar-collapse-1"></div>');
  const ul_nav =$('<ul class="nav navbar-nav "></ul>');
  const li0 = $('<li><a href="#">Lo ultimo</a></li>');
  const li1 = $('<li><a href="#">Opinión</a></li>');
  const li2 = $('<li><a href="#">Cultura</a></li>');
  const li3 = $('<li><a href="#">Perú</a></li>');
  const li4 = $('<li><a href="#">Tecnología</a></li>');
  const li5 = $('<li><a href="#">Mundo</a></li>');
  const li6 = $('<li><a href="#">Economía</a></li>');
  const li7 = $('<li><a href="#">Lifestyle</a></li>');
  const li8 = $('<li><a href="#">Deportes</a></li>');

  header.append(container);
  container.append(row);
  row.append(col);
  row.append(col2);
  col2.append(iconfb);
  col2.append(icontw);
  col2.append(iconin);
  col.append(section);
  col.append(search);

  col2_1.append(logo);
  col2_1.append(div);
  row2.append(col2_1);
  container.append(row2);

  header.append(row3);
  row3.append(nav);
  nav.append(cont_fluid);
  btn.append(span1);
  btn.append(span2);
  btn.append(span3);
  nav_header.append(btn);
  nav_header.append(brand);
  cont_fluid.append(nav_header);

  cont_fluid.append(collap);
  collap.append(ul_nav);
  ul_nav.append(li0);
  ul_nav.append(li1);
  ul_nav.append(li2);
  ul_nav.append(li3);
  ul_nav.append(li4);
  ul_nav.append(li5);
  ul_nav.append(li6);
  ul_nav.append(li7);
  ul_nav.append(li8);

  return header;

}
