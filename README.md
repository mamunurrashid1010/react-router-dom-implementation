# React Router Dom(v6) Implementation

React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

Here i implement and show that how to use react router dom in react project.


## Implementation Process

##### 1. Create a new react app
```
npx create-react-app my-app
cd my-app
npm start
```

##### 2. React router dom installation
Run this command in terminal
```
npm install react-router-dom --save
```

##### 2. Now crete directory and component

2.1 Create directories in the src directory like- <br>
    a. src/components <br>
	b. src/components/pages <br>
	c. src/components/routes <br>
	d. src/components/navBar <br>

2.2 Create ``` HomePage.js ``` component in the pages directory, and write code like-
``` 
import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h3>Home Page</h3>
            </div>
        );
    }
}

export default HomePage;
```

2.3 Create ``` About.js ``` component in the pages directory, and write code like-
``` 
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h3>About Page</h3>
            </div>
        );
    }
}
export default About;
```

2.4 Create ``` Contact.js ``` component in the pages directory, and write code like-
``` 
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h3>Contact Page</h3>
            </div>
        );
    }
}
export default Contact;
```

2.5 Create ``` MyRoute.js ``` component in the routes directory, and write code like-
``` 
import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HomePage from '../pages/HomePage';

class MyRoute extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        );
    }
}

export default MyRoute;
```

2.6 Create ``` NavBar.js  ``` component in the navBar directory, and write code like-
``` 
import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/About">ABOUT</Link></li>
                    <li><Link to="/Contact">CONTACT</Link></li>
                    <li><Link to="/UrlParamPassValue/1">Pass Value</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
```

2.7 Now open ``` App.js ``` and write code like-
``` 
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import MyRoute from './components/routes/MyRoute';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <MyRoute/>
        </BrowserRouter>
    </div>
  );
}

export default App;
```
then open terminal and run ``` npm start ``` command to run project.

Completed.

