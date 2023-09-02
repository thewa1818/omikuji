const kekka = ["大吉", "小吉", "吉", "中吉", "凶", "大凶"];
const omikuji = $("#omikuji");
const btn = $("#btn");
const comment = $("#comment");

$(btn).on("click", function () {
  const random = kekka[Math.floor(Math.random() * kekka.length)];

  if (random.includes("吉")) {
    $(comment).html("やったね");
  } else if (random.includes("凶")) {
    $(comment).html("どんまい");
  }

  const html = `${random}です`;

  $(omikuji).html(html);
});

//クイズ

const quizItems = [
  [
    "すき家の期間限定メニューは？",
    "1,３種のチーズ牛丼",
    "2,明太高菜牛丼",
    "3,にんにくの芽牛丼",
    "3",
  ],

  ["カレーが一番おいしい牛丼屋は？", "1,松屋", "2,すき家", "3,吉野家", "1"],

  [
    "吉野家が最近力を入れているのは？",
    "1,ハンバーグ",
    "2,からあげ",
    "3,オムライス",
    "2",
  ],
];

const question = $("#question");
const ans1 = $("#ans1");
const ans2 = $("#ans2");
const ans3 = $("#ans3");
let count = 0;
let qizCount = 0;

function setQuiz() {
  question.html(quizItems[qizCount][0]);
  ans1.html(quizItems[qizCount][1]);
  ans2.html(quizItems[qizCount][2]);
  ans3.html(quizItems[qizCount][3]);
}

setQuiz();

function check(ans) {
  if (ans == quizItems[qizCount][4]) {
    alert("正解");
    count++;
  } else {
    alert("不正解");
  }
  qizCount++;

  if (qizCount === quizItems.length) {
    question.html(`正解数は${count}でした`);
    ans1.html("");
    ans2.html("");
    ans3.html("");
    $("#btn-box").hide();
    $("#btn4").css("display", "block");
  } else {
    setQuiz();
  }
}

$("#btn4").on("click", function () {
  window.location.reload();
});
