
    // Search (from home.html)
    function updateSearchInput() {
      const dropdown = document.getElementById("searchSelect");
      document.getElementById("searchInput").value = dropdown.options[dropdown.selectedIndex].text;
    }

    function combinedSearch() {
      const input = document.getElementById("searchInput").value.toLowerCase().trim();
      const pages = {
        "Introduction": "#introduction",
        "intro": "#introduction",
        "skills": "#skills",
        "projects": "#projects",
        "project": "#projects",
        "education": "edu.html",
        "certification": "#cert",
        "cert": "#cert",
        "contact": "#contact",
        "career": "#career"
      };
      for (let keyword in pages) {
        if (input.includes(keyword)) {
          window.location.href = pages[keyword];
          return;
        }
      }
      alert("Sorry, no results found for: " + input);
    }

    document.getElementById("searchInput").addEventListener("keypress", function(e) {
      if (e.key === "Enter") combinedSearch();
    });

    // Back to top button (from intro.html)
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('backToTop');
      if (window.scrollY > 100) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active")); // remove from all
      this.classList.add("active"); // add to clicked one
    });
  });

  // Optional: highlight based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 200;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
 