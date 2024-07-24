// index.js

// Callbacks
const handleClick = (ramen) => {
  document.querySelector('.detail-image').src = ramen.image;
  document.querySelector('.name').textContent = ramen.name;
  document.querySelector('.restaurant').textContent = ramen.restaurant;
  document.getElementById('rating-display').textContent = ramen.rating;
  document.getElementById('comment-display').textContent = ramen.comment;
   

  // Add code
};

  
  
  // Add code


const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const newRamen = {
      name : document.getElementById('new-name').value,
      restaurant : document.getElementById('new-restaurant').value,
      image : document.getElementById('new-image').value,
      rating : document.getElementById('new-rating').value,
      comment : document.getElementById('new-comment').value,
      
    }

    console.log('New ramen:', newRamen);

    const ramenMenu = document.getElementById('ramen-menu');
    const ramenImage = document.createElement('img');

    ramenImage.src = newRamen.image;
    ramenImage.alt = newRamen.name;

    ramenImage.addEventListener('click', () =>
      handleClick(newRamen)
    );

    ramenMenu.appendChild(ramenImage);

    // Optionally, clear the form after submission
    form.reset();

  })


  // Add code
}

const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenData => {
      const ramenMenu = document.getElementById('ramen-menu');
      ramenMenu.innerHTML = "";
      ramenData.forEach(ramen => {
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.image;
        // ramenImage.alt = ramen.name;

        

        ramenImage.addEventListener('click', () =>
          handleClick(ramen));

        ramenMenu.appendChild(ramenImage);
      });
    });
}


const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};








