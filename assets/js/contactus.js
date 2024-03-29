// jshint esversion: 6

const photoComments = [
  'assets/images/reviews/review01.png',
  'assets/images/reviews/review02.png',
  'assets/images/reviews/review03.png',
  'assets/images/reviews/review04.png',
  'assets/images/reviews/review05.png',
  'assets/images/reviews/review06.png',
  'assets/images/reviews/review07.png',
  'assets/images/reviews/review08.png',
  'assets/images/reviews/review09.png',
  'assets/images/reviews/review10.png',
];

function createPhotoCarouselLoop(links) {
  const container = document.getElementById('coments');
  const timeInterval = 8000;

  for (let i = 0; i < links.length; i++) {
    setTimeout(() => {
      let photoComment = container.querySelector('.photo-comment');

      if (!photoComment) {
        photoComment = document.createElement('img');
        photoComment.className = 'photo-comment';
        container.appendChild(photoComment);
      }

      photoComment.src = links[i];
      photoComment.alt = `Comment Photo ${i + 1}`;

      if (i === links.length - 1) {
        i = -1;
      }
    }, i * timeInterval);
  }
}

createPhotoCarouselLoop(photoComments);

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_srmqilh';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });
