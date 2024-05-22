export function searchImages(q) {         
    const params = new URLSearchParams({
      key: '43953718-9ce06f0736fa41b18ed1e7ce5',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',     
    });
  
    return fetch(`https://pixabay.com/api/?${params}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });
  }