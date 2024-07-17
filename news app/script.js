let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey="; //add api key


function displayData(data){
    let articles = data.articles;
    articles.forEach(article => {
        let title = article.title;
        let description = article.description;
        let url = article.url;
        let img = article.urlToImage;
        
        // getting date in desired format
        let [year,month,date] = article.publishedAt.split('T')[0].split('-');
        let monthsInYear = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
          ];
        let displayDate = `${monthsInYear[parseInt(month)]} ${date}, ${year}`;


        // creating content for html
        let newTile = document.createElement('div');
        newTile.classList.add('tile');

        let useImage = document.createElement('img');
        useImage.src = img;
        useImage.classList.add('news-image');
        useImage.alt = "news image";

        let useDate = document.createElement('p');
        useDate.classList.add('date','p');
        useDate.innerText = displayDate;

        let useTitle = document.createElement('h2');
        useTitle.classList.add('title','p');
        useTitle.innerText = title;

        let useDescription = document.createElement('p');
        useDescription.classList.add('description','p');
        useDescription.innerText = description;

        let useLink = document.createElement('a');
        useLink.classList.add('p','anch');
        useLink.href = url;
        useLink.innerText = "Read More";

        // adding content to html
        newTile.appendChild(useImage);
        newTile.appendChild(useDate);
        newTile.appendChild(useTitle);
        newTile.appendChild(useDescription);
        newTile.appendChild(useLink);
        document.querySelector('.container').appendChild(newTile);
    
    });
}

async function fetchData() {
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  