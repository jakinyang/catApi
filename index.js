const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);

let breedtype = args[0];

fetchBreedDescription(breedtype, (error, description) => {
  if (error === null && description === null) {
    return console.log('Breed type not found');
  }
  if (error) {
    console.log("Error in breed fetch", error);
  } else {
    console.log(description);
  }
});