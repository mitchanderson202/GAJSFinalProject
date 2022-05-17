let url = "https://www.omdbapi.com/?apikey=f9c817ad&t="

let favMov = document.getElementById("favMov");
let lotMov = document.getElementById("lotMov");
let kidMov = document.getElementById("kidMov");
let disMov = document.getElementById("disMov");

let srcBtn1 = document.getElementById("srcBtn1");
let srcBtn2 = document.getElementById("srcBtn2");
let srcBtn3 = document.getElementById("srcBtn3");
let srcBtn4 = document.getElementById("srcBtn4");

let body = document.querySelector("body");
let adPar = document.createElement("P");

let count = [];

movieMaker = () => {
  srcBtn1.addEventListener("click", function(event) {
    event.preventDefault();
    count += 1;

    fetch(url + favMov.value)
      .then(oneResponse => {
        return oneResponse.json();
      })
      .then(oneResponseData => {
        console.log(oneResponseData);

        let ansOne = oneResponseData.Title;
        console.log(ansOne);

        if (count.includes(1 && 2 && 3 && 4)) {
          adPar.innerHTML = `This Summer. Comes a ${threeResponseData.Genre} story by ${oneResponseData.Writer}<br>${fourResponseData.Plot}  
        . Starring ${twoResponseData.Actors}. With ${threeResponseData.Awards} We bring you <Strong>${twoResponseData.Title}</Strong>
        <br>
        <button id="reset"> Try Again?</button>`;
          body.appendChild(adPar);
          document.querySelector("img").style.visibility = "visible";
        }


        srcBtn2.addEventListener("click", function(event) {
          event.preventDefault();
          count += 2;

          fetch(url + lotMov.value).then(twoResponse => {
              return twoResponse.json();
            })
            .then(twoResponseData => {
              console.log(twoResponseData);

              let ansTwo = twoResponseData.Actors;
              console.log(ansTwo);

              if (count.includes(1 && 2 && 3 && 4)) {
                adPar.innerHTML = `This Summer. Comes a ${threeResponseData.Genre} story by ${oneResponseData.Writer}<br>${fourResponseData.Plot}  
                . Starring ${twoResponseData.Actors}. With ${threeResponseData.Awards} We bring you <Strong>${twoResponseData.Title}</Strong>
                <br>
                <button id="reset"> Try Again?</button>`;
                body.appendChild(adPar);
                document.querySelector("img").style.visibility = "visible";
              }



              srcBtn3.addEventListener("click", function(event) {
                event.preventDefault();
                count += 3;

                fetch(url + kidMov.value).then(threeResponse => {
                    return threeResponse.json();
                  })
                  .then(threeResponseData => {
                    console.log(threeResponseData);

                    let ansThree = threeResponseData.Director;
                    console.log(ansThree);

                    if (count.includes(1 && 2 && 3 && 4)) {
                        adPar.innerHTML = `This Summer. Comes a ${threeResponseData.Genre} story by ${oneResponseData.Writer}<br>${fourResponseData.Plot}  
                        . Starring ${twoResponseData.Actors}. With ${threeResponseData.Awards} We bring you <Strong>${twoResponseData.Title}</Strong>
                        <br>
                        <button id="reset"> Try Again?</button>`;
                        body.appendChild(adPar);
                        document.querySelector("img").style.visibility = "visible";
                    }



                    srcBtn4.addEventListener("click", function(event) {
                      event.preventDefault();
                      count += 4;

                      fetch(url + disMov.value).then(fourResponse => {
                          return fourResponse.json();
                        })
                        .then(fourResponseData => {
                          console.log(fourResponseData);


                          let ansFour = fourResponseData.Plot;
                          console.log(ansFour);




                          let i = 0;
                          let images = [];
                          let time = 4000;

                          images[0] = `${oneResponseData.Poster}`
                          images[1] = `${twoResponseData.Poster}`
                          images[2] = `${threeResponseData.Poster}`
                          images[3] = `${fourResponseData.Poster}`

                          changeImg = () => {
                            document.slide.src = images[i];

                            if (i < images.length - 1) {
                              i++;
                            } else {
                              i = 0;
                            }

                            setTimeout("changeImg()", time);
                          }

                          changeImg();

                          if (count.includes(1 && 2 && 3 && 4)) {
                            adPar.innerHTML = `This Summer. Comes a ${threeResponseData.Genre} story by ${oneResponseData.Writer}<br>${fourResponseData.Plot}  
                            . Starring ${twoResponseData.Actors}. With ${threeResponseData.Awards} We bring you <Strong>${twoResponseData.Title}</Strong>
                            <br>
                            <button id="reset"> Try Again?</button>`;
                            body.appendChild(adPar);
                            document.querySelector("img").style.visibility = "visible";
                          }

                          document.querySelector("#reset").addEventListener("click", function(event) {
                            event.preventDefault();
                            body.removeChild(adPar);
                            location.reload("body");
                          })
                        })
                    })
                  })
              })
            })
        })
      })
      .catch(error => {
        console.log(error, "error");
      })
  })
}

movieMaker();