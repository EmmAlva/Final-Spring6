'use strict';

const render = (root,data) => {
  root.empty();
  console.log(data);
  const wrapper = $('<div class="wrapper"></div>');
  // if(state.page == "main"){
    wrapper.append(Header(data,_=>{ render(root) }));
  //   wrapper.append(Board(data,_=>{ render(root) }));
  // }else{
    // wrapper.append(Modal(data,_=>{ render(root) }));
    // wrapper.append(Board(data,_=>{ render(root) }));
  // }
  root.append(wrapper);
}

const state = {
  page: "main",
  data: {},
};

const root = $("#root");
    render(root);

$.get('https://api/news/', (response,req, estado) =>{
  if (estado.status != 200){
      reject(new Error("Error al obtener datos"));
    }else{
      resolve(response);
      console.log(response);
    }
  });
