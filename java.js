// Trigger alert on Buy Now
function buyNow(productName) {
  alert(`Thank you for your interest in the "${productName}"! We'll contact you shortly.`);
}

// Simulated message sending
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been sent! We'll get back to you soon.");
  this.reset();
});
