import { styled } from './styles'

const button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$ignite500',
    borderRadius: '$md',
    padding: '$4'
})

export function App() {
    return (
        <button>Hello World</button>
    )
}