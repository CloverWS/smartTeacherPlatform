import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  瞭解更多
                </a>{" "}
                <a
                  href="https://mediafiles.botpress.cloud/c7009c85-1dc5-41ab-8d71-1c7e7e23cd29/webchat/bot.html"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  WhatsApp咨詢
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
