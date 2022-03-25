import React from "react";
import "./ProgramListItem.scss"

export default function ProgramListItem(props) {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content-programs">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <p className="title is-4">{props.name}</p>
              </div>
              <br/>
              <label>
                Workout type - 
                </label>
                <p className="subtitle is-6">{props.type}</p>
                <label>
                Program duration - 
                </label>
                <p className="subtitle is-6">{props.duration}</p>
            </div>
            <div className="content">{props.description}</div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
