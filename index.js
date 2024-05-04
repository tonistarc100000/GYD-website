// for the top nav bar scroll feature 

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the navigation bar
        document.querySelector(".name-loging").style.transform = "translateY(-100%)";
    } else {
        // Scrolling up, show the navigation bar
        document.querySelector(".name-loging").style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});






























// this code for the profiles section which lies in main tag main 


document.addEventListener("DOMContentLoaded", function () {
    const rahulElement = document.querySelector(".rahul");
    const cardImageElement = document.querySelector(".ci1");


    function enlargeCardImage() {
        cardImageElement.style.width = "225px";
        cardImageElement.style.height = "225px";
    }


    function resetCardImageSize() {
        cardImageElement.style.width = "";
        cardImageElement.style.height = "";
    }


    rahulElement.addEventListener("mouseover", enlargeCardImage);
    rahulElement.addEventListener("mouseout", resetCardImageSize);
    cardImageElement.addEventListener("mouseover", enlargeCardImage);
    cardImageElement.addEventListener("mouseout", resetCardImageSize);
});



document.addEventListener("DOMContentLoaded", function () {
    const rohitElement = document.querySelector(".rohit");
    const cardImageElement = document.querySelector(".ci2");


    function enlargeCardImage() {
        cardImageElement.style.width = "225px";
        cardImageElement.style.height = "225px";
    }


    function resetCardImageSize() {
        cardImageElement.style.width = "";
        cardImageElement.style.height = "";
    }


    rohitElement.addEventListener("mouseover", enlargeCardImage);
    rohitElement.addEventListener("mouseout", resetCardImageSize);
    cardImageElement.addEventListener("mouseover", enlargeCardImage);
    cardImageElement.addEventListener("mouseout", resetCardImageSize);
});




document.addEventListener("DOMContentLoaded", function () {
    const charlieElement = document.querySelector(".charlie");
    const cardImageElement = document.querySelector(".ci3");


    function enlargeCardImage() {
        cardImageElement.style.width = "225px";
        cardImageElement.style.height = "225px";
    }


    function resetCardImageSize() {
        cardImageElement.style.width = "";
        cardImageElement.style.height = "";
    }


    charlieElement.addEventListener("mouseover", enlargeCardImage);
    charlieElement.addEventListener("mouseout", resetCardImageSize);
    cardImageElement.addEventListener("mouseover", enlargeCardImage);
    cardImageElement.addEventListener("mouseout", resetCardImageSize);
});





document.addEventListener("DOMContentLoaded", function () {
    const rahulElement = document.querySelector(".jugnu");
    const cardImageElement = document.querySelector(".ci4");


    function enlargeCardImage() {
        cardImageElement.style.width = "225px";
        cardImageElement.style.height = "225px";
    }


    function resetCardImageSize() {
        cardImageElement.style.width = "";
        cardImageElement.style.height = "";
    }


    rahulElement.addEventListener("mouseover", enlargeCardImage);
    rahulElement.addEventListener("mouseout", resetCardImageSize);
    cardImageElement.addEventListener("mouseover", enlargeCardImage);
    cardImageElement.addEventListener("mouseout", resetCardImageSize);
});
































// appear and disappear code foe reach me button 

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button1');
    const h1 = document.querySelector('.h1');

    // Function to show h1 when button is clicked
    function showh1() {
        h1.style.display = 'block';
    }

    // Event listener to show h1 when button is clicked
    button.addEventListener('click', showh1);

    // Event listener to hide h1 when clicked outside
    document.addEventListener('click', function (event) {
        if (!h1.contains(event.target) && !button.contains(event.target)) {
            h1.style.display = 'none';
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const button2 = document.querySelector('.button2');
    const h2 = document.querySelector('.h2');

    // Function to show h2 when button is clicked
    function showh2() {
        h2.style.display = 'block';
    }

    // Event listener to show h2 when button is clicked
    button2.addEventListener('click', showh2);

    // Event listener to hide h2 when clicked outside
    document.addEventListener('click', function (event) {
        if (!h2.contains(event.target) && !button2.contains(event.target)) {
            h2.style.display = 'none';
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const button3 = document.querySelector('.button3');
    const h3 = document.querySelector('.h3');

    // Function to show h3 when button is clicked
    function showh2() {
        h3.style.display = 'block';
    }

    // Event listener to show h3 when button is clicked
    button3.addEventListener('click', showh2);

    // Event listener to hide h3 when clicked outside
    document.addEventListener('click', function (event) {
        if (!h3.contains(event.target) && !button3.contains(event.target)) {
            h3.style.display = 'none';
        }
    });
});







document.addEventListener('DOMContentLoaded', function () {
    const button4 = document.querySelector('.button4');
    const h4 = document.querySelector('.h4');

    // Function to show h4 when button is clicked
    function showh2() {
        h4.style.display = 'block';
    }

    // Event listener to show h4 when button is clicked
    button4.addEventListener('click', showh2);

    // Event listener to hide h4 when clicked outside
    document.addEventListener('click', function (event) {
        if (!h4.contains(event.target) && !button4.contains(event.target)) {
            h4.style.display = 'none';
        }
    });
});





