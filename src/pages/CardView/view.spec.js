import { screen,waitFor } from '@testing-library/react';
import { CardView } from '..';
import { Card } from '../../components'
import { createRoot } from 'react-dom/client';

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

    test(" it has a loading message in the header on initial render", async () => {
        axios.get.mockResolvedValue({ data: stubFlashcard})
        render(<CardView Id={stubFlashcard.id} />);
        await waitFor(() => expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/flashcards\/1/)))
        expect(axios.get).toHaveBeenCalledTimes(1);
        const header = screen.getByRole('heading');
        expect(header.textContent).toContain("Loading");
      })

      test(" api call returns card with question and answer", async () => {
        axios.get.mockResolvedValue({ data: stubFlashcard})
        render(<CardView />);
        render(<Card front={stubFlashcard.question} back={stubFlashcard.answer} />);
        await waitFor(() => expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/flashcards/)))
        expect(axios.get).toHaveBeenCalledTimes(1);
        const cardFront = screen.getByLabelText('cardFront')        
        const cardBack = screen.getByLabelText('cardBack')     
        expect (cardFront.textContent).toBe(stubFlashcard.question)   
        expect (cardBack.textContent).toBe(stubFlashcard.answer)   
      })

})
