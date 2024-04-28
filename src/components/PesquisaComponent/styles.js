import styled from "styled-components";

export const Container = styled.div`
  display: flex;
	align-items: center;
	position: relative;
	max-width: 600px;
  margin-right: 15px;
`;

export const Input = styled.input`
	font-size: 18px;
  padding: 5px 10px;
  padding-right: 10px;
  outline: none;
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #C4D1EB;
  border-radius: 5px;
  box-shadow: 3px 3px 2px 0px #E2E2E2;
  transition: .3s ease;

  &:focus {
	background: #F2F2F2;
	border: 1px solid #5A7EC7;
	border-radius: 10px;

  &::placeholder {
	color: #DDDDDD;
  }
}
`;

export const Img = styled.img`
  position: absolute;
	right: 13px;
	fill: #4660DC;
	width: 18px;
	height: 18px;
`;