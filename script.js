const url = 'https://api.coingecko.com/api/v3/'
async function market_cap_toplist() {
  const vs_currency = 'usd';
  const order = 'market_cap_desc';
  const per_page = '10';
  const page = '1';
  const sparkline = 'false';
  const response = await fetch(`${url}coins/markets?vs_currency=${vs_currency}&order=${order}&per_page=${per_page}&page=${page}&sparkline=${sparkline}`);
  const data = await response.json();
  return data;
};

async function popTable(data) {
  const dados = await data;
  dados.forEach(element => {
    const tr = document.createElement('tr');
    tr.className = element.id;
    document.querySelector('.coins_table').appendChild(tr);
    const td_id = document.createElement('td');
    td_id.innerText = element.id;
    document.querySelector(`.${element.id}`).appendChild(td_id);
    const td_symbol = document.createElement('td');
    td_symbol.innerText = element.symbol;
    document.querySelector(`.${element.id}`).appendChild(td_symbol);
    const td_image = document.createElement('td');
    const img = document.createElement('img');
    img.src = `${element.image}`;
    img.width = '25';
    img.height = '25';
    td_image.appendChild(img);
    document.querySelector(`.${element.id}`).appendChild(td_image);
    const td_current_price = document.createElement('td');
    td_current_price.innerText = element.current_price;
    document.querySelector(`.${element.id}`).appendChild(td_current_price);
  });
}

window.onload = () => {
  popTable(market_cap_toplist());
}