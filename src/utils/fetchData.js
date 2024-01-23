export const exerciseOption = {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '41bb903547mshb5840dbd36c9e80p190862jsn2929c20ce85c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}