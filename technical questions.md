
1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.<br/>
  I spent 5 hours on the coding test. If I get more time to work on the same, I would add more UI elements and would get user feedback to improve the UI and UX.
    
2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.<br/>
  React Suspense is one of the useful latest feature addition to react. It allows us to load a fallback component while the particular component is waiting for resources. It suspends component rendering until the required resources are available.
    
Example:

```javascript
import React, { Suspense } from 'react';
import RestaurantsList from './RestaurantsList';
import Loader from './Loader';

function App(props) {
	return (
		<Suspense fallback={<Loader />}>
			<RestaurantsList />
		</Suspense>
	);
}
```

In the above example, React Suspense is used to display a loader until the RestaurantList component is available.<br/>
    
3. How would you track down a performance issue in production? Have you ever had to do this?<br/>
  I would add error tracking frameworks/services to capture issues on production and would track down to the root cause with the help of their crash analytics. Also, newly added Error Boundaries feature in ReactJs can be used to activate handler logic and render a fallback component to prevent the entire application from crashing. I have used Crashlytics for a react native app to log all the crashes with their root cause.

4. How would you improve the API that you just used?<br/>
    I would add ratings and reviews to each restaurant in the api, it would help the user to decide on a better restaurant.<br/>
    
5. Please describe yourself using JSON.<br/>
```json
{
  "name": "Dhaneswar Govindan Pandian",
  "education": {
    "masterDegree": {
      "department": "Electrical and Computer Engineering",
      "university": "University Of Toronto"
    },
    "bachelorDegree": {
      "department": "Electronics and Communication Engineering",
      "university": "Anna University"
    }
  },
  "skills": {
    "webDevelopment": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "jQuery"
    ],
    "frameworks": [
      "ReactJs",
      "Node.js",
      "React Native",
      "Bootstrap",
      "Express"
    ],
    "tools": [
      "Pivotal Tracker",
      "Office Suite",
      "Visual Studio Code"
    ],
    "versionControl": [
      "Git",
      "Github",
      "Source Tree"
    ],
    "methodology": [
      "Agile"
    ]
  },
  "hobbies": [
    "Hiking",
    "Travelling",
    "Sports"
  ]
}
```   
