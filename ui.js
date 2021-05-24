// access infromation from fetch.js

class UI {
    constuctor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }

    populateUI(data) {
        // desrtuce-vars
        // passing in the fetch 
        // add the to inner HTML
        this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18 rem; ">
            <div class ="card-body justify-content-center">
                <h5 class ="card-title">${data.name}</h5>
                <h6 class ="card-subtitle mb-2 text-muted"> Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                <p class=" card-text">Weather conditions are described as: ${data.weather[0].description}</p>
            </div>
        </div>
        
        `;
    }
}