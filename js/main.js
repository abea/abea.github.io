/* global Snap */
//
// 1. Logo animation
// 2. Github activity banner
//

//
// Begin logo animation
//
const logo = document.getElementById('logo-morph');

if (logo) {
  const morphDuration = 200;
  // Identify each logo path.
  const logoSnap1 = Snap('#logo-path1');
  const logoSnap2 = Snap('#logo-path2');
  const logoSnap3 = Snap('#logo-path3');
  const logoSnap4 = Snap('#logo-path4');
  const logoSnap5 = Snap('#logo-path5');
        // Capture the initial path description.;
  const logoPath1a = document.getElementById('logo-path1').getAttribute('d');
  const logoPath2a = document.getElementById('logo-path2').getAttribute('d');
  const logoPath3a = document.getElementById('logo-path3').getAttribute('d');
  const logoPath4a = document.getElementById('logo-path4').getAttribute('d');
  const logoPath5a = document.getElementById('logo-path5').getAttribute('d');
  // Identify the path animation end points.
  const logoPath1b = 'M 106.125 86.972 C 106.125 86.972 103.001 108.996 103.457 109.554 C 110.459 118.12 132.447 126.228 132.447 126.228 C 132.447 126.228 183.579 121.216 209.224 121.275 C 258.058 121.387 284.654 120.492 296.458 134.586 C 306.156 146.164 307.059 169.759 306.588 172.704 C 302.84 196.142 348.231 230.662 349.38 229.621 C 356.463 223.205 378.827 203.081 384.42 185.021 C 391.099 163.453 388.771 138.235 379.999 117.431 C 373.963 103.115 361.986 91.035 348.822 82.783 C 333.478 73.165 314.487 70.722 296.635 67.678 C 278.359 64.562 241.104 64.564 241.104 64.564 L 151.163 64.477 L 108.78 64.739';
  const logoPath2b = 'M 132.665 160.363 L 132.596 180.483 L 132.659 197.585 L 132.804 212.588 L 132.81 227.061 L 209.534 226.11 L 208.698 213.289 L 208.805 192.121 L 209.509 159.469 L 209.037 119.544 C 209.037 119.544 137.425 120.998 132.615 122.258';
  const logoPath3b = 'M 132.698 233.503 L 132.752 249.3 L 132.717 260.254 L 132.686 270.831 L 249.973 271.613 L 327.516 273.135 L 349.443 229.169 L 306.527 173.502 C 306.527 173.502 305.485 182.551 300.556 191.583 C 297.367 197.427 292.907 202.976 287.238 206.466 C 279.824 211.031 270.666 212.263 262.016 213.254 C 219.458 218.132 138.303 207.919 133.583 208.799';
  const logoPath4b = 'M 132.626 308.335 L 132.402 325.105 L 132.676 353.672 L 132.756 384.178 L 208.349 388.815 L 208.798 371.625 L 208.809 343.566 L 208.896 324.164 L 208.877 310.141 L 208.87 288.373 L 208.906 270.313 L 132.652 270.297';
  const logoPath5b = 'M 108.811 429.98 L 143.122 430.073 L 169.285 430.024 L 192.347 430.148 L 220.081 430.048 L 234.753 430.255 C 234.753 430.255 246.547 430.303 252.442 430.186 C 258.258 430.07 261.931 430.038 269.882 429.559 C 276.478 429.161 289.627 427.791 289.627 427.791 C 289.627 427.791 311.027 424.951 321.232 421.624 C 336.813 416.544 353.614 411.785 365.763 400.786 C 380.916 387.067 393.074 368.126 397.13 348.091 C 402.596 321.094 393.799 282.538 385.811 266.237 C 377.085 248.431 348.356 229.804 348.356 229.804 C 348.356 229.804 259.354 271.458 265.154 271.847 C 284.11 273.117 300.941 277.043 310.595 290.395 C 318.698 301.603 320.73 318.003 318.222 331.817 C 316.125 343.367 314.012 347.625 308.895 353.67 C 303.485 360.062 295.469 364 287.736 367.212 C 281.183 369.933 274.035 371.393 266.952 371.814 C 252.121 372.694 221.865 372.539 221.865 372.539 L 203.668 372.679 C 203.668 372.679 169.63 369.825 164.78 368.305 C 157.95 366.155 156.95 364.305 156.38 352.995 C 156.15 348.515 132.763 368.321 132.763 368.321 C 132.763 368.321 119.854 373.494 114.128 377.347 C 110.189 379.997 103.549 386.882 103.549 386.882';

  // On mouseover, transition to the new paths.
  logo.addEventListener('mouseover', () => {
    logoSnap1.animate({ d: logoPath1b }, morphDuration);
    logoSnap2.animate({ d: logoPath2b }, morphDuration);
    logoSnap3.animate({ d: logoPath3b }, morphDuration);
    logoSnap4.animate({ d: logoPath4b }, morphDuration);
    logoSnap5.animate({ d: logoPath5b }, morphDuration);
  });

  // On mouseout, return to the original paths.
  logo.addEventListener('mouseout', () => {
    logoSnap1.animate({ d: logoPath1a }, morphDuration);
    logoSnap2.animate({ d: logoPath2a }, morphDuration);
    logoSnap3.animate({ d: logoPath3a }, morphDuration);
    logoSnap4.animate({ d: logoPath4a }, morphDuration);
    logoSnap5.animate({ d: logoPath5a }, morphDuration);
  });
}
// End logo animation

//
// Begin Github activity banner
//
const ghXhr = new XMLHttpRequest();
// API key with only public profile viewing permissions.
const apiKey = '053efb22fc88ae67838a0ee796d02537f164934e';
const reqUrl = `https://api.github.com/users/abea/events?access_token=${apiKey}`;
const timeline = document.getElementById('gh-timeline');

// Event types from https://developer.github.com/v3/activity/events/types/
// excluding deprecated or types not visibile in timelines.
const eventTypes = [
  'CommitCommentEvent',
  'CreateEvent',
  'DeleteEvent',
  'ForkEvent',
  'GollumEvent',
  'IssueCommentEvent',
  'IssuesEvent',
  'MemberEvent',
  'OrgBlockEvent',
  'ProjectCardEvent',
  'ProjectColumnEvent',
  'ProjectEvent', 'PublicEvent',
  'PullRequestEvent',
  'PullRequestReviewEvent',
  'PullRequestReviewCommentEvent',
  'PushEvent',
  'ReleaseEvent',
  'WatchEvent',
];

// Create array of objects with event type and associated color.
const events = eventTypes.map((eventKey, i) => {
  // Calculate the color (HSL) lightness based on event type position in the
  // eventTypes array.
  const lightness = Math.round(100 - ((100 / eventTypes.length) * i));

  const event = {
    name: eventKey,
    // Color using the brand primary color with varying lightness value.
    color: `hsl(24, 93%, ${lightness}%)`,
  };

  return event;
});

function buildBlocks(key, value) {
  // In the JSON, look for event types and check if they're in the array of
  // included event types.
  if (key === 'type' && eventTypes.includes(value)) {
    // Find the event object that matches the event type found.
    const typeObj = events.find(obj => obj.name === value);

    // Create a div element, add a specific class, set the `title` attr to the
    // event type name, and set a background color of the associated color.
    // Finally, append it to the timeline element.
    const div = document.createElement('div');
    div.classList.add('color-band__block');
    div.setAttribute('title', value);
    div.style.backgroundColor = typeObj.color;
    timeline.appendChild(div);
  }
}

function checkState() {
  // If the readyState is DONE parse the timeline JSON and turn it into event
  // blocks.
  if (ghXhr.readyState === XMLHttpRequest.DONE) {
    JSON.parse(ghXhr.responseText, buildBlocks);
  }
}

// Start the API call.
ghXhr.open('GET', reqUrl, true);
// On readystatechange run the timeline function.
ghXhr.onreadystatechange = checkState;
ghXhr.onerror = () => {
  console.error('Github API call didn\'t work.');
  timeline.remove();
};

ghXhr.send();


// End Github activity banner
