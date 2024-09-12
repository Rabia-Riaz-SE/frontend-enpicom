import { render, screen } from '@testing-library/react';
import DisplayDNA from '../DisplayDNA';
import IDisplayDNAProps from '../../interface/IDisplayDNA';
import '@testing-library/jest-dom';

//Mock data
const mockDNAData: IDisplayDNAProps = {
  DNA: 'ACTG',
  id: 1
};


describe('DisplayDNA Component', () => {
  it('renders DNA data correctly', () => {

    render(<DisplayDNA dnaData={mockDNAData} />);
    
    expect(screen.getByText('ACTG')).toBeInTheDocument();
  });
});