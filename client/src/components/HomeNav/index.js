import React from 'react';

function HomeNav(props) {
    //destructuring props passed in from Home.js
    const {
        views = [],
        currentView,
        setCurrentView
    } = props;

    return (
        <div className="home-nav-list-wrapper">
            <ul className="home-nav-list">
                {/* map over view names */}
                {views.map(View => (
                    <li
                        className="home-nav-list-items"
                        key={View.name}
                    >
                        <h3
                            className={`${
                                currentView.name === View.name && "views"
                            }`}
                            onClick={() => setCurrentView(View)}
                        >
                            {View.name}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeNav;