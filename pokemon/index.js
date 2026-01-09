const url = "https://vn.portal-pokemon.com/play/pokedex/api/v1";
// khai báo lấy id body

const render = () => {
  // fetch dữ liệu
  // lặp dữ liệu gọi function renderItem
};

const renderType = (types) => {
  // xử lý types("pokemon_type_id":"grass,poison") cắt chuỗi thành mảng sau đó lặp để in ra
  return ["grass", "poison"].map((item) => {
    return `<div class="rounded-lg bg-blue-400 p-1 py-0.5 flex-1">
                <p class="text-[11px] text-center">${item}</p>
              </div>`;
  });
};

// [{"zukan_id":"0001","zukan_sub_id":0,"pokemon_name":"Fushigidane","pokemon_sub_name":"","weight":6.9,"height":0.7,"file_name":"\/img\/pm\/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png","pokemon_type_id":"grass,poison","pokemon_type_name":"h\u1ec7 \u0110i\u1ec7n,h\u1ec7 \u0110\u1ed9c"}{"zukan_id":"0001","zukan_sub_id":0,"pokemon_name":"Fushigidane","pokemon_sub_name":"","weight":6.9,"height":0.7,"file_name":"\/img\/pm\/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png","pokemon_type_id":"grass,poison","pokemon_type_name":"h\u1ec7 \u0110i\u1ec7n,h\u1ec7 \u0110\u1ed9c"}001","zukan_sub_id":0,"pokemon_name":"Fushigidane","pokemon_sub_name":"","weight":6.9,"height":0.7,"file_name":"\/img\/pm\/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png","pokemon_type_id":"grass,poison","pokemon_type_name":"h\u1ec7 \u0110i\u1ec7n,h\u1ec7 \u0110\u1ed9c"}]

const renderItem = (item) => {
  return `<div
        class="rounded-lg relative h-[270px] duration-300 hover:-translate-y-1"
      >
        <!-- card background -->
        <div class="absolute left-0 top-0 z-1">
          <img
            src="https://vn.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png"
          />
        </div>
        <!-- Image -->
        <div class="flex justify-center items-center relative z-10">
          <img
            class="w-[80%]"
            src="https://vn.portal-pokemon.com/play/resources/pokedex/"
          />
        </div>
  
        <!-- content -->
        <div
          class="flex flex-col gap-4 justify-between items-start relative z-10 mt-2 p-4"
        >
          <div class="">
            <p class="text-sm text-indigo-400">001</p>
            <p class="text-lg font-bold">test</p>
          </div>
          <div class="flex justify-between items-center w-full gap-2">
            ${renderType(item)}
          </div>
        </div>
      </div>`;
};
