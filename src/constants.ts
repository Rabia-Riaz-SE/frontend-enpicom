export const addDNADefaultErrorMessage = "Error Adding DNA."
export const addDNADefaultSuccessMessage = "Added successfully."
export const searchDNADefaultErrorMessage = "Error Fetching DNA Records."
export const DNABackendBaseURL = `${import.meta.env.VITE_BACKEND_API_BASEURL}/${import.meta.env.VITE_BACKEND_API_DNA_ROUTE}`;
export const addDNATextInput = {
    placeholder : 'Enter DNA',
    name : "DNA" 
}

export const addDNATextInputError = {
    empty : 'DNA cannot be empty.',
}

export const addDNAButton = {
    text : 'ADD'
}

export const levenshteinDNATextInput = {
    placeholder : 'Enter Levenshtein distance' ,
    name : 'Levenshtein  '  
}

export const searchDNATextInput = {
    placeholder : 'Enter DNA sequence to search',
    name : "DNA Search" 
}

export const searchDNAButton = {
    text : 'SEARCH'
}

