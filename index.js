window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const button = document.getElementById("button");
  let int;
  let card = 0;
  // viridis color palette from--https://waldyrious.net/viridis-palette-generator/
  const colors = [
      "#f0f921",
      "#fcd225",
      "#fdae32",
      "#f68d45",
      "#e76f5a",
      "#d5546e",
      "#c03a83",
      "#a62098",
      "#8606a6",
      "#6300a7",
      "#3e049c",
      "#0d0887"
  ];

  let angle = 0;
  let step = (2*Math.PI) / 12;
  function drawCard() {
    if (card > 11) return clearInterval(int);
    let radius = 300;
    let x = 500 + radius * Math.cos(angle);
    let y = 375 + radius * Math.sin(angle);
    angle += step;
    console.log({card,x,y});

    const text = `<!DOCTYPE html><html> <head> <title>${card+1}</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0 auto;text-align:center;color: #f9faffde;
      text-shadow: #858ebc -2px 2px 8px;width:100vw;height:100vh;background-color:${colors[card]};}</style><h1>${card+1}</h1></body></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank', `popup,location,status,scrollbars,resizable,width=100,height=100,top=${y},left=${x}`);
    window.URL.revokeObjectURL(blobUrl);
    card++;
  }

  button.onclick = () => {int = setInterval(drawCard, 200);};
});