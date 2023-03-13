import CircularSlider from "@fseehawer/react-circular-slider";
import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { Button, Card, Col, Row } from "reactstrap";
import "./Styles.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Circular Slider</h1>
      </header>
      <Card className="p-2">
        <h4>TUNING PARAMETERS</h4>
        <h3>
          FINE TUNE SOME OF THE PARAMETERS THAT GOES IN AS INPUTS TO OUR AI
          MODELS
        </h3>
        <hr />
        <p>
          Althrough we recommend that you leave the model tuning parameters at
          defaults, you could fine tune some of the parameters that goes into
          our proprietary AI Models. Please adjust the parameters noted below to
          suite your needs.
        </p>
      </Card>
      <Row>
        <Col lg="3" md="6" sm="12">
          <Card className="p-2 tunersCards">
            <h4>VOLATILITY</h4>
            <hr className="hr_line" />
            <p className="tuners_card_inner_text">
              Protect the portfolio from high volatility securities over a long
              duration of time.
            </p>
            <p className="tuners_card_inner_text">
              You can specify the volatility percentage to fine tune the list of
              securities to use for the model.
            </p>
            <div>
              <CircularSlider
                width="155"
                label=" "
                min="0"
                max="100"
                knobColor="#005a58"
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={18}
                trackColor="#eeeeee"
                trackSize={18}
                valueFontSize="2.5rem"
                verticalOffset="0rem"
                appendToValue="%"
                dataIndex={10}
                // data={["1%", "100%"]}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
            <div className="toggleBtn">
              <label className="toggle">
                <input type="checkbox" />
                <span className="slider"></span>
                <span
                  className="labels"
                  data-on="ABSOLUTE"
                  data-off="ABSOLUTE"
                ></span>
              </label>
            </div>
          </Card>
        </Col>
        <Col lg="3" md="6" sm="12">
          <Card className="p-2 tunersCards">
            <h4>RETURN</h4>
            <hr className="hr_line" />
            <p className="tuners_card_inner_text">
              Protect the portfolio from high volatility securities over a long
              duration of time.
            </p>
            <p className="tuners_card_inner_text">
              You can specify the volatility percentage to fine tune the list of
              securities to use for the model.
            </p>
            <div>
              <CircularSlider
                width="155"
                label=" "
                min="0"
                max="100"
                knobColor="#005a58"
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={18}
                trackColor="#eeeeee"
                trackSize={18}
                valueFontSize="2.5rem"
                verticalOffset="0rem"
                appendToValue="%"
                dataIndex={10}
                // data={["1%", "100%"]}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
            <div className="toggleBtn">
              <label className="toggle">
                <input type="checkbox" />
                <span className="slider"></span>
                <span
                  className="labels"
                  data-on="ABSOLUTE"
                  data-off="ABSOLUTE"
                ></span>
              </label>
            </div>
          </Card>
        </Col>
        <Col lg="3" md="6" sm="12">
          <Card className="p-2 tunersCards">
            <h4>MAX LIMIT</h4>
            <hr className="hr_line" />
            <p className="tuners_card_inner_text">
              Protect the portfolio from high volatility securities over a long
              duration of time.
            </p>
            <p className="tuners_card_inner_text">
              You can specify the volatility percentage to fine tune the list of
              securities to use for the model.
            </p>
            <div>
              <CircularSlider
                width="155"
                label=" "
                min="0"
                max="100"
                knobColor="#005a58"
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={18}
                trackColor="#eeeeee"
                trackSize={18}
                valueFontSize="2.5rem"
                verticalOffset="0rem"
                appendToValue="%"
                dataIndex={10}
                // data={["1%", "100%"]}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
            <div className="toggleBtn py-1">
              {/* <label className="toggle">
                <input type="checkbox" />
                <span className="slider"></span>
                <span
                  className="labels"
                  data-on="ABSOLUTE"
                  data-off="ABSOLUTE"
                ></span>
              </label> */}
            </div>
          </Card>
        </Col>
        <Col lg="3" md="6" sm="12">
          <Card className="p-2 tunersCards">
            <h4>MAX BETA</h4>
            <hr className="hr_line" />
            <p className="tuners_card_inner_text">
              Protect the portfolio from high volatility securities over a long
              duration of time.
            </p>
            <p className="tuners_card_inner_text">
              You can specify the volatility percentage to fine tune the list of
              securities to use for the model.
            </p>
            <div>
              <CircularSlider
                width="155"
                label=" "
                min="0"
                max="3"
                knobColor="#005a58"
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={18}
                trackColor="#eeeeee"
                trackSize={18}
                valueFontSize="2.5rem"
                verticalOffset="0rem"
                dataIndex={1}
                increment_type="decimal"
                // data={["1%", "100%"]}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
            <div className="toggleBtn">
              <label className="toggle">
                <input type="checkbox" />
                <span className="slider"></span>
                <span
                  className="labels"
                  data-on="ABSOLUTE"
                  data-off="ABSOLUTE"
                ></span>
              </label>
            </div>
          </Card>
        </Col>
      </Row>
      <div className="d-flex justify-content-between my-2 mx-2">
        <Button
          color="primary"
          className="btn-prev"
          //   disabled="false"
          // onClick={() => navigate(-1)}
        >
          <ArrowLeft
            size={14}
            className="align-middle me-sm-25 me-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Previous
          </span>
        </Button>

        <Button color="primary" className="btn-next" id="next_btn">
          <span className="align-middle d-sm-inline-block d-none">Next</span>
          <ArrowRight
            size={14}
            className="align-middle ms-sm-25 ms-0"
          ></ArrowRight>
        </Button>
      </div>
    </div>
  );
}

export default App;
