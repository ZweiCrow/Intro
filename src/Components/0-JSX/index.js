/**
 * @JSX 
 * extension de javascript crée par React, utilise la syntaxe sous 
 * forme de tags directement dans le code javascript, 
 * ce qui permet de combiner HTML et JS facilement.
 * On peut appliquer des expressions javascript directement dans note JSX avec des accolades.
 * JSX stands for JavaScript XML.
 */

/*
 * @Exemple
 * On a bien créer un composant Exemple pas exemple.
 * Par convention il faut mettre une majuscule à nos composants JSX !
 */
const Exemple = () =>{ 

  /**
   * Variable
   * @prenom String 
   * @nom String
   * @nombre Number
   * @prix integer
   * @boolean Boolean
   */

  const prenom = "Christopher";
  const nom = "EMIDOF";
  const nombre = 21;
  const prix = 7;
  const boole = true;

  /**
   * @array Objet
   * @arrayCollection Objet
   */
  
  const array = [
    "pomme",
    "banane",
    "fraise"
  ];

  const arrayCollection = [
    {
      id: 0,
      prenom : "Ippo",
      technique: "dumsfer roll",
      stamina: 23192,
      strength: 2898
    },
    {
      id: 1,
      prenom : "Challenger",
      technique: "jab",
      stamina: 24516,
      strength: 2356
    }
  ];

  return(
    <div>
      {/* Exemple 1 pour des maths */}
     
      <p>Exemple 1 (Soustraire 50 - 8 pour savoir combien de pommes il reste) : il me reste {50 - 8} pommes</p>

      <p>Exemple 2 (Afficher la variable prenom) : {prenom} </p>

      <p>Exemple 3 (Transformer la variable prenom en miniscule): {prenom.toLowerCase()} </p>

      <p>Exemple 4 (Concaténer la variable nom et prenom) : {nom} {prenom} </p>

      <p>Exemple 5 (condition : si notre variable boolean est égal à true on affiche quelle est égale à true sinon on affiche une chaine vide) : {boole === true && "c'est true"} </p>
  
      <p>
          Exemple 6 (condition : si notre variable boolean est égal à true et que notre variable nombre est strictement égale à 2 on afffiche tout est ok,
          sinon on affiche une chaine vide) : {boole && nombre === 2 ? "tout est ok " : "ERREUREEEE !!!"} 
      </p>

      <p>
          Exemple 7 (condition : si notre variable boolean est égal à true ou que notre variable nombre est strictement égale à 10 on afffiche tout est ok,
          sinon on affiche une chaine vide) : {boole || nombre === 10 ? "tout est ok " : "ERREUREEEE !!!"}  
      </p>

      <p>
        Exemple 8 (condition : si notre variable prix est supérieur à 10, on affiche "le prix est supérieur à dix" sinon "le prix est inférieur à dix" ) : 
        {prix > 10 ? "le prix est supérieur à dix" : "le prix est inférieur à dix"} 
      </p>

      <p>Exemple 9 (afficher le premier prenom de notre array) : {arrayCollection[0].prenom} </p>

      <p>Exemple 7 (Itérer notre array avec la function map et affichez tout son contenu dans une balise p) : 
        {array.map((item, index) => {
        return (<div key={index}> {index} : {item}</div>)
      })} </p>
      
      {/**
       * @map
       * passe sur chaque élément d'un tableau et renvoie un nouveau tableau.
       */}
       

      {/* ... */}
  
      <p>Exemple 8 (itération arrayCollection et afficher toutes les informations de Ippo) :</p>

      {arrayCollection.map((item) => {
        return ( item.prenom === "Ippo" && 
        <>
          <div>{item.prenom}</div>
          <div>technique : {item.technique}</div>
          <div>stamina : {item.stamina}</div>
          <div>STR : {item.strength}</div>
        </>)
      })}

    </div>
  )
}
/**
 * @export default
 * Permet d'exporter notre composant, pour pouvoir le réutiliser.
 */
export default Exemple;