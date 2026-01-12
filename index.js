
      const button = document.querySelector("button");

      button.addEventListener("click", toggleDarkMode)

      function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
      }