import styled from 'styled-components'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ColumnCenter = styled(Column)`
    width: 100%;
    align-items: center;
`

export default Column
