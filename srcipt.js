document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");
  
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      
      if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      
      // Simulação de login bem-sucedido
      alert("Login realizado com sucesso!");
      loginForm.reset();
    });
    
    // Adiciona efeito 3D ao mover o mouse
    const iphone = document.querySelector(".iphone");
    document.addEventListener("mousemove", (e) => {
      if (iphone) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        iphone.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    });
    
    // Reset da posição quando o mouse sai
    document.addEventListener("mouseleave", () => {
      if (iphone) {
        iphone.style.transform = "rotateY(0deg) rotateX(0deg)";
      }
    });
  }
});
alert("Conta criada com sucesso!");
window.location.href = "login.html"; 
  if (email === "sabir@example.com" && password === "123456") {
  alert("Login realizado com sucesso!");
  window.location.href = "dashboard.html"; // Redireciona para a dashboard
}

