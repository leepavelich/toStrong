import React from "react";
import { useParams } from "react-router-dom";

export default function Exercise() {
  const { exercise } = useParams();
  return (
    <div>
      {exercise} (w1d1)
      <ol>
        <li>
          ex1
          <br />
          <label class="checkbox">
            Complete
            <input type="checkbox" />
          </label>
        </li>
        <li>ex2
        <br />
          <label class="checkbox">
            Complete
            <input type="checkbox" />
          </label>
        </li>
        <li>ex3
        <br />
          <label class="checkbox">
            Complete
            <input type="checkbox" />
          </label>
        </li>
        <li>ex4
        <br />
          <label class="checkbox">
            Complete
            <input type="checkbox" />
          </label>
        </li>
        <li>ex5
        <br />
          <label class="checkbox">
            Complete
            <input type="checkbox" />
          </label>
        </li>
        <li>ex6
        <br />
          <label class="checkbox">
            Complete
            <input type="checkbox" />
          </label>
        </li>
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </ol>
    </div>
  );
}