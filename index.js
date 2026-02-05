const md = require("markdown-it")({
  html: true,
  linkify: true,
  breaks: true,
});
const mdEmoji = require("markdown-it-emoji");
const fs = require("fs");

md.use(mdEmoji);

const title = `<h1 align="center">Hi 👋, I'm Wojtek Kowalik</h1>`;
const description =
  '<h3 align="center">A programmer who likes to constantly broaden his horizons</h3>';
const counter = `<p align="left"> <img src="https://komarev.com/ghpvc/?username=wojciech-kowalik&label=Profile%20views&color=0e75b6&style=flat" alt="wojciech-kowalik" /></p>`;
const points = `
- 💬 Ask me about **frontend, backend**
- 📫 How to reach me **kontakt@wojciech-kowalik.pl**
- 📄 Know about my experiences [https://drive.google.com/file/d/1sDfjupYssCU0kQnevKMeW4qjUr8s6_TX/view?usp=sharing](https://drive.google.com/file/d/1sDfjupYssCU0kQnevKMeW4qjUr8s6_TX/view?usp=sharing)`;
const tableStats = `
<table align="center" cellspacing="0" cellpadding="0">
    <tr>
        <td>
              <img align="center" src="https://github-readme-stats-fast.vercel.app/api?username=wojciech-kowalik&show_icons=true" alt="wojciech-kowalik" />
        </td>
        <td>
        <img align="center" src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=wojciech-kowalik&layout=compact" alt="wojciech-kowalik" /></td>
    </tr>
</table>`;
const lastUpdate = `<b style="font-size: smaller;">Last update:</b> <span style="font-size: smaller;">${new Date().toLocaleString(
  "pl-PL",
  {
    timeZone: "Europe/Warsaw",
  }
)}</span>`;
(() => {
  const content = `${title}\n${description}\n${counter}\n${points}\n${tableStats}\n${lastUpdate}`;

  const markdownContent = md.render(content);
  fs.writeFile("README.md", markdownContent, (err) => {
    if (err) {
      return console.error(err);
    }
    console.info(`Writing to README.md`);
  });
})();
