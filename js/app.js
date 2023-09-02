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
