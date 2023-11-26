/* HEADER DROPDOWN */
// Get the header dropdown elements
const headerDropdowns = document.querySelectorAll('.header-dropdown');
const headerOverlay = document.querySelector('.header-overlay');

// Add event listener to each header dropdown
headerDropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseover', () => {
    const overlay = headerOverlay;
    overlay.style.display = 'block';
  });

  dropdown.addEventListener('mouseout', () => {
    const overlay = headerOverlay;
    overlay.style.display = 'none';
  });
});

/* SEARCH CONTAINER */
const searchOpen = document.getElementById('searchOpen')
const searchClose = document.getElementById('searchClose')
const searchContainer = document.querySelector('#searchContainer')

function openSearch() {
  searchContainer.style.display = 'flex'
  headerOverlay.style.display = 'block';
  searchContainer.style.animation = 'searchAnimation 0.4s ease-in'
}

function closeSearch() {
  setTimeout(() => {
    searchContainer.style.animation = 'searchAnimationclose 0.25s ease-in';
    setTimeout(() => {
      searchContainer.style.display = 'none'
      headerOverlay.style.display = 'none';
      var dropdownContent = document.querySelectorAll('#dropdownContent')
      dropdownContent.forEach(e => {
        e.classList.add('d-none')
        e.style.animation = 'Dropdown-content 0.2s ease-in'
        console.log(e.classList)
      })
    }, 200);
  }, 100);
}

searchOpen.onclick = (e) => {
  openSearch()
};

searchClose.onclick = (e) => {
  closeSearch()
  closeHeaderDropdown()
};

/*HEADER DROPDOWN CONTAINER */
const headerDropdownBtn = document.getElementById('headerDropdownBtn')
const navLinks = document.getElementById('x-nav-link')

function openHeaderDropdown() {
  navLinks.classList.remove('d-none')
  navLinks.style.animation = 'searchAnimation 0.25s ease-in'
}

function closeHeaderDropdown() {
  navLinks.style.animation = 'searchAnimationclose 0.25s ease-in'
  setTimeout(() => {
    navLinks.classList.add('d-none')
    headerOverlay.style.display = 'none';
  }, 200);
}

headerDropdownBtn.onclick = (e) => {
  openHeaderDropdown()
  openSearch()
};

const headerDropdown = document.querySelectorAll('#headerDropdown')

headerDropdown.forEach(e => {

  var button = e.querySelector('#nav-btn')
  var dropdownContent = e.querySelector('#dropdownContent')
  var buttonClose = e.querySelector('#nav-btn-close')

  function openDropdownContent() {
    dropdownContent.classList.remove('d-none')
    dropdownContent.style.animation = 'DropdownContentOpen 0.25s ease-in'
  }

  function closeDropdownContent() {
    dropdownContent.style.animation = 'DropdownContentClose 0.25s ease-in'
    setTimeout(() => {
      dropdownContent.classList.add('d-none')
    }, 200);
  }

  buttonClose.onclick = (e) => {
    closeDropdownContent()
  }

  button.onclick = (e) => {
    if (window.matchMedia("(max-width: 991px)").matches) {
      openDropdownContent()
    }
  }
})


/* BODY HEADER */

// Get all the section elements and the corresponding links
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".body-header-link");

const bodyHeaderText = document.getElementById('bodyHeaderText');

// Intersection Observer to track active section
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeSectionId = entry.target.getAttribute("id");
      if (activeSectionId) {
        // Remove active class from all links
        links.forEach((link) => link.classList.remove("body-header-link-active"));
        // Add active class to the corresponding link
        const activeLink = document.querySelector(`a[href="#${activeSectionId}"]`);
        activeLink.classList.add("body-header-link-active");
        bodyHeaderText.innerText = activeLink.innerText
      }
    }
  });
}, { threshold: 0.2 });

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

/* Dropdown */
const bodyHeaderBtn = document.getElementById('bodyHeaderBtn');
const bodyHeaderIcon = document.getElementById('bodyHeaderIcon');
const bodyHeaderItem = document.getElementById('bodyHeaderItem');
var toggle= 1

function openBodyHeaderItem() {
  bodyHeaderItem.classList.remove('d-none')
  bodyHeaderItem.style.animation = 'bodyheaderOpen 0.3s ease-in'
  bodyHeaderIcon.style.transform = 'rotateZ(180deg)'
}

function closeBodyHeaderItem() {
  bodyHeaderItem.style.animation = 'bodyheaderClose 0.3s ease-in'
  bodyHeaderIcon.style.transform = 'rotateZ(0deg)'
  setTimeout(() => {
    bodyHeaderItem.classList.add('d-none')
  }, 200);
}

bodyHeaderBtn.onclick =(e) =>{
  if(toggle){
    openBodyHeaderItem()
    toggle = !toggle
  }else{
    closeBodyHeaderItem()
    toggle = !toggle
  }
}