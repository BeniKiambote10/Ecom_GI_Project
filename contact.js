document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs (you can add more validation if needed)
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    if (name === '' || email === '' || comment === '') {
        alert('Please fill in all fields.');
        return;
    }

  
});

function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
};
