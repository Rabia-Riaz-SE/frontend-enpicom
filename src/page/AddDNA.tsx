import { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/button';
import styles from './css/common.module.css'; // Import the CSS module
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import {addDNADefaultErrorMessage , addDNADefaultSuccessMessage, DNABackendBaseURL} from '../constants'
import Utils from '../utils'

const AddDNA: React.FC = () => {
  const [dna, setDna] = useState('');
  const api = DNABackendBaseURL;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDna(event.target.value.toUpperCase());
  };

  const saveDNA = async(dna: string) => {
    try{
      const res = await axios.post(api, { DNA: dna}) ; 
      toast.success(`${res.data.DNA} ${addDNADefaultSuccessMessage}`)
      setDna('');
    }
    catch(err)
    {

      const displayErrorMessage = Utils.ExtractErrorMessage(err as AxiosError)
      toast.error(displayErrorMessage || addDNADefaultErrorMessage)
    }
  }

  const handleSubmit = () => {
    if (!dna) {
      toast.error('DNA cannot be empty');
      return;
    } 
    saveDNA(dna);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <TextInput 
          placeholder='Enter DNA' 
          onChange={handleChange} 
          name="DNA" 
          value={dna} 
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button 
          onClick={handleSubmit} 
          text="ADD"
        />
      </div>
    </div>
  );
}

export default AddDNA;
