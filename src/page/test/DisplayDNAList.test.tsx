import { render, screen } from '@testing-library/react';
import DisplayDNAList from '../DisplayDNAList';
import '@testing-library/jest-dom';

describe('DisplayDNAList Component', () => {
  const mockDNAList = [
    { id: 1, DNA: 'ACTG' },
    { id: 2, DNA: 'CGTA' },
  ];

  it('should render DNA list', () => {

    render(<DisplayDNAList DNAList={mockDNAList} />);

    expect(screen.getByText('ACTG')).toBeInTheDocument();
    expect(screen.getByText('CGTA')).toBeInTheDocument();
  });

  it('should display a message when no DNA records are found', () => {

    render(<DisplayDNAList DNAList={[]} />);
    
    expect(screen.getByText('No DNA records found.')).toBeInTheDocument();
  });
});
