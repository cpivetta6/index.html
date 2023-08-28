function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function runLoop() {
  for (let count = 1; count < 10; count++) {
    const textList = [
      "C:\\cpivetta\\system32> Hello, my name is Caio and i'm Full Stack Web Developer Jr.",
      "C:\\cpivetta\\system32> I am passionate about creating software solutions that solve real problems. ",
      "C:\\cpivetta\\system32> ./cpivetta/knowledge.exe",
      "...",
      "JAVA                    [Spring Boot, Hibernate, Rest-API]",
      "JAVA SCRIPT      [node.js (express, API, JWT, SSR), React.js]",
      "HTML/CSS          [html5][css3]",
      "SQL                     [Queries, modifiers and calculations| SQL Server, MYSQL, POSTGRESQL]",
      "DOCKER             [Images and Containerization, Docker Engine]",
    ];

    const typingTextElement = document.getElementById("typing-text" + count);
    let i = 0;

    async function typeText() {
      if (i < textList[count - 1].length) {
        typingTextElement.innerHTML += textList[count - 1].charAt(i);

        i++;
        setTimeout(typeText, 25); // Adjust the typing speed by changing the delay (in milliseconds)
      }
    }

    typeText();

    if (count > 3) {
      await sleep(500);
    } else {
      await sleep(3000);
    }

    // Delay of 5 seconds
  }
}

runLoop();
