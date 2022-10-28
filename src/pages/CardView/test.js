import { screen } from '@testing-library/react';
import { CardView } from '../CardView';
import axios from 'axios';
jest.mock('axios');

describe('CardView', () => {
    let stubFlashcard= {
        "answer": "answer 1",
        "created_at": "0000-00-00T00:00:00.000000",
        "id": 1,
        "question": "question 1",
        "set.set_name": "set name",
        "set_id": 1
        }

    beforeEach(() => jest.resetAllMocks())

    test("renders 'loading' on initial load'", () => {
        render(<CardView Id={stubStory.id} />);
        const message = screen.getByRole('heading');
        expect(message.textContent).toContain('Loading');
      })

    test('it renders no flashcard on failed api request', async () => {
        axios.get.mockRejectedValue(new Error('Oh no!!'))
        render(<CardView handleSelect={stubFlashcard}/>);
        expect(screen.getByLabelText('flashcards')).toBeFalsy();
    })

    test('it changes question when clicking forward arrow', async () => {
        const counter = screen.getByRole('heading')
        const button = screen.getByRole('figure')
        await userEvent.click(button)
        await userEvent.click(button)
        expect(counter.textContent).toContain("3")

    })

})
