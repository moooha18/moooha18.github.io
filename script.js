let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function showSuccessMessage(event) {
    event.preventDefault(); // Prevent immediate submission
    
    // Get form data
    const form = event.target;
    const name = encodeURIComponent(form.name.value);
    const email = encodeURIComponent(form.email.value);
    const phone = encodeURIComponent(form.phone.value);
    const subject = encodeURIComponent(form.subject.value);
    const message = encodeURIComponent(form.message.value);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:hmmohamed0@gmail.com?subject=${subject}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
    
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Hide message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
    
    // Reset form
    form.reset();
  }