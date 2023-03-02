import { useState } from "react"

// function Formulaire(){}
const Formulaire = () => {

  /**
   * On crée des valeurs pas défaut pour initialer notre objet user.
   * qui contiendra les données saisies.
   */
  const [user, setUser] = useState({
   prenom: '',
   password: ''
  })

  const [checkPseudo, setCheckPseudo] = useState(false)


  const handleChange = (event) => {
    /**
     * @event.target
     * Contient notre balise input de ce fait on peut s'en 
     * servir pour récupérer un attribut spécifique.
     * On déstructure e.target pour récupérer l'attribut
     * name ainsi que sa value. 
     * @Destructuration
     * Permet directement de déclarer une variable 
     * et de lui assigner la valeur d'une propriété d'un objet.
     */
    const { name, value } = event.target
    
    /**
     * @Spread (...)
     * Permet de créer des copies superficielles de notre objet
     */
    setUser(user => ({...user, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    /* 
      c'est ici qu'on peut envoyer les informations pour la bdd, store, api etc
      On peut faire une ou des conditions pour vérifier par 
      exemple si le mot de passe contient bien 8 caractère au minimum etc.
    */

    if(user.prenom.length < 1 ){
      setCheckPseudo(false)
      console.log("erreur => le prenom vide")
    }else{
      setCheckPseudo(true)
      console.log("succès => tous les champs sont remplis") 
    }
  }

return(
    <div>
      {user.prenom.length > 0 &&
        <div>
          Prenom : {user.prenom}
        </div>
      }
      {checkPseudo &&
        <p>{user.pseudo}</p>
      }
      <form onSubmit={handleSubmit} >
        <label htmlFor="prenom">Prenom : </label>
        <input 
        type="text" 
        id="prenom" 
        name="prenom"  
        placeholder="prenom" 
        onChange={handleChange}  
        />

        <label htmlFor="nom">Nom : </label>
        <input 
          type="password" 
          id="nom" 
          name="nom"  
          placeholder="nom" 
          onChange={handleChange}
        />

        <button>valider</button>
      </form>
    </div>
  )

}
export default Formulaire