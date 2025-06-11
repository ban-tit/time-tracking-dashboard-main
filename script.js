const data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const removeElement = () => {
  const activityElements = document.querySelectorAll(
    '.activity-tracker__activity'
  );
  activityElements.forEach((element) => {
    element.remove();
  });
};

const calculateTimeframe = (dataOption) => {
  if (dataOption === 'daily') {
    return 'Yesterday';
  } else if (dataOption === 'weekly') {
    return 'Last Week';
  } else if (dataOption === 'monthly') {
    return 'Last Month';
  }
};

const updateActivityData = (timeframe) => {
  removeElement();

  const activityElement = document.querySelector('.activity-tracker');
  console.log('activityElement:', activityElement);

  data.forEach((d) => {
    const title = d.title.replace(' ', '-');
    const currentTime = d.timeframes[timeframe].current;
    const previousTime = d.timeframes[timeframe].previous;
    const previousTimeText = calculateTimeframe(timeframe);
    console.log('data:', d);

    // console.log('title:', title);
    // console.log('currentTime:', currentTime);
    // console.log('previousTime:', previousTime);

    const activitySection = document.createElement('section');

    activitySection.className = `activity-tracker__activity ${title.toLowerCase()}`;

    activitySection.innerHTML = `
      <div class="activity__bg">
          <img src="images/icon-${title}.svg" alt=${title} />
        </div>
        <div class="activity__info">
          <header class="activity__header">
            <h4 class="activity__name">${title}</h4>
            <div class="activity__options">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </header>
          <div class="activity__timeframes">
            <h4 class="activity__current-timeframe">${currentTime}hrs</h4>
            <div class="activity__previous-timeframe">
              <p class="time-window">${previousTimeText}</p>
              <p class="dash">-</p>
              <p class="time">${previousTime}hrs</p>
            </div>
          </div>
        </div>`;
    activityElement.appendChild(activitySection);
  });
};

const buttons = document.querySelectorAll('.activity-tracker__option');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Get the data attribute of the clicked button
    const dataOption = button.getAttribute('data-option');

    // Log the activity type to the console (or handle it as needed)
    console.log(`Selected data option: ${dataOption}`);
    updateActivityData(dataOption);
  });
});
