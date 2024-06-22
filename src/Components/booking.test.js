import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from "./BookingPage";

import BookingForm from "./BookingForm";


describe('Booking page', () => {

    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    test('should have one or more available booking time options', async () => {
        render(
            <MemoryRouter>
                <BookingPage />
            </MemoryRouter>
        );

        const timeOptions = await screen.findAllByTestId('booking-time-option');

        expect(timeOptions.length).toBeGreaterThanOrEqual(1);
        timeOptions.forEach(timeOption =>
            expect(timeOption.value).toMatch(timeFormat)
        );
    });

});

describe('Booking form', () => {
    const availableTimes = ['18:00', '18:30'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('should correctly render all fields and their default values', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} />
        );

        const dateInput = screen.getByTestId("booking-date-option");
        const timeSelect = screen.getByTestId("booking-time-select");
        const timeOptions = await screen.findAllByTestId('booking-time-option');
        const numberOfGuestsInput = screen.getByTestId('booking-number-guests');
        const occasionSelect = screen.getByTestId('booking-occasion-select');
        const occasionOptions = await screen.findAllByTestId(`booking-occasion-option`);
        const submitButton = screen.getByRole('button');

        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveValue(today);

        expect(timeSelect).toBeInTheDocument();
        expect(timeOptions.length).toBe(2);

        expect(numberOfGuestsInput).toBeInTheDocument();
        expect(numberOfGuestsInput).toHaveValue(null);

        expect(occasionSelect).toBeInTheDocument();
        expect(occasionOptions.length).toBe(4);

        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toBeEnabled();
    });

    test('should not submit form with default values (more fields required)', () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} />
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(submitData).not.toHaveBeenCalledWith({
            date: today,
            time: availableTimes[0],
            occasion: 'Birthday',
        });
    });

});