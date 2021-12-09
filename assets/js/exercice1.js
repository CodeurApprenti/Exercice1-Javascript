
// Déclaration de mes deux variables

let ageSaisi;
let genreSaisi;


// Déclaration de mes variables associées à mes id 
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function Imposition(){
    //récupérer la valeur de l'age et du genre avec la fonction .value
    ageSaisi = document.getElementById('age-saisi').value;
    genreSaisi = document.getElementById('genre-saisi').value;
    //  Si age >= 18 et Homme alors, ou si femme et age >= 20 et si femme
    if(genreSaisi == "H" && ageSaisi >= 20){
        message.innerHTML ='<div class="alert alert-danger" role="alert">Vous êtes imposable!</div>';
    }else if((genreSaisi == "F" && ageSaisi >=18) && (genreSaisi == "F" && ageSaisi <= 35)){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable!</div>';
    }else{
        message.innerHTML = '<div class="alert alert-success" role="alert">Vous êtes non imposable!</div>'
    }
    
}

// Ajout d'un écouteur d'évêment  clique appelera la fonction Imposition();
bouton.addEventListener('click', Imposition, false);
