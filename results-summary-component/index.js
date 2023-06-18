window.addEventListener("DOMContentLoaded", (event) => {
    let summaryDetailsDiv = document.querySelector('.summary__details');
    fetch('./data.json')
        .then(response => response.json())
        .then(json => {
            let sum = 0;
            json.forEach(element => {
                sum += element.score;

                let article = document.createElement("article");
                article.classList.add("summary__details__detail");
                article.setAttribute("data-summary-category", element.category.toLowerCase());
                
                let category = document.createElement("p");
                category.append(element.category);
                category.classList.add("summary__details__detail__category");
                article.appendChild(category);

                let score = document.createElement("p");
                score.append(element.score + " / ");
                score.classList.add("summary__details__detail__score");

                let total = document.createElement("span");
                total.append("100");
                total.classList.add("summary__details__detail__score__total");
                score.appendChild(total);
                
                article.appendChild(score);
                summaryDetailsDiv.append(article);
            });

            let valueSpan = document.querySelector(".result__score__value");
            valueSpan.append(Math.floor(sum / json.length));
        })
        .then(() =>{
            let main = document.querySelector("main");
            main.style.visibility = "visible";
        });
});