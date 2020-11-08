// Beginning

// addEventListener
document.getElementById('id').addEventListener('click', a);
document.getElementById('button2').addEventListener('click', openC);
document.getElementById('sell-btn').addEventListener('click', sellBtn);

let counter = 0;

// Clicker function
function a(){
  if(counter<25){
    document.getElementById('a').innerHTML = "Click counter:" + counter + '/25';
    document.getElementById('reminder').style.display = 'none';
    counter++;
    document.getElementById('res').src ='img/glovecase.png';
    document.getElementById('res').style.border = 'none';
  }else if (counter === 25) {
    document.getElementById('button2').style.display = 'inline-block';
    document.getElementById('button2').disabled=false;
    document.getElementById("id").disabled=true;
    alert('Key purchased');
  }
}

// variables
 let caseNum = 0;
 let vice = 0;
 let boom = 0;
 let arid = 0;
 let pandora = 0;
 let hedge = 0;
 let dlore = 0;
 let potato = 0;
 let globe =0;
 let fear = 0;
 let girl = 0;
 let awper = 0;
// Open case fucntion
function openC() {
 
  counter = 0;
  setTimeout(enableButton, 5000);
  document.getElementById('button2').disabled=true;
  document.getElementById('reminder').style.display = 'inline';
  
// result
  let result = Math.random();
   if (result < 0.01) {
    document.getElementById('res').src = 'img/vice.jpg';
    document.getElementById('res').style.border = '2px solid red';
    document.getElementById('inven').innerHTML += '<img src = "img/viceinventory.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the VICE Gloves.';
    caseNum++;
    vice++;
  } else if (result <0.02) {
    document.getElementById('res').src = 'img/boom.png';
    document.getElementById('res').style.border = '2px solid red';
    document.getElementById('inven').innerHTML += '<img src = "img/boominventory.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the BOOM Gloves.';
    caseNum++;
    boom++;
  } else if (result < 0.03) {
    document.getElementById('res').src = 'img/arid.jpg';
    document.getElementById('res').style.border = '2px solid red';
    document.getElementById('inven').innerHTML += '<img src = "img/aridinventory.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the ARID Gloves.';
    caseNum++
    arid++;
  } else if (result < 0.04) {
    document.getElementById('res').src = 'img/pandora.jpg';
    document.getElementById('res').style.border = '2px solid red';
    document.getElementById('inven').innerHTML += '<img src="img/pandorainventory.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the PANDORA Gloves.';
    caseNum++;
    pandora++;
  } else if (result < 0.05) {
    document.getElementById('res').src = 'img/hedge.jpg';
    document.getElementById('res').style.border = '2px solid red';
    document.getElementById('inven').innerHTML += '<img src = "img/hedgeinventory.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the HEDGE Gloves.';
    caseNum++;
    hedge++;
  } else if (result < 0.1) {
    document.getElementById('res').src = 'img/awpdragonlore.jpg';
    document.getElementById('res').style.border = '2px solid red';
    document.getElementById('inven').innerHTML += '<img src = "img/lore.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the AWP DRAGON LORE.';
    caseNum++;
    dlore++;
  } else if (result < 0.16) {
    document.getElementById('res').src = 'img/awper.png';
    document.getElementById('res').style.border = '2px solid blue';
    document.getElementById('inven').innerHTML += '<img src = "img/awperinven.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the AWPER Sticker.';
    caseNum++;
    awper++;
  } else if (result < 0.32) {
    document.getElementById('res').src = 'img/girl.png';
    document.getElementById('res').style.border = '2px solid blue';
    document.getElementById('inven').innerHTML += '<img src = "img/girlinven.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the FIGHT LIKE A GIRL Sticker.';
    caseNum++;
    girl++;
  } else if (result < 0.48) {
    document.getElementById('res').src = 'img/fearsome.png';
    document.getElementById('res').style.border = '2px solid blue';
    document.getElementById('inven').innerHTML += '<img src = "img/fearinven.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the FEARSOME Sticker.';
    caseNum++;
    fear++;
  } else if (result < 0.64) {
    document.getElementById('res').src = 'img/global.png';
    document.getElementById('res').style.border = '2px solid pink';
    document.getElementById('inven').innerHTML += '<img src = "img/globalinven.png">';
    document.getElementById('gotem').innerHTML = 'Congrats! You get the GLOBAL Sticker.';
    caseNum++;
    globe++;
  } else if (result < 1) {
    document.getElementById('res').src = 'img/potato.jpg';
    document.getElementById('res').style.border = '2px solid white';
    document.getElementById('inven').innerHTML += '<img src = "img/poinven.png">';
    document.getElementById('gotem').innerHTML = 'Better luck next time. You got a POTATO.';
    caseNum++;
    potato++;
  }

// set timer
  let timer = 4;

  let thisCountdown = setInterval(countdown, 1000);

  function countdown(){
    if(timer >= 0){
      document.getElementById('reminder').innerHTML = timer + ' remaining...';
    }
    timer--;   
  }
  
  document.getElementById('case-number').innerHTML = caseNum;
}


 // add the event listener back to the first button
function enableButton(){
  document.getElementById('id').disabled=false;
}

// sell function

let polygon = 0;
let crimson = 0;
let doppler = 0;
let asimov = 0;
let lore = 0;
let chief = 0;
let liquid = 0;
function sellBtn() {
  // input
  let name = document.getElementById('item-btn').value.toLowerCase();
  
  // process
  if (name === 'awp' || name === 'dragon lore' && dlore > 0) {
    let itemSold = Math.random();
    if (itemSold < 0.2) {
      document.getElementById('res').src = 'img/polygon.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/polygoninven.png">';
      polygon++;
      dlore--;
    } else if (itemSold < 0.4) {
      document.getElementById('res').src = 'img/crimson.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/crimsoninven.png">';
      crimson++;
      dlore--;
    } else if (itemSold < 0.6) {
      document.getElementById('res').src = 'img/doppler.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/dopplerinven.png">';
      doppler++;
      dlore--;
    } else if (itemSold < 0.8) {
      document.getElementById('res').src = 'img/asimov.jpg';
      document.getElementById('res').style.border = '2px solid red';
      document.getElementById('inven').innerHTML += '<img src = "img/asimovinven.png">';
      asimov++;
      dlore--;
    } else if (itemSold < 1) {
      document.getElementById('res').src = 'img/lore.png';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/lorestickinven.png">';
      lore++;
      dlore--;
    }
  } else if (name === 'arid' && arid > 0) {
      let itemSold = Math.random();
      if (itemSold < 0.2) {
        document.getElementById('res').src = 'img/polygon.jpg';
        document.getElementById('res').style.border = '2px solid yellow';
        document.getElementById('inven').innerHTML += '<img src = "img/polygoninven.png">';
        polygon++;
        arid--;
      } else if (itemSold < 0.4) {
        document.getElementById('res').src = 'img/crimson.jpg';
        document.getElementById('res').style.border = '2px solid yellow';
        document.getElementById('inven').innerHTML += '<img src = "img/crimsoninven.png">';
        crimson++;
        arid--;
      } else if (itemSold < 0.6) {
        document.getElementById('res').src = 'img/doppler.jpg';
        document.getElementById('res').style.border = '2px solid yellow';
        document.getElementById('inven').innerHTML += '<img src = "img/dopplerinven.png">';
        doppler++;
        arid--;
      } else if (itemSold < 0.8) {
        document.getElementById('res').src = 'img/asimov.jpg';
        document.getElementById('res').style.border = '2px solid red';
        document.getElementById('inven').innerHTML += '<img src = "img/asimovinven.png">';
        asimov++;
        arid--;
      } else if (itemSold < 1) {
        document.getElementById('res').src = 'img/lore.png';
        document.getElementById('res').style.border = '2px solid yellow';
        document.getElementById('inven').innerHTML += '<img src = "img/lorestickinven.png">';
        lore++;
        arid--;
      } 
  } else if (name === 'boom' && boom > 0) {
      let itemSold = Math.random();
      if (itemSold < 0.2) {
        document.getElementById('res').src = 'img/polygon.jpg';
        document.getElementById('res').style.border = '2px solid yellow';
        document.getElementById('inven').innerHTML += '<img src = "img/polygoninven.png">';
        polygon++;
        boom--;
      } else if (itemSold < 0.4) {
        document.getElementById('res').src = 'img/crimson.jpg';
        document.getElementById('res').style.border = '2px solid yellow';
        document.getElementById('inven').innerHTML += '<img src = "img/crimsoninven.png">';
        crimson++;
        boom--;
      } else if (itemSold < 0.6) {
        document.getElementById('res').src = 'img/doppler.jpg';
        document.getElementById('res').style.border = '2px solid yellow';
        document.getElementById('inven').innerHTML += '<img src = "img/dopplerinven.png">';
        doppler++;
        boom--;
        } else if (itemSold < 0.8) {
        document.getElementById('res').src = 'img/asimov.jpg';
        document.getElementById('res').style.border = '2px solid red';
        document.getElementById('inven').innerHTML += '<img src = "img/asimovinven.png">';
        asimov++;
        boom--;
      } else if (itemSold < 1) {
        document.getElementById('res').src = 'img/lore.png';
        document.getElementById('res').style.border = '2px solid yellow';
        document.getElementById('inven').innerHTML += '<img src = "img/lorestickinven.png">';
        lore++;
        boom--;
      }
  } else if (name === 'hedge' && hedge > 0) {
      let itemSold = Math.random();
      if (itemSold < 0.2) {
      document.getElementById('res').src = 'img/polygon.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/polygoninven.png">';
      polygon++;
      hedge--;
     } else if (itemSold < 0.4) {
      document.getElementById('res').src = 'img/crimson.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/crimsoninven.png">';
      crimson++;
      hedge--;
     } else if (itemSold < 0.6) {
      document.getElementById('res').src = 'img/doppler.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/dopplerinven.png">';
      doppler++;
      hedge--;
     } else if (itemSold < 0.8) {
      document.getElementById('res').src = 'img/asimov.jpg';
      document.getElementById('res').style.border = '2px solid red';
      document.getElementById('inven').innerHTML += '<img src = "img/asimovinven.png">';
      asimov++;
      hedge--;
     } else if (itemSold < 1) {
      document.getElementById('res').src = 'img/lore.png';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/lorestickinven.png">';
      lore++;
      hedge--;
     }
  } else if (name === 'vice' && vice > 0) {
     let itemSold = Math.random();
    if (itemSold < 0.2) {
      document.getElementById('res').src = 'img/polygon.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/polygoninven.png">';
      polygon++;
      vice--;
    } else if (itemSold < 0.4) {
      document.getElementById('res').src = 'img/crimson.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/crimsoninven.png">';
      crimson++;
      vice--;
    } else if (itemSold < 0.6) {
      document.getElementById('res').src = 'img/doppler.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/dopplerinven.png">';
      doppler++;
      vice--;
    } else if (itemSold < 0.8) {
      document.getElementById('res').src = 'img/asimov.jpg';
      document.getElementById('res').style.border = '2px solid red';
      document.getElementById('inven').innerHTML += '<img src = "img/asimovinven.png">';
      asimov++;
      vice--;
    } else if (itemSold < 1) {
      document.getElementById('res').src = 'img/lore.png';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/lorestickinven.png">';
      lore++;
      vice--;
    }
  } else if (name === 'pandora' && pandora > 0) {
     let itemSold = Math.random();
    if (itemSold < 0.2) {
      document.getElementById('res').src = 'img/polygon.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/polygoninven.png">';
      polygon++;
      pandora--;
    } else if (itemSold < 0.4) {
      document.getElementById('res').src = 'img/crimson.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/crimsoninven.png">';
      crimson++;
      pandora--;
    } else if (itemSold < 0.6) {
      document.getElementById('res').src = 'img/doppler.jpg';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/dopplerinven.png">';
      doppler++;
      pandora--;
    } else if (itemSold < 0.8) {
      document.getElementById('res').src = 'img/asimov.jpg';
      document.getElementById('res').style.border = '2px solid red';
      document.getElementById('inven').innerHTML += '<img src = "img/asimovinven.png">';
      asimov++;
      pandora--;
    } else if (itemSold < 1) {
      document.getElementById('res').src = 'img/lore.png';
      document.getElementById('res').style.border = '2px solid yellow';
      document.getElementById('inven').innerHTML += '<img src = "img/lorestickinven.png">';
      lore++;
      pandora--;
    }
  } else if (name === 'global' && globe > 0) {
    let itemSelled = Math.random();
    if (itemSelled < 0.5) {
      document.getElementById('res').src = 'img/chief.jpg';
      document.getElementById('res').style.border = '2px solid purple';
      document.getElementById('inven').innerHTML += '<img src = "img/chiefinven.png">';
      chief++;
      globe--;
    } else {
      document.getElementById('res').src = 'img/liquid.png';
      document.getElementById('res').style.border = '2px solid blue';
      document.getElementById('inven').innerHTML += '<img src = "img/liquidinven.png">';
      liquid++;
      globe--;
    }
  } else if (name === 'fearsome' || name === 'fear' && fear > 0) {
    let itemSelled = Math.random();
    if (itemSelled < 0.5) {
      document.getElementById('res').src = 'img/chief.jpg';
      document.getElementById('res').style.border = '2px solid purple';
      document.getElementById('inven').innerHTML += '<img src = "img/chiefinven.png">';
      chief++;
      fear--;
    } else {
      document.getElementById('res'). src = 'img/liquid.png';
      document.getElementById('res').style.border = '2px solid blue';
      document.getElementById('inven').innerHTML += '<img src = "img/liquidinven.png">';
      liquid++;
      fear--;
    }
  } else if (name === 'girl' || name === 'fight like a girl' && girl > 0) {
    let itemSelled = Math.random();
    if (itemSelled < 0.5) {
      document.getElementById('res').src = 'img/chief.jpg';
      document.getElementById('res').style.border = '2px solid purple';
      document.getElementById('inven').innerHTML += '<img src = "img/chiefinven.png">';
      chief++;
      girl--;
    } else {
      document.getElementById('res'). src = 'img/liquid.png';
      document.getElementById('res').style.border = '2px solid blue';
      document.getElementById('inven').innerHTML += '<img src = "img/liquidinven.png">';
      liquid++;
      girl--;
    }
  } else if (name === 'awper' && awper > 0) {
    let itemSelled = Math.random();
    if (itemSelled < 0.5) {
      document.getElementById('res').src = 'img/chief.jpg';
      document.getElementById('res').style.border = '2px solid purple';
      document.getElementById('inven').innerHTML += '<img src = "img/chiefinven.png">';
      chief++;
      awper--;
    } else {
      document.getElementById('res'). src = 'img/liquid.png';
      document.getElementById('res').style.border = '2px solid blue';
      document.getElementById('inven').innerHTML += '<img src = "img/liquidinven.png">';
      liquid++;
      awper--;
    }
  } else if (name === 'potato' || name === 'po' && potato > 0) {
    let itemSelled = Math.random();
    if (itemSelled < 0.5) {
      document.getElementById('res').src = 'img/chief.jpg';
      document.getElementById('res').style.border = '2px solid purple';
      document.getElementById('inven').innerHTML += '<img src = "img/chiefinven.png">';
      chief++;
      potato--;
    } else {
      document.getElementById('res'). src = 'img/liquid.png';
      document.getElementById('res').style.border = '2px solid blue';
      document.getElementById('inven').innerHTML += '<img src = "img/liquidinven.png">';
      liquid++;
      potato--;
    }
  } else {
    document.getElementById('notify').innerHTML = 'Invalid Item!'
    document.getElementById('notice').innerHTML = 'Item Names: Vice, Arid, Pandora, Boom, Hedge, Dragon Lore, Global, Girl, Awper, Fearsome/Fear, Potato/Po.';
  }

  document.getElementById('inven').innerHTML = ' ';
  let viceT = 0;
  while (viceT < vice) {
    document.getElementById('inven').innerHTML += '<img src="img/viceinventory.png">';
    viceT++;
  }
  let aridT = 0;
  while (aridT < arid) {
    document.getElementById('inven').innerHTML += '<img src="img/aridinventory.png">';
    aridT++;
  }
  let hedgeT = 0;
  while (hedgeT < hedge) {
    document.getElementById('inven').innerHTML += '<img src="img/hedgeinventory.png">';
    hedgeT++;
  }
  let boomT = 0;
  while (boomT < boom) {
    document.getElementById('inven').innerHTML += '<img src="img/boominventory.png">';
    boomT++;
  }
  let pandoraT = 0;
  while (pandoraT < pandora) {
    document.getElementById('inven').innerHTML += '<img src="img/pandorainventory.png">';
    pandoraT++;
  }
  let dloreT = 0;
  while (dloreT < dlore) {
    document.getElementById('inven').innerHTML += '<img src="img/lore.png">';
    dloreT++;
  }
  let crimsonT = 0;
  while (crimsonT < crimson) {
    document.getElementById('inven').innerHTML += '<img src="img/crimsoninven.png">';
    crimsonT++;
  }
  let dopplerT = 0;
  while (dopplerT < doppler) {
    document.getElementById('inven').innerHTML += '<img src="img/dopplerinven.png">';
    dopplerT++;
  }
  let loreT = 0;
  while (loreT < lore) {
    document.getElementById('inven').innerHTML += '<img src="img/lorestickinven.png">';
    loreT++;
  }
  let polygonT = 0;
  while (polygonT < polygon) {
    document.getElementById('inven').innerHTML += '<img src="img/polygoninven.png">';
    polygonT++;
  }
  let asimovT = 0;
  while (asimovT < asimov) {
    document.getElementById('inven').innerHTML += '<img src="img/asimovinven.png">';
    asimovT++;
  }
  let liquidT = 0;
  while (liquidT < liquid) {
    document.getElementById('inven').innerHTML += '<img src="img/liquidinven.png">';
    liquidT++;
  }
  let chiefT = 0;
  while (chiefT < chief) {
    document.getElementById('inven').innerHTML += '<img src="img/chiefinven.png">';
    chiefT++;
  }
  let globalT = 0;
  while (globalT < globe) {
    document.getElementById('inven').innerHTML += '<img src="img/globalinven.png">';
    globalT++;
  }
  let fearT = 0;
  while (fearT < fear) {
    document.getElementById('inven').innerHTML += '<img src="img/fearinven.png">';
    fearT++;
  }
  let girlT = 0;
  while (girlT < girl) {
    document.getElementById('inven').innerHTML += '<img src="img/girlinven.png">';
    girlT++;
  }
  let awperT = 0;
  while (awperT < awper) {
    document.getElementById('inven').innerHTML += '<img src="img/awperinven.png">';
    awperT++;
  }
  let poT = 0;
  while (poT < potato) {
    document.getElementById('inven').innerHTML += '<img src="img/poinven.png">';
    poT++;
  }
}