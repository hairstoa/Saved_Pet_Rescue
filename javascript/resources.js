const topics = Array.from(document.querySelector('.resource-wrapper').children);
const infoCategories = Array.from(document.querySelector('.info').children);
const opacity = 0.6;
var current = topics[3];
current.style.opacity = opacity;
// Set the default topic and hide all other links
var topicClass = 'info-' + current.className;
current.classList.add('visible');
document.querySelector('.'+ topicClass).classList.add('visible');
// Hide the links for all topics except the visible class
const hideTopics = (category) => {
  console.log(category);
  if (!(category.classList.contains('visible'))){
    console.log(category);
    category.style.display = "none";
  }
}
// Show the links for all topics in visible class
const showTopics = (link) => {
  link.style.display = "";
}
// Remove the visible class
const removeVisibility = (element) => {
  element.classList.remove('visible');
}
infoCategories.forEach(hideTopics);
// Make resource topic divs clickable
topics.forEach(topic => {
  topic.addEventListener('click', e => {
    // If the topic is already visible, do nothing
    if (e.target.classList.contains('visible')){
      return;
    }
    // Changle opacity of old and new topics
    topics.forEach(topic => topic.style.opacity = 1);
    e.target.style.opacity = opacity;
    // Otherwise remove current visible topicClass
    const previous = Array.from(document.querySelectorAll('.visible'));
console.log(previous);
    previous.forEach(removeVisibility);
    // Make the targeted topic visible
    console.log(e);
    topicClass = 'info-' + e.target.className;
    // console.log(topicClass);
    e.target.classList.add('visible');
    const newTopic = document.querySelector('.'+ topicClass);
    newTopic.classList.add('visible');
    console.log(newTopic);
    showTopics(newTopic);
    // Hide other topics
    infoCategories.forEach(hideTopics);
  })
}
);
  //topic.addEventListener('click', e => {
    // If the topic is already visible, return
    //if (topic.classList.contains('visible')){
      //return;
    //}
    // Otherwise make it visible
    //console.log(e);
    // First hide the current info, if it is not the one clicked
    //const resource = topic.className;

  //})
//);


// Change the background of the Links
