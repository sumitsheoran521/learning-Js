"use strict";

// Asynchronous Javascript, AJAX and APIs

/** Synchronous code mean is the is executed line by line in the exect order of execution that we defined in the code.

* Eg:-
 * const p = document.querySelector(".p");
 * p.textContent = "My name is Sumit!";
 * alert("Text set!");
 * p.style.color = "red";
 */

/** Asynchronous code is executed after a task that runs in the "background" finishes
 
* Eg:-
 * const p = document.querySelector(".p");
 * setTimeout(function () {
 *  p.textContent = "My name is Sumit!"
 * }, 5000);
 * p.style.color = 'red';
 * 
 * Aysnchronous code is non-blocking;
 * Execution doesn't wait for an asynchronous task to finish its work;
 * Callback functions alone do NOT make code asynchronous!
 */

/** AJAX
 * Asynchronous JavaScript And XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.
 */

/** API
 * Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other;
 * There are be many types of APIs in web development: DOM API, Geolocation API, Own Class API, Online API
 * "Online API": Application running on a server, that receives requests for data, and sends data back as response;
 * We can build our own web APIs (requires back-end development, e.g. with node.js) or use 3rd-party APIs
 */

// Next Video
// Our First AJAX call: XMLHTTPREQUEST
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const region = "en-IN";

const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${Number(
        data.population
      ).toLocaleString(region)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(
        data.languages
      ).join(", ")}</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////////

// const getContryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     const html = `<article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${Number(
//         data.population
//       ).toLocaleString(region)} people</p>
//       <p class="country__row"><span>🗣️</span>${Object.values(
//         data.languages
//       ).join(", ")}</p>
//       <p class="country__row"><span>💰</span>${
//         Object.values(data.currencies)[0].name
//       }</p>
//     </div>
//   </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getContryData("india");

// const getContryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// getContryAndNeighbour("usa");

// setTimeout(() => {
//   console.log("1 sec passed");
//   setTimeout(() => {
//     console.log("2 sec passed");
//     setTimeout(() => {
//       console.log("3 sec passed");
//       setTimeout(() => {
//         console.log("4 sec passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

/** Promise (ES-6)
 * An object that is used as a placeholder for the future result of an asynchronous operation.
 * OR
 * A container for an asynchronously delivered value.
 * OR
 * A container for a future value.
 *
 * Eg- Response from AJAX call
 *
 * Advantages of using Promises:-
 * 1. We no longer need to rely on event and callbacks passed into asynchronous funtions to handle asynchronous results.
 * 2. Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell🥳
 */

// Consuming Promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0])
//     });
// };
// getCountryData("india");

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found. Error (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = "sdfasdg";

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(
//           `Neighbour country not found. Error (${response.status}) and Reason: ${response.statusText}`
//         );

//       return response.json();
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(err);
//       renderError(`Something went wrong 🔥🔥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) throw new Error("No neighbour found!");

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => {
      console.log(data);
      renderCountry(data[0], "neighbour");
    })
    .catch((err) => {
      if (err.message === "Cannot read properties of undefined (reading '0')") {
        console.log(err.message);
        renderError("No neighbour found!");
      } else {
        console.error(err);
        renderError(`Something went wrong 🔥🔥 ${err.message}`);
      }
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener("click", function () {
//   getCountryData("india");
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=903717387950645132463x34336`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}!`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `Country not found. Error (${res.status}) and Reason: ${res.statusText}`
        );
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message}`));
};
// whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

*/

// Next Video
// Asynchronous Behind the Scenes: The Event Loop

/*
console.log("Test start"); // 1
setTimeout(() => {
  console.log("0 sec Timer");
}, 0); // 4
Promise.resolve("Resolved Promise 1").then((res) => console.log(res)); // 3
console.log("Test end"); // 2

Promise.resolve("Resolved Promise 2").then((res) => {
  for (let i = 0; i < 100000; i++) {}
  console.log(res);
});

*/

/** Output
 * Test start
 * Test end
 * Resolved Promise 1
 * Resolved Promise 2 (after some times)
 * 0 sec Timer (this will wait for promise 2 to finish)
 */
//////////////////////////////////////////

/*
// Next Video
// Building a simple promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening ⚽");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Win 💰");
    } else {
      reject("You lost your money 💩");
    }
  }, 2000);
});
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("1 sec passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 sec passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 sec passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 sec passed");
    return wait(1);
  });

//  Same results for both

// setTimeout(() => {
//   console.log("1 sec passed");
//   setTimeout(() => {
//     console.log("2 sec passed");
//     setTimeout(() => {
//       console.log("3 sec passed");
//       setTimeout(() => {
//         console.log("4 sec passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve("abc").then((res) => console.log(res));
Promise.reject(new Error("Problem")).catch((res) => console.error(res));

*/

// Next video
// Promisifying the geolocation API

// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     console.log(position);
//   },
//   (err) => {
//     console.error(err);
//   }
// );

// same as a above with promisifying method

/*

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     resolve(position);
    //   },
    //   (err) => {
    //     reject(err);
    //   }
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject); // same as above
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=903717387950645132463x34336`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}!`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `Country not found. Error (${res.status}) and Reason: ${res.statusText}`
        );
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message}`));
};

btn.addEventListener("click", whereAmI);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// function createImage() {
//   return new Promise((resolve, reject) => {
//     const imgCreate = document.createElement("img");
//     imgCreate.src = "./img/img-1.jpg";
//     console.log(imgCreate);
//     imgContainer.append(imgCreate);
//     resolve();
//   });
// }
// createImage();

/*

const wait = function (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImage;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((err) => console.error(err));

  */

// Next Video
// Consuming promises with async/ await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Resverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=903717387950645132463x34336`
    );
    if (!resGeo.ok) throw new Error("Problem getting location data");

    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryss}`
    );
    if (!res.ok) throw new Error("Problem getting country");

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`😒 ${err.message}`);
  }
};

console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

whereAmI().then((city) => console.log(city));
console.log("3: Finished getting location");

// Next Video
// Error Handling with Try... Catch

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

// Next Video
// Returning values from async functions
