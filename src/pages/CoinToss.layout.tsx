import React, { useState, useEffect } from "react";
import { Button, Row, Col, message } from "antd";
import styled, { keyframes, css } from "styled-components";
import { DollarTwoTone } from "@ant-design/icons";

const flip = keyframes`
  0% { transform: rotateY(0); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
`;

const Coin = styled.div<{ isFlipping: boolean }>`
  display: inline-block;
  font-size: 200px;
  animation: ${(props) =>
    props.isFlipping &&
    css`
      ${flip} 0.6s infinite
    `};
`;

const computerChoice = ["Heads", "Tails"];

const generateChoice = (): string => {
  return computerChoice[Math.floor(Math.random() * 2)];
};

export const CoinTossPage: React.FC = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [choice, setChoice] = useState<string>(generateChoice);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isFlipping) {
      timer = setTimeout(() => {
        setIsFlipping(false);
        message.info(choice);
      }, Math.floor(Math.random() * (3500 - 2500 + 1) + 2500));
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isFlipping]);

  return (
    <div style={{ textAlign: "center", marginTop: "3%" }}>
      <Coin isFlipping={isFlipping}>
        <DollarTwoTone twoToneColor={"#FFD700"} />
      </Coin>
      <Row justify="center" gutter={[24, 24]} style={{ marginTop: "2%" }}>
        <Col>
          <Button
            size="large"
            type="primary"
            onClick={() => {
              setIsFlipping(true);
              setChoice(generateChoice());
            }}
            disabled={isFlipping}
          >
            Start
          </Button>
        </Col>
      </Row>
    </div>
  );
};
