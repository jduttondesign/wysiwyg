//(use global var for #11/#12)

/*Create an array of objects that represents famous people (see structure below).
Create a text input in your DOM.
Beneath that, create a container, block element in your DOM.
Create a DOM element for each of the objects inside the container. Style your person elements however you like.
For every even numbered element, have a light yellow background.
For every odd numbered element, have a light blue background.
Each element's DOM structure should be as shown below.
When you click on one of the person elements, a dotted border should appear around it.
When you click on one of the person elements, the text input should immediately gain focus
so that you can start typing.
When there is a highlighted person element, and you begin typing in the input box, 
the person's biography should be immediately bound to what you are typing, letter by letter.
When you press the enter/return key when typing in the input field, then the content 
of the input field should immediately be blank.
*/


var people = [

{
  title: "Samurai",
  name: "Hillary",
  bio: "Not Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},{
  title: "Someguy",
  name: "Donald",
  bio: "Is Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},{
  title: "Redhead",
  name: "Fred",
  bio: "Wont Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},{
  title: "Jungle",
  name: "George",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},{
  title: "Bearra",
  name: "Sarah",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}];
  
 var current_text = "";
 var outputEl = document.getElementById("outputEl");
for (var counter = 0; counter < 5; counter++) {
  // Give each person element a unique identifier
 // console.log("people", people[counter]);
 // console.log("people", people[counter]["lifespan"]["birth"]);

 var nameString = "";
      nameString += `<div class="person__container">`;
      nameString += `<element>`;
  		nameString += `<person>`;
  		nameString += `<header>  ${people[counter]["name"]} the ${people[counter]["title"]} go here</header>`;
  		nameString += `<section id="person--${counter}"> ${people[counter]["bio"]} the ${people[counter]["image"]} go here</section>`;
  		nameString += `<footer> birth ${people[counter]["lifespan"]["birth"]} death ${people[counter]["lifespan"]["death"]}go here </footer>`;
      nameString += `</person> </element> </div>`;
  outputEl.innerHTML += nameString;
  
}
 var div = document.getElementsByClassName('person__container');

var currentSelectedDiv;

for(var i = 0; i < div.length; i++) {
  //console.log("test");
  document.getElementById(`person--${i}`).addEventListener("click", function(e) {
    console.log("e", e.target);
    currentSelectedDiv = e.target;
    e.target.setAttribute("class", "dotted_border");
    document.getElementById("user-input").value = e.target.innerHTML;
    document.getElementById("user-input").focus();
    current_text= e.target.id;
    //console.log(this.id);
  });
}

document.getElementById("user-input").addEventListener("keyup", function (event){
  console.log("currentSelectedDiv", currentSelectedDiv);
  currentSelectedDiv.innerHTML = document.getElementById("user-input").value;
});

  // userInput.focus();
  // userInput.addEventListener("keyup", function (event){
  //   event.preventDefault();
  //   bioSection.innerHTML = userInput.value;
  // }

// // Now containerEl will have elements in it
// var containerEl = document.getElementsByClassName("person__container");

// // Event listeners are created
// for (var i = 0; i < containerEl.length; i++) {
//   containerEl[i].addEventListener("click", function (event) {
//     // Logic to execute when the element is clicked
//   });
// });