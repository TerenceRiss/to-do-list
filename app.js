

// je récupère mon formulaire
const formElt = document.getElementById("new-task");

// fonction pour ajouter une tâche
function addNewTask(event)
{
    // j'empeche l'envoi du formulaire
    event.preventDefault();

// je recupere la valeur de l'input et le stock dans une constante 
    const taskInputElt = document.getElementById("task-title");

//    je recupere la valeur de l'input
    const newTask = taskInputElt.value;


    // si la valeur de l'input est vide alors je quitte la fonction 
    console.log(typeof taskInputElt.value)
    if (taskInputElt.value == "") {
    return 
}

//  je crée un nouveau <li> et le stock dans une constante 
    const newTaskElt = document.createElement('li');

    // j'insere ma nouvelle tache (<li>) dans mon Ul
    document.getElementById("myUl").appendChild(newTaskElt)



    // je crée un bouton 
const createNewBtn = document.createElement ('button')
    // j'ajoute un text a mon bouton "supprimer"
createNewBtn.textContent = "❌"
    // j'ajoute mpon bouton dans le <li>
newTaskElt.appendChild(createNewBtn)
    // quand je click sur le boutton le <li> est supprimer
    createNewBtn.addEventListener('click', deleteTask)


        // je crée un bouton 
const createValBtn = document.createElement ('button')
// j'ajoute un text a mon bouton "terminer"
createValBtn.textContent = "✅"
// j'ajoute mon bouton dans le <li>
newTaskElt.appendChild(createValBtn)
// quand je click sur le boutton le <li> est terminé
createValBtn.addEventListener('click', validateTask)


        // je crée un bouton 
        const createEditBtn = document.createElement ('button');
        // j'ajoute un text a mon bouton "Modifier"
        createEditBtn.textContent = "✍"
        // j'ajoute un input
        const newInput = document.createElement ('input')
        // j'ajoute mon btn dans le <li>
        newTaskElt.appendChild(createEditBtn)
        // j'ajoute mon input dans le html
        newTaskElt.prepend(newInput)
        // je veux que l'input contienne le nom de la tâche
        newInput.value = newTask
        // je veux que l'input se cache
        newInput.style.display = "none";
        // quand je click sur le boutton le <li> est terminé
        createEditBtn.addEventListener('click', editTask);
        // quand on click sur edit ca montre l'input 

        // créer un span
        const newSpan = document.createElement('span');
        // mettre le texte dans un span
        newSpan.textContent = newTask
        // j'ajoute ma span dans le html 
        newTaskElt.prepend(newSpan)
        
        // je défini la valeur de l'input a vide apres avoir ajouté une tâche
        taskInputElt.value = "";
        function editTask (){
            newInput.style.display = "inline";
            newSpan.style.display = "none";
        }
        //  j'ajoute un eventlistener sur l'input 
          newInput.addEventListener('blur', saveTask);
        //  quand on sort de l'input on change le text on cache l'input et on affiche le text (fonction )
        function saveTask (){
            newInput.style.display = "none";
            newSpan.style.display = "inline";
            // recupere la valeur de l'input et la mettre dans le span 
            newSpan.textContent = newInput.value;
        }

}




// j'excecute la fonction addNewTask quand je SOUMET le formulaire. 
formElt.addEventListener('submit', addNewTask);


//  je recupere mon boutton 
const deleteBtnElt = document.getElementById ("delete-btn");
//  quand je clique ca me supprime la tache 
deleteBtnElt.addEventListener ('click', deleteTask) 

// je crée la fonction supprimer un element 
function deleteTask (event){
    // je cible le parent du bouton clicker et je le supprime du DOM 
    event.target.parentNode.remove()

}

// je crée la fonction terminer un element 
function validateTask (event){
    // je cible le parent du bouton clicker et je le supprime du DOM 
    event.target.parentNode.classList.toggle("checked");
}



// Modifier une tâche.

// je crée un bouton modifier 
const createEditBtn = document.createElement('button');

// j'ajouter un text a mon bouton modifier 
createEditBtn.textContent = "Edit"

// j'ajoute mon bouton dans le <li>


// quand je click ca  modifie la tache 

// stocker la valeur de l'item dans le DOM 

// creer un nouvel input 

// mettre la valeur dans le nouvel input

// ajouter l'input dans le dom 

// remplacer la tache initial dans le DOM

// crer la fonction save tache 

