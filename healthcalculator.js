console.log("Connected");
//TODO: Grab the DOM elements
let centimeterBox = document.getElementById("centimeterBox");
let inchBox = document.getElementById("inchBox");

let heightRadios = document.querySelectorAll("input[name='heightType']");
let inputAge = document.getElementById("inputAge");
let inputWeight = document.getElementById("inputWeight");
let inputCentimeter = document.getElementById("inputCentimeter");

//초등학교, 반, 번호
let inputEName = document.getElementById("inputEName");
let inputSchollClass = document.getElementById("inputSchollClass");
let inputSchollClassNum = document.getElementById("inputSchollClassNum");

//오래달리기
let inputRoundRun = document.getElementById("inputRoundRun");
//오래달리기걷기
let inputlongrun = document.getElementById("inputlongrun");

//스탭검사
let inputstep1 = document.getElementById("inputstep1");
let inputstep2 = document.getElementById("inputstep2");
let inputstep3 = document.getElementById("inputstep3");

//앞으로 굽히기
let inputRbending = document.getElementById("inputRbending");
let inputLbending = document.getElementById("inputLbending");

//팔굽혀펴기
let inputpushup = document.getElementById("inputpushup");
//윗몸 말아올리기
let inputUpperbody = document.getElementById("inputUpperbody");

//악력
let R_grip_1 = document.getElementById("R_grip_1");
let R_grip_2 = document.getElementById("R_grip_2");
let L_grip_1 = document.getElementById("L_grip_1");
let L_grip_2 = document.getElementById("L_grip_2");

//50M달리기
let input50mrun = document.getElementById("input50mrun");
//제자리 멀리뛰기
let jumpmeter = document.getElementById("inputjumpmeter");

let InputInch = document.getElementById("InputInch");
let inputFoot = document.getElementById("inputFoot");

let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

//todo: 학년을 기준으로 추가 항목 생성하기
let inputSchollYear = document.getElementById("inputSchollYear");
function changeSchollYear() {
  if (inputSchollYear.value >= 4) {
    pushupSection.style.display = "block";
    enduranceSection.style.display = "block";
    RbendingSection.style.display = "block";
    LbendingSection.style.display = "block";
  } else {
    pushupSection.style.display = "none";
    enduranceSection.style.display = "none";
    RbendingSection.style.display = "none";
    LbendingSection.style.display = "none";
  }
}
//TODO: Make a ifelse statement for the + Settings button to give the user more controlls
let settingsBtn = document.getElementById("settingsBtn");
let settingSection = document.getElementById("settingSection");
settingsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (settingSection.style.display === "none") {
    settingSection.style.display = "block";
    settingsBtn.innerHTML = "<i class='fa fa-minus'></i> Settings";
  } else {
    settingSection.style.display = "none";
    settingsBtn.innerHTML = "<i class='fa fa-plus'></i> Settings";
  }
});

//TODO: Hide the intro alert after several minutes
let introAlert = document.getElementById("introAlert");
setTimeout(() => {
  introAlert.classList.add("hide");
  introAlert.classList.remove("show");
  introAlert.classList.add("d-none");
}, 5000);
//TODO: When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  scrollFunction();
};

//TODO: Scroll top button
let topBtn = document.getElementById("topBtn");

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
topBtn.addEventListener("click", () => {
  goTop();
});

let click = 0;
//TODO: Dark mode
function darkMode() {
  if (click === 0) {
    click = 1;
  } else {
    click = 0;
  }
  var element = document.body;
  var element2 = document.querySelectorAll(".card");
  var element3 = document.querySelectorAll(".card-body");
  var h6s = document.querySelectorAll("h6");
  var h5s = document.querySelectorAll("h5");
  var h4s = document.querySelectorAll("h4");
  var inputs = document.querySelectorAll(".form-control");
  var anchors = document.querySelectorAll("a");
  var labels = document.querySelectorAll("label");
  var selects = document.querySelectorAll("select");
  var spans = document.querySelectorAll("span");
  var uls = document.querySelectorAll("ul");
  var lis = document.querySelectorAll(".list-group-item");
  var navs = document.querySelectorAll("nav");
  var textMuted = document.querySelectorAll(".text-muted");
  //var table = document.querySelector("table");
  //table.classList.toggle("text-white");
  if (
    element.classList.toggle("bg-dark") &&
    element.classList.toggle("text-white")
  ) {
    for (const text of textMuted) {
      text.classList.remove("text-muted");
    }
  }
  for (const card of element2) {
    card.classList.toggle("bg-dark");
    card.classList.toggle("text-white");
  }
  for (const h5 of h5s) {
    h5.classList.toggle("text-white");
    h5.classList.toggle("bg-dark");
  }
  for (const cardBody of element3) {
    cardBody.classList.toggle("bg-dark");
    cardBody.classList.toggle("text-white");
  }
  for (const nav of navs) {
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("navbar-dark");
  }
  for (const li of lis) {
    li.classList.toggle("bg-dark");
    li.classList.toggle("text-white");
  }
  for (const h4 of h4s) {
    h4.classList.toggle("bg-dark");
    h4.classList.toggle("text-white");
  }
  for (const anchor of anchors) {
    anchor.classList.toggle("text-primary");
  }
  for (const input of inputs) {
    input.classList.toggle("text-white");
    input.classList.toggle("bg-dark");
  }
  for (const select of selects) {
    select.classList.toggle("text-white");
    select.classList.toggle("bg-dark");
  }
  for (const span of spans) {
    span.classList.toggle("text-white");
    span.classList.toggle("bg-dark");
  }
  for (const label of labels) {
    label.classList.toggle("text-white");
    label.classList.toggle("bg-dark");
  }
  for (const ul of uls) {
    ul.classList.toggle("text-white");
    ul.classList.toggle("bg-dark");
  }
  if (click === 1) {
    document.body.classList.add("text-black");
  }
}

//TODO: Copy Calorie Result
function copyCalorie() {
  /* Get the text field */
  var copyText = document.getElementById("calorieResult");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

//TODO: show to height input box according to height measuring type
for (const item of heightRadios) {
  item.addEventListener("click", (e) => {
    if (e.target.value === "centimeter") {
      inchBox.style.display = "none";
      centimeterBox.style.display = "block";
    } else if (e.target.value === "inches&foot") {
      inchBox.style.display = "block";
      centimeterBox.style.display = "none";
    }
  });
}

//TODO: Add a event listener to every button to prevent the page load
// let buttons = document.getElementsByTagName('button');
// for (const button of buttons) {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//     })
// }

//TODO: Add event listener to calculate button. when user click the calculate button this calculate funtion will run.
calculate.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "#result";
  calculateHealth();
});

// !Calculate function
//TODO: Add a calculte function for calculate the health states and needs.
function calculateHealth() {
  let heightType = document.querySelector(
    "input[name='heightType']:checked"
  ).value;
  let calculateItemChecked = document.querySelector(
    "input[name='calculate']:checked"
  ).value;
  let age = Number(inputAge.value);
  let weight = Number(inputWeight.value);
  let gender = document.querySelector("input[name='gender']:checked").value;

  //반, 번호
  let SchollYear = Number(inputSchollYear.value);
  let SchollClass = Number(inputSchollClass.value);
  let SchollClassNum = Number(inputSchollClassNum.value);

  //종합유연성
  let Rbending = Number(inputRbending.value).toFixed(1);
  let Lbending = Number(inputLbending.value).toFixed(1);

  let R_Shoulder = document.querySelector(
    "input[name='RShoulder']:checked"
  ).value;
  let R_body = document.querySelector("input[name='Rbody']:checked").value;
  let R_Side = document.querySelector("input[name='RSide']:checked").value;
  let R_Lower = document.querySelector("input[name='RLower']:checked").value;

  let L_Shoulder = document.querySelector(
    "input[name='LShoulder']:checked"
  ).value;
  let L_body = document.querySelector("input[name='Lbody']:checked").value;
  let L_Side = document.querySelector("input[name='LSide']:checked").value;
  let L_Lower = document.querySelector("input[name='LLower']:checked").value;

  //평가종목
  let longrun = Number(inputlongrun.value);
  let step1 = Number(inputstep1.value);
  let step2 = Number(inputstep2.value);
  let step3 = Number(inputstep3.value);

  let RoundRun = Number(inputRoundRun.value);
  let pushup = Number(inputpushup.value);
  let Upperbody = Number(inputUpperbody.value);

  let RR_grip_1 = Number(R_grip_1.value).toFixed(2);
  let RR_grip_2 = Number(R_grip_2.value).toFixed(2);
  let LL_grip_1 = Number(L_grip_1.value).toFixed(2);
  let LL_grip_2 = Number(L_grip_2.value).toFixed(2);

  let run50m = Number(input50mrun.value).toFixed(2);
  let jumpingmeter = Number(jumpmeter.value).toFixed(1);

  //let physicalState = document.getElementById("physicalState").value;
  let height;
  //Convert Inches to centimeter for get the height in cm scale
  if (heightType === "centimeter") {
    let centimeter = Number(inputCentimeter.value);
    height = centimeter;
  } else {
    console.log("You used inch section");
    let foot = Number(inputFoot.value);
    let inches = Number(inputInch.value);
    let totalInches = Number(foot * 12 + inches);
    let convertToCentimeter = Number(totalInches * 2.54);
    console.log(foot, inches, totalInches, convertToCentimeter);
    height = convertToCentimeter;
  }

  console.log(
    `Height ${height}, Weight ${weight}, Age ${age}, gender ${gender}, inputEName ${inputEName}, 
    SchollYear ${SchollYear},SchollClass ${SchollClass},SchollClassNum ${SchollClassNum},
    inputlongrun ${longrun},
    step1 ${step1},step2 ${step2},step3 ${step3},
    R_Shoulder ${R_Shoulder},R_body ${R_body},R_Side ${R_Side},R_Lower ${R_Lower},
    L_Shoulder ${L_Shoulder},L_body ${L_body},L_Side ${L_Side},L_Lower ${L_Lower},
    inputRbending ${Rbending},inputLbending ${Lbending},
    inputpushup ${pushup},inputUpperbody ${Upperbody},inputRoundRun ${RoundRun},
    R_grip_1 ${RR_grip_1},R_grip_2 ${RR_grip_2},L_grip_1 ${LL_grip_1},L_grip_2 ${LL_grip_2},
    run50m ${run50m},jumpmeter ${jumpingmeter},
    `
  );
  //TODO: Add a verification for calculation

  if (age == 0 || height == null || height === undefined || weight == 0) {
    errorAlert.style.display = "block";
    successAlert.style.display = "none";
    result.innerHTML = `
        <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>`;
    setTimeout(() => {
      result.innerHTML = `
            <h5 class="alert alert-danger d-block font-weight-bolder text-center">404 Error <i class="fa fa-exclamation-circle"></i> <br> No values has been given</h5>`;
    }, 5000);
  }
  //! When all values is correct
  else {
    // !Calculate BMR (Heris BeneDict law)
    //According to gender
    let BMR;
    let calories;
    let kilojoules;
    let icon;
    if (gender === "male") {
      BMR = `${66 + 13.7 * weight + 5 * height - 6.8 * age}`;
      icon = "male";
    } else {
      BMR = `${655 + 9.6 * weight + 1.8 * height - 4.7 * age}`;
      icon = "female";
    }
    console.log(`Your BMR ${BMR}`);

    //왕복오래 달리기 기준표
    let rank_roundrun;
    if (gender === "male") {
      if (SchollYear == 1) {
        if (RoundRun <= 16) {
          rank_roundrun = 5;
        } else if (RoundRun <= 29) {
          rank_roundrun = 4;
        } else if (RoundRun <= 45) {
          rank_roundrun = 3;
        } else if (RoundRun <= 61) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 2) {
        if (RoundRun <= 19) {
          rank_roundrun = 5;
        } else if (RoundRun <= 34) {
          rank_roundrun = 4;
        } else if (RoundRun <= 56) {
          rank_roundrun = 3;
        } else if (RoundRun <= 79) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 3) {
        if (RoundRun <= 22) {
          rank_roundrun = 5;
        } else if (RoundRun <= 39) {
          rank_roundrun = 4;
        } else if (RoundRun <= 64) {
          rank_roundrun = 3;
        } else if (RoundRun <= 87) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 4) {
        if (RoundRun <= 25) {
          rank_roundrun = 5;
        } else if (RoundRun <= 44) {
          rank_roundrun = 4;
        } else if (RoundRun <= 68) {
          rank_roundrun = 3;
        } else if (RoundRun <= 95) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 5) {
        if (RoundRun <= 28) {
          rank_roundrun = 5;
        } else if (RoundRun <= 49) {
          rank_roundrun = 4;
        } else if (RoundRun <= 72) {
          rank_roundrun = 3;
        } else if (RoundRun <= 99) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 6) {
        if (RoundRun <= 31) {
          rank_roundrun = 5;
        } else if (RoundRun <= 53) {
          rank_roundrun = 4;
        } else if (RoundRun <= 77) {
          rank_roundrun = 3;
        } else if (RoundRun <= 103) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      }
    } else {
      if (SchollYear == 1) {
        if (RoundRun <= 14) {
          rank_roundrun = 5;
        } else if (RoundRun <= 24) {
          rank_roundrun = 4;
        } else if (RoundRun <= 38) {
          rank_roundrun = 3;
        } else if (RoundRun <= 52) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 2) {
        if (RoundRun <= 16) {
          rank_roundrun = 5;
        } else if (RoundRun <= 29) {
          rank_roundrun = 4;
        } else if (RoundRun <= 44) {
          rank_roundrun = 3;
        } else if (RoundRun <= 60) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 3) {
        if (RoundRun <= 18) {
          rank_roundrun = 5;
        } else if (RoundRun <= 34) {
          rank_roundrun = 4;
        } else if (RoundRun <= 50) {
          rank_roundrun = 3;
        } else if (RoundRun <= 68) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 4) {
        if (RoundRun <= 20) {
          rank_roundrun = 5;
        } else if (RoundRun <= 39) {
          rank_roundrun = 4;
        } else if (RoundRun <= 56) {
          rank_roundrun = 3;
        } else if (RoundRun <= 76) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 5) {
        if (RoundRun <= 22) {
          rank_roundrun = 5;
        } else if (RoundRun <= 44) {
          rank_roundrun = 4;
        } else if (RoundRun <= 62) {
          rank_roundrun = 3;
        } else if (RoundRun <= 84) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      } else if (SchollYear == 6) {
        if (RoundRun <= 24) {
          rank_roundrun = 5;
        } else if (RoundRun <= 49) {
          rank_roundrun = 4;
        } else if (RoundRun <= 68) {
          rank_roundrun = 3;
        } else if (RoundRun <= 92) {
          rank_roundrun = 2;
        } else {
          rank_roundrun = 1;
        }
      }
    }

    //오래달리기걷기
    let rank_longrun;
    if (gender === "male") {
      if (SchollYear <= 4) {
        rank_longrun = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (longrun <= 281) {
          rank_longrun = 1;
        } else if (longrun <= 324) {
          rank_longrun = 2;
        } else if (longrun <= 409) {
          rank_longrun = 3;
        } else if (longrun <= 479) {
          rank_longrun = 4;
        } else {
          rank_longrun = 5;
        }
      } else if (SchollYear == 6) {
        if (longrun <= 241) {
          rank_longrun = 1;
        } else if (longrun <= 314) {
          rank_longrun = 2;
        } else if (longrun <= 379) {
          rank_longrun = 3;
        } else if (longrun <= 449) {
          rank_longrun = 4;
        } else {
          rank_longrun = 5;
        }
      }
    } else {
      if (SchollYear <= 4) {
        rank_longrun = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (longrun <= 299) {
          rank_longrun = 1;
        } else if (longrun <= 359) {
          rank_longrun = 2;
        } else if (longrun <= 441) {
          rank_longrun = 3;
        } else if (longrun <= 501) {
          rank_longrun = 4;
        } else {
          rank_longrun = 5;
        }
      } else if (SchollYear == 6) {
        if (longrun <= 299) {
          rank_longrun = 1;
        } else if (longrun <= 353) {
          rank_longrun = 2;
        } else if (longrun <= 429) {
          rank_longrun = 3;
        } else if (longrun <= 479) {
          rank_longrun = 4;
        } else {
          rank_longrun = 5;
        }
      }
    }
    //앉아윗몸앞으로 굽히기
    let rank_Rbending;
    if (gender === "male") {
      if (SchollYear <= 4) {
        rank_Rbending = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else {
        if (Rbending <= -4.1) {
          rank_Rbending = 5;
        } else if (Rbending <= 0.9) {
          rank_Rbending = 4;
        } else if (Rbending <= 4.9) {
          rank_Rbending = 3;
        } else if (Rbending <= 7.9) {
          rank_Rbending = 2;
        } else {
          rank_Rbending = 1;
        }
      }
    } else {
      if (SchollYear <= 4) {
        rank_Rbending = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (Rbending <= -0) {
          rank_Rbending = 5;
        } else if (Rbending <= 4.9) {
          rank_Rbending = 4;
        } else if (Rbending <= 6.9) {
          rank_Rbending = 3;
        } else if (Rbending <= 9.9) {
          rank_Rbending = 2;
        } else {
          rank_Rbending = 1;
        }
      } else if (SchollYear == 6) {
        if (Rbending <= 1.9) {
          rank_Rbending = 5;
        } else if (Rbending <= 4.9) {
          rank_Rbending = 4;
        } else if (Rbending <= 9.9) {
          rank_Rbending = 3;
        } else if (Rbending <= 13.9) {
          rank_Rbending = 2;
        } else {
          rank_Rbending = 1;
        }
      }
    }

    let rank_Lbending;
    if (gender === "male") {
      if (SchollYear <= 4) {
        rank_Lbending = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else {
        if (Rbending <= -4.1) {
          rank_Lbending = 5;
        } else if (Rbending <= 0.9) {
          rank_Lbending = 4;
        } else if (Rbending <= 4.9) {
          rank_Lbending = 3;
        } else if (Rbending <= 7.9) {
          rank_Lbending = 2;
        } else {
          rank_Lbending = 1;
        }
      }
    } else {
      if (SchollYear <= 4) {
        rank_Lbending = "대상이 아닙니다.(5학년 ~ 6학년)";
      } else if (SchollYear == 5) {
        if (Rbending <= -0) {
          rank_Lbending = 5;
        } else if (Rbending <= 4.9) {
          rank_Lbending = 4;
        } else if (Rbending <= 6.9) {
          rank_Lbending = 3;
        } else if (Rbending <= 9.9) {
          rank_Lbending = 2;
        } else {
          rank_Lbending = 1;
        }
      } else if (SchollYear == 6) {
        if (Rbending <= 1.9) {
          rank_Lbending = 5;
        } else if (Rbending <= 4.9) {
          rank_Lbending = 4;
        } else if (Rbending <= 9.9) {
          rank_Lbending = 3;
        } else if (Rbending <= 13.9) {
          rank_Lbending = 2;
        } else {
          rank_Lbending = 1;
        }
      }
    }

    //종합유연성 기준표
    let rank_flexibiliy = 0;
    if (R_Shoulder == "Shoulder_Success") {
      rank_flexibiliy += 1;
    }
    if (R_body == "body_Success") {
      rank_flexibiliy += 1;
    }
    if (R_Side == "Side_Success") {
      rank_flexibiliy += 1;
    }
    if (R_Lower == "Lower_Success") {
      rank_flexibiliy += 1;
    }
    if (L_Shoulder == "Shoulder_Success") {
      rank_flexibiliy += 1;
    }
    if (L_body == "body_Success") {
      rank_flexibiliy += 1;
    }
    if (L_Side == "Side_Success") {
      rank_flexibiliy += 1;
    }
    if (L_Lower == "Lower_Success") {
      rank_flexibiliy += 1;
    }
    let final_rank_flexibiliyty;
    if (rank_flexibiliy <= 4) {
      final_rank_flexibiliyty = 5;
    } else if (rank_flexibiliy <= 5) {
      final_rank_flexibiliyty = 4;
    } else if (rank_flexibiliy <= 6) {
      final_rank_flexibiliyty = 3;
    } else if (rank_flexibiliy <= 7) {
      final_rank_flexibiliyty = 2;
    } else {
      final_rank_flexibiliyty = 1;
    }

    //윗몸 말아올리기
    let rank_Upperbody;
    if (gender === "male") {
      if (SchollYear == 1) {
        if (Upperbody <= 1) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 9) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 20) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 40) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 2) {
        if (Upperbody <= 2) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 13) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 25) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 60) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 3) {
        if (Upperbody <= 3) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 13) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 29) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 65) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 4) {
        if (Upperbody <= 6) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 21) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 39) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 79) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear <= 5) {
        if (Upperbody <= 9) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 21) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 39) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 79) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      }
    } else {
      if (SchollYear == 1) {
        if (Upperbody <= 3) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 7) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 19) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 40) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 2) {
        if (Upperbody <= 3) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 11) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 28) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 52) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 3) {
        if (Upperbody <= 5) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 12) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 28) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 52) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 4) {
        if (Upperbody <= 5) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 17) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 28) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 52) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 5) {
        if (Upperbody <= 6) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 22) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 35) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 59) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      } else if (SchollYear == 6) {
        if (Upperbody <= 6) {
          rank_Upperbody = 5;
        } else if (Upperbody <= 22) {
          rank_Upperbody = 4;
        } else if (Upperbody <= 42) {
          rank_Upperbody = 3;
        } else if (Upperbody <= 59) {
          rank_Upperbody = 2;
        } else {
          rank_Upperbody = 1;
        }
      }
    }

    let rgrip;
    let lgrip;
    let rank_rgrip;
    let rank_lgrip;

    if (RR_grip_1 >= RR_grip_2) {
      rgrip = RR_grip_1;
    } else {
      rgrip = RR_grip_2;
    }
    if (LL_grip_1 >= LL_grip_2) {
      lgrip = LL_grip_1;
    } else {
      lgrip = LL_grip_2;
    }

    var m_grip_1 = [7.4, 10.4, 13.9, 24.9];
    var m_grip_2 = [8.4, 10.9, 15.9, 29.9];
    var m_grip_3 = [8.9, 11.9, 17.9, 30.9];
    var m_grip_4 = [11.4, 14.9, 18.4, 30.9];
    var m_grip_5 = [12.4, 16.9, 22.9, 30.9];
    var m_grip_6 = [14.9, 18.9, 26.4, 34.9];

    var w_grip_1 = [6.4, 8.9, 11.9, 24.9];
    var w_grip_2 = [7.9, 9.9, 12.9, 24.9];
    var w_grip_3 = [6.9, 10.9, 15.9, 28.9];
    var w_grip_4 = [10.4, 13.4, 17.4, 28.9];

    var w_grip_5 = [11.9, 15.4, 18.9, 28.9];
    var w_grip_6 = [13.9, 18.9, 26.4, 32.9];

    console.log(`Your m_grip_1 m_grip_1 ${Math.min.apply(null, m_grip_1)}`);
    //오른손
    if (gender === "male") {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_1[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_1)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_2[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_2)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_3[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_3)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_4[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_4)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_5[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_5)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (rgrip > m_grip_6[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, m_grip_6)) {
            rank_rgrip = 5;
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_1[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_1)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_2[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_w)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_3[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_3)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_4[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_4)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_5[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_5)) {
            rank_rgrip = 5;
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (rgrip > w_grip_6[i]) {
            rank_rgrip = 4 - i;
          }
          if (rgrip < Math.min.apply(null, w_grip_6)) {
            rank_rgrip = 5;
          }
        }
      }
    }

    //왼손
    if (gender === "male") {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_1[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_1)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_2[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_2)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_3[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_3)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_4[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_4)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_5[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_5)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (lgrip > m_grip_6[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, m_grip_6)) {
            rank_lgrip = 5;
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_1[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_1)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_2[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_2)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_3[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_3)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_4[i]) {
            rank_rgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_4)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_5[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_5)) {
            rank_lgrip = 5;
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (lgrip > w_grip_6[i]) {
            rank_lgrip = 4 - i;
          }
          if (lgrip < Math.min.apply(null, w_grip_6)) {
            rank_lgrip = 5;
          }
        }
      }
    }

    //run50m ${run50m},jumpmeter ${jumpingmeter}

    var m_run50m_1 = [10.2, 11.3, 12.1, 15.0];
    var m_run50m_2 = [9.5, 10.5, 11.5, 14.4];
    var m_run50m_3 = [9.0, 9.8, 11.0, 14.4];
    var m_run50m_4 = [8.8, 9.7, 10.5, 13.2];
    var m_run50m_5 = [8.5, 9.4, 10.2, 13.2];
    var m_run50m_6 = [8.1, 9.1, 10.0, 12.5];

    var w_run50m_1 = [10.7, 11.7, 12.5, 13.8];
    var w_run50m_2 = [10.1, 11, 12, 13.8];
    var w_run50m_3 = [9.8, 10.5, 11.6, 13.8];
    var w_run50m_4 = [9.4, 10.4, 11, 13.3];
    var w_run50m_5 = [8.9, 9.9, 10.7, 13];
    var w_run50m_6 = [8.9, 9.8, 10.7, 12.9];

    let rank_run50m;

    //50m 달리기
    if (gender === "male") {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_1[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_1)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_2[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_2)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_3[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_3)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_4[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_4)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_5[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_5)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (run50m > m_run50m_6[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, m_run50m_6)) {
            rank_run50m = 1;
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_1[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_1)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_2[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_2)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_3[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_3)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_4[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_4)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_5[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_5)) {
            rank_run50m = 1;
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (run50m > w_run50m_6[i]) {
            rank_run50m = i + 2;
          }
          if (run50m < Math.min.apply(null, w_run50m_6)) {
            rank_run50m = 1;
          }
        }
      }
    }

    //제자리 멀리뛰기

    var m_jumpingmeter_1 = [90, 112, 123, 145];
    var m_jumpingmeter_2 = [92, 119, 134, 154];
    var m_jumpingmeter_3 = [100, 127, 141, 166];
    var m_jumpingmeter_4 = [100, 130, 149, 170];
    var m_jumpingmeter_5 = [111, 141, 159, 180];
    var m_jumpingmeter_6 = [122, 148, 167, 200];

    var w_jumpingmeter_1 = [85, 99, 110, 131];
    var w_jumpingmeter_2 = [87, 109, 121, 140];
    var w_jumpingmeter_3 = [92, 118, 129, 154];
    var w_jumpingmeter_4 = [97, 119, 135, 161];
    var w_jumpingmeter_5 = [100, 123, 145, 183];
    var w_jumpingmeter_6 = [100, 127, 145, 183];

    let rank_jumpingmeter;

    if (gender === "male") {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_1[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_1)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_2[i]) {
            rank_jumpingmeter = 4 - i;
          }

          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_2)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_3[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_3)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_4[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_4)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_5[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_5)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > m_jumpingmeter_6[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, m_jumpingmeter_6)) {
            rank_jumpingmeter = 5;
          }
        }
      }
    } else {
      if (SchollYear == 1) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_1[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_1)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 2) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_2[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_2)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 3) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_3[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_3)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 4) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_4[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_4)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 5) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_5[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_5)) {
            rank_jumpingmeter = 5;
          }
        }
      } else if (SchollYear == 6) {
        for (i = 0; i < 4; i++) {
          if (jumpingmeter > w_jumpingmeter_6[i]) {
            rank_jumpingmeter = 4 - i;
          }
          if (jumpingmeter < Math.min.apply(null, w_jumpingmeter_6)) {
            rank_jumpingmeter = 5;
          }
        }
      }
    }

    calories = BMR;

    // TODO: Calculate KiloJoules from calories
    kilojoules = calories * 4.184;
    calories = Number(calories).toFixed(2);
    kilojoules = Number(kilojoules).toFixed(1);
    BMR = Number(BMR).toFixed(2);
    console.log(`Your calorie need ${calories}`);

    //TODO: Show the bodyBurnsValue let
    let bodyBurning;
    let bodyBurningText;
    let multipicationValue2;
    let resultTypeChecked = document.querySelector(
      "input[name='resultIn']:checked"
    ).value;
    if (resultTypeChecked === "kiloJoules") {
      bodyBurning = kilojoules;
      bodyBurningText = "kiloJoules";
      multipicationValue2 = "X 4.184";
    } else {
      bodyBurning = calories;
      bodyBurningText = "calories";
      multipicationValue2 = "";
    }

    // !Calculate BMI according to height and weight
    heightInMeter = `${height / 100}`;
    let BMI = `${weight / heightInMeter ** 2}`;
    BMI = Number(BMI).toFixed(1);
    console.log(BMI, heightInMeter);

    //TODO: Justify the BMI index value
    let textColor;
    let state;
    let explainState;
    let tips;
    let weightText;
    if (BMI < 18.5) {
      state = "Underweight";
      explainState = "저체중";
      tips = "제한된 음식 섭취로 체중을 늘려야 함";
      textColor = "black-50";
      weightText = "Low weight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      state = "Normal";
      explainState = "건강의 이상적인 기준";
      tips =
        "이상태를 유지해야 합니다. 건강에 안좋은 음식을 과도하게 섭취하지 말고, 현재 상태를 유지하세요.";
      textColor = "success";
      weightText = "OverWeight / Underweight";
    } else if (BMI > 24.9 && BMI <= 29.9) {
      state = "Overweight";
      explainState = "초과 체중";
      tips = "걱정할 정도는 아니지만, 운동을해서 살을 빼야합니다.";
      textColor = "warning";
      weightText = "OverWeight";
    } else if (BMI > 29.9 && BMI <= 34.9) {
      state = "obese";
      explainState = "과체중";
      tips = "선택적으로 식사하고 운동하는 것이 필요합니다.";
      textColor = "warning";
      weightText = "High OverWeight";
    } else if (BMI > 34.9 && BMI <= 39.9) {
      state = "obese (High)";
      explainState = "심한 과체중";
      tips =
        "제한된 음식을 섭취하고, 운동을 많이하는 것이 중요합니다. 특히나 필요한경우 의사와의 상담을 추천드립니다.";
      textColor = "danger";
      weightText = "OverWeight (very high)";
    } else {
      state = "Extremly obese";
      explainState = "심각한 과체중";
      tips = "의사와의 상담이 필수적입니다. 어서 빨리 체중을 조절하세요.";
      textColor = "danger";
      weightText = "OverWeight (extreme)";
    }
    // TODO: According to good BMI and given Height calculate the perfect weight for this height
    //from
    let healthyBMI1 = 18.5;
    //to
    let healthyBMI2 = 24.9;
    //from
    let healthyWeight1 = `${healthyBMI1 * heightInMeter ** 2}`;
    healthyWeight1 = Math.round(healthyWeight1);
    //to
    let healthyWeight2 = `${healthyBMI2 * heightInMeter ** 2}`;
    healthyWeight2 = Math.round(healthyWeight2);
    //a sequence resulth
    let healthyWeight = `${healthyWeight1} to ${healthyWeight2}`;
    let healthyBMI = `${healthyBMI1} to ${healthyBMI2}`;
    //Average Result
    let averageHealthyWeight = `${(healthyWeight1 + healthyWeight2) / 2}`;
    let averageHealthyBMI = `${(healthyBMI1 + healthyBMI2) / 2}`;

    //TODO: Calculate the difference between healty weight and Given Weight;
    let defferenceWeight;
    if (state === "Underweight") {
      defferenceWeight = `${healthyWeight1 - weight}kg To ${
        healthyWeight2 - weight
      }kg`;
    } else if (state === "Normal") {
      defferenceWeight = "(N/A) Perfect Weight";
    } else {
      defferenceWeight = `${weight - healthyWeight1}kg To ${
        weight - healthyWeight2
      }kg`;
    }

    //TODO; Make the HTML for show the results for each sections
    let htmlForBMI;
    let htmlForCalories;
    let htmlForButtons;

    let final_longrun;
    let final_rbend;
    let final_lbend;

    if (SchollYear <= 4) {
      final_longrun = `${rank_longrun}`;
      final_rbend = `${rank_Rbending}`;
      final_lbend = `${rank_Lbending}`;
    } else {
      final_longrun = `${longrun} 초 / ${rank_longrun} 등급`;
      final_rbend = `${Rbending} cm / ${rank_Rbending} 등급`;
      final_lbend = `${Lbending} cm / ${rank_Lbending} 등급`;
    }

    htmlForCalories = `
    <div class="my-3 d-flex justify-content-center align-content-center flex-column">
    <h5 class="card-header text-center my-3">건강검사 실시 현황</h5>
    </div>
    <hr>
    <h5 class="d-inline-block">왕복오래달리기 : </h5>
    <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
        style="font-size: 1.5rem;" id="RoundRun">${RoundRun} 회 / ${rank_roundrun} 등급</h5><hr>
        <h5 class="d-inline-block">오래달리기걷기 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${final_longrun}</h5>
        <hr>
        <h5 class="d-inline-block">스탭검사 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">검사 계산을 어떻게 하는건가요.. ㅠㅠ</h5>
        <hr>
        <h5 class="d-inline-block">오른쪽 앉아윗몸앞으로 굽히기 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${final_rbend}</h5>
        <hr>
        <h5 class="d-inline-block">왼쪽 앉아윗몸앞으로 굽히기 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${final_lbend}</h5>
        <hr>
        <h5 class="d-inline-block">종합유연성 기준표 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${rank_flexibiliy} 점 / ${final_rank_flexibiliyty} 등급</h5>
        <hr>
        <h5 class="d-inline-block">팔굽혀펴기 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${pushup} 회</h5>
        <hr>
        <h5 class="d-inline-block">윗몸말아올리기 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${Upperbody} 점 / ${rank_Upperbody} 등급</h5>
        <hr>
        <h5 class="d-inline-block">오른손 악력 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${rgrip} kg / ${rank_rgrip} 등급</h5>
        <hr>
        <h5 class="d-inline-block">왼손 악력 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${lgrip} kg / ${rank_lgrip} 등급</h5>
        <hr>
        <h5 class="d-inline-block">50m 달리기 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${run50m} 초 / ${rank_run50m} 등급</h5>
        <hr>
        <h5 class="d-inline-block">제자리 멀리뛰기 : </h5>
        <h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
            style="font-size: 1.5rem;" id="longRun">${jumpingmeter} cm / ${rank_jumpingmeter} 등급</h5>
        <hr>
        /*
<h5 class="d-inline-block">Used BMR Law : </h5>
<h5 class="d-inline-block text-danger font-weight-bold position-relative float-right"
style="font-size: 1.5rem;" id="SD">
<i class="fa fa-codepen text-codepen"></i> Heris Bene-Dict */
</h5>
<hr>`;
    //TODO: BMI HTML
    htmlForBMI = `
    <div class="my-3 d-flex justify-content-center align-content-center flex-column text-center">
  
    <h5 class="card-header my-3">당신의 건강상태</h5>
    <h3 class="card-title text-center" id="calculateTitle">Health State (BMI) : </h3>
    <h4 class="d-block font-weight-bold mx-auto" style="font-size: 1rem;">
        <sup><i class="fa fa-${icon} text-${textColor}"></i></sup> &nbsp;&nbsp;<span id="calorieResult"> ${explainState}
        </span> <small><a id="showBMIChart" onclick="showChart()" class="link text-primary">Chart <i class="fa fa-area-chart"></i></a></small>
    </h4>
</div>
<h4>
    <ul class="list-group">
    <li class="list-group-item" style="display: none;" id="BMIChart">Chart : <div id="img d-flex justify-content-center">
            <img src="bmi-chart.gif" class="d-block mx-auto img" alt="BMI Chart">
        </div>
    </li>
    <li class="list-group-item">BMI Formula : <span
            class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3"><i
                class="font-weight-bolder text-muted">=</i> weight(kg) /
            Height(m) <sup class="font-weight-bolder">2</sup></span>
    </li>

    <li class="list-group-item">Your BMI (Body Mass Index) : <span
    class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3">= ${BMI}</span> <a onclick="showBMIStateTable()" class="link text-primary" id="BMITableBtn">Show BMI Table</a>
    <div class="card mx-auto" id="BMIStateTable" style="border: none;
    width: 100%;
    height: auto;
    display: none;">
    <br>
    <div class="card-body bg-light mx-auto">
        <b>Check the health stats according to BMI (Body Mass Index) </b>
    </div>
    <table class="table table-striped mx-auto">
        <thead>
            <tr>
                <th scope="col">BMI</th>
                <th scope="col">State</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"> &lt; 18.5</th>
                <td>저체중(Underweight)</td>
            </tr>
            <tr>
                <th scope="row">18.5 to 24.9</th>
                <td>일반(Normal)</td>
            </tr>
            <tr>
                <th scope="row">25 to 29.9</th>
                <td>통통(Overweight)</td>
            </tr>
            <tr>
                <th scope="row">30 to 34.9</th>
                <td>과체중(Obese I)</td>
            </tr>
            <tr>
                <th scope="row">35 to 39.9</th>
                <td>심한 과체중(Obese II)</td>
            </tr>
            <tr>
                <th scope="row">&gt 40</th>
                <td>심각한 과체중(Obese III Extreme)</td>
            </tr>
        </tbody>
    </table>
</div>
    </li>
    <li class="list-group-item" id="state">State : <span
            class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3"><i
                class="font-weight-bolder text-muted">=</i> ${state}</span>
    </li>
    <hr>
    <h5 class="card-header text-weight-bolder text-muted">당신에게 맞는 건강값 계산</h5>
        <li class="list-group-item" id="goodValues">1. 당신에게 맞는 BMI 지수는 : <span
        class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${healthyBMI}</span>
        <span
        class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${averageHealthyBMI} <small>(Average)</small></span>
        </li>
        <li class="list-group-item">2.당신에게 맞는 몸무게는 : <span
        class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${healthyWeight}</span>
        <span
        class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${averageHealthyWeight} <small>(Average)</small></span>
        </li>
        <li class="list-group-item" id="goodWeightDifference">${weightText}<span
        class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${defferenceWeight}</span>
        </li>
        <hr>
        <h5 class="card-header text-weight-bolder text-muted">당신에게 드리는 제안</h5>
        <li class="list-group-item" id="tips">Tips : <span
        class=" alert responsive d-block font-weight-bolder text-warning text-muted bg-light my-3"><i
        class="font-weight-bolder text-muted">=</i> ${tips}</span>
        </li>
    </ul>
</h4>
    `;
    //TODO: Button HTML
    htmlForButtons = `
    <button class="btn btn-outline-warning" type="submit" onclick="location.reload();">Reload</button>
    <button class="btn btn-outline-success position-relative float-right" type="submit"
    onclick="window.print();">Print/Save</button>`;
    result.classList.add("d-none");

    //TODO: Add alert with success message when calculate will be finished
    errorAlert.style.display = "none";
    successAlert.style.display = "block";
    setTimeout(() => {
      successAlert.classList.add("hide");
      successAlert.style.display = "none";
    }, 4000);

    //TODO: Show the results according to user need
    if (calculateItemChecked === "bmr") {
      calorieSection.innerHTML = htmlForCalories;
      healthSection.innerHTML = "";
    } else if (calculateItemChecked === "bmi") {
      healthSection.innerHTML = htmlForBMI;
      calorieSection.innerHTML = "";
    } else if (calculateItemChecked === "all") {
      healthSection.innerHTML = htmlForBMI;
      calorieSection.innerHTML = htmlForCalories;
    }
    buttons.innerHTML = htmlForButtons;

    //! Show the navigator
    let navigator = document.getElementById("navigator");
    if (calculateItemChecked === "all") {
      navigator.style.display = "block";
    } else {
      navigator.style.display = "none";
    }
  } //End of the else statement
}

//TODO: A function for showing BMI chart
function showChart() {
  BMIChart.style.display = "block";
}

//TODO: A function to showing the BMI state Table
function showBMIStateTable() {
  if (BMIStateTable.style.display === "none") {
    BMIStateTable.style.display = "block";
    BMITableBtn.innerHTML = "Hide BMI Table";
  } else {
    BMIStateTable.style.display = "none";
    BMITableBtn.innerHTML = "Show BMI Table";
  }
}

//!Add Event Listener For article Sections
let readSectionBtn = document.getElementById("readSectionBtn");
readSectionBtn.addEventListener("click", () => {
  let readSectionArticle = document.getElementById("readSectionArticle");
  if (readSectionArticle.style.display === "none") {
    readSectionArticle.style.display = "block";
    readSectionBtn.innerHTML = `<i class="fa fa-minus float-right"></i>`;
  } else {
    readSectionArticle.style.display = "none";
    readSectionBtn.innerHTML = `<i class="fa fa-plus float-right"></i>`;
  }
});

let BMIMore = document.getElementById("BMIMore");
BMIMore.addEventListener("click", () => {
  let BMIArticle = document.getElementById("BMIArticle");
  if (BMIArticle.style.display === "none") {
    BMIArticle.style.display = "block";
  } else {
    BMIArticle.style.display = "none";
  }
});

let BMRMore = document.getElementById("BMRMore");
BMRMore.addEventListener("click", () => {
  let BMRArticle = document.getElementById("BMRArticle");
  if (BMRArticle.style.display === "none") {
    BMRArticle.style.display = "block";
  } else {
    BMRArticle.style.display = "none";
  }
});

let overweightRiskContent = document.getElementById("overweightRiskContent");
overweightRiskContent.addEventListener("click", () => {
  let overweightRiskArticle = document.getElementById("overweightRiskArticle");
  if (overweightRiskArticle.style.display === "none") {
    overweightRiskArticle.style.display = "block";
  } else {
    overweightRiskArticle.style.display = "none";
  }
});
let underweightRiskContent = document.getElementById("underweightRiskContent");
underweightRiskContent.addEventListener("click", () => {
  let underweightRiskArticle = document.getElementById(
    "underweightRiskArticle"
  );
  if (underweightRiskArticle.style.display === "none") {
    underweightRiskArticle.style.display = "block";
  } else {
    underweightRiskArticle.style.display = "none";
  }
});
let BMILimitContent = document.getElementById("BMILimitContent");
BMILimitContent.addEventListener("click", () => {
  let BMILimitArticle = document.getElementById("BMILimitArticle");
  if (BMILimitArticle.style.display === "none") {
    BMILimitArticle.style.display = "block";
  } else {
    BMILimitArticle.style.display = "none";
  }
});
let BMITableContent = document.getElementById("BMITableContent");
BMITableContent.addEventListener("click", () => {
  let BMIStateTable2 = document.getElementById("BMIStateTable2");
  if (BMIStateTable2.style.display === "none") {
    BMIStateTable2.style.display = "block";
  } else {
    BMIStateTable2.style.display = "none";
  }
});

//!For help and support section
let helpSectionBtn = document.getElementById("helpSectionBtn");
helpSectionBtn.addEventListener("click", () => {
  let helpArea = document.getElementById("helpArea");
  if (helpArea.style.display === "none") {
    helpArea.style.display = "block";
    helpSectionBtn.innerHTML = `<i class="fa fa-minus float-right"></i>`;
  } else {
    helpArea.style.display = "none";
    helpSectionBtn.innerHTML = `<i class="fa fa-plus float-right"></i>`;
  }
});

let issue = document.getElementById("issue");
let improve = document.getElementById("improve");
let surveyAlert = document.getElementById("surveyAlert");
ensureBtn.addEventListener("click", (e) => {
  let helpIssue = document.querySelector("input[name='isIssue']:checked").value;
  let helpImprove = document.querySelector(
    "input[name='isImprove']:checked"
  ).value;
  if (helpIssue === "noIssue" && helpImprove === "noImprove") {
    surveyAlert2.style.display = "block";
  } else {
    surveyAlert.style.display = "block";
  }
});
