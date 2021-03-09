let object = {
  speakers: [{ firstName: "Catalina" }, { firstName: "Yamandú" }, { firstName: "Israel" }],
  data: {
    continents: {
      america: {
        countries: {
          brazil: {
            capital: "Brasilia",
            population: 213500000
          }
        }
      }
    },
    languages: {
      portuguese: {
        hello: "Tudo bem?"
      },
      spanish: {
        hello: "Hola"
      }
    }
  }
}

function addSpeaker(speakerName) {
    object.speakers.push({ firstName: speakerName });
}

function addLanguage(language, sayHelloIn) {
    object.data.languages[language] = { hello: sayHelloIn }
}

function addCountry(country, capital, population) {
    object.data.continents.america.countries[country] = { capital: capital, population: population }
}