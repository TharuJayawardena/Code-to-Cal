let profile = document.querySelector('.header .flex .profile');

document.querySelector("#user-btn").onclik = () => {
    profile.classList.toggle('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
}