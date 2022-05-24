const recipeModule = ( () => {

  const vegetableSelection = document.querySelector('select[id="veggie-recipe"]');
    const fruitSelection = document.querySelector('select[id="fruit-recipe"]');
    const proteinSelection = document.querySelector('select[id="protein-recipe"]');
    const dairySelection = document.querySelector('select[id="dairy-recipe"]');
    const resultContainer = document.querySelector('.result-container');
    const ingredients = document.querySelector('.ingredients');

    return  {
        //HANDLE SUBMIT FUNCTION
        handleSubmit: function(e) {
            e.preventDefault();
            //Get values from all selects
            const veggieValue = veggieSelection.value;
            const fruitValue = fruitSelection.value;
            const proteinValue = proteinSelection.value;
            const dairyValue = dairySelection.value;
            //call
            this.handleFetch(veggieValue, fruitValue, proteinValue, dairyValue);
        },

        handleFetch: async function(veggieValue, fruitValue, proteinValue, dairyValue) {
            const dataRequest = await fetch(`https://www.edamam.com/results/recipes/?search=${veggieValue}&app_id=08ab47ee&app_key=fa5814a32eb2669676885dff6d983c44&health=${fruitValue}&diary=${proteinValue}&to=30`);
            const dataResponse = await dataRequest.json()
            console.log(dataResponse);
            const dataResults =  dataResponse.hits;

            this.render(dataResults);
        },



        render: function(data) {
            const html = data.map((item) => {
                return this.renderResult(item);
            }).join('');

            resultContainer.innerHTML = html;
        },

        // return a <li> item
        renderResult: function(data) {
            //Title
            const title = data.recipe.label;
            //Labels
            const label = data.recipe.dietLabels.map(tag => {
                return `<span>${tag}</span>`
            }).join('');
            //Image
            const image = data.recipe.image;
            //Tags
            const tags = data.recipe.healthLabels.map(tag => {
            return `<span>${tag}</span>`
            }).join('');

            // Calories
            const calories = data.recipe.calories;
            //Ingredients

            const ingred = data.recipe.ingredientLines.map(ingredient => {
            return `<li class="ingredient">${ingredient}</li>`;
            }).join('');

            //Link
            const link = data.recipe.url;

            return `
                <div class="pill">
                <p class="title">${title}</p>
                <span class="label">${label}</span>
                <img src="${image}" alt="Recipe Image">
                <div class="tags">${tags}</div>
                <ol>
                ${ingred}
                </ol>
                <a href="${link}" target="_blank">Go to recipe</a>
                </div>
                `
            }
        }

  })();

const submitButton = document.querySelector('input[type="button"]');
submitButton.addEventListener('click',recipeModule.handleSubmit.bind(recipeModule));
