import styled from "styled-components"

const StyledFooter = styled.footer`
    height: 8rem;
    width: 100vw;
    margin-top: 2rem;
    background: var(--color-grey-200);
    display: flex;
    justify-content: center;
    align-items: center;
`

function Footer() {
    const year = new Date().getFullYear()
    
    return (
        <StyledFooter>
            <p>© Viliam Novický {year}</p>
        </StyledFooter>
    )
}

export default Footer
