import IDisplayDNAProps from '../interface/IDisplayDNA';

const DisplayDNA: React.FC<{ dnaData: IDisplayDNAProps }>  = ({ dnaData }) => {
  const {DNA} = dnaData;
  return (
    <span> {DNA}</span>    
  );
}

export default DisplayDNA;