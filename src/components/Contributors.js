import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Wrap>
      <Divider>
        <a href="https://github.com/happypeter/gitbeijing/graphs/contributors">
          GitHub 贡献者页面
        </a>
      </Divider>
      <Row>
        <Card>
          <img
            src="https://github.com/happypeter/gitbeijing/blob/master/src/assets/images/index/peter.jpg?raw=true"
            alt="happypeter"
          />
          <Text>
            <Name>happypeter</Name>
            <Job>
              <a href="http://haoduoshipin.com">好多视频网创始人</a>
            </Job>
            本书作者。欢迎添加 Peter 微信：happypeter1983 。
          </Text>
        </Card>
        <Card>
          <img
            src="https://github.com/happypeter/gitbeijing/blob/master/src/assets/images/index/billie.png?raw=true"
            alt="billie66"
          />
          <Text>
            <Name>billie66</Name>
            <Job>
              <a href="http://haoqicat.com">好奇猫共同创始人</a>
            </Job>
            维护本网页及其电子书
          </Text>
        </Card>
      </Row>
      <Picture>
        <img
          src="https://github.com/happypeter/gitbeijing/blob/master/src/assets/images/index/people.png?raw=true"
          height="102"
          width="250"
          alt="people"
        />
      </Picture>
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-bottom: 30px;
`

const Divider = styled.div`
  min-height: 140px;
  background: #008080;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #77f0f0;
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`

const Card = styled.div`
  width: 100%;
  background: transparent;
  position: relative;
  background: #fff;
  padding: 2em;
  border-right: 30px solid #fff;
  min-height: 147px;
  margin: 50px auto;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    transform: skew(-3deg, -2deg);
    bottom: 14px;
    box-shadow: 0 16px 5px rgba(0, 0, 0, 0.2);
    height: 50px;
    left: 1px;
    max-width: 50%;
    width: 50%;
  }

  img {
    width: 60px;
    display: table-cell;
    float: left;
    border-radius: 50%;
    margin-right: 20px;
    margin-bottom: 50px;
  }
`

const Text = styled.div`
  display: table-cell;
  font-size: 14px;
`

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Crete Round';
  font-style: italic;
  color: #e5533c;
`

const Job = styled.div`
  margin-bottom: 15px;
  a:hover {
    text-decoration: underline;
  }
`

const Picture = styled.div`
  margin: 50px auto 100px;
  img {
    display: block;
    margin: 0 auto;
  }
`
