// Smooth scroll to form
function scrollToForm() {
    document.getElementById("join-form").scrollIntoView({ behavior: "smooth" });
  }
  
  // Toggle between influencer and brand form
  function showForm(type) {
    const influencerForm = document.getElementById("influencerForm");
    const brandForm = document.getElementById("brandForm");
  
    influencerForm.classList.add("hidden");
    brandForm.classList.add("hidden");
  
    if (type === "influencer") {
      influencerForm.classList.remove("hidden");
    } else {
      brandForm.classList.remove("hidden");
    }
  }
  
  // Animate sections on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll("section").forEach(section => {
    section.classList.add("before-animate");
    observer.observe(section);
  });
  