import styled from "styled-components";
import Logo from "../../components/atoms/Logo";

import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";

const Main = () => {
  return (
    <ST.Container>
      <ST.LogoWrapper>
        <Logo LogoSize="h1" />
      </ST.LogoWrapper>

      <Input
        id="emailInput"
        placeholder="이메일 주소 입력"
        value=""
        useDeleteIcon={true}
        autoFocus={true}
      />

      <Button text="인증번호 발송" style={ST.AuthCodeButtonStyle} />

      <Input
        id="authCodeInput"
        placeholder="인증 코드"
        value=""
        useDeleteIcon={true}
        autoFocus={false}
      />

      <Button text="확인" style={ST.AuthCodeButtonStyle} />

      <Input
        id="passwordInput"
        placeholder="비밀번호 입력"
        value=""
        useDeleteIcon={true}
        autoFocus={false}
      />

      <Button text="회원가입" style={ST.LargeSignButtonStyle} />
      <Button text="이미 계정이 있으신가요?" style={ST.SignInButtonStyle} />
    </ST.Container>
  );
};

export default Main;

const ST = {
  Container: styled.main`
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    margin: 4rem 2rem;
  `,

  LogoWrapper: styled.div`
    display: flex;
    justify-content: center;
    padding: 2.4rem;
  `,

  AuthCodeButtonStyle: {
    width: "120px",
    borderRadius: "12px",
    backgroundColor: "pink",
    alignSelf: "flex-end",
    margin: "12px 0",
  },

  LargeSignButtonStyle: {
    width: "100%",
    marginTop: "2rem",
    height: "40px",
    backgroundColor: "white",
    borderRadius: "12px",
  },

  SignInButtonStyle: {
    height: "40px",
    backgroundColor: "white",
    border: "none",
    alignSelf: "flex-start",
  },
};
