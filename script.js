document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = {
        username: formData.get('username'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password:formData.get('password')
        
    };

    fetch('/saveUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert('User information saved successfully!');
        document.getElementById('userForm').reset();
    })
    .catch(error => console.error('Error:', error));
});

const nav1 =  document.querySelector("#menu");

nav1.addEventListener('click' , function() {
    window.location.href = "navigationbar.html";

});