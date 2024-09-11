import { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/button';
import styles from './css/common.module.css'; // Import the CSS module
import DisplayDNAList from './DisplayDNAList';
import IDisplayDNAProps from '../interface/IDisplayDNA';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import Utils from '../utils'
import { searchDNADefaultErrorMessage , DNABackendBaseURL} from '../constants'


const SearchDNA: React.FC = () => {
  const [search, setSearch] = useState('');
  const [levenshtein, setLevenshtein] = useState('');
  const [DNAList, setDNAList] = useState<IDisplayDNAProps[]>([]);
  const [hasFetched, setHasFetched] = useState(false); // Track if the fetch was done


  const api = DNABackendBaseURL;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleLevenshteinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevenshtein(event.target.value);
  };

  const handleSubmit = () => {
    getDNARecord();
  };

  const getDNARecord = async() => 
  {
    try{
      const apiQuery = `${api}?${search ? `search=${search}` : ''}${search && levenshtein ? '&' : ''}${levenshtein ? `levenshtein=${levenshtein}` : ''}`;
      const res = await axios.get(apiQuery);
      setDNAList(res.data); 
      setHasFetched(true)
      
    }catch(err){

      const displayErrorMessage = Utils.ExtractErrorMessage(err as AxiosError)
      toast.error(displayErrorMessage || searchDNADefaultErrorMessage);
    }
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <TextInput 
          placeholder='Enter DNA sequence to search' 
          onChange={handleSearchChange} 
          name="DNA Search" 
          value={search} 
        />
        <TextInput 
          placeholder='Enter Levenshtein distance' 
          onChange={handleLevenshteinChange} 
          name="Levenshtein  " 
          value={levenshtein} 
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button 
          onClick={handleSubmit} 
          text="Search"
        />
      </div>
    </div>
      {hasFetched ? (<DisplayDNAList DNAList={DNAList} /> ): ""}
    </>    
  );
}

export default SearchDNA;