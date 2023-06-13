import React, { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-success my-1" onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}