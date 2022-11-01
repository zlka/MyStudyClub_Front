import { screen } from '@testing-library/react';
import { GameCard} from '..';

describe('Card', () => {
    let stubCard= {
        "data": "fake data",
        id: 1,
        match: "fake class"
    }
    beforeEach( () => {
        render(() => jest.resetAllMocks())
    })
    
    test("it changes class name dynamically", () => {
        render(<GameCard card={stubCard}/>)
        const card= screen.getByRole("switch")
        expect(card.className).toBe("gameCard" + " " + stubCard.match)
        expect(card.className).not.toBe("gameCard")
    })
    
    test("it returns game card with a question or answer", () => {
        render(<GameCard card={stubCard}/>)
        const card= screen.getByLabelText("game-card")
        expect(card.textContent).toContain(stubCard.data)
    })
    
})
