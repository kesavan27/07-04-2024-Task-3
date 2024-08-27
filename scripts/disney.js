document.addEventListener("DOMContentLoaded", () => {
    // API URL
    const disneyAPI = "https://api.disneyapi.dev/character";
  
    // Elements
    const charactersContainer = document.getElementById("charactersContainer");
    const errorMessage = document.getElementById("errorMessage");
  
    // Event listener to fetch characters
    document.getElementById("fetchCharacters").addEventListener("click", () => {
      fetchDisneyCharacters();
    });
  
    // Fetch Disney Characters from API
    function fetchDisneyCharacters() {
      fetch(disneyAPI)
        .then((response) => response.json())
        .then((data) => displayCharacters(data.data))
        .catch(() => handleError("Failed to load characters from Disney API."));
    }
  
    // Display characters on the page
    function displayCharacters(characters) {
      charactersContainer.innerHTML = ""; // Clear previous content
  
      characters.forEach((character) => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
      });
    }
  
    // Create a card element for each character
    function createCharacterCard(character) {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "card");
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const characterImage = document.createElement("img");
      characterImage.src = character.imageUrl;
      characterImage.alt = character.name;
  
      const characterName = document.createElement("h5");
      characterName.textContent = character.name;
  
      cardBody.appendChild(characterImage);
      cardBody.appendChild(characterName);
      card.appendChild(cardBody);
  
      return card;
    }
  
    // Error handling
    function handleError(message) {
      errorMessage.style.display = "block";
      errorMessage.textContent = message;
    }
  });
  