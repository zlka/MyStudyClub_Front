import { screen } from '@testing-library/react';
import { Card } from '..';


describe('Card', () => {
    beforeEach( () => {
       render(<Card />)
    })
    
    test("it flips the card on click", () => {
        const cardContainer= screen.getByRole("switch")
        userEvent.click(cardContainer)
        expect(cardContainer.className).toBe("Flip")
    })

})
