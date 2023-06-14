import { useEffect, useState } from "react";

const Form = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data.data));

    console.log(countries);
  }, []);
  return (
    <div>
      <h1>Recevoir notre newsletter</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <br />

        <div>
          <label htmlFor="motdepasse">Mot de passe</label>
          <input type="password" id="motdepasse" />
        </div>

        <br />

        <div>
          <label htmlFor="Pays">Pays</label>
          <select name="Pays" id="Pays">
            <option disabled selected>
              Votre Pays
            </option>
            {countries.map((c, index) => {
              return (
                <option key={index} value={c.country}>
                  {c.country}
                </option>
              );
            })}
          </select>
        </div>

        <br />
        <div>
          <label>Frequence</label>
          <input
            type="radio"
            value="Hebdomadaire"
            id="Hebdomadaire"
            name="Frequence"
          />
          <label htmlFor="Hebdomadaire">Hebdomadaire</label>
          <input type="radio" value="Mensuel" id="Mensuel" name="Frequence" />
          <label htmlFor="Mensuel">Mensuel</label>
        </div>

        <br />

        <div>
          <input value="Valider" type="submit" />
        </div>
      </form>
    </div>
  );
};
export default Form;
