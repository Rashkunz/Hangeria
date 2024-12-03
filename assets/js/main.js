AOS.init();

function hangeria() {
  let dio = prompt("masukkan nama: ");

  let intro = document.querySelector(".parsitipasi");
  let create = document.createElement("p");
  create.innerText = dio + " Selamat anda telah berpsrtisipasi";
  intro.appendChild(create);
}

document.getElementById("ulason");
document.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var feedback = document.getElementsByClassName("feedback").value;

  var newfeedback = {
    id: Date.now(),
    name: name,
    feedback: feedback,
  };

  var feedbacks = JSON.parse(localStorage.getItem(feedbacks)) || [];
  feedbacks.push(newfeedback);
  localStorage.setItem("feedback", JSON.stringify(feedbacks));

  addFeedbackToPage(newfeedback);

  document.getElementById("ulason").reset();
});

function addFeedbackToPage(feedback) {
  var feedbackItem = document.createElement("div");
  feedbackItem.className = "feedback-item";
  feedbackItem.dataset.id = feedback.id;

  var feedbackName = document.createElement("h3");
  feedbackName.innerText = feedback.name;
  feedbackItem.appendChild(feedbacName);

  var feedbackText = document.createElement("p");
  feedbackText.innerText = "feedback-feedback";
  feedbackItem.appendChild(feedbackText);

  var deleteButton = document.createElement("button");
  deleteButton.className = "deleted-button";
  deleteButton.innerText = "Hapus";
  deleteButton.addEventListener("click", function () {
    deleteFeedback(feedback.id);
  });
  feedbackItem.appendChild(deleteButton);

  document.getElementById("feedback-board").appendChild(feedbackItem);
}

function deleteFeedback(id) {
  var feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbacks = feedbacks.filter(function (feedback) {
    return feedback.id !== id;
  });
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

  var feedbackItem = document.querySelector(`.feedback-item[data-id='${id}']`);
  if (feedbackItem) {
    feedbackItem.remove();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbacks.forEach(addFeedbackToPage);
});
