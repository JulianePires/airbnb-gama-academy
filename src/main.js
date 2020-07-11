// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

// Para isso, usaremos o "fetch", conforme você deve ter visto nas aulas online.
// Corrija a linha abaixo, para que a requisição funcione.
fetch(API_URI)
  .then(response => response.json())
  .then(result => {
    const row = document.getElementById("row");
  
    result.forEach(item => {
      // Desestruture seu objeto, trazendo os seguintes dados:
      // Foto, tipo, nome e preço da propriedade.
      const { photo, property_Type, property_Name, property_Price } = item;

      let div = document.createElement("div");
      div.className = "col-md-4 altura";

      let card = document.createElement("div");
      card.className = "card mb-4 box-shadow";

      let image = document.createElement("img");
      div.classList.add("card-img-top");
      image.src = photo;

      let cardBody = document.createElement("div");
      div.classList.add("card-body");

      let cardText = document.createElement("div");
      div.classList.add("card-text");

      let propertyType = createElement("p");
      propertyType.className = "property-type";
      propertyType.innerHTML = property_Type;

      let propertyName = createElement("p");
      propertyName.className = "property-name";
      propertyName.innerHTML = property_Name;

      propertyPrice = createElement("p");
      propertyPrice.className = "property-price";
      propertyPrice.innerHTML = property_Price;

      // AOBA! Temos agora, todos os elementos necessários para percorrer a resposta da API e,
      // anexar um ao outro para exibição ao usuário. Para "anexar" os elementos, nós usaremos
      // o método "appendChild". Se liga na estrutura do componente, para que tudo seja exibido
      // corretamente:
      //
      // row
      //   div
      //     card
      //       image
      //       cardBody
      //         cardText
      //           propertyType
      //           propertyName
      //           propertyPrice

      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(propertyType);
      cardText.appendChild(propertyName);
      cardText.appendChild(propertyPrice);
      // [ ... ]
    })
  })
