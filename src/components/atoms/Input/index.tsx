import styled from "styled-components";
import Icon from "../../../components/atoms/Icon";
export interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  useDeleteIcon: boolean;
  autoFocus: boolean;
}

function Input(InputProps: InputProps) {
  return (
    <ST.RelativeWrapper>
      <ST.InputWrapper
        placeholder={InputProps.placeholder}
        value={InputProps.value}
        autoFocus={InputProps.autoFocus}
        readOnly
        id={InputProps.id}
      />
      {InputProps.useDeleteIcon === true ? (
        <ST.DeleteIconWrapper>
          <Icon
            width="14px"
            height="14px"
            path="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"
            fill="#000000"
          />
        </ST.DeleteIconWrapper>
      ) : (
        <></>
      )}
    </ST.RelativeWrapper>
  );
}

export default Input;

const ST = {
  InputWrapper: styled.input`
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    height: 40px;
    line-height: 12px;
    padding: 6px;
    width: 100%;
  `,
  DeleteIconWrapper: styled.div`
    width: 14px;
    height: 14px;
    position: absolute;
    top: 12px;
    right: 6px;
  `,
  RelativeWrapper: styled.div`
    position: relative;
  `,
};
