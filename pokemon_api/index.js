//////////////
fetchData();

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemon").value;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("No pokemon");
    }

    const data = await response.json();
    const imagePo = data.sprites.front_default;
    const image = document.getElementById("image");

    image.src = imagePo;
    image.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
