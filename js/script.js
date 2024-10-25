/* --------------------------------------------------------------
|                  SMOOTH NAVBAR                                |
----------------------------------------------------------------*/
$(document).ready(function(){
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

    // Close navbar when clicking outside
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    $(document).ready(function(){
        // Existing smooth scroll and navbar close code...
    
        // Scroll event to animate shapes
        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $('.home-section').addClass('scrolled');
            } else {
                $('.home-section').removeClass('scrolled');
            }
        });
    });
    


    document.addEventListener('DOMContentLoaded', function() {
        // Get the button and target section
        const viewWorkButton = document.querySelector('a[href="#portfolio"]');
        const portfolioSection = document.querySelector('#portfolio');
    
        // Add click event listener
        viewWorkButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
    
            // Smooth scroll to the portfolio section
            portfolioSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    

/* --------------------------------------------------------------
|                   PORTFOLIO MODAL GALLERY                     |
----------------------------------------------------------------*/

const scrollGallery = document.getElementById('scrollGallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    scrollGallery.scrollBy({ left: -150, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    scrollGallery.scrollBy({ left: 150, behavior: 'smooth' });
});

function openModal(src, title, description) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modal.style.display = "grid";
    modal.style.alignItems = "center";
    modal.style.placeItems = "center";
    modal.style.justifyContent = "center";
    modalImg.src = src;
    caption.innerHTML = `<center><h2 style="padding-top: 2%;">${title}</h2></center><p style = "text-align: justify; padding: .5% 5% 0 5%;">${description}</p>`;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}


// Close the modal when clicking outside the image
document.getElementById("myModal").addEventListener('click', function(event) {
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent.contains(event.target)) {
      closeModal();
    }
  });


 


// Function to generate gallery items dynamically
function loadGallery() {
    const galleryContainer = document.getElementById('scrollGallery');
    
    galleryItems.forEach(item => {
        const imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.alt = item.title;
        imgElement.onclick = () => openModal(item.src, item.title, item.description);
        galleryContainer.appendChild(imgElement);
    });
}

// Load the gallery on page load
window.onload = function() {
    loadGallery();
};


// SKILLS AND EXPERTISE

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.progress-wheel');

    skills.forEach(wheel => {
        const progressCircle = wheel.querySelector('.progress');
        const percentageText = wheel.querySelector('.percentage');
        const percentage = wheel.getAttribute('data-progress');
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Set the progress wheel values
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference; // Start with full offset

        // Use requestAnimationFrame to ensure smooth animation
        requestAnimationFrame(() => {
            progressCircle.style.transition = 'stroke-dashoffset 2s ease-in-out';
            progressCircle.style.strokeDashoffset = circumference - (percentage / 100 * circumference);
            percentageText.textContent = `${percentage}%`;
        });
    });
});

 // SEE MORE
document.getElementById('see-more-button').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        this.textContent = 'See Less';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'See More';
    }
});







/*Site Section*/