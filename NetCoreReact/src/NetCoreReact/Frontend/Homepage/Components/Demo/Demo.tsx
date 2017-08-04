import * as React from 'react';
import './Demo.scss'; // import your scss file into component module

class Demo extends React.Component<any, any> {

    public render() {
        return (
            <div className="react-container">
                <p>This part is using React Component</p>
                <div className="Demo">
                    <p>ASP.NET + React App, M Salman Al Farisi</p>
                </div>
            </div>
        )
    }
}

export default Demo;