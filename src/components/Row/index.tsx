import styled from 'styled-components';

const Row = styled.div<{
    width?: string
    align?: string
    justify?: string
    padding?: string
    border?: string
    borderRadius?: string
}>`
    width: ${({ width }) => width ?? '100%'};
    display: flex;
    flex-direction: row;
    padding: 0;
    align-items: ${({ align }) => align ?? 'center'};
    justify-content: ${({ justify }) => justify ?? 'flex-start'};
    padding: ${({ padding }) => padding};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
`
export const RowFixed = styled(Row)<{ gap?: string; justify?: string }>`
    width: fit-content;
    margin: ${({ gap }) => gap && `-${ gap}`};
`

export default Row
