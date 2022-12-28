import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`

export const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 150px;
  align-self: center;
`

export const BoxImg = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
  overflow: hidden;
  align-self: center;
`

export const BoxImgContainer = styled.div`
  margin-top: 40px;
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: row-reverse;
`