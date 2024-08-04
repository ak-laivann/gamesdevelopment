import React, { useState } from "react";
import { Input, Button, Collapse, Typography, Row, Col } from "antd";
import { BulbTwoTone, ScheduleTwoTone, UnlockTwoTone } from "@ant-design/icons";

const findSumAndProducts = (number: number): number[] => {
  let sum = 0;
  let product = 1;

  for (let int of number.toString()) {
    sum += parseInt(int);
    product = product * parseInt(int);
  }

  return [sum, product];
};

const generateHints = (number: number): string[] => {
  const [sum, product] = findSumAndProducts(number);
  const isEven = number % 2 === 0;
  return [
    `It is an ${isEven ? "even" : "odd"} number`,
    `The sum of the digits is ${sum}`,
    `The product of the digits is ${product}`,
    `It is a ${number.toString().length}-digit number`,
  ];
};

function generateTargetNumber() {
  return Math.floor(Math.random() * (500 - 1 + 1)) + 1;
}

export const MathGame = () => {
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [targetNumber, setTargetNumber] = useState(generateTargetNumber());
  const [hints, setHints] = useState(generateHints(targetNumber));

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    setAttempts((prev) => prev + 1);

    if (numGuess === targetNumber) {
      setFeedback(`Correct! You guessed it in ${attempts + 1} attempts.`);
    } else if (numGuess > targetNumber) {
      setFeedback(numGuess - targetNumber < 25 ? "High!" : "Too high!");
    } else {
      setFeedback(targetNumber - numGuess < 25 ? "Low!" : "Too Low!");
    }
  };

  const handleReset = () => {
    const newTargetNumber = generateTargetNumber();
    setTargetNumber(newTargetNumber);
    setHints(generateHints(newTargetNumber));
    setGuess("");
    setFeedback("");
    setAttempts(0);
  };

  return (
    <>
      <div
        style={{ color: "white", display: "flex", justifyContent: "center" }}
      >
        <Row gutter={[0, 0]}>
          <Col span={24} push={4}>
            <h1>Number Guessing Game</h1>
          </Col>
          <Col span={24} push={6}>
            <h4>Guess the number between 1 and 500</h4>
          </Col>
        </Row>
      </div>
      <Row gutter={[24, 24]}>
        <Col span={10}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Input
                placeholder="Enter your guess"
                size="large"
                type="number"
                value={guess}
                onChange={(e: any) => setGuess(e.target.value)}
                disabled={feedback.includes("Correct")}
              />
            </Col>
            <Col span={12}>
              <Button
                onClick={handleGuess}
                disabled={feedback.includes("Correct")}
              >
                Guess
              </Button>
            </Col>
            <Col span={12}>
              <Button onClick={handleReset}>Reset</Button>
            </Col>
          </Row>
        </Col>
        <Col span={2} />
        <Col span={8}>
          <Collapse>
            <Collapse.Panel
              header={"Hints"}
              key={1}
              extra={
                <BulbTwoTone
                  style={{ fontSize: "22px" }}
                  twoToneColor={"blue"}
                />
              }
            >
              {hints.map((hint, index) => (
                <Typography.Paragraph key={index} children={<>{hint}</>} />
              ))}
            </Collapse.Panel>
            {feedback && (
              <Collapse.Panel
                header={"Feedbacks"}
                key={2}
                extra={
                  <ScheduleTwoTone
                    style={{ fontSize: "22px" }}
                    twoToneColor={"red"}
                  />
                }
              >
                <>{feedback}</>
              </Collapse.Panel>
            )}
            {feedback && attempts > 3 && (
              <Collapse.Panel
                header={"Reveal"}
                key={3}
                extra={
                  <UnlockTwoTone
                    style={{ fontSize: "22px" }}
                    twoToneColor={"green"}
                  />
                }
              >
                <>The number you should have guessed is {targetNumber}</>
              </Collapse.Panel>
            )}
          </Collapse>
        </Col>
        <Col span={2} />
      </Row>
      <br />
    </>
  );
};
