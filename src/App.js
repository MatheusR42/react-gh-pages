import React, { useState } from "react";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          onClick={() => setIsOpen(!isOpen)}
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {isOpen && (
          <>
            <p>
              Inceptos sit aenean ac mi mauris justo praesent curae;? Fusce
              praesent ante lobortis eleifend consectetur. Metus class elit
              conubia cum. Pellentesque tempor donec ante libero eget netus
              semper. Vulputate litora turpis leo ullamcorper placerat laoreet
              hendrerit torquent dapibus bibendum mollis. Arcu gravida
              ullamcorper interdum egestas volutpat. Auctor, inceptos rhoncus
              dignissim felis vitae. Sollicitudin.
            </p>
            <p>
              Dolor molestie elit parturient nunc libero ligula sed sapien
              fermentum tempus lacus! Semper auctor montes integer curae; magna.
              Ullamcorper a nibh, himenaeos dictum aliquam nibh arcu id suscipit
              habitant potenti. Lacus nibh vestibulum lacus duis tincidunt dolor
              nostra dignissim. Euismod mollis lacinia ultricies phasellus,
              accumsan vestibulum magnis gravida. Libero morbi feugiat!
            </p>
            <p>
              Posuere penatibus commodo orci taciti sodales platea purus gravida
              placerat cubilia erat. Porta urna mi facilisi ipsum turpis netus
              quam eu. Ultrices rhoncus tristique eleifend urna tincidunt
              bibendum hac ad aptent ultricies purus ornare! Per tortor, quis
              ultrices risus cras quisque litora interdum. Sit non litora
              nascetur augue platea sem morbi iaculis conubia duis phasellus.
              Sapien malesuada montes curabitur, gravida odio volutpat. Lorem
              nam eu mattis. Pellentesque ipsum malesuada porta tempor ac
              cubilia odio.
            </p>
            <p>
              Amet magnis congue diam auctor maecenas vitae etiam senectus
              commodo dictum, netus laoreet? Lorem magna cubilia hendrerit
              interdum, inceptos donec integer dictumst ut convallis. Vehicula
              adipiscing platea ac odio eleifend adipiscing mi hendrerit nisl
              ullamcorper porta proin. Fringilla magna integer, leo tellus
              vivamus convallis donec. Dapibus pulvinar fusce parturient
              inceptos consectetur cursus dictum. Malesuada, integer dictum ad
              duis dui dapibus etiam. Pellentesque.
            </p>
            <p>
              Aliquam porttitor leo dis dapibus placerat hendrerit dictumst
              magnis primis! Augue nunc tortor primis fames. Velit libero
              consequat ad iaculis habitant? Pulvinar, sociis sem etiam non
              inceptos odio purus nam mus euismod. Gravida aenean platea congue
              dis in lacinia. Augue orci consectetur accumsan interdum eget
              malesuada sit ridiculus lacus nullam? Curae; malesuada blandit
              commodo imperdiet senectus adipiscing adipiscing. Vivamus leo
              morbi diam. Congue rhoncus porttitor eu arcu ornare egestas in
              blandit amet. Elit etiam facilisi conubia etiam congue. Lacinia mi
              ante sed, porttitor proin. Mattis.
            </p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
