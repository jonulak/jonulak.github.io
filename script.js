const cardData = [
    {
      "image": "images/wave-memoji.jpeg",
      "title": "Welcome",
      "text": "My name is Jon and welcome to my intro page. I'm a veteran interested in learning web development through the Vets Who Code program."
    },
    {
      "image": "images/irresistable-memoji.jpeg",
      "title": "About Me",
      "text": "I am a veteran of the Marine Corps and a Pharmacist currently practicing in the inpatient hospital setting."
    },
    {
      "image": "images/laptop-memoji.jpeg",
      "title": "Coding Experience",
      "text": "I want to learn web development to transition to a career in software development. I already know python & swift and have an app published on the App Store."
    },
    {
      "image": "images/heart-memoji.jpeg",
      "title": "Hobbies",
      "text": "Some of my hobbies include rock climbing, hiking, reading, & gardening. I also spend my free time with my 3 dogs and beautiful wife."
    },
    {
      "image": "images/zen-memoji.jpeg",
      "title": "Goals",
      "text": "Beyond transitioning into a new career, I'd also like to one day begin freelancing and start my own development company."
    },
    {
      "image": "images/call-memoji.jpeg",
      "title": "Vets Who Code",
      "text": "I'd love to work and learn with you all! I'm excited for the chance to better myself through such an amazing program."
    }
  ]
  
  function loadContent() {
    var cards = [];
    var container = document.getElementById("cardContainer");
  
    for (var i = 0; i < cardData.length; i++) {
      var card = document.createElement("span");
      card.id = "card" + i;
      if (i == 0) {
        card.className = "infoCard active";
      } else {
        card.className = "infoCard inactive";
      }
      card.addEventListener('click', function(e) {
        setActiveCard(this.id)
      });
  
      var image = document.createElement("img");
      image.src = cardData[i].image;
      image.draggable = false;
      image.className = "cardImage";
      card.appendChild(image);
  
      var textBox = document.createElement("div")
      textBox.className = "textBox";
  
      var title = document.createElement("div");
      title.className = "title";
      title.innerText = cardData[i].title;
      textBox.appendChild(title);
  
      var displayText = document.createElement("div");
      displayText.className = "displayText";
      displayText.innerText = cardData[i].text;
      textBox.appendChild(displayText);
      card.appendChild(textBox);
  
      cards.push(card)
    }
  
    container.replaceChildren(...cards);
  }
  
  function setActiveCard(cardID) {
    var container = document.getElementById("cardContainer");
    var active = document.getElementsByClassName("infoCard active");
    for (i = 0; i < active.length; i++) {
      active[i].className = "infoCard inactive";
    }
    var newActive = document.getElementById(cardID);
    newActive.className = "infoCard active";
    newActive.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }
  
  loadContent();