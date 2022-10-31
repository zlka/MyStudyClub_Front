import { screen } from '@testing-library/react';
import { Card } from '..';
import { createRoot } from 'react-dom/client';
// const root = createRoot('Card');

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
