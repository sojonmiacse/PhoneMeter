     "use strict";


     /* =========================================
     QUIZ DATA
     ========================================= */

     const questions = [

     {
          question: "ঘুম থেকে উঠেই প্রথম কাজ কী?",

          options: [
               {
                    icon: "📱",
                    text: "ফোন হাতে নিয়ে নোটিফিকেশন দেখি",
                    score: 3
               },

               {
                    icon: "😴",
                    text: "আরও ১০ মিনিট ঘুমাই",
                    score: 2
               },

               {
                    icon: "🚿",
                    text: "ফ্রেশ হতে যাই",
                    score: 1
               },

               {
                    icon: "🧘",
                    text: "ফোনের কথা ভুলেই যাই",
                    score: 0
               }
          ]
     },


     {
          question: "ফোনটা পাশে না থাকলে আপনার কেমন লাগে?",

          options: [
               {
                    icon: "😱",
                    text: "মনে হয় জীবন থেমে গেছে!",
                    score: 3
               },

               {
                    icon: "😬",
                    text: "একটু অস্বস্তি লাগে",
                    score: 2
               },

               {
                    icon: "🙂",
                    text: "কিছুটা মিস করি",
                    score: 1
               },

               {
                    icon: "😎",
                    text: "কোনো সমস্যা নেই",
                    score: 0
               }
          ]
     },


     {
          question: "‘আর ৫ মিনিট ফোন দেখব’—সাধারণত কতক্ষণ হয়?",

          options: [
               {
                    icon: "🌚",
                    text: "৫ মিনিট থেকে ৩ ঘণ্টা",
                    score: 3
               },

               {
                    icon: "😂",
                    text: "প্রায় ১ ঘণ্টা",
                    score: 2
               },

               {
                    icon: "🙂",
                    text: "১০–২০ মিনিট",
                    score: 1
               },

               {
                    icon: "⏱️",
                    text: "সত্যিই ৫ মিনিট",
                    score: 0
               }
          ]
     },


     {
          question: "খাওয়ার সময় আপনার ফোন কোথায় থাকে?",

          options: [
               {
                    icon: "🍛",
                    text: "হাতে বা প্লেটের পাশেই",
                    score: 3
               },

               {
                    icon: "📱",
                    text: "টেবিলে উল্টো করে রাখি",
                    score: 2
               },

               {
                    icon: "🪑",
                    text: "কাছাকাছি থাকে",
                    score: 1
               },

               {
                    icon: "🚫",
                    text: "ফোন ছাড়া খেতে পারি",
                    score: 0
               }
          ]
     },


     {
          question: "একটি নতুন নোটিফিকেশন এলে কী করেন?",

          options: [
               {
                    icon: "⚡",
                    text: "সাথে সাথে খুলে ফেলি",
                    score: 3
               },

               {
                    icon: "👀",
                    text: "কী এসেছে দেখে নিই",
                    score: 2
               },

               {
                    icon: "🕐",
                    text: "সময় পেলে দেখি",
                    score: 1
               },

               {
                    icon: "🧘",
                    text: "নোটিফিকেশন? সেটা আবার কী?",
                    score: 0
               }
          ]
     },


     {
          question: "ঘুমাতে যাওয়ার সময় আপনার ফোনের ব্যাটারি সাধারণত কত থাকে?",

          options: [
               {
                    icon: "🔋",
                    text: "১০% এর নিচে—তবু চালাই",
                    score: 3
               },

               {
                    icon: "😅",
                    text: "১০–৩০%",
                    score: 2
               },

               {
                    icon: "🙂",
                    text: "৩০–৬০%",
                    score: 1
               },

               {
                    icon: "🔌",
                    text: "চার্জে দিয়ে ঘুমাই",
                    score: 0
               }
          ]
     },


     {
          question: "আপনার ফোন হারিয়ে গেলে প্রথমে কী করবেন?",

          options: [
               {
                    icon: "😭",
                    text: "কাঁদব, তারপর পৃথিবী খুঁজব",
                    score: 3
               },

               {
                    icon: "🏃",
                    text: "সব জায়গায় খুঁজব",
                    score: 2
               },

               {
                    icon: "📞",
                    text: "অন্য ফোন থেকে কল দেব",
                    score: 1
               },

               {
                    icon: "😎",
                    text: "সমস্যা নেই, আমার ফোনে এমন কিছু নেই",
                    score: 0
               }
          ]
     },


     {
          question: "দিনে কতবার অকারণে ফোন Unlock করেন?",

          options: [
               {
                    icon: "🔓",
                    text: "গুনতে গেলে ক্যালকুলেটর লাগবে",
                    score: 3
               },

               {
                    icon: "📱",
                    text: "অনেকবার",
                    score: 2
               },

               {
                    icon: "🙂",
                    text: "কয়েকবার",
                    score: 1
               },

               {
                    icon: "🗿",
                    text: "খুব কম",
                    score: 0
               }
          ]
     }

     ];


     /* =========================================
     STATE
     ========================================= */

     let currentQuestion = 0;

     let answers = new Array(
     questions.length
     ).fill(null);

     let finalScore = 0;


     /* =========================================
     DOM ELEMENTS
     ========================================= */

     const quizCard =
     document.getElementById("quizCard");

     const loadingCard =
     document.getElementById("loadingCard");

     const resultCard =
     document.getElementById("resultCard");

     const questionElement =
     document.getElementById("question");

     const optionsElement =
     document.getElementById("options");

     const progressBar =
     document.getElementById("progressBar");

     const stepText =
     document.getElementById("stepText");

     const percentText =
     document.getElementById("percentText");

     const nextButton =
     document.getElementById("nextBtn");

     const backButton =
     document.getElementById("backBtn");

     const loadingTitle =
     document.getElementById("loadingTitle");

     const loadingText =
     document.getElementById("loadingText");

     const resultEmoji =
     document.getElementById("resultEmoji");

     const resultTitle =
     document.getElementById("resultTitle");

     const resultSub =
     document.getElementById("resultSub");

     const scoreElement =
     document.getElementById("score");

     const scoreRing =
     document.getElementById("scoreRing");

     const resultLabel =
     document.getElementById("resultLabel");

     const resultMessage =
     document.getElementById("resultMessage");

     const toastElement =
     document.getElementById("toast");


     /* =========================================
     RENDER QUESTION
     ========================================= */

     function renderQuestion() {

     const current =
          questions[currentQuestion];


     questionElement.textContent =
          current.question;


     optionsElement.innerHTML = "";


     current.options.forEach(
          (option, index) => {

               const button =
                    document.createElement("button");

               button.type = "button";

               button.className =
                    "option";


               button.innerHTML = `
                    <span class="option-icon">
                         ${option.icon}
                    </span>

                    <span>
                         ${option.text}
                    </span>
               `;


               if (
                    answers[currentQuestion] === index
               ) {

                    button.classList.add(
                         "selected"
                    );

               }


               button.addEventListener(
                    "click",
                    () => {

                         selectOption(index);

                    }
               );


               optionsElement.appendChild(
                    button
               );

          }
     );


     updateProgress();

     }


     /* =========================================
     SELECT OPTION
     ========================================= */

     function selectOption(index) {

     answers[currentQuestion] =
          index;


     const buttons =
          optionsElement.querySelectorAll(
               ".option"
          );


     buttons.forEach(
          (button, buttonIndex) => {

               button.classList.toggle(
                    "selected",
                    buttonIndex === index
               );

          }
     );


     nextButton.disabled = false;

     }


     /* =========================================
     PROGRESS
     ========================================= */

     function updateProgress() {

     const questionNumber =
          currentQuestion + 1;


     const percentage =
          Math.round(
               (currentQuestion /
                    questions.length) * 100
          );


     stepText.textContent =
          `প্রশ্ন ${questionNumber} / ${questions.length}`;


     percentText.textContent =
          `${percentage}%`;


     progressBar.style.width =
          `${percentage}%`;


     nextButton.textContent =
          currentQuestion ===
          questions.length - 1

               ? "ফলাফল দেখুন 🎉"

               : "পরের প্রশ্ন →";


     backButton.disabled =
          currentQuestion === 0;


     nextButton.disabled =
          answers[currentQuestion] === null;

     }


     /* =========================================
     NEXT BUTTON
     ========================================= */

     nextButton.addEventListener(
     "click",
     () => {

          if (
               answers[currentQuestion] === null
          ) {

               return;

          }


          if (
               currentQuestion <
               questions.length - 1
          ) {

               currentQuestion++;

               renderQuestion();

               return;

          }


          showLoading();

     }
     );


     /* =========================================
     BACK BUTTON
     ========================================= */

     backButton.addEventListener(
     "click",
     () => {

          if (currentQuestion > 0) {

               currentQuestion--;

               renderQuestion();

          }

     }
     );


     /* =========================================
     LOADING SCREEN
     ========================================= */

     function showLoading() {

     quizCard.classList.add(
          "hidden"
     );


     loadingCard.classList.remove(
          "hidden"
     );


     const messages = [

          {
               title:
                    "আপনার ফোন-জীবন বিশ্লেষণ হচ্ছে... 🤖",

               text:
                    "আপনি মানুষ, নাকি ফোনের চার্জার—তা যাচাই করা হচ্ছে!"
          },

          {
               title:
                    "স্কোর ক্যালকুলেট হচ্ছে... 📊",

               text:
                    "আপনার ‘আর ৫ মিনিট’ কত ঘণ্টা—তা বের করা হচ্ছে!"
          },

          {
               title:
                    "গুরুতর গবেষণা চলছে... 🧪",

               text:
                    "ফোনের সঙ্গে আপনার সম্পর্কের অবস্থা পরীক্ষা করা হচ্ছে..."
          }

     ];


     let messageIndex = 0;


     const interval =
          setInterval(
               () => {

                    const message =
                         messages[
                         messageIndex %
                         messages.length
                         ];


                    loadingTitle.textContent =
                         message.title;


                    loadingText.textContent =
                         message.text;


                    messageIndex++;

               },
               700
          );


     setTimeout(
          () => {

               clearInterval(interval);

               calculateScore();

          },
          2500
     );

     }


     /* =========================================
     CALCULATE SCORE
     ========================================= */

     function calculateScore() {

     let totalScore = 0;


     answers.forEach(
          (answer, questionIndex) => {

               if (answer !== null) {

                    totalScore +=
                         questions[
                         questionIndex
                         ]
                         .options[
                         answer
                         ]
                         .score;

               }

          }
     );


     const maximumScore =
          questions.length * 3;


     finalScore =
          Math.round(
               (totalScore /
                    maximumScore) * 100
          );


     showResult(finalScore);

     }


     /* =========================================
     RESULT DATA
     ========================================= */

     function getResult(score) {

     if (score <= 20) {

          return {

               emoji: "🧘",

               title:
                    "ফোন আপনাকে ব্যবহার করতে পারেনি!",

               label:
                    "ডিজিটাল সন্ন্যাসী 😎",

               message:
                    "আপনার সঙ্গে ফোনের সম্পর্ক বেশ স্বাস্থ্যকর। ফোন আপনার জীবন চালায় না—আপনিই ফোন চালান। এই আত্মনিয়ন্ত্রণ দেখে আপনার ফোনও লজ্জা পায়! 😂"

          };

     }


     if (score <= 40) {

          return {

               emoji: "🙂",

               title:
                    "হালকা আসক্তি আছে!",

               label:
                    "সাধারণ ফোনপ্রেমী 📱",

               message:
                    "ফোন আপনার ভালো বন্ধু। তবে মাঝে মাঝে সে আপনাকে ‘আর ৫ মিনিট’ বলে ফাঁদে ফেলে। সাবধান—এই ৫ মিনিট খুবই সন্দেহজনক! 😂"

          };

     }


     if (score <= 60) {

          return {

               emoji: "😅",

               title:
                    "অবস্থা একটু সিরিয়াস!",

               label:
                    "মোবাইলের নিয়মিত কাস্টমার 📱",

               message:
                    "আপনি ফোন ব্যবহার করেন, কিন্তু ফোনও আপনাকে বেশ ভালোভাবে ব্যবহার করে। বিশেষ করে ঘুমানোর আগে ‘শেষবার’ কথাটা আপনি নিজেই বিশ্বাস করেন না! 😂"

          };

     }


     if (score <= 80) {

          return {

               emoji: "🤳",

               title:
                    "ফোন আপনার জীবনের গুরুত্বপূর্ণ সদস্য!",

               label:
                    "Certified Phone Lover ❤️📱",

               message:
                    "আপনার ফোন সম্ভবত পরিবারের একজন সদস্যের মতো। কোথাও গেলে ফোন, বসলে ফোন, ঘুমালে ফোন—শুধু বিয়েতে ফোনকে পাশে বসানো বাকি! 😂"

          };

     }


     return {

          emoji: "🚨",

          title:
               "ফোন আপনাকে ব্যবহার করছে!",

          label:
               "Phone-এর আজীবন VIP সদস্য 🏆",

          message:
               "আপনার ফোন আপনার সম্পর্কে সব জানে। আপনি কখন ঘুমান, কখন জাগেন, কখন অকারণে Unlock করেন—সব! এখন থেকে ফোনকে একটু ছুটি দিন। নইলে একদিন ফোনই আপনাকে ‘Low Battery’ দেখাবে! 😂"

     };

     }


     /* =========================================
     SHOW RESULT
     ========================================= */

     function showResult(score) {

     loadingCard.classList.add(
          "hidden"
     );


     resultCard.classList.remove(
          "hidden"
     );


     const result =
          getResult(score);


     resultEmoji.textContent =
          result.emoji;


     resultTitle.textContent =
          result.title;


     resultSub.textContent =
          "আপনার উত্তর বিশ্লেষণ করে এই মজার ফলাফল পাওয়া গেছে।";


     scoreElement.textContent =
          `${score}%`;


     scoreRing.style.setProperty(
          "--score",
          `${score}%`
     );


     resultLabel.textContent =
          result.label;


     resultMessage.textContent =
          result.message;


     progressBar.style.width =
          "100%";


     window.scrollTo({
          top: 0,
          behavior: "smooth"
     });


     createConfetti();

     }


     /* =========================================
     SHARE TEXT
     ========================================= */

     function getShareText() {

     const result =
          getResult(finalScore);


     return `😂 আমার Phone Addiction Score: ${finalScore}%

     ${result.label}

     "${result.message}"

     তুমিও দেখে নাও—তুমি দিনে কতটা ফোনে আসক্ত? 📱😂`;

     }


     /* =========================================
     SHARE URL
     ========================================= */

     function getShareURL() {

     return window.location.href.split("#")[0];

     }


     /* =========================================
     NATIVE SHARE
     ========================================= */

     async function nativeShare() {

     const shareData = {

          title:
               "তুমি দিনে কতটা ফোনে আসক্ত? 😂",

          text:
               getShareText(),

          url:
               getShareURL()

     };


     if (
          navigator.share
     ) {

          try {

               await navigator.share(
                    shareData
               );

          } catch (error) {

               // User cancelled share.
               console.log(
                    "Share cancelled."
               );

          }

          return;

     }


     copyResult();

     }


     /* =========================================
     FACEBOOK SHARE
     ========================================= */

     document
     .getElementById("shareFacebook")
     .addEventListener(
          "click",
          () => {

               const url =
                    encodeURIComponent(
                         getShareURL()
                    );


               const facebookURL =
                    `https://www.facebook.com/sharer/sharer.php?u=${url}`;


               window.open(
                    facebookURL,
                    "_blank",
                    "noopener,noreferrer"
               );

          }
     );


     /* =========================================
     WHATSAPP SHARE
     ========================================= */

     document
     .getElementById("shareWhatsapp")
     .addEventListener(
          "click",
          () => {

               const text =
                    encodeURIComponent(
                         `${getShareText()}\n\n${getShareURL()}`
                    );


               const whatsappURL =
                    `https://wa.me/?text=${text}`;


               window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
               );

          }
     );


     /* =========================================
     OTHER SOCIAL APPS
     ========================================= */

     document
     .getElementById("shareOther")
     .addEventListener(
          "click",
          nativeShare
     );


     /* =========================================
     MAIN SHARE BUTTON
     ========================================= */

     document
     .getElementById("shareNative")
     .addEventListener(
          "click",
          nativeShare
     );


     /* =========================================
     COPY RESULT
     ========================================= */

     document
     .getElementById("copyResult")
     .addEventListener(
          "click",
          copyResult
     );


     async function copyResult() {

     const text =
          `${getShareText()}

     ${getShareURL()}`;


     try {

          await navigator.clipboard.writeText(
               text
          );


          showToast(
               "ফলাফল কপি হয়েছে! 📋 এখন যেকোনো জায়গায় শেয়ার করুন।"
          );

     } catch (error) {

          showToast(
               "কপি করা সম্ভব হয়নি। আবার চেষ্টা করুন।"
          );

     }

     }


     /* =========================================
     RESTART
     ========================================= */

     document
     .getElementById("restartBtn")
     .addEventListener(
          "click",
          restartQuiz
     );


     function restartQuiz() {

     currentQuestion = 0;

     answers =
          new Array(
               questions.length
          ).fill(null);


     resultCard.classList.add(
          "hidden"
     );


     quizCard.classList.remove(
          "hidden"
     );


     renderQuestion();


     window.scrollTo({
          top: 0,
          behavior: "smooth"
     });

     }


     /* =========================================
     TOAST
     ========================================= */

     let toastTimer;


     function showToast(message) {

     toastElement.textContent =
          message;


     toastElement.classList.add(
          "show"
     );


     clearTimeout(toastTimer);


     toastTimer =
          setTimeout(
               () => {

                    toastElement.classList.remove(
                         "show"
                    );

               },
               2500
          );

     }


     /* =========================================
     CONFETTI
     ========================================= */

     function createConfetti() {

     const pieces = 60;


     for (
          let i = 0;
          i < pieces;
          i++
     ) {

          const confetti =
               document.createElement("i");


          confetti.className =
               "confetti";


          confetti.style.left =
               `${Math.random() * 100}vw`;


          confetti.style.animationDelay =
               `${Math.random() * 0.8}s`;


          confetti.style.background =
               `hsl(
                    ${Math.random() * 360},
                    85%,
                    60%
               )`;


          confetti.style.transform =
               `rotate(
                    ${Math.random() * 360}deg
               )`;


          document.body.appendChild(
               confetti
          );


          setTimeout(
               () => {

                    confetti.remove();

               },
               2500
          );

     }

     }


     /* =========================================
     START APP
     ========================================= */

     renderQuestion();