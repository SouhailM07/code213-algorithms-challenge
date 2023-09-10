// ! challenge one
let message = "There is no war in Ba Sing Se";

let challengeOne = (msg) => {
  return msg.split(" ").length;
};

// ! challenge two

let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];

let challengeTwo = () => {
  for (let i = 0; i <= countries.length; i++) {
    console.log(
      `Your country : ${countries[i]}  has the capital named : ${capital[i]}.`
    );
  }
};

// ! challenge three

let challengeThree = () => {
  let randomizer = Math.floor(Math.random() * 4);
  let fates = [
    "“A certain victory”",
    "“not so certain victory”",
    " “an uneasy victory”",
    "“Your fate is unclear, ô chosen undead”",
  ];
  return `your fate is ${fates[randomizer]}`;
};

// ! challenge four

let checkSeason = (month) => {
  // arrays
  const springMonths = ["march", "april", "may"];
  const summerMonths = ["june", "july", "august"];
  const autumnMonths = ["september", "october", "november"];
  const winterMonths = ["december", "january", "february"];

  // checking
  if (springMonths.includes(month)) {
    return "Spring";
  } else if (summerMonths.includes(month)) {
    return "Summer";
  } else if (autumnMonths.includes(month)) {
    return "Autumn";
  } else if (winterMonths.includes(month)) {
    return "Winter";
  }
};
