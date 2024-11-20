import styled from "styled-components"

const Maping = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 3em;
`
const VetorMapa =styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("./src/assets/mapa.png");
`
const PointerRecanto = styled.button`
`
const PointerItaipuaçu = styled.button`
`
const PointerInoa = styled.button`
`
const PointerCentro = styled.button`
`
const PointerAracatiba = styled.button`
`
const PointerPontaNegra = styled.button`
`
const PointerBarra = styled.button`
`

const Mapa = () => {
    return (
        <Maping>
            <VetorMapa>
                <PointerRecanto />
                <PointerItaipuaçu />
                <PointerInoa />
                <PointerCentro />
                <PointerAracatiba />
                <PointerPontaNegra />
                <PointerBarra />
            </VetorMapa>
        </Maping>
    )
}

export default Mapa