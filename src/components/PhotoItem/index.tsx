import styled from 'styled-components'

type Props = {
  url: string
  name: string
}

const PhotoItem = ({ url, name }: Props) => {
  return (
    <Container>
      <img src={url} alt="foto de Diogo e Emília" />
      {name}
    </Container>
  )
}

const Container = styled.div`
  background: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`

export default PhotoItem