import IDisplayDNAListProps from "../interface/IDisplayDNAList";
import DisplayDNA from "./DisplayDNA";

const DisplayDNAList: React.FC<IDisplayDNAListProps> = ({ DNAList }) => {
  return (
    <div>
      <ul>
        {Array.isArray(DNAList) && DNAList.length > 0 ? (
          DNAList.map((dna) => (
            <li key={dna.id}>
              <DisplayDNA key={dna.id} dnaData={dna} />
            </li>
          ))
        ) : (
          <p>No DNA records found.</p>
        )}
      </ul>
    </div>
  );
};

export default DisplayDNAList;
